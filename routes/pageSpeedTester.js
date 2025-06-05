const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/page-speed', async (req, res) => {
  const { url } = req.body;

  if (!url) return res.status(400).json({ error: 'URL is required' });

  try {
    const start = Date.now();

    await axios.get(url);

    const end = Date.now();
    const loadTime = end - start;

    res.json({
      url,
      loadTimeInMilliseconds: loadTime,
      message: 'Page loaded successfully.'
    });
  } catch (error) {
    res.status(500).json({
      error: `Failed to load page: ${error.message}`
    });
  }
});

module.exports = router;
