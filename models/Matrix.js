const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * * * * * Matrix Schema * * * * *
 * Mongoose model for the matrix collection in mongoDB.
 * matrix: A matrix can be any object, but all matrices are of the following format where this is a 3x3 matrix:
 *   { matrix: [row1[col1,col2,col3], row2[col1,col2,col3], row3[col1,col2,col3]] }
 * StudentID: A reference to the student who this matrix refers to.
 * dateCreated: The datetime that this matrix was created of type Date.now.
 * lastUpdated: The last datetime that this matrix was updated.
 */
const MatrixSchema = new Schema(
  {
    StudentID: {
      type: String
    },

    title: {
      type: String
    },

    dateCreated: {
      type: Date,
      default: Date.now
    },

    lastUpdated: {
      type: Date
    },

    matrix: Object

  },
  { collection: "matrices" }
);

MatrixSchema.methods.setLastUpdated = function() {
  
  this.lastUpdated = Date.now();
  return this.lastUpdated;
};

const Matrix = mongoose.model("Matrix", MatrixSchema);

module.exports = Matrix;
