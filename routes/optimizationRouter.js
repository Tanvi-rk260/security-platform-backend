const express = require('express');
const router = express.Router();
const { analyzeWebsite } = require('./optimizationController');

router.post('/analyze-website', analyzeWebsite);

module.exports = router;
