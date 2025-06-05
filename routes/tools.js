const express = require('express');
const router = express.Router();

const wafScan = require('../utils/wafScanner');
const portScan = require('../utils/portScanner');
const pageSpeed = require('../utils/pageSpeed');

// WAF Scanner
router.post('/waf-scan', async (req, res) => {
  const { domain } = req.body;
  const result = await wafScan(domain);
  res.json(result);
});

// Port Scanner
router.post('/port-scan', async (req, res) => {
  const { domain } = req.body;
  const result = await portScan(domain);
  res.json(result);
});

// Page Speed Tester
router.post('/page-speed', async (req, res) => {
  const { url } = req.body;
  const result = await pageSpeed(url);
  res.json(result);
});

module.exports = router;
