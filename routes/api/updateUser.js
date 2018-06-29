const request = require("request");
const router = require("express").Router();
const User = require("../../server/database/models/user");

router.route("/").put(updateUser);

function updateUser(req, res) {
  const loggedUser = req.body;
  User.findOneAndUpdate(
    { _id: req.user._id },
    { $set: { firstName: loggedUser.firstName,
              lastName: loggedUser.lastName,
              email: loggedUser.email,
              phoneNumber: loggedUser.phoneNumber } },
    { runValidators: true}
  ).then(dataDb => {
    res.json(dataDb);
  });
}

module.exports = router;