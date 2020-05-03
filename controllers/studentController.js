const db = require("../models");

//Methods for studentRoutes.js
module.exports = {
  //Find all students
  findAll: (req, res) => {
    console.log("Begin stu findAll.");
    db.Student.find(req.query)
      .populate("matrices")
      .sort({ dateCreated: -1 })
      .then(dbStudent => {
        res.json(dbStudent);
      })
      .catch(err => {
        res.status(422).json(err);
      });
  },

  //Create a new student
  create: (req, res) => {
    console.log("Beginning backend student creation.");
    const student = new db.Student(req.body);
    student.setFullName();
    student.setLastUpdated();
    console.log(student);

    db.Student.create(student).then(student => {
      console.log("Inside studentController then");
      console.log(student);

      db.Teacher.findByIdAndUpdate(
        student.TeacherID,
        {
          $push: {
            students: student._id
          }
        },
        { new: true }
      ).then(dbTeacher => {
        console.log("dbTeacher----");
        console.log(dbTeacher);
        res.json(dbTeacher);
      });
    });
  },

  //======================Work in progress======================
  //Update an existing student by id
  update: (req, res) => {
    console.log("Begin student update.");
    console.log("Req.body", req.body);
    console.log("params", req.params);
    // console.log(req.body.TeacherID),

    db.Teacher.findByIdAndUpdate(student.TeacherID, {
      $push: {
        students: student._id
      }
    })
      .then(dbTeacher => {
        console.log("dbTeacher here");
        res.json(dbTeacher);
      })
      .catch(err => res.status(422).json(err));
  },

  //Delete a student
  delete: (req, res) => {
    console.log("Begin student delete.");
    console.log(req.body);
    // let message = `Student ${req.body.id.TeacherID} destroyed`;
    db.Teacher.findByIdAndDelete(student.TeacherID)
      .then(result => {
        console.log(message);
        res.json(result);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
