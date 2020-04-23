const router = require("express").Router();
const matrixController = require("../../controllers/matrixController");
//remember the book app we did in class? we need a controller to handle what is being done.

//homepage, what do we want to display here? (if signed in, show matrices or students? else, show sign in page)
router.route("/");

//if user is a teacher: show something, maybe students. if user is a student: show their matrices or something.
router.route("/:id");

module.exports = router;
