import express from 'express';
import { saveResult, getAllResults, getResultById } from '../controllers/checkmarxController.js';

const router = express.Router();

// POST /api/checkmarx - Save a new Checkmarx result
router.post('/checkmarx', async (req, res) => {
  try {
    const saved = await saveResult(req.body);
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/checkmarx - Get all Checkmarx results
router.get('/checkmarx', async (req, res) => {
  try {
    const results = await getAllResults();
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/checkmarx/:id - Get a specific Checkmarx result by ID
router.get('/checkmarx/:id', async (req, res) => {
  try {
    const result = await getResultById(req.params.id);
    if (!result) {
      return res.status(404).json({ error: 'Result not found' });
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
