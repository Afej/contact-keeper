const express = require("express");

const router = express.Router();

// @route   GET api/contacts
// @desc   get all users contacts
// @access   private
router.get("/", (req, res) => {
  res.send("get all conatcs");
});

// @route   POST api/contacts
// @desc   add new contact
// @access   private
router.post("/", (req, res) => {
  res.send("add new contacts");
});

// @route   PUT api/contacts/:id
// @desc   update contact
// @access   private
router.put("/", (req, res) => {
  res.send("update conatcs");
});

// @route   DELETE api/contacts
// @desc   delete contacts
// @access   private
router.delete("/", (req, res) => {
  res.send("delete conatcs");
});

module.exports = router;
