import mongoose from "mongoose";

const speedReportSchema = new mongoose.Schema({
  url: { type: String, required: true },
  status: { type: String },
  loadTimeMs: { type: Number },
  sizeKb: { type: Number },
  createdAt: { type: Date, default: Date.now },
});

const SpeedReport = mongoose.model("SpeedReport", speedReportSchema);

export default SpeedReport;
