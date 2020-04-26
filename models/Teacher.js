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
    required: true
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

//mongoose version of middlewear
// TeacherSchema.pre("save", function(next) {
//   //check to see if the password has been modified, if it has then we do not need to hash the password
//   if (!this.isModified("password")) return next();
//   bcrypt.hash(this.password, 10, (error, hashedPassword) => {
//     if (error) {
//       return next(error);
//       this.password = hashedPassword;
//       next();
//     }
//   });
// });

// TeacherSchema.methods.comparePassword = function(password, cb) {
//   bcrypt.compare(password, hashedPassword, (error, isMatched) => {
//     if (error) {
//       return cb(error);
//     } else {
//       if (!isMatch) return cb(null, isMatched);
//       return cb(null, this);
//     }
//   });
// };
