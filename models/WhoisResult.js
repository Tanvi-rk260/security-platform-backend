// models/WhoisResult.js

import mongoose from 'mongoose';

const WhoisResultSchema = new mongoose.Schema(
  {
    domain: String,
    result: Object,
  },
  { timestamps: true }
);

export default mongoose.model('WhoisResult', WhoisResultSchema);
