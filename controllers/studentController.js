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

  findById: (req, res) => {
    console.log("log Student findByID req.params.id ---------");
    console.log(req.params.id);
    db.Student.findById(req.params.id)
      .populate("matrices")
      .then(dbStudent => {
        res.json(dbStudent);
        console.log("dbStudent findById --------------");
        console.log(dbStudent);
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
            students: {
              _id: student._id
            }
          }
        },
        { new: true }
      )
        .then(dbTeacher => {
          console.log("backend dbTeacher create result ----");
          console.log(dbTeacher);
          res.json(dbTeacher);
        })
        .catch(err => {
          res.status(422).json(err);
          console.log(err);
        });
    });
  },

  //======================Work in progress======================
  //Update an existing student by id
  update: (req, res) => {
    console.log("Begin student update.");
    console.log("Req.body", req.body);
    console.log("req.params", req.params);

    db.Student.findByIdAndUpdate(
      req.params.id,
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        fullName: req.body.firstName + " " + req.body.lastName,
        lastUpdated: Date.now()
      },
      {
        new: true
      }
    )
      .then(updatedStudent => {
        console.log("updatedStudent", updatedStudent);
        res.json(updatedStudent);
      })
      .catch(err => {
        res.status(422).json(err);
      });
  },

  //Delete Student by ID
  delete: (req, res) => {
    let message = `Student ${req.body.id.StudentID} destroyed`;

    db.Student.findByIdAndDelete(req.body.id.StudentID)
      .then(removeMatrices => {
        console.log("Remove students!", removeMatrices);
        db.Matrix.deleteMany({ _id: { $in: removeStudents.matrices } }).then(
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
