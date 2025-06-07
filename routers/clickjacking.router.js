// routes/clickjacking.router.js
import express from "express";
import { testClickjacking } from "../controllers/clickjacking.controller.js";

const router = express.Router();

router.post("/jacking", testClickjacking);

export default router;
