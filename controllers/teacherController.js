const db = require("../models");
const bcrypt = require("bcrypt");
const saltRounds = 10;

//Methods for teacherRoutes.js
module.exports = {

  // authentication:
  findOne: (req, res) => {
    db.Teacher.findOne({ email: req.body.email })
    .populate("students")
    .then(
      bcrypt.compareSync(req.body.password, hash, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          return result;
        }
      })
    )
    .then(dbTeacher => res.json(dbTeacher))
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
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
      if (err) {
        console.log(err);
      } else {
        req.body.password = hash;
        db.Teacher.create(req.body)
        .then(dbTeacher => res.json(dbTeacher))
        .catch(err => res.status(422).json(err));
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
