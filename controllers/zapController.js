import ZapResult from "../models/ZapResult.js";

export const runZapScan = async (req, res) => {
  const { url } = req.body;

  try {
    // Replace this dummy data with real ZAP API scanning logic if available
    const alerts = ["SQL Injection", "XSS Vulnerability"];
    const riskLevel = "High";

    const result = new ZapResult({
      url,
      alerts,
      riskLevel,
    });

    await result.save();

    res.status(200).json({
      message: "ZAP Scan completed",
      result,
    });
  } catch (error) {
    console.error("❌ ZAP Scan error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
