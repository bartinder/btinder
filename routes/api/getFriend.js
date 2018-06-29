// const request = require("request");
// const router = require("express").Router();
// const User = require("../../server/database/models/user");

// router.route("/").get(getFriend);

// function getFriend(req, res) {
//   const friend = req.body.friend;
//   console.log(req.body);
// //   console.log("this is what i want" + req.body.friend);
// //   console.log("my id" + req.user._id);
//   User.findOne(
//     { _id: req.body.id }
//   ).then(dataDb => {
//     res.json(dataDb);
//   });
// }

// module.exports = router;