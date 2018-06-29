const request = require("request");
const router = require("express").Router();
const User = require("../../server/database/models/user");

router.route("/").put(addFriend);

function addFriend(req, res) {
  const friend = req.body.friend;
  console.log(req.body);
  console.log("this is what i want" + req.body.friend);
  console.log("my id" + req.user._id);
  User.findOneAndUpdate(
    { _id: req.user._id },
    { $push: { friendsArray: friend } }
  ).then(dataDb => {
    res.json(dataDb);
  });
}

module.exports = router;