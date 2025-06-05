// routes/checkmarxscanner.js

const express = require('express');
const router = express.Router();
const CheckmarxResult = require('../models/CheckmarxResult');

// Dummy logic (replace with real scan logic later)
router.post('/checkmarxscan', async (req, res) => {
  const { url } = req.body;

  // Dummy result generation
  const issuesFound = Math.floor(Math.random() * 10); // Random number of issues
  const details = `Found ${issuesFound} issues during scan for ${url}`;

  try {
    const newResult = new CheckmarxResult({ url, issuesFound, details });
    await newResult.save();
    res.status(200).json({ message: 'Scan completed', result: newResult });
  } catch (error) {
    console.error("❌ Error saving Checkmarx result:", error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
