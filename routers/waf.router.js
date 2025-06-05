// routes/waf.routes.js
import express from "express";
import { runWafScanner } from "../controllers/wafcontroller.js";

const router = express.Router();

router.post("/", runWafScanner);

export default router;
