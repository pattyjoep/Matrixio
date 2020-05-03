const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * * * * * Matrix Schema * * * * *
 * 
 */
const MatrixSchema = new Schema({

  matrix: Object,

  StudentID: {
    type: String
  }

}, { collection: "matrices" });

const Matrix = mongoose.model("Matrix", MatrixSchema);

module.exports = Matrix;