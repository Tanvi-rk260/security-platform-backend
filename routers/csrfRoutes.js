import express from 'express';
import { analyzeCSRF } from '../controllers/csrfController.js';

const router = express.Router();

router.post('/csrf-check', analyzeCSRF);

export default router;
