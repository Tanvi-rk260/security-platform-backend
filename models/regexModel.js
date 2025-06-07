import mongoose from 'mongoose';

const regexScanSchema = new mongoose.Schema({
  code: String,
  issues: [Object],
  fixes: [String],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('RegexScan', regexScanSchema);
