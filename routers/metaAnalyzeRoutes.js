import express from 'express';
import { analyzeMetaTags } from '../controllers/metaAnalyzeController.js';

const router = express.Router();

router.post('/meta-analyze', analyzeMetaTags);

export default router;
