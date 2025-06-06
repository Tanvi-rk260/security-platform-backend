import mongoose from 'mongoose';

const WordPressScanSchema = new mongoose.Schema({
  url: String,
  version: String,
  versionSecure: Boolean,
  theme: {
    name: String,
    version: String,
    secure: Boolean,
  },
  vulnerablePlugins: Number,
  outdatedPlugins: Number,
  securityScore: Number,
  issues: [String],
  scannedAt: {
    type: Date,
    default: Date.now,
  },
});

export const WordPressScan = mongoose.model('WordPressScan', WordPressScanSchema);
