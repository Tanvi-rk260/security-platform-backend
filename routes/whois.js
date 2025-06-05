const express = require('express');
const router = express.Router();
const WhoisResult = require('../models/WhoisResult');

// ✅ Get All Whois Scan Results (Admin Panel View)
router.get('/results', async (req, res) => {
  try {
    const results = await WhoisResult.find().sort({ scannedAt: -1 });
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch WHOIS results' });
  }
});

module.exports = router;
