import mongoose from "mongoose";

const keywordSchema = new mongoose.Schema({
  url: { type: String, required: true },
  totalWords: Number,
  singleWords: [
    {
      phrase: String,
      count: Number,
      percentage: String,
    },
  ],
  phrases: [
    {
      phrase: String,
      count: Number,
      percentage: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },

  // New field: timespan in milliseconds
  timespan: { type: Number, default: 0 },
});

const Keyword = mongoose.model("Keyword", keywordSchema);

export default Keyword;
