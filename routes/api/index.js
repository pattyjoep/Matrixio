/**
 * TODO:
 * Do we need this????
 * If so, what does it do?
 * It was in a previous classwork with MERN stack so I added an equivalent version.
 * -matt
 */
const router = require("express").Router();
const matrixRoutes = require("./matrixRoutes");
const studentRoutes = require("./studentRoutes");
const teacherRoutes = require("./teacherRoutes");

router.use("/matrix", matrixRoutes);
router.use("/students", studentRoutes);
router.use("/teachers", teacherRoutes);

module.exports = router;
