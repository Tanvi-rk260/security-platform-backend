// routes/reconRouter.js

import express from 'express';
import {
  saveReconResult,
  getAllReconResults,
  getReconResultById
} from '../controllers/reconController.js';

const router = express.Router();

// POST /api/recon - Save a new recon result
router.post('/recon', async (req, res) => {
  try {
    const saved = await saveReconResult(req.body);
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/recon - Get all recon results
router.get('/recon', async (req, res) => {
  try {
    const results = await getAllReconResults();
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/recon/:id - Get recon result by ID
router.get('/recon/:id', async (req, res) => {
  try {
    const result = await getReconResultById(req.params.id);
    if (!result) {
      return res.status(404).json({ error: 'Result not found' });
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
