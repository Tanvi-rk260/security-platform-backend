// models/ReconResult.js

const mongoose = require('mongoose');

const reconResultSchema = new mongoose.Schema({
  url: String,
  ipAddress: String,
  dnsRecords: [String],
  timestamp: { type: Date, default: Date.now }
});

const ReconResult = mongoose.model('ReconResult', reconResultSchema);
module.exports = ReconResult;
