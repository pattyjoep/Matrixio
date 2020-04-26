const router = require("express").Router();
const teacherController = require("../../controllers/teacherController");

//Matches with "/api/teacher"
router
  .route("/")
  .get(teacherController.findAll)
  .post(teacherController.create);

//Matches with /api/teacher/login
router.route("/login").get(teacherController.findOne);
// .post(teacherController.create);

//Matches with /api/teacher/signup
router
  .route("/signup")
  .get(teacherController.findOne)
  .post(teacherController.create);

//Matches with "/api/teacher/:id"
router
  .route("/:id")
  .get(teacherController.findById)
  .put(teacherController.update)
  .delete(teacherController.remove);

module.exports = router;
