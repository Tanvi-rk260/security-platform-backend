const express = require("express");
const router = express.Router();
const { runWafScanner } = require("./wafController");

router.post("/", runWafScanner);

module.exports = router;
