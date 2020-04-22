const mongoose = require("mongoose");
const Schema = mongoose.Schema;





const MatrixSchema = new Schema({
  

  matrix: {
    type: Mixed,
  }
  
  
});

const Matrix = mongoose.model("Matrix", MatrixSchema);

module.exports = Matrix;