const router = require("express").Router();
const matrixRoutes = require("./matrices");

//use the matrix routes, just a skeleton.
router.use("/matrices", matrixRoutes);

module.exports = router;
