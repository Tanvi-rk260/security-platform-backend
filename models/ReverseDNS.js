import mongoose from 'mongoose';

const ReverseDNSchema = new mongoose.Schema({
  ip: { type: String, required: true, unique: true },
  domains: [String], // PTR records/domains found
  lookedUpAt: { type: Date, default: Date.now },
});

const ReverseDNS = mongoose.models.ReverseDNS || mongoose.model('ReverseDNS', ReverseDNSchema);

export default ReverseDNS;
