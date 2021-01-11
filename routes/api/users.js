const express = require("express");
const router = express.Router();

const {sequelize, User} = require("../../models");


// @route           POST api/users
// @description     Register a user
// @access          Public

router.post("/", async (req, res) => {
  const { name, email, role } = req.body;
  try {
      const user = await User.create({
          name: name,
          email: email,
          role: role,
      });
      res.json({user});
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;


