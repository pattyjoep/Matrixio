const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MatrixSchema = new Schema({
  rows: {
    type: Number,
    trim: true
  },

  columns: {
    type: Number,
    trim: true
  }
});

const Matrix = mongoose.model("Matrix", MatrixSchema);

module.exports = Matrix;