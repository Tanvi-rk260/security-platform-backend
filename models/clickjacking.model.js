// models/clickjacking.model.js
import mongoose from 'mongoose';

const ClickjackingSchema = new mongoose.Schema({
  url: { type: String, required: true },
  isProtected: { type: Boolean, required: true },
  protectedBy: { type: [String], default: [] }, // headers or methods detected
  testedAt: { type: Date, default: Date.now },
});

const ClickjackingTest = mongoose.model('ClickjackingTest', ClickjackingSchema);

export default ClickjackingTest;
