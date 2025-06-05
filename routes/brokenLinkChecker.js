const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const router = express.Router();

router.post('/broken-links', async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: 'URL is required' });

  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const links = [];

    $('a').each((i, el) => {
      const href = $(el).attr('href');
      if (href && href.startsWith('http')) {
        links.push(href);
      }
    });

    const brokenLinks = [];

    for (const link of links) {
      try {
        const linkRes = await axios.get(link);
        if (linkRes.status >= 400) {
          brokenLinks.push({ link, status: linkRes.status });
        }
      } catch (err) {
        brokenLinks.push({ link, status: err.response ? err.response.status : 'Connection Error' });
      }
    }

    res.json({ totalLinks: links.length, brokenLinks });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
