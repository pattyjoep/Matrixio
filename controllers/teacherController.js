const db = require("../models");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

//Methods for teacherRoutes.js
module.exports = {
  // authentication:
  findOne: (req, res) => {
    console.log("hello there");
    console.log(req.body);
    console.log(`REQ.BODY.EMAIL ${req.body.email}`);
    console.log(`REQ.BODY.PASSWORD ${req.body.password}`);
    db.Teacher.findOne({ email: req.body.email })
      .then(user => {
        //if the user does not exist, return status 400
        if (!user) return res.status(400).json({ msg: "User does not exist" });
        console.log(user);
        console.log(salt, req.body.password, user.password);
        //user.password is the hashed password from the database, hash was coming back as undefined because it was not set before the bcrypt compare
        bcrypt.compare(req.body.password, user.password, (err, res) => {
          console.log("Compare Password");
          console.log(user);
        });
        console.log("After comparesync");
      })
      .then(dbTeacher => res.json(dbTeacher))
<<<<<<< HEAD
      // .populate("students")
=======
>>>>>>> bf43e00b33e42e7ad215a638b86206fcbf6ed4f3
      .catch(err => res.status(422).json(err));
  },

  findAll: (req, res) => {
    db.Teacher.find(req.query)
      .populate("students")
      .sort({ lastName: -1 })
      .then(dbTeacher => res.json(dbTeacher))
      .catch(err => res.status(422).json(err));
  },

  findById: (req, res) => {
    db.Teacher.findById(req.params.id)
      .populate("students")
      .then(dbTeacher => res.json(dbTeacher))
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
          .then(dbTeacher => res.json(dbTeacher))
          .catch(err => {
            res.status(422).json(err);
            console.log(err);
          });
      }
    });
  },

  update: (req, res) => {
    db.Teacher.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbTeacher => res.json(dbTeacher))
      .catch(err => res.status(422).json(err));
  },

  remove: (req, res) => {
    db.Teacher.findById({ _id: req.params.id })
      .then(dbTeacher => dbTeacher.remove())
      .then(dbTeacher => res.json(dbTeacher))
      .catch(err => res.status(422).json(err));
  }
};
