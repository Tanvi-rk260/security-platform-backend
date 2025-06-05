import express from "express";
import { analyzeKeywords } from "../controllers/keywordcontroller.js";

const router = express.Router();

router.post("/analyze", analyzeKeywords);

export default router;
