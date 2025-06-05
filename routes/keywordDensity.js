const express = require('express');
const router = express.Router();
const axios = require('axios');
const cheerio = require('cheerio');

function calculateDensity(text) {
  const words = text
    .replace(/[^\w\s]/gi, '') // Remove punctuation
    .toLowerCase()
    .split(/\s+/);

  const totalWords = words.length;
  const frequency = {};

  words.forEach(word => {
    if (word.length > 3) { // Ignore very short words
      frequency[word] = (frequency[word] || 0) + 1;
    }
  });

  const density = Object.entries(frequency)
    .map(([word, count]) => ({
      word,
      count,
      density: ((count / totalWords) * 100).toFixed(2) + '%'
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 20); // Top 20 keywords

  return { totalWords, density };
}

router.post('/keyword-density', async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: 'URL is required' });

  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const text = $('body').text();

    const result = calculateDensity(text);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch or parse URL content.' });
  }
});

module.exports = router;
