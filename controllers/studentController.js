const db = require("../models");

//Methods for studentRoutes.js
module.exports = {
  
  findAll: (req, res) => {
    console.log("begin stu find all");
    db.Student.find(req.query)
      .sort({ dateCreated: -1 })
      .then(dbStudent => {
        res.json(dbStudent);
      })
      .catch(err => {
        res.status(422).json(err);
      });
  },

  create: (req, res) => {
    console.log("beginning backend student creation");
    const student = req.body;
    console.log(student);

    db.Student.create(student)
      .then(student => {
        console.log("inside then");
        console.log(student);
        
        db.Teacher.findByIdAndUpdate(
          student.TeacherID,
          {
            $push: {
              students: student._id
            }
          },
          { new: true }
        )
        .then(dbTeacher => {
          console.log("dbTeacher----");
          console.log(dbTeacher);
          res.json(dbTeacher);
        })
      })
  }
};
