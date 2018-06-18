const router = require("express").Router();
const db = require("../../database/models")
// const booksController = require("../../controllers/booksController");

// Matches with "/api/users"
router.route("/api/users")
  .get(function(req,res) {
      db.User
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  })


app.get('/api/user_data', function(req, res) {

    if (req.user === undefined) {
        // The user is not logged in
        res.json({});
    } else {
        res.json({
            username: req.user
        });
    }
});
  

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;