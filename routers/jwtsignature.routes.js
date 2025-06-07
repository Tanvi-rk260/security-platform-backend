import express from "express";
import { validateJWT } from "../controllers/jwtsignature.js";

const router = express.Router();

// POST /api/jwtsign/jwt-signature
router.post("/jwt-signature", validateJWT);

export default router;