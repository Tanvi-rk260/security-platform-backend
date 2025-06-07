import mongoose from 'mongoose';

const SessionFixationReportSchema = new mongoose.Schema({
  code: { type: String, required: true },
  report: [
    {
      severity: { type: String, enum: ['Low', 'Medium', 'High'], required: true },
      message: { type: String, required: true },
      suggestion: { type: String, required: true },
    },
  ],
  createdAt: { type: Date, default: Date.now },

  // New timespan field in milliseconds
  timespan: { type: Number, default: 0 },
});

const SessionFixationReport = mongoose.model('SessionFixationReport', SessionFixationReportSchema);

export default SessionFixationReport;
