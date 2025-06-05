const express = require('express');
const router = express.Router();
const axios = require('axios');
const cheerio = require('cheerio');

router.post('/meta-analyze', async (req, res) => {
  const { url } = req.body;

  if (!url) return res.status(400).json({ error: 'URL is required' });

  try {
    const response = await axios.get(url); 
    const $ = cheerio.load(response.data);

    const metaTags = {};

    metaTags.title = $('title').text();
    metaTags.charset = $('meta[charset]').attr('charset') || '';
    metaTags.viewport = $('meta[name="viewport"]').attr('content') || '';
    metaTags.description = $('meta[name="description"]').attr('content') || '';
    metaTags.keywords = $('meta[name="keywords"]').attr('content') || '';
    metaTags.robots = $('meta[name="robots"]').attr('content') || '';

    res.json({
      url,
      metaTags
    });
  } catch (error) {
    res.status(500).json({ error: `Failed to analyze meta tags: ${error.message}` });
  }
});

module.exports = router;
