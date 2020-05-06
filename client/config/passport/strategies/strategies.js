const LocalStrategy = require("passport-local").Strategy;
const Teacher = require("../../../../models/Teacher");
const bcrypt = require("bcryptjs");

/**
 * Passport JS is used to manage authentication and user login status.
 * This file creates two strategies to handle logins and logouts.
 * Login strategy: Logs a user in by quering database to ensure user exists and passwords match.
 * Logout strategy: Similiar to login, logout logs a user out and terminates their authenticated status.
 * Signup strategy: Similiar to above, this strategy is designed to handle inintal user signups.
 */

const salt = bcrypt.genSaltSync(10);
const strategies = {
    loginStrategy: new LocalStrategy(
        { usernameField: "email" },
        function(email, password, done) {
            Teacher.findOne({ email: email }, (err, user) => {
                if (err) 
                    return done(err)
                if (!user)
                    return done(null, false, { message: "No user" })

                if (!bcrypt.compareSync(password, user.password)) {
                    console.log("password = " + password);
                    console.log("user.password = "  + user.password);
                    console.log(bcrypt.compareSync(password, user.password))
                  return done("Email or Password not valid ", null);
            }
                return done(null, user)
            })
        }
    ),

    logoutStrategy: new LocalStrategy(
        { usernameField: "email" },
        function (
            email,
            password,
            done
        ) {
            Teacher.findOne({ email })
                .exec((err, user) => {
                    if (err)
                        return done(err, null);
                    if (!user)
                        return done("No user found ", null);
                    return done(null, user);
                });
        }
    ),

    signupStrategy: new LocalStrategy(
        { usernameField: "email" },
        function (firstName, lastName, email, password, students, done) {
            Teacher.findOne({ email: email })
                .exec((err, user) => {
                    console.log("signupstrategy - post exec()-------------------------------")
                    if (err) 
                        return done(err, null);
                    if (user) 
                        return done("User already exists", null);

                    console.log("password = " + user.password);
                    const encryptedPassword = bcrypt.hashSync(user.password, salt);
                    let newTeacher = new Teacher({
                        firstName,
                        lastName,
                        email,
                        password: encryptedPassword,
                        students: []
                    });
                    newTeacher.setFullName();
                    newTeacher.setLastUpdated();

                    console.log("signupstrategy - post newTeacher--------------------------------");
                    console.log("newteacher = " + newTeacher);

                    newTeacher.save((err, inserted) => {
                        if (err)
                            return done(err, null);

                        return done(null, inserted);
                    });
                });
        }
    )
}

module.exports = strategies;
