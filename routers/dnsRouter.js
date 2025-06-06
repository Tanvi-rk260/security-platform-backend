// routes/dnsRoutes.js
import express from 'express';
import { resolveDNS } from '../controller/dnsController.js';

const router = express.Router();

router.post('/resolve', resolveDNS);

export default router;
