const db = require("../models");

/**
 * * * * * * * Student Controller * * * * * * *
 * Student Controller responsible for handling axios requests to the server.
 * findAll: returns all students in collection, sorted by lastUpdated.
 * findById: finds student by id.
 * create: creates new student as db.Student().
 * update: finds student and updates as rq.body.
 * delete: finds student and deletes.
 */
module.exports = {

  findAll: (req, res) => {
    db.Student.find({})
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
    db.Student.findById(req.params.id)
      .populate("matrices")
      .then(dbStudent => {
        res.json(dbStudent);
      })
      .catch(err => {
        res.status(422).json(err);
      });
  },

  create: (req, res) => {
    const student = new db.Student(req.body);
    student.setFullName();
    student.setLastUpdated();

    db.Student.create(student).then(student => {

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
          res.json(dbTeacher);
        })
        .catch(err => {
          res.status(422).json(err);
          console.log(err);
        });
    });
  },

  update: (req, res) => {

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
        res.json(updatedStudent);
      })
      .catch(err => {
        res.status(422).json(err);
      });
  },

  delete: (req, res) => {
    let message = `Student ${req.body.id.StudentID} destroyed`;

    db.Student.findByIdAndDelete(req.body.id.StudentID)
      .then(removeMatrices => {
        db.Matrix.deleteMany({ _id: { $in: removeStudents.matrices } }).then(
          result => {
            res.json(result);
          }
        );
      })
      .catch(err => {
        console.log(err);
      });
  }
};
