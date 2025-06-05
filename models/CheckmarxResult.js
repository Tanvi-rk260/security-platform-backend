// models/CheckmarxResult.js

const mongoose = require('mongoose');

const checkmarxResultSchema = new mongoose.Schema({
  url: String,
  issuesFound: Number,
  details: String,
  timestamp: { type: Date, default: Date.now }
});

const CheckmarxResult = mongoose.model('CheckmarxResult', checkmarxResultSchema);
module.exports = CheckmarxResult;
