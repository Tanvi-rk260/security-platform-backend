import express from 'express';
import { runMochaTest } from '../controllers/mochaTest.controller.js';

const router = express.Router();

router.post('/mocha-test', runMochaTest);

export default router;
