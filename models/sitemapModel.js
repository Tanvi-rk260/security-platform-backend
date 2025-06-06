// models/sitemapModel.js
import mongoose from 'mongoose';

const sitemapSchema = new mongoose.Schema({
  domain: { type: String, required: true },
  depth: { type: Number, required: true },
  urls: [String],
  xml: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export const Sitemap = mongoose.models.Sitemap || mongoose.model('Sitemap', sitemapSchema);
