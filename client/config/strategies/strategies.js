const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models/Teacher");
const bcrypt = require("bcryptjs");

/**
 * Passport JS is used to manage authentication and user login status.
 * This file creates two strategies to handle logins and logouts.
 * Login strategy: Logs a user in by quering database to ensure user exists and passwords match.
 * Logout strategy: Similiar to login, logout logs a user out and terminates their authenticated status.
 * Signup strategy: Similiar to above, this strategy is designed to handle inintal user signups.
 */

const salt = bcrypt.genSaltSync(10);

const loginStrategy = new LocalStrategy(
    // Our user will sign in using an email, rather than a "username"
    { usernameField: "email" },
    function (email, password, done) {
        // When a user tries to sign in this code runs
        Teacher.findOne({ email: email })
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

const logoutStrategy = new LocalStrategy(
    { usernameField: "email" },
    function (
        email,
        password,
        done
    ) {
        Teacher.findOne({ email })
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

const signupStrategy = new Strategy(
    { usernameField: "email" },
    function (
        firstName,
        lastName,
        email,
        password,
        students,
        done
    ) {
        Teacher.findOne({ email })
            .lean()
            .exec((err, user) => {
                if (err) {
                    return done(err, null);
                }
                if (user) {
                    return done("User already exists", null);
                }
                const encryptedPassword = bcrypt.hashSync(password, salt);
                let newTeacher = new Teacher({
                    firstName,
                    lastName,
                    email,
                    password: encryptedPassword,
                    students
                });
                newTeacher.setFullName();
                newTeacher.setLastUpdated();
                

                newTeacher.save((err, inserted) => {
                    if (err) {
                        return done(err, null);
                    }

                    return done(null, inserted);
                });
            });
    });

// Exporting our configured passport
module.exports = strategies;
