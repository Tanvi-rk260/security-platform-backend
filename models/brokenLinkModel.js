import mongoose from 'mongoose';

// ===== ASN Lookup Schema =====
const ASNLookupSchema = new mongoose.Schema({
  ip: { type: String, required: true },
  asn: String,
  name: String,
  country_code: String,
  description: String,
  registry: String,
  createdAt: { type: Date, default: Date.now },
  timespan: { type: Number, default: 0 }, // in milliseconds
});

export const ASNLookup = mongoose.model('ASNLookup', ASNLookupSchema);

// ===== Broken Link Scan Schema =====
const linkSchema = new mongoose.Schema({
  url: String,
  status: String,
  ok: Boolean,
});

const brokenLinkScanSchema = new mongoose.Schema({
  scannedUrl: { type: String, required: true },
  scannedAt: { type: Date, default: Date.now },
  links: [linkSchema],
});

export const BrokenLinkScan = mongoose.model('BrokenLinkScan', brokenLinkScanSchema);
