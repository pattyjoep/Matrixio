const router = require("express").Router();
const studentController = require("../../controllers/studentController");

//Matches with "/api/student/register"
//Might want to change to "addnew" or soemthing that reflects adding a new student to each teachers' list of students
router
  .route("/addnew")
  .post(studentController.create);

//Matches with "/api/student"
router
  .route("/")
  .get(studentController.findAll)
  
//Matches with "/api/student/:id"
router
  .route("/student/:id")
  .get(studentController.findById)
  .put(studentController.update)
  .delete(studentController.remove);

module.exports = router;
