import dns from 'dns/promises';
import ReverseDNS from '../models/ReverseDNS.js';

export const reverseDNSLookup = async (req, res) => {
  const { ip } = req.body;

  if (!ip) return res.status(400).json({ error: 'IP address is required' });

  try {
    // Lookup PTR records
    const domains = await dns.reverse(ip);

    // Save or update in DB
    const doc = await ReverseDNS.findOneAndUpdate(
      { ip },
      { domains, lookedUpAt: new Date() },
      { upsert: true, new: true }
    );

    res.json({ domains: doc.domains });
  } catch (error) {
    // If no PTR record or invalid IP, dns.reverse throws
    res.status(400).json({ error: error.message || 'Reverse DNS lookup failed' });
  }
};
