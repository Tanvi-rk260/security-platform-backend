// models/PortScanResult.js

import mongoose from "mongoose";

const portScanResultSchema = new mongoose.Schema({
  host: { type: String, required: true },
  openPorts: { type: [Number], default: [] },
  scannedAt: { type: Date, default: Date.now },
});

const PortScanResult = mongoose.model("PortScanResult", portScanResultSchema);

export default PortScanResult;
