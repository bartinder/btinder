const router = require("express").Router();
const bars = require("./bars");
const likebar = require("./likebar");
const dislikebar = require("./dislikebar");
const updateUser = require("./updateUser")
const addfriend = require("./addfriend");
// const getFriends = require("./getFriend")


router.use("/likebar", likebar);
router.use("/dislikebar", dislikebar);
router.use("/bars", bars);
router.use("/updateUser", updateUser)
router.use("/friend", addfriend);
// router.use("/getFriends", getFriends);


module.exports = router;
