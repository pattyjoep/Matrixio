const router = require("express").Router();
const studentController = require("../../controllers/studentController");

//Matches with "/api/student"
router
  .route("/")
  .post(studentController.create)

module.exports = router;