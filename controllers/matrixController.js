const db = require("../models");

//Methods for matrixRoutes.js
module.exports = {
  findAll: function(req, res) {
    db.Matrix.find(req.query)
      .sort({ _id: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Matrix.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: (req, res) => {
    const matrix = req.body;
    console.log(matrix);

    db.Matrix.create(matrix)
      .then(matrix =>
        db.Student.findByIdAndUpdate(
          student.StudentID,
          {
            $push: {
              matrices: matrix._id
            }
          },
          {
            new: true,
            useFindAndModify: false
          },
          dbStudent => {
            console.log("dbStudent: --------------------");
            console.log(dbStudent);
            res.json(dbSudent);
          }
        )
      )
      .catch(err => {
        res.json(err);
      });
  },
  

  update: function(req, res) {
    db.Matrix.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Matrix.findById({ _id: req.params.id })
    .then(dbModel => dbModel.remove())
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }
};
