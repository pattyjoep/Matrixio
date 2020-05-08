const passport = require("passport");
const Teacher = require("../models/Teacher");
const strategies = require("./strategies/strategies");

passport.serializeUser((user, done) => {
  console.log("passport serializeUser-----");
  console.log(user)
  done(null, user._id )
});

passport.deserializeUser((id, done) => {
  Teacher.findById(id, function(err, user) {
        done(err, user);
    });
});

passport.use("local-signin", strategies.loginStrategy);
passport.use("local-signup", strategies.signupStrategy);

module.exports = passport;