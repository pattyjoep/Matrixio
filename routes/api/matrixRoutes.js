const router = require("express").Router();
const matrixController = require("../../controllers/matrixController");

//Matches with "/api/matrix/register"
router
  .route("/create")
  .post(matrixController.create);

//Matches with "/api/matrix"
router
  .route("/")
  .get(matrixController.findAll)
  
//Matches with "/api/matrix/:id"
router
  .route("/:id")
  .get(matrixController.findById)
  .put(matrixController.update)
  .delete(matrixController.remove);

module.exports = router;
