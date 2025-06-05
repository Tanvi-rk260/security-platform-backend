// routes/sonarRouter.js

import express from "express";
import {
  saveSonarResult,
  getAllSonarResults,
  getSonarResultById,
} from "../controllers/sonarController.js";

const router = express.Router();

// @route   POST /api/sonar
// @desc    Save a new sonar result
router.post("/", saveSonarResult);

// @route   GET /api/sonar
// @desc    Get all sonar results
router.get("/", getAllSonarResults);

// @route   GET /api/sonar/:id
// @desc    Get sonar result by ID
router.get("/:id", getSonarResultById);

export default router;
