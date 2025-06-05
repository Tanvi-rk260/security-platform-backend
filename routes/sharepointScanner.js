const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/sharepoint-scan', async (req, res) => {
  const { url } = req.body;

  if (!url) return res.status(400).json({ error: 'URL is required' });

  const endpoints = [
    '/_vti_inf.html',
    '/_vti_bin/',
    '/_layouts/15/start.aspx'
  ];

  try {
    const results = [];

    for (const path of endpoints) {
      try {
        const response = await axios.get(`${url}${path}`);
        results.push({ path, status: response.status });
      } catch (err) {
        results.push({ path, status: err.response ? err.response.status : 'No response' });
      }
    }

    const isSharePoint = results.some(item => item.status === 200);

    res.json({
      isSharePoint,
      scannedPaths: results
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
