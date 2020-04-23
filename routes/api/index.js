/**
 * TODO:
 * Do we need this????
 * If so, what does it do?
 * It was in a previous classwork with MERN stack so I added an equivalent version.
 * -matt
 */
const router = require("express").Router();
const studentRoutes = require("./studentRoutes");
const teacherRoutes = require("./teacherRoutes");
const matrixRoutes = require("./matrixRoutes");

router.use("/students", studentRoutes);
router.use("/teachers", teacherRoutes);
router.use("/matrices", matrixRoutes);

module.exports = router;
