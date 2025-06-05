// routes/recon.js

const express = require('express');
const router = express.Router();
const dns = require('dns');
const ReconResult = require('../models/ReconResult');

router.post('/', async (req, res) => {
  const { url } = req.body;

  try {
    // Get IP address
    dns.lookup(url, async (err, address) => {
      if (err) {
        console.error("❌ DNS Lookup failed:", err);
        return res.status(500).json({ error: 'DNS Lookup failed' });
      }

      // Get DNS records
      dns.resolveAny(url, async (err, records) => {
        const dnsRecords = records ? records.map(r => JSON.stringify(r)) : [];

        const newResult = new ReconResult({
          url,
          ipAddress: address,
          dnsRecords
        });

        await newResult.save();

        res.status(200).json({
          message: 'Recon completed',
          result: newResult
        });
      });
    });

  } catch (error) {
    console.error("❌ Recon error:", error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
