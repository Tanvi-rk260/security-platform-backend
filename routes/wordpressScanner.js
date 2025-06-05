const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/wordpress-scan', async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: 'URL is required' });

  try {
    const response = await axios.get(url);
    const html = response.data;

    const isWordPress = html.includes('wp-content') || html.includes('wp-includes');
    let version = null;

    // Check for meta generator tag
    const versionMatch = html.match(/<meta name=["']generator["'] content=["']WordPress\s([\d.]+)["']\s*\/?>/i);
    if (versionMatch) {
      version = versionMatch[1];
    }

    res.json({
      url,
      isWordPress,
      version: version || 'Version info not found'
    });

  } catch (err) {
    res.status(500).json({ error: 'Could not scan the site. ' + err.message });
  }
});

module.exports = router;
    