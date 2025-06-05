import express from 'express';
import { runWhoisScan } from '../controllers/whoisController.js';

const router = express.Router();

router.post('/whois-scan', runWhoisScan);

export default router;
