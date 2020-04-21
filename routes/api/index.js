const router = require("express").Router();
const matrixRoutes = require("./matrices");

//
router.use("/matrices", matrixRoutes);

module.exports = router;
