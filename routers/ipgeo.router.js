import express from 'express';
import { lookupIPGeo } from '../controllers/ipgeo.controller.js';

const router = express.Router();

// POST /api/ipgeo/lookup
router.post('/lookup', lookupIPGeo);

export default router;
