import express from 'express';
import { analyzeRegex } from '../controllers/regexController.js';

const router = express.Router();
router.post('/regexInjectionDetector', analyzeRegex);

export default router;
