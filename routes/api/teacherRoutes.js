const router = require("express").Router();
const teachersController = require("../../controllers/teachersController");

// Matches with "/api/teachers/register"
router
  .route("/register")
  .post(teachersController.create);

// Matches with "/api/teachers"
router
  .route("/")
  .get(teachersController.findAll)
  

// Matches with "/api/teachers/:id"
router
  .route("/:id")
  .get(teachersController.findById)
  .put(teachersController.update)
  .delete(teachersController.remove);

module.exports = router;
