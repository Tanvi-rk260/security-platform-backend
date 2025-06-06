import mongoose from 'mongoose';

const SharePointScanSchema = new mongoose.Schema({
  url: String,
  version: String,
  versionSupported: Boolean,
  authenticationType: String,
  authenticationSecure: Boolean,
  externalSharing: String,
  permissionIssues: Number,
  securityPatches: String,
  securityScore: Number,
  vulnerabilities: [String],
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const SharePointScan = mongoose.model('SharePointScan', SharePointScanSchema);
export default SharePointScan;
