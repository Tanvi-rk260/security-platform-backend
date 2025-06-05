/*const axios = require("axios");
const WafResult = require('../models/WafResult');
// path adjust as per your structure

const runWafScanner = async (req, res) => {
  const { url } = req.body;

  try {
    const response = await axios.get(`https://api.wafw00f.org/scan?url=${url}`);
    const result = response.data;

    await WafResult.create({ url, result });

    res.status(200).json({
      success: true,
      message: "WAF Scan Completed",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "WAF Scan Failed",
      error: error.message,
    });
  }
};

module.exports = { runWafScanner };*/
