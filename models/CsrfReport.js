import mongoose from 'mongoose';

const csrfReportSchema = new mongoose.Schema({
  code: { type: String, required: true },
  vulnerable: { type: Boolean, required: true },
  issues: [String],
  createdAt: { type: Date, default: Date.now },
});

const CsrfReport = mongoose.model('CsrfReport', csrfReportSchema);

export default CsrfReport;
