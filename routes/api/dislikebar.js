const request = require("request");
const router = require("express").Router();
const User = require("../../server/database/models/user");

router.route("/").put(addBar);

function addBar(req, res) {
  const bar = req.body;
  User.findOneAndUpdate(
    { _id: req.user._id },
    { $push: { disLikedArray: bar.bar } }
  ).then(dataDb => {
    res.json(dataDb);
  });
}

module.exports = router;
