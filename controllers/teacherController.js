const db = require("../models");

//Methods for teacherRoutes.js
module.exports = {

  findByEmail: (req, res) => {
    console.log("teacher find one - start")
    db.Teacher.findOne({ email: req.body.email })
      .catch(err => {
        res.status(422).json(err);
        console.log(err);
      });
      console.log("teacher find one - end");
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
        console.log("findOneAndUpdate: dbTeacher here");
        res.json(dbTeacher);
      })
      .catch(err => res.status(422).json(err));
  },

  //Delete teacher by ID
  delete: (req, res) => {
    console.log("Begin teacher delete.");
    console.log("TEACHER DELETE!!!", req.body);
    let message = `Teacher ${req.body.id.TeacherID} destroyed`;

    db.Teacher.findByIdAndDelete(req.body.id.TeacherID)
      .then(removeStudents => {
        console.log("Remove students!", removeStudents);
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
