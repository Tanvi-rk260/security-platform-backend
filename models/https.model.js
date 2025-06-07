import mongoose from "mongoose";

const httpsCheckSchema = new mongoose.Schema({
  target: String,
  httpRedirectsToHttps: Boolean,
  hstsEnabled: Boolean,
  hstsMaxAge: Number,
  checkedAt: { type: Date, default: Date.now },

  // New timespan field (in milliseconds)
  timespan: { type: Number, default: 0 },
});

export default mongoose.model("HttpsCheck", httpsCheckSchema);
