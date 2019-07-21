const router = require("express").Router();
const userRoutes = require("./user/user");

//Routes
router.use("/user", userRoutes);

module.exports = router;