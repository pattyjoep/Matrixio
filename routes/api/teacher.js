const router = require("express").Router();
const teacherController = require("../../controllers/teacherController");

//Matches with "/api/teacher"
router
  .route("/")
  .get(teacherController.findAll)
  .post(teacherController.create)
  .put(teacherController.update);

//Matches with /api/teacher/login
//Login require a post instead of a get because it get will not accept req.body.
router.route("/login").post(teacherController.findOne);

//Matches with /api/teacher/signup
router
  .route("/signup")
  .get(teacherController.findOne)
  .post(teacherController.create);

//Matches with "/api/teacher/:id"
// router
//   .route("/:id")
//   .get(teacherController.findById)
//   .put(teacherController.update)
//   .delete(teacherController.remove);

module.exports = router;
