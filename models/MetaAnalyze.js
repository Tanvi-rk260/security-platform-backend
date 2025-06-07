import mongoose from 'mongoose';

const metaAnalyzeSchema = new mongoose.Schema({
  url: { type: String, required: true },
  metaTags: [
    {
      name: String,
      content: String,
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

const MetaAnalyze = mongoose.model('MetaAnalyze', metaAnalyzeSchema);

export default MetaAnalyze;
