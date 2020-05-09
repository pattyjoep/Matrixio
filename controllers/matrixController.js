const db = require("../models");

/**
 * * * * * * * Matrix Controller * * * * * * *
 * Matrix Controller responsible for handling axios requests to the server.
 * findAll: returns all matrices in collection, sorted by lastUpdated.
 * findById: finds matrix by id.
 * create: creates new matrix as { }.
 * update: finds matrix and updates as { }.
 * remove: finds matrix and deletes.
 */
module.exports = {
  findAll: function(req, res) {
    db.Matrix.find({})
      .sort({ lastUpdated: -1 })
      .then(dbMatrix => {
        res.json(dbMatrix);
      })
      .catch(err => {
        res.status(422).json(err);
      });
  },

  findById: function(req, res) {
    db.Matrix.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: (req, res) => {
    const matrix = req.body;
    matrix.lastUpdated = Date.now();

    db.Matrix.create(matrix).then(matrix => {
      db.Student.findByIdAndUpdate(
        matrix.StudentID,
        {
          $push: {
            matrices: matrix._id
          }
        },
        { new: true }
      ).then(dbMatrix => {
        res.json(matrix);
      });
    });
  },

  /**
   * TODO: Update student with their new matrix, if studentid changes.
   * req.body needs to be formatted in ../client/src/utils/API.js
   * @param {*} req
   * @param {*} res
   */
  update: function(req, res) {
    let matrix = req.body;
    matrix.lastUpdated = Date.now();
    let thisMatrix = db.Matrix.findOneAndUpdate({ _id: req.params.id }, matrix)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    /**
     * if(thisMatrix.StudentID != req.body.StudentID){
     *  //update student with their new matrix.
     * }
     * if studentID changes, we can update which student has this matrix.
     * HOWEVER, is this functionality we need? Presently, would require passing studentID into all matrix update calls, which isn't hard, but is extra, and could be risky exposing IDs like that.
     */
  },

  remove: function(req, res) {
    db.Matrix.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
