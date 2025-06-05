const { exec } = require('child_process');
const VulnResult = require('../models/VulnResult'); // ✅ Add this

exports.scanVulnerabilities = (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  const command = `nmap -T4 -A ${url}`;

  exec(command, async (error, stdout, stderr) => {
    if (error) {
      console.error(`Nmap Error: ${error.message}`);
      return res.status(500).json({ error: 'Scan failed', details: error.message });
    }

    try {
      const newScan = new VulnResult({
        url,
        result: stdout
      });

      await newScan.save(); // ✅ Save to MongoDB

      res.json({
        message: 'Vulnerability scan completed and saved to database',
        result: stdout
      });
    } catch (dbErr) {
      console.error("DB Save Error:", dbErr);
      res.status(500).json({ error: 'Failed to save to database' });
    }
  });
};
