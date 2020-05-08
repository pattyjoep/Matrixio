const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const passport = require("./passport");
const cookieSession = require("cookie-session");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production")
  app.use(express.static("client/build"));
//
// app.set("trust proxy", 1) // trust first proxy
 
// app.use(cookieSession({
//   name: "session",
//   keys: ["key1", "key2"]
// }));
 
// app.use(function (req, res, next) {
//   // Update views
//   req.session.views = (req.session.views || 0) + 1
 
//   // Write response
//   res.end(req.session.views + " views")
// });

app.use(passport.initialize());
app.use(passport.session());
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Matrixio", { 
  useUnifiedTopology: true, 
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false 
});

app.listen(PORT, () => {
  console.log(`🌎  ==> Listening on PORT ${PORT}!!`);
});
