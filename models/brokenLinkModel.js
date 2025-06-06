import mongoose from 'mongoose';

// First define linkSchema
const linkSchema = new mongoose.Schema({
  url: String,
  status: String,
  ok: Boolean,
});

// Then define the main BrokenLinkScan schema using it
const brokenLinkScanSchema = new mongoose.Schema({
  scannedUrl: { type: String, required: true },
  scannedAt: { type: Date, default: Date.now },
  links: [linkSchema] // Now this works
});

// Export the model
export const BrokenLinkScan = mongoose.model('BrokenLinkScan', brokenLinkScanSchema);
