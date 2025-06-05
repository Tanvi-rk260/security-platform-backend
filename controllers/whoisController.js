import * as whoiser from 'whoiser';

import WhoisResult from '../models/WhoisResult.js';

export const runWhoisScan = async (req, res) => {
  const { domain } = req.body;

  if (!domain) {
    return res.status(400).json({ error: 'Domain is required' });
  }

  try {
    const result = await whoiser(domain);

    await WhoisResult.create({ domain, result });

    res.json({ domain, result });
  } catch (error) {
    res.status(500).json({
      error: 'WHOIS scan failed',
      details: error.message,
    });
  }
};
