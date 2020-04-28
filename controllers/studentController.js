const db = require("../models");

//Methods for studentRoutes.js
module.exports = {
  create: ({ body }, res) => {
    db.Student.create(body)
    .then(( { _id }) => db.Teacher.findOneAndUpdate(
      {}, 
      { 
        $push: {
          students: _id
        }
      }
      ))
      .then(dbTeacher => {
        res.json(dbTeacher);
        console.log(dbTeacher);
      })
      .catch(err => {
        res.json(err);
      });
  },
};









/*const db = require("../models");

//Methods for studentRoutes.js
module.exports = {
  create: ({ body }, res) => {
    db.Student.create(body)
    .then(( { _id }) => db.Teacher.findByIdAndUpdate(
      {}, 
      { 
        $push: {
          students: _id
        }
      },
      {
        new: true
      } 
      ))
      .then(dbTeacher => {
        res.json(dbTeacher);
        console.log("res.json(dbteacher)");
      })
      .catch(err => {
        res.json(err);
      });
  },
};


*/