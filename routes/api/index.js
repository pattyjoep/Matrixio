const router = require("express").Router();
// const matrix = require("./matrix");
// const student = require("./student");
const teacher = require("./teacher");

// router.use("/matrix", matrix);
// router.use("/student", student);
router.use("/teacher", teacher);

module.exports = router;
