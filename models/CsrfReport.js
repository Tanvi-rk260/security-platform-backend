import mongoose from 'mongoose';

const csrfReportSchema = new mongoose.Schema({
  code: { type: String, required: true },
  vulnerable: { type: Boolean, required: true },
  issues: [String],
  createdAt: { type: Date, default: Date.now },

  // New timespan field in milliseconds
  timespan: { type: Number, default: 0 },
});

const CsrfReport = mongoose.model('CsrfReport', csrfReportSchema);

export default CsrfReport;
