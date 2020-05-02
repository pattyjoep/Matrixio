const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: true
  },

  lastName: {
    type: String,
    trim: true,
    required: true
  },

  dateCreated: {
    type: Date,
    default: Date.now
  },

  TeacherID: {
    type: String
  }

  // matrices: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Matrix"
  //   }
  // ]
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
