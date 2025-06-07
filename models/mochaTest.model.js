import mongoose from 'mongoose';

const mochaTestSchema = new mongoose.Schema({
  endpoint: { type: String, required: true },
  method: { type: String, required: true },
  headers: { type: Object, default: {} },
  body: { type: Object, default: {} },
  testDescription: { type: String },
  passed: { type: Boolean },
  assertions: [{ message: String, passed: Boolean, error: String }],
  response: { type: Object },
  duration: { type: Number },
  testedAt: { type: Date, default: Date.now }
});

export default mongoose.model('MochaTest', mochaTestSchema);
