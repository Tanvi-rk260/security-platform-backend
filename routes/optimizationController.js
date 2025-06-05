const { exec } = require('child_process');
const path = require('path');

exports.analyzeWebsite = async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  const filePath = path.join(__dirname, '..', 'lighthouse-reports', 'report.html');
  const command = `lighthouse ${url} --output html --output-path="${filePath}" --chrome-flags="--headless"`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Lighthouse error: ${error.message}`);
      return res.status(500).json({ error: 'Analysis failed' });
    }

    res.json({
      message: 'Website optimization analysis complete!',
      reportPath: '/lighthouse-reports/report.html', // You can serve this file
    });
  });
};
