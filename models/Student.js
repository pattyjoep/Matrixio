const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * * * * * Student Schema * * * * *
 * Mongoose model for the student collection in mongoDB.
 * firstName: A student's first name
 * lastName: A student's last name
 * dateCreated: The date/time a student was created.
 * TeacherID: A reference to the student's assigned teacher.
 * fullName: A student's full name (firstName + lastName).
 * lastUpdated: The last date/time this student was updated.
 * matrices: An array of matrixIDs which hold a reference the matrix in the DB.
 * setFullName(): used to mutate the fullName property.
 * setLastUpdated(): used to set the lastUpdated property.
 */
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
