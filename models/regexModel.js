import mongoose from 'mongoose';

const regexScanSchema = new mongoose.Schema({
  code: String,
  issues: [Object],
  fixes: [String],
  createdAt: {
    type: Date,
    default: Date.now
  },

  // New timespan field (milliseconds)
  timespan: { type: Number, default: 0 },
});

export default mongoose.model('RegexScan', regexScanSchema);
