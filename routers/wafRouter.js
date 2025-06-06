// routers/wafRouter.js
import express from 'express';
import { detectWAF } from '../controller/wafController.js'; // Corrected path
const router = express.Router();

router.post('/waf-scan', detectWAF);

export default router;