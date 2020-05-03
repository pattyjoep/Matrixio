const db = require("../models");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

//Methods for teacherRoutes.js
module.exports = {
  // Teacher/User authentication:
  findOne: (req, res) => {
    console.log("hello there");
    console.log(req.body);
    console.log(`REQ.BODY.EMAIL ${req.body.email}`);
    console.log(`REQ.BODY.PASSWORD ${req.body.password}`);
    db.Teacher.findOne({ email: req.body.email })
      .then(user => {
        //if the user does not exist, return status 400
        if (!user) return res.status(400).json({ msg: "User does not exist." });
        console.log(user);
        console.log(salt, req.body.password, user.password);
        //user.password is the hashed password from the database, hash was coming back as undefined because it was not set before the bcrypt compare
        bcrypt.compare(req.body.password, user.password, (err, result) => {
          if (err) {
            throw err;
          }
          if (!result) {
            res.status(401).json({ message: "Passwords did not match." });
            return;
          }
          console.log("Compare Password");
          console.log(user);
          res.json(user);
        });
        console.log("After password/hash compare.");
      })

      .catch(err => res.status(422).json(err));
  },

  //Find all teachers in the database
  findAll: (req, res) => {
    console.log("Begin teacher findAll.");
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

  //Find teacher by ID
  findById: (req, res) => {
    console.log("log Teacher findByID req.params.id ---------");
    console.log(req.params.id);
    db.Teacher.findById(req.params.id)
      .populate("students")
      .then(dbTeacher => {
        res.json(dbTeacher);
        console.log("dbTeacher findById --------------");
        console.log(dbTeacher);
      })
      .catch(err => {
        res.status(422).json(err);
      });
  },

  //Create a new teacher
  create: (req, res) => {
    console.log("Beginning of backend teacher create");
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
            console.log(err);
            console.log(teacher);
          });
      }
    });
  },

  //Update an existing teacher by ID
  update: (req, res) => {
    console.log("Begin Teacher Update");
    console.log("Req.body:", req.body);
    console.log("Teacher params", req.params);

    // console.log(req.body.TeacherID),

    db.Teacher.findOneAndUpdate(
      req.params.id,
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName
      },
      {
        new: true
      }
    )
      .then(dbTeacher => {
        console.log("findOneAndUpdate: dbTeacher here");
        res.json(dbTeacher);
      })
      .catch(err => res.status(422).json(err));
  },

  //Delete teacher by ID
  delete: (req, res) => {
    console.log("Begin teacher delete.");
    console.log(req.body);
    let message = `Teacher ${req.body.id.TeacherID} destroyed`;
    db.Teacher.findByIdAndDelete(req.body.id.TeacherID)
      .then(result => {
        console.log(message);
        res.json(result);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
