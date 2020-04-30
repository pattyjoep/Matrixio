const db = require("../models");

//Methods for studentRoutes.js
module.exports = {

  update: (req, res) => {
    db.Student.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbStudent => res.json(dbStudent))
      .catch(err => res.status(422).json(err));
  },
  
  create: (req, res) => {
    const student = req.body;
    console.log(student)
    
    db.Student.create(student)
    .then(student => db.Teacher.findByIdAndUpdate(
      student.TeacherID, 
      { 
        $push: {
          students: student._id
        }
      },
      {
        new: true,
        useFindAndModify: false
      },
      dbTeacher => {
        console.log("dbTeacher: --------------------");
        console.log(dbTeacher);
        res.json(dbTeacher);
      }
    ))
      
    .catch(err => {
      res.json(err);
    });
  }
};
