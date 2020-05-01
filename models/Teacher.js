const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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

  // fullName: {
  //   type: String
  // },

  // lastUpdated: {
  //   type: Date
  // }

  // students: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Student"
  //   }
  // ]
});

// TeacherSchema.methods.setFullName = () => {
//   TeacherSchema.fullName = `${TeacherSchema.firstName} ${TeacherSchema.lastName}`;
//   console.log("set full name");
//   console.log(TeacherSchema.fullName);

//   return TeacherSchema.fullName;
// };

// TeacherSchema.methods.setLastUpdated = () => {
//   TeacherSchema.lastUpdated = Date.now();
//   console.log("set last updated")
//   console.log(TeacherSchema.lastUpdated);

//   return TeacherSchema.lastUpdated;
// };

const Teacher = mongoose.model("Teacher", TeacherSchema);

module.exports = Teacher;
