import express from 'express';
import { runZapScan } from '../controllers/zapController.js';

const router = express.Router();

router.post('/', runZapScan);

export default router;
