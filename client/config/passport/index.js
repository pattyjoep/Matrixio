const passport = require("passport");
const Teacher = require("../../../models/Teacher");
const strategies = require("./strategies/strategies");

passport.serializeUser(function (user, done) {
  done(null, user.email);
});

passport.deserializeUser(function (email, done) {
  Teacher.findOne({ email })
    .exec((err, user) => {
      done(err, user);
    });
});

passport.use("local-signin", strategies.LoginStrategy);
passport.use("local-signup", strategies.signupStrategy)

module.exports = passport;