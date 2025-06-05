import express from "express";
import userRoutes from "./routers/user.router.js"; // Adjust the path if needed
import portScannerRoutes from "./routers/portscan.router.js";
import reconRouter from "./routers/reconRouter.js";
import sonarRouter from "./routers/sonarRouter.js";
import scannerRoutes from "./routers/scanner.router.js";
import whoisRoutes from "./routers/whoiseresult.router.js";
import zapRoutes from "./routers/zap.router.js";
import wafRoutes from "./routers/waf.router.js";
import connectDB from "./utils/db.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());
connectDB();

app.use("/api/users", userRoutes);
app.use("/api/portscanner", portScannerRoutes);
app.use("/api/scanner", scannerRoutes);
app.use("/api/whois", whoisRoutes);
app.use("/api/zapscan", zapRoutes);
app.use("/api/waf-scan", wafRoutes);
app.use("/api", reconRouter);
app.use("/api/sonar", sonarRouter);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
