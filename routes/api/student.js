const router = require("express").Router();
const studentController = require("../../controllers/studentController");

//Matches with "/api/student"
router
  .route("/")
  .get(studentController.findAll)
  .post(studentController.create)
  .delete(studentController.delete);

// Matches with "/api/student/:id"
router
  .route("/:id")
//   .get(studentController.findById)
  .put(studentController.update)
//   .delete(studentController.remove);

module.exports = router;
