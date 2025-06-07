import express from 'express';
import { lookupASN } from '../controllers/asnlookup.controller.js';

const router = express.Router();

// Changed route path to /lookupasn
router.post('/lookupasn', lookupASN);

export default router;
