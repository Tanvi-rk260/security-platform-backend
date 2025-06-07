import express from 'express';
import { inspectToken } from '../controllers/oauthTokenController.js';

const router = express.Router();

router.post('/oauthTokenInspector', inspectToken);

export default router;
