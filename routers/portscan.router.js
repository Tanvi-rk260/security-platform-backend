import express from 'express';
import { runPortScanner } from '../controllers/portScannerController.js';

const router = express.Router();

// POST /api/portscanner/scan
router.post('/scan', runPortScanner);

export default router;
