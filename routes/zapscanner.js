// routes/zapscanner.js

const express = require('express');
const router = express.Router();
const ZapResult = require('../models/ZapResult');

// Dummy scan simulation (replace with real ZAP API logic if needed)
router.post('/', async (req, res) => {
  const { url } = req.body;

  try {
    // Example alerts & risk (replace with real scan output)
    const alerts = ['SQL Injection', 'XSS Vulnerability'];
    const riskLevel = 'High';

    const result = new ZapResult({
      url,
      alerts,
      riskLevel
    });

    await result.save();

    res.status(200).json({
      message: 'ZAP Scan completed',
      result
    });

  } catch (error) {
    console.error('❌ ZAP Scan error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
