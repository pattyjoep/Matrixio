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
  },

  fullName: {
    type: String
  },

  lastUpdated: {
    type: Date
  },

  matrices: [
    {
      type: Schema.Types.ObjectId,
      ref: "Matrix"
    }
  ]
});

StudentSchema.methods.setFullName = function() {
  this.fullName = `${this.firstName} ${this.lastName}`;
  console.log("set full name");
  console.log(this.fullName);

  return this.fullName;
};

StudentSchema.methods.setLastUpdated = function() {
  this.lastUpdated = Date.now();
  console.log("set last updated")
  console.log(this.lastUpdated);

  return this.lastUpdated;
};

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;