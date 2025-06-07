import mongoose from 'mongoose';

const ASNLookupSchema = new mongoose.Schema({
  ip: { type: String, required: true },
  asn: String,
  name: String,
  country_code: String,
  description: String,
  registry: String,
  createdAt: { type: Date, default: Date.now },
});

const ASNLookup = mongoose.model('ASNLookup', ASNLookupSchema);

export default ASNLookup;
