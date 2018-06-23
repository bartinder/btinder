// NOTHING ON THIS PAGE WORKS YET!!

const router = require("express").Router();
const db = require("../../database/models")
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/api/users")
  .get(function(req,res) {
      db.User
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  })

router.route("/search")
  .get(usersController.findAll)
  .post(usersController.create);

  router.route("/search/:id")
    .get(usersController.findByID)
    .put(usersController.update)
    .delete(usersController.remove);
  

module.exports = router;