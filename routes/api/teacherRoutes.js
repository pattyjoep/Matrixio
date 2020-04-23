const router = require("express").Router();
const teacherController = require("../../controllers/teacherController");

// Matches with "/api/teachers/register"
router
  .route("/register")
  .post(teacherController.create);

// Matches with "/api/teachers"
router
  .route("/")
  .get(teacherController.findAll)
  
// Matches with "/api/teachers/:id"
router
  .route("/:id")
  .get(teacherController.findById)
  .put(teacherController.update)
  .delete(teacherController.remove);

module.exports = router;
