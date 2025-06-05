const mongoose = require('mongoose');

const wafResultSchema = new mongoose.Schema({
  url: String,
  wafDetected: Boolean,
  wafName: String,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('WafResult', wafResultSchema);
