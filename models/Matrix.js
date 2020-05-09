const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * * * * * Matrix Schema * * * * *
 * Mongoose model for the matrix collection in mongoDB.
 * matrix: A matrix can be any object, but all matrices are of the following format where this is a 3x3 matrix:
 *   { "Title": [row1[col1,col2,col3], row2[col1,col2,col3], row3[col1,col2,col3]] }
 * StudentID: A reference to the student who this matrix refers to.
 * title: The matrix title, stored in object as well as in header for ease of access.
 * dateCreated: The datetime that this matrix was created of type Date.now.
 * lastUpdated: The last datetime that this matrix was updated.
 */
const MatrixSchema = new Schema(
  {
    matrix: Object,

    StudentID: {
      type: String
    },

    dateCreated: {
      type: Date,
      default: Date.now
    },

    lastUpdated: {
      type: Date
    }

  },
  { collection: "matrices" }
);

MatrixSchema.methods.setLastUpdated = function() {
  this.lastUpdated = Date.now();
  console.log("Matrix - set last updated");
  console.log(this.lastUpdated);

  return this.lastUpdated;
};

const Matrix = mongoose.model("Matrix", MatrixSchema);

module.exports = Matrix;
