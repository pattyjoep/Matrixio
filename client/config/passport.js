const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models/Teacher");

/**
 * Passport JS is used to manage authentication and user login status.
 * Login strategy: Logs a user in by quering database to ensure user exists and passwords match.
 * Logout strategy: Similiar to login, logout logs a user out and terminates their authenticated status.
 */

const loginStrategy = new Strategy(
    // Our user will sign in using an email, rather than a "username"
    { usernameField: "email" },
    function (email, password, done) {
        // When a user tries to sign in this code runs
        db.Teacher.findOne({ email: email })
            .then(function (dbUser) {
                // If there's no user with the given email
                if (!dbUser) {
                    return done(null, false, {
                        message: "Incorrect email."
                    });
                }
                // If there is a user with the given email, but the password the user gives us is incorrect
                else if (!dbUser.validPassword(password)) {
                    return done(null, false, {
                        message: "Incorrect password."
                    });
                }
                // If none of the above, return the user
                return done(null, dbUser);
            });
    }
);

const logoutStrategy = new Strategy(
    { usernameField: "email" },
    function (
        email,
        password,
        done
    ) {
        User.findOne({ email })
            .lean()
            .exec((err, user) => {
                if (err) {
                    return done(err, null);
                }
                if (!user) {
                    return done("No user found ", null);
                }
                return done(null, user);
            });
    }
);

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
