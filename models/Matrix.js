 const mongoose = require("mongoose");
 const Schema = mongoose.Schema;

 const MatrixSchema = new Schema({
  
   matrix: Object,
   
   StudentID: {
    type: String
   },

   dateCreated: {
     type: Date,
     default: Date.now
   }
  
 });

 const Matrix = mongoose.model("Matrix", MatrixSchema);

 module.exports = Matrix;