// models/ReconResult.js

import mongoose from 'mongoose';

const reconResultSchema = new mongoose.Schema({
  url: String,
  ipAddress: String,
  dnsRecords: [String],
  timestamp: { type: Date, default: Date.now }
});

const ReconResult = mongoose.model('ReconResult', reconResultSchema);
export default ReconResult;
