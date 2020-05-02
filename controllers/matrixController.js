const db = require("../models");

//Methods for matrixRoutes.js
module.exports = {
  findAll: function (req, res) {
    db.Matrix.find(req.query)
      .sort({ _id: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function (req, res) {
    db.Matrix.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: (req, res) => {
    console.log("1 - create");
    const matrix = req.body;
    console.log(matrix);

    db.Matrix.create(matrix)
      .then(matrix => {
        console.log("2 - then");
        console.log(matrix);

        db.Student.findByIdAndUpdate(
          Matrix.StudentID,
          {
            $push: {
              students: student._id
            }
          },
          { new: true }
        ).then(dbStudent => {
          console.log("3 - dbstudent");
          console.log(dbStudent);
          res.json(dbStudent);
        });
      });
  },

  update: function (req, res) {
    db.Matrix.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  remove: function (req, res) {
    db.Matrix.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
