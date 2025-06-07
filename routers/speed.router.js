import express from "express";
import { testSpeed } from "../controllers/speedcontroller.js";

const router = express.Router();

router.post("/speedtest", testSpeed);

export default router;
