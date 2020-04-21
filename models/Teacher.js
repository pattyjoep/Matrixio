const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const TeacherSchema = new Schema({
  firstName: {
    type: String,
    trim: true
  },

  lastName: {
    type: String,
    trim: true
  },

  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    validate: {
      validator: (email) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
      },
      message: "Please enter a valid email"  
    },
    required: [true, "Email require"]
  },

  hashedPassword: {
    type: String
  },

  students: [
    {
      type: Schema.Types.ObjectId,
      ref: "Student"
    }
  ]
});

const Teacher = mongoose.model("Teacher", TeacherSchema);

module.exports = Teacher;