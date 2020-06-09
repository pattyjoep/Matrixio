const db = require("../models");
// const passport = require("../client/config/passport");
const bcrypt = require("bcrypt");
const saltRounds = 10;

/**
 * * * * * * * Teacher Controller * * * * * * *
 * Teacher Controller responsible for handling axios requests to the server.
 * findAll: returns all teachers in collection, sorted by lastUpdated.
 * findOne: finds teacher by email.
 * create: creates new new Teacher as db.Teacher.
 * update: finds teacher and updates.
 * remove: finds teacher and deletes.
 */
module.exports = {
  findOne: (req, res) => {
    db.Teacher.findOne({ email: req.body.email })
      .then(user => {
        if (!user) return res.status(400).json({ msg: "User does not exist." });

        bcrypt.compare(req.body.password, user.password, (err, result) => {
          if (err) {
            throw err;
          }
          if (!result) {
            res.status(401).json({ message: "Passwords did not match." });
            return;
          }
          res.json(user);
        });
      })
      .catch(err => res.status(422).json(err));
  },

  findAll: (req, res) => {
    db.Teacher.find(req.query)
      .populate("students")
      .sort({ dateCreated: -1 })
      .then(dbTeacher => {
        res.json(dbTeacher);
      })
      .catch(err => {
        res.status(422).json(err);
      });
  },

  findById: (req, res) => {
    db.Teacher.findById(req.params.id)
      .populate("students")
      .then(dbTeacher => {
        res.json(dbTeacher);
      })
      .catch(err => {
        res.status(422).json(err);
      });
  },

  /*  create: (req, res) => {
    passport.authenticate("local-signup", function (err, user, info) {
      if (err) {
        return res.status(500).json({
          message: err || "Signup failed, please try again",
        });
      }

  }
  */
  //Create a new teacher
  create: (req, res) => {
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
      if (err) {
        console.log(err);
      } else {
        req.body.password = hash;
        const teacher = new db.Teacher(req.body);
        teacher.setFullName();
        teacher.setLastUpdated();

        db.Teacher.create(teacher)
          .then(dbTeacher => {
            res.json(dbTeacher);
          })
          .catch(err => {
            res.status(422).json(err);
          });
      }
    });
  },

  update: (req, res) => {
    db.Teacher.findOneAndUpdate(
      req.params.id,
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        fullName: req.body.firstName + " " + req.body.lastName,
        lastUpdated: Date.now()
      },
      {
        new: true
      }
    )
      .then(dbTeacher => {
        res.json(dbTeacher);
      })
      .catch(err => res.status(422).json(err));
  },

  delete: (req, res) => {
    let message = `Teacher ${req.body.id.TeacherID} destroyed`;

    db.Teacher.findByIdAndDelete(req.body.id.TeacherID)
      .then(removeStudents => {
        db.Student.deleteMany({ _id: { $in: removeStudents.students } }).then(
          result => {
            console.log(message);
            res.json(result);
          }
        );
      })
      .catch(err => {
        console.log(err);
      });
  }
};
