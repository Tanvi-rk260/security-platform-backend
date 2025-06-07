// controllers/clickjacking.controller.js
import ClickjackingTest from '../models/clickjacking.model.js';
import fetch from 'node-fetch';

export const testClickjacking = async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: 'URL is required' });

  try {
    // Fetch the headers from the target URL
    const response = await fetch(url, { method: 'HEAD' });
    const headers = response.headers;

    // Check common clickjacking protection headers
    const xFrameOptions = headers.get('x-frame-options');
    const contentSecurityPolicy = headers.get('content-security-policy');

    const protectedBy = [];

    if (xFrameOptions) protectedBy.push(`X-Frame-Options: ${xFrameOptions}`);
    if (contentSecurityPolicy && contentSecurityPolicy.includes('frame-ancestors')) {
      protectedBy.push(`Content-Security-Policy: ${contentSecurityPolicy}`);
    }

    const isProtected = protectedBy.length > 0;

    // Save result in DB
    const testRecord = new ClickjackingTest({
      url,
      isProtected,
      protectedBy,
    });

    await testRecord.save();

    res.json({
      url,
      isProtected,
      protectedBy,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch URL or analyze headers' });
  }
};
