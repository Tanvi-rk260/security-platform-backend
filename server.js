import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import { connectDB } from './utils/db.js';

import dnsRoutes from './routers/dnsRouter.js';
import wafRoutes from './routers/wafRouter.js';
import scanRoutes from './routers/scanRouter.js';
import sharePointRoutes from './routers/sharePointRouter.js';
import wordpressRoutes from './routers/wordpressRouter.js';
import sitemapRoutes from './routers/sitemapRouter.js';
import brokenlinkRoutes from './routers/brokenLinkRouter.js';


console.log("MONGODB_URI from env:", process.env.MONGODB_URI);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.use('/api/dns', dnsRoutes);
app.use('/api/waf', wafRoutes);
app.use('/api/scan',scanRoutes);
app.use('/api/sharepoint', sharePointRoutes);
app.use('/api/wordpress', wordpressRoutes);
app.use('/api/sitemap', sitemapRoutes);
app.use('/api/brokenlink', brokenlinkRoutes);
async function startServer() {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();