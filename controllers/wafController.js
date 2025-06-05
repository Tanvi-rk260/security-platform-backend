// controllers/wafController.js
import axios from 'axios';
import WafResult from '../models/WafResult.js';

export const runWafScanner = async (req, res) => {
  const { url } = req.body;

  try {
    const response = await axios.get(`https://api.wafw00f.org/scan?url=${url}`);
    const result = response.data;

    await WafResult.create({
      url,
      wafDetected: result.detected || false,
      wafName: result.waf || 'Unknown'
    });

    res.status(200).json({
      success: true,
      message: 'WAF Scan Completed',
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'WAF Scan Failed',
      error: error.message
    });
  }
};
