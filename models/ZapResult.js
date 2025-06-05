// models/ZapResult.js

const mongoose = require('mongoose');

const zapResultSchema = new mongoose.Schema({
  url: String,
  alerts: [String],
  riskLevel: String,
  timestamp: { type: Date, default: Date.now }
});

const ZapResult = mongoose.model('ZapResult', zapResultSchema);
module.exports = ZapResult;
