const express = require('express');
const router = express.Router();
const { runSonarScanner } = require('./sonarController');

router.post('/sonar-scan', runSonarScanner);

module.exports = router;
