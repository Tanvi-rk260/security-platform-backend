import SpeedReport from "../models/speedreport.model.js";

// Example: Simulate speed test and save result
export const testSpeed = async (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ error: "URL is required" });
    }

    // Here you would run the actual speed test logic (call an external API or internal logic)
    // For now, simulate a test with dummy data:
    const dummyResult = {
      url,
      status: "OK",
      loadTimeMs: Math.floor(Math.random() * 2000), // random load time in ms
      sizeKb: Math.floor(Math.random() * 5000), // random size in KB
    };

    // Save to DB
    const report = new SpeedReport(dummyResult);
    await report.save();

    res.json(report);
  } catch (error) {
    console.error("Speed test error:", error);
    res.status(500).json({ error: "Server error" });
  }
};
