import express from 'express';
import { checkHttpsEnforcement } from '../controllers/https.controller.js';

const router = express.Router();

// This makes the full path: POST /api/http/https-enforcement
router.post('/https-enforcement', checkHttpsEnforcement);

export default router;
