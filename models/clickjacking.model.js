import mongoose from 'mongoose';

const ClickjackingSchema = new mongoose.Schema({
  url: { type: String, required: true },
  isProtected: { type: Boolean, required: true },
  protectedBy: { type: [String], default: [] }, // headers or methods detected
  testedAt: { type: Date, default: Date.now },

  // New field: timespan in milliseconds
  timespan: { type: Number, default: 0 },
});

const ClickjackingTest = mongoose.model('ClickjackingTest', ClickjackingSchema);

export default ClickjackingTest;
