// models/WafResult.js
import mongoose from 'mongoose';

const wafResultSchema = new mongoose.Schema({
  url: String,
  wafDetected: Boolean,
  wafName: String,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const WafResult = mongoose.model('WafResult', wafResultSchema);
export default WafResult;
