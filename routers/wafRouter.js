// routes/wafRouter.js

import express from 'express';
import { saveWafResult, getAllWafResults, getWafResultById } from '../controllers/wafController.js';

const router = express.Router();

// POST /api/wafscanner/waf - Save a WAF result
router.post('/waf', async (req, res) => {
  try {
    const saved = await saveWafResult(req.body);
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/wafscanner/waf - Get all WAF results
router.get('/waf', async (req, res) => {
  try {
    const results = await getAllWafResults();
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/wafscanner/waf/:id - Get a specific WAF result by ID
router.get('/waf/:id', async (req, res) => {
  try {
    const result = await getWafResultById(req.params.id);
    if (!result) {
      return res.status(404).json({ error: 'Result not found' });
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
