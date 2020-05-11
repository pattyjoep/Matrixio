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
  findAll: (req, res) => {
    db.Matrix.find({})
      .populate("matrix")
      .sort({ lastUpdated: -1 })
      .then(dbMatrix => {
        res.json(dbMatrix);
      })
      .catch(err => {
        res.status(422).json(err);
      });
  },

  findById: (req, res) => {
    db.Matrix.findById(req.params.id)
      .populate("matrix")
      .then(dbModel => {
        res.json(dbModel);
      })
      .catch(err => {
        res.status(422).json(err);
      });
  },

  create: (req, res) => {
    const matrix = new db.Matrix(req.body);
    matrix.setLastUpdated();

    db.Matrix.create(matrix).then(matrix => {
      db.Student.findByIdAndUpdate(
        matrix.StudentID,
        {
          $push: {
            matrices: {
              _id: matrix._id
            }
          }
        },
        { new: true }
      ).then(dbMatrix => {
        res.json(dbMatrix);
      });
    });
  },

  /**
   * TODO: Update student with their new matrix, if studentid changes.
   * req.body needs to be formatted in ../client/src/utils/API.js
   * @param {*} req
   * @param {*} res
   */
  update: (req, res) => {
    // let matrix = req.body;
    // matrix.lastUpdated = Date.now();
    db.Matrix.findByIdAndUpdate(
      req.params.id,
      {
        matrices: req.body.matrix,
        lastUpdated: Date.now()
      },
      {
        new: true
      }
    )
      .then(dbModel => {
        res.json(dbModel);
      })
      .catch(err => {
        res.status(422).json(err);
      });
    /**
     * if(thisMatrix.StudentID != req.body.StudentID){
     *  //update student with their new matrix.
     * }
     * if studentID changes, we can update which student has this matrix.
     * HOWEVER, is this functionality we need? Presently, would require passing studentID into all matrix update calls, which isn't hard, but is extra, and could be risky exposing IDs like that.
     */
  },

  delete: (req, res) => {
    db.Matrix.findByIdAndDelete(req.body.id.MatrixID)
      // .then(removeMatrices => {
      //   removeMatrices.remove()
      .then(dbMatrices => {
        res.json(dbMatrices);
      })
      // })
      .catch(err => {
        res.status(422).json(err);
      });
  }
};
