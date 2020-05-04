const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * * * * * Matrix Schema * * * * *
 * Mongoose model for the matrix collection in mongoDB.
 * StudentID: A reference to the student who this matrix refers to.
 * dateCreated: The datetime that this matrix was created of type Date.now.
 * lastUpdated: The last datetime that this matrix was updated.
 */
const MatrixSchema = new Schema({

  matrix: Object,

  StudentID: {
    type: String
  },

  dateCreated: {
    tpye: Date,
    default: Date.now
  },

  lastUpdated: {
    type: Date
  }

}, { collection: "matrices" });

MatrixSchema.methods.setLastUpdated = function() {
  this.lastUpdated = Date.now();
  console.log("Matrix - set last updated")
  console.log(this.lastUpdated);

  return this.lastUpdated;
};

const Matrix = mongoose.model("Matrix", MatrixSchema);

module.exports = Matrix;