const router = require("express").Router();
const bars = require("./bars");

router.use("/bars", bars);

module.exports = router;
