const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const passport = require("./passport");
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production")
  app.use(express.static("client/build"));

app.use(passport.initialize());
app.use(passport.session());
app.use(routes);
app.set("trust proxy", 1);
app.use(session({
  secret: "testing",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Matrixio", { 
  useUnifiedTopology: true, 
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false 
});

app.listen(PORT, () => {
  console.log(`🌎  ==> Listening on PORT ${PORT}!!`);
});
