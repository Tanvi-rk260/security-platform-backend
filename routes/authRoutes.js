const express = require("express");
const router = express.Router();

// Dummy register route
router.post("/register", (req, res) => {
  console.log(req.body);
  res.json({ message: "Register route hit (dummy)" });
});

// Dummy login route
router.post("/login", (req, res) => {
  console.log(req.body);
  res.json({ message: "Login route hit (dummy)" });
});

module.exports = router;
