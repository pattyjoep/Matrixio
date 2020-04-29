const db = require("../models");

//Methods for studentRoutes.js
module.exports = {
  create: ({ body }, res) => {
    db.Student.create(body)
      .then(({ _id }) =>
        db.Teacher.findOneAndUpdate(
          {},
          {
            $push: {
              students: _id
            }
          }
        )
      )
      .then(dbTeacher => {
        res.json(dbTeacher);
        console.log(dbTeacher);
      })
      .catch(err => {
        res.json(err);
      });
  }
};
