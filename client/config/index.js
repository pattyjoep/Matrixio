const passport = require("passport");
const User = require("../models/user");
const strategies = require("./strategies/strategies");

passport.serializeUser(function (user, done) {
  done(null, user.email);
});

passport.deserializeUser(function (email, done) {
  User.findOne({ email })
    .lean()
    .exec((err, user) => {
      done(err, user);
    });
});

// Configure our strategies
passport.use("local-signup", SignUpStrategy);
passport.use("local-signin", LoginStrategy);

module.exports = passport;