const db = require("../models");
const bcrypt = require("bcrypt");
const saltRounds = 10;

//Methods for teacherRoutes.js
module.exports = {

  // authentication:
  findOne: function(req, res) {
    db.Teacher.findOne(req.body.email)
    .then(
      bcrypt.compare(req.body.password, hash, function(err, result) {
        if (err) {
          console.log(err);
        } else if (result === req.body.password) {
          res.redirect("/UserProfile");
        } else {
          res.redirect("/Login");
        }
      })
    )
  },

  findAll: function(req, res) {
    db.Teacher.find(req.query)
      .sort({ lastName: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Teacher.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
      if (err) {
        console.log(err);
      }
      req.body.password = hash;
      db.Teacher.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    });
    
    
  },
  update: function(req, res) {
    db.Teacher.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Teacher.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
