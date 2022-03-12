const router = require("express").Router();
const { User, Post, Vote } = require("../../models");

// Route to get all users

router.get("/", (req, res) => {
  User.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((allUsers) => res.json(allUsers))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Route to create a new user
router.post("/", (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    .then((newUser) => res.json(newUser))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
