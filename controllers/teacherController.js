const db = require("../models");
const bcrypt = require("bcrypt");
const saltRounds = 10;
// const salt = bcrypt.genSaltSync(saltRounds);
// const hash = bcrypt.hashSync(password, salt);

//Methods for teacherRoutes.js
module.exports = {
  // authentication:
  findOne: (req, res) => {
    console.log("hello there");
    console.log(`REQ.BODY.EMAIL ${req.body.email}`);
    console.log(`REQ.BODY.PASSWORD ${req.body.password}`);
    db.Teacher.findOne({ email: req.body.email, password: req.body.password })
      // .then(dbTeacher => {
      //   console.log(dbTeacher);
      // })
      .populate("students")
      .then(
        bcrypt.compareSync(req.body.password, hash, (err, res) => {
          if (err) {
            console.log(err);
            // If the user isn't logged in, redirect them to the login page
            return res.redirect("/Login");
          } else {
            console.log("USER AUTHENTICATED!");
            console.log(res);
            //If the user is logged in/ authenticated, redirect to the users profile page
            return res.redirect("/UserProfile");
          }
        })
      )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findAll: (req, res) => {
    db.Teacher.find(req.query)
      .populate("students")
      .sort({ lastName: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: (req, res) => {
    db.Teacher.findById(req.params.id)
      .populate("students")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: (req, res) => {
    console.log("I'm hitting the mongoose create");
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
      if (err) {
        console.log(err);
      } else {
        req.body.password = hash;
        db.Teacher.create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => {
            res.status(422).json(err);
            console.log(err);
          });
      }
    });
  },

  update: (req, res) => {
    db.Teacher.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  remove: (req, res) => {
    db.Teacher.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
