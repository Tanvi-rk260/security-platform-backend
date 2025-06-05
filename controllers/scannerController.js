// controllers/scannerController.js

export const runWafScan = async (req, res) => {
  try {
    const { domain } = req.body;
    const result = await wafScan(domain);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const runPortScan = async (req, res) => {
  try {
    const { domain } = req.body;
    const result = await portScan(domain);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const runPageSpeedTest = async (req, res) => {
  try {
    const { url } = req.body;
    const result = await pageSpeed(url);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
