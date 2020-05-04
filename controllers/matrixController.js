const db = require("../models");

/**
 * * * * * * * Matrix Controller * * * * * * * 
 * TODO: matrix can be passed as anything, this is dangerous: 
 *  can update id, 
 *  risks data integrity.
 * 
 * Matrix Controller responsible for handling axios requests to the server.
 * FindAll: returns all matrices in collection.
 * findById: finds matrix by id.
 * create: creates new matrix as { }.
 * update: finds matrix and updates as { }.
 * remove: finds matrix and deletes.
 */
module.exports = {
  findAll: function (req, res) {
    db.Matrix.find({ }, function(err, docs) {
      if (!err) { 
          console.log(docs);
          process.exit();
      }
      else {
          throw err;
      }
    });
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
          matrix.StudentID,
          {
            $push: {
              matrices: matrix._id
            }
          },
          { new: true }
        ).then(dbStudent => {
          console.log("3 - dbstudent");
          console.log(matrix);
          res.json(matrix);
        });
      });
  },

  /**
   * TODO: Update student with their new matrix, if studentid changes.
   * req.body needs to be formatted in /../client/src/utils/API.js
   * @param {*} req 
   * @param {*} res 
   */
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
