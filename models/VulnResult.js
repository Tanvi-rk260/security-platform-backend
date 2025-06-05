// models/vulnResults.js

import mongoose from 'mongoose';

const vulnResultSchema = new mongoose.Schema({
  url: String,
  result: String,
  scannedAt: {
    type: Date,
    default: Date.now,
  }
});

const VulnResult = mongoose.model('VulnResult', vulnResultSchema);

export default VulnResult;
