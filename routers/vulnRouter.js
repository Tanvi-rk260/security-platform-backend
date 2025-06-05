// routes/vulnRouter.js

import express from 'express';
import {
  saveVulnResult,
  getAllVulnResults,
  getVulnResultById,
} from '../controllers/vulnController.js';

const router = express.Router();

// POST /api/tools/vuln - Save a result
router.post('/vuln', async (req, res) => {
  try {
    const saved = await saveVulnResult(req.body);
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/tools/vuln - Get all results
router.get('/vuln', async (req, res) => {
  try {
    const results = await getAllVulnResults();
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/tools/vuln/:id - Get a result by ID
router.get('/vuln/:id', async (req, res) => {
  try {
    const result = await getVulnResultById(req.params.id);
    if (!result) {
      return res.status(404).json({ error: 'Result not found' });
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
