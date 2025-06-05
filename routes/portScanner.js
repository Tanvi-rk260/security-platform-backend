const express = require("express");
const router = express.Router();
const { runPortScanner } = require("../controllers/portScannerController");

router.post("/", runPortScanner);

module.exports = router;
