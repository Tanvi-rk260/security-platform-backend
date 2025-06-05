const mongoose = require("mongoose");

const PortScanResultSchema = new mongoose.Schema({
  host: { type: String, required: true },
  openPorts: [Number],
  scannedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("PortScanResult", PortScanResultSchema);
