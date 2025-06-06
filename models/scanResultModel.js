import mongoose from 'mongoose';

const vulnerabilitySchema = new mongoose.Schema({
  type: String,
  severity: String,
  description: String,
  details: String,
  recommendation: String
}, { _id: false });

const scanResultSchema = new mongoose.Schema({
  domain: String,
  timestamp: String,
  ssl: mongoose.Schema.Types.Mixed,
  headers: mongoose.Schema.Types.Mixed,
  openPorts: mongoose.Schema.Types.Mixed,
  vulnerabilities: [vulnerabilitySchema],
  vulnerabilityCount: Number,
  riskLevel: String
});

export default mongoose.models.ScanResult || mongoose.model('ScanResult', scanResultSchema);