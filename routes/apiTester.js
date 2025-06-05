const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/api-test', async (req, res) => {
  const { url, method = 'GET', headers = {}, body = {} } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    const start = Date.now();
    const response = await axios({
      method: method.toLowerCase(),
      url,
      headers,
      data: body,
      timeout: 10000
    });
    const duration = Date.now() - start;

    res.json({
      status: response.status,
      duration: `${duration} ms`,
      headers: response.headers,
      data: typeof response.data === 'object' ? response.data : String(response.data).slice(0, 1000)
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
