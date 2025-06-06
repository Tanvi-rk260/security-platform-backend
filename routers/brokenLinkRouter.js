import express from 'express';

import { streamBrokenLinks } from '../controller/brokenLinkController.js';
const router = express.Router();

router.get('/brokenlink-stream', streamBrokenLinks);

export default router;
