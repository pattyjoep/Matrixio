const router = require("express").Router();
const studentController = require("../../controllers/studentController");

//Matches with "/api/student"
router
  .route("/")
  .get(studentController.findAll)
  .post(studentController.create);

module.exports = router;