
import express from "express";
import dnsRoutes from './routers/dnsRouter.js';
import wafRoutes from './routers/wafRouter.js';
import scanRoutes from './routers/scanRouter.js';
import sharePointRoutes from './routers/sharePointRouter.js';
import wordpressRoutes from './routers/wordpressRouter.js';
import sitemapRoutes from './routers/sitemapRouter.js';
import brokenlinkRoutes from './routers/brokenLinkRouter.js';
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./utils/db.js";
import keywordRoutes from "./routers/keyword.router.js";
import speedRoutes from "./routers/speed.router.js";
import metaAnalyzeRoutes from "./routers/metaAnalyzeRoutes.js";
import oauthTokenRoutes from "./routers/oauth.router.js";
import jwtRoutes from "./routers/jwtRoutes.js";
import jwtsignatureRoutes from "./routers/jwtsignature.routes.js";
import IPGeoRouter from "./routers/ipgeo.router.js";
import clickjackingRouter from "./routers/clickjacking.router.js";
import httpsRouter from "./routers/https.router.js";
import portScannerRouter from "./routers/portScanner.router.js";
import asnLookupRouter from "./routers/asnlookup.router.js";
import mochaRoutes from './routers/mochaTest.routes.js';
import reverseDNSRoutes from './routers/reverseDNSRoutes.js';
import csrfRoutes from './routers/csrfRoutes.js';
import regexRoutes from './routers/regexRoutes.js';
import sessionFixationRoutes from './routers/sessionFixationRoutes.js';
// Load environment variables from .env file
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Replace your current cors() line with:
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://127.0.0.1:3000",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

app.use("/api/keyword", keywordRoutes);
app.use("/api/speed", speedRoutes);
app.use("/api/meta", metaAnalyzeRoutes);
app.use("/api/auth", oauthTokenRoutes);
app.use("/api/jwt", jwtRoutes);
app.use("/api/jwtsign", jwtsignatureRoutes);
app.use("/api/ipgeo", IPGeoRouter);
app.use("/api/clickjacking", clickjackingRouter);
app.use("/api/http", httpsRouter);
app.use("/api/port", portScannerRouter);
app.use("/api/asnLookup", asnLookupRouter);
app.use('/api/mocha', mochaRoutes);
app.use('/api/reverse', reverseDNSRoutes);
app.use('/api/csrf', csrfRoutes);
app.use('/api/regex', regexRoutes);
app.use('/api/session', sessionFixationRoutes);
app.use('/api/dns', dnsRoutes);
app.use('/api/waf', wafRoutes);
app.use('/api/scan',scanRoutes);
app.use('/api/sharepoint', sharePointRoutes);
app.use('/api/wordpress', wordpressRoutes);
app.use('/api/sitemap', sitemapRoutes);
app.use('/api/brokenlink', brokenlinkRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
});
