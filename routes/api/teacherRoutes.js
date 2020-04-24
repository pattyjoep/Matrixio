const router = require("express").Router();
const teacherController = require("../../controllers/teacherController");

//Matches with "/api/teacher/register"
router
  .route("/register")
  .post(teacherController.create);

//Matches with "/api/teacher"
router
  .route("/")
  .get(teacherController.findAll)
  
//Matches with "/api/teacher/:id"
router
  .route("/teacher/:id")
  .get(teacherController.findById)
  .put(teacherController.update)
  .delete(teacherController.remove);

module.exports = router;
