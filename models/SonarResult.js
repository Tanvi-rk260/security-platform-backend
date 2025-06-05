// models/SonarResult.js

import mongoose from 'mongoose';

const sonarResultSchema = new mongoose.Schema({
  url: String,
  issuesFound: Number,
  details: String,
  timestamp: { type: Date, default: Date.now }
});

const SonarResult = mongoose.model('SonarResult', sonarResultSchema);

export default SonarResult;
