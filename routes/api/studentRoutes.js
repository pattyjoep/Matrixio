const router = require("express").Router();
const studentController = require("../../controllers/studentController");

// Matches with "/api/teachers/register"
router
  .route("/register")
  .post(studentController.create);

// Matches with "/api/teachers"
router
  .route("/")
  .get(studentController.findAll)
  
// Matches with "/api/teachers/:id"
router
  .route("/:id")
  .get(studentController.findById)
  .put(studentController.update)
  .delete(studentController.remove);

module.exports = router;
