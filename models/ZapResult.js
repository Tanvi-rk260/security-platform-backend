// models/ZapResult.js

import mongoose from "mongoose";

const zapResultSchema = new mongoose.Schema(
  {
    url: String,
    alerts: [String],
    riskLevel: String,
  },
  { timestamps: true }
);

const ZapResult = mongoose.model("ZapResult", zapResultSchema);

export default ZapResult;
