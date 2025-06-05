// controllers/portScannerController.js

import portscanner from "portscanner";
import PortScanResult from "../models/PortScanResult.js";

export const runPortScanner = async (req, res) => {
  const { host } = req.body;

  if (!host) {
    return res.status(400).json({ error: "Host is required" });
  }

  try {
    const openPorts = [];

    for (let port = 20; port <= 100; port++) {
      const status = await portscanner.checkPortStatus(port, host);
      if (status === "open") {
        openPorts.push(port);
      }
    }

    const scanResult = await PortScanResult.create({
      host,
      openPorts,
      scannedAt: new Date(),
    });

    res.status(200).json({
      message: "Port Scan Successful",
      result: scanResult,
    });
  } catch (error) {
    console.error("Port Scan Error:", error.message);
    res.status(500).json({
      error: "Failed to scan ports",
      details: error.message,
    });
  }
};
