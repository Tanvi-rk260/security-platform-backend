import express from 'express';
import { analyzeSessionFixation } from '../controllers/sessionFixationController.js';

const router = express.Router();

router.post('/sessionFixationChecker', analyzeSessionFixation);

export default router;
