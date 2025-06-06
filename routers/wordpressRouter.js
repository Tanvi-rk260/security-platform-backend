import express from 'express';

import { scanWordPress } from '../controller/wordpressController.js';
const router = express.Router();

router.post('/wordpress-scan', scanWordPress);


export default router;
