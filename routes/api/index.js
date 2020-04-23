const router = require("express").Router();
const matrixRoutes = require("./matrixRoutes");
const teacherRoutes = require("./teacherRoutes");

//use the matrix routes, just a skeleton.
// router.use("/matrices", matrixRoutes);
router.use("/teachers", teacherRoutes)

module.exports = router;
