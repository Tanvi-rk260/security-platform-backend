const mongoose = require('mongoose');

const vulnResultSchema = new mongoose.Schema({
  url: String,
  result: String,
  scannedAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('VulnResult', vulnResultSchema);
