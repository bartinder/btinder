const router = require("express").Router();
const bars = require("./bars");
const likebar = require("./likebar");
const dislikebar = require("./dislikebar");
const addfriend = require("./addfriend");

router.use("/likebar", likebar);
router.use("/dislikebar", dislikebar);
router.use("/bars", bars);
router.use("/friend", addfriend);

module.exports = router;
