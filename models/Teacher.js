const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * * * * * teacher Schema * * * * *
 * Mongoose model for the Teacher collection in mongoDB.
 * firstName: A teacher's first name
 * lastName: A teacher's last name
 * email: A teacher's email, used to login/authenticate, contains a regex email verifier.
 * dateCreated: The date/time a teacher was created.
 * fullName: A teacher's full name (firstName + lastName).
 * lastUpdated: The last date/time this teacher was updated.
 * students: An array of StudentIDs which hold a reference the student in the DB.
 * setFullName(): used to mutate the fullName property.
 * setLastUpdated(): used to set the lastUpdated property.
 */
const TeacherSchema = new Schema({
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

  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    validate: {
      validator: email => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
      },
      message: "Please enter a valid email"
    },
    required: [true, "Email required"]
  },

  password: {
    type: String,
    required: true,
    trim: true
  },

  dateCreated: {
    type: Date,
    default: Date.now
  },

  fullName: {
    type: String
  },

  lastUpdated: {
    type: Date
  },

  students: [
    {
      type: Schema.Types.ObjectId,
      ref: "Student"
    }
  ]
});

TeacherSchema.methods.setFullName = function() {

  this.fullName = `${this.firstName} ${this.lastName}`;
  return this.fullName;
};

TeacherSchema.methods.setLastUpdated = function() {
  
  this.lastUpdated = Date.now();
  return this.lastUpdated;
};

const Teacher = mongoose.model("Teacher", TeacherSchema);

module.exports = Teacher;
