const express = require("express");

const router = express.Router();

// @route   POST api/users
// @desc   register user
// @access   public
router.post("/", (req, res) => {
  res.send("registrs a user");
});

module.exports = router;