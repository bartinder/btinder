const router = require("express").Router();
const bars = require("./bars");
const likebar = require("./likebar");
const dislikebar = require("./dislikebar");

router.use("/likebar", likebar);
router.use("/dislikebar", dislikebar);
router.use("/bars", bars);

module.exports = router;
