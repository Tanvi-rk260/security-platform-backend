// models/WafScan.js
import mongoose from 'mongoose';

const matchedHeaderSchema = new mongoose.Schema({
  header: { type: String, required: true },
  value: { type: String, required: true },
});

const wafScanSchema = new mongoose.Schema({
  url: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  statusCode: { type: Number, required: true },
  detected: { type: Boolean, required: true },
  firewallName: { type: String, required: true },
  matchedHeaders: [matchedHeaderSchema],
  securityHeadersDetected: [String],
  serverHeader: { type: String },
  protectionLevel: { type: String, enum: ['None', 'Moderate', 'High'], required: true },
  message: { type: String },
}, { timestamps: true });

const WafScan = mongoose.models.WafScan || mongoose.model('WafScan', wafScanSchema);
export default WafScan;
