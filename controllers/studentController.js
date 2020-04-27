const db = require("../models");

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
      })
      .catch(err => {
        res.json(err);
      });
  },
};
