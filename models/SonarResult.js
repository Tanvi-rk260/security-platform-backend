// models/SonarResult.js

const mongoose = require("mongoose"); // ✅ Important

const sonarResultSchema = new mongoose.Schema({
  url: String,
  issuesFound: Number,
  details: String,
  timestamp: { type: Date, default: Date.now }
});

const SonarResult = mongoose.model("SonarResult", sonarResultSchema);
module.exports = SonarResult;
