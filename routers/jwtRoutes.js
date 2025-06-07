import express from "express";
import { saveToken, getAllTokens } from "../controllers/jwtController.js";

const router = express.Router();

router.post("/token", saveToken);
router.get("/tokens", getAllTokens);

export default router;
