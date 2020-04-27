const router = require("express").Router();
const studentController = require("../../controllers/studentController");



//Matches with "/api/student"
router
  .route("/")
  
  .post(studentController.create)


  
//Matches with "/api/student/:id"


module.exports = router;
