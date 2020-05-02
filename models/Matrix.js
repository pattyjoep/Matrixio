const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MatrixSchema = new Schema({

  matrix: Object,

  StudentID: {
    type: String
<<<<<<< HEAD
  }

});
=======
   },

   dateCreated: {
     type: Date,
     default: Date.now
   }
  
 });
>>>>>>> 8c08da194c2f0349b6b5efc7d564ac88afaf0edc

const Matrix = mongoose.model("Matrix", MatrixSchema);

module.exports = Matrix;