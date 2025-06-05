// routes/scannerRoutes.js

import express from 'express';
import { runWafScan, runPortScan, runPageSpeedTest } from '../controllers/scannerController.js';

const router = express.Router();

router.post('/waf-scan', runWafScan);
router.post('/port-scan', runPortScan);
router.post('/page-speed', runPageSpeedTest);

export default router;
