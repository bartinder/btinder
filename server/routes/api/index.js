const router = require("express").Router();
const userRoutes = require("./users");

// users routes
router.use("/users", userRoutes);

module.exports = router;