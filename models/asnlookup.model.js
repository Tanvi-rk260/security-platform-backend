import mongoose from 'mongoose';

const ASNLookupSchema = new mongoose.Schema({
  ip: { type: String, required: true },
  asn: String,
  name: String,
  country_code: String,
  description: String,
  registry: String,
  createdAt: { type: Date, default: Date.now },

  // New field added
  timespan: { type: Number, default: 0 }, // timespan in milliseconds (ms)
});

const ASNLookup = mongoose.model('ASNLookup', ASNLookupSchema);

export default ASNLookup;
