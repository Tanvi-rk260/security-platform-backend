const express = require('express');
const router = express.Router();
const { scanVulnerabilities } = require('./vulnController');

router.post('/vuln-scan', scanVulnerabilities);

module.exports = router;
