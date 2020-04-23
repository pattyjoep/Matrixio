const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
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

  username: {
    type: String,
    trim: true,
    lowercase: true
  }

  matrices: [
    {
      type: Schema.Types.ObjectId,
      ref: "Matrix"
    }
  ]
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;