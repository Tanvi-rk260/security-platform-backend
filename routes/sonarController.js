const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const SonarResult = require('../models/SonarResult');

exports.runSonarScanner = async (req, res) => {
  const { repoUrl } = req.body;

  if (!repoUrl) {
    return res.status(400).json({ error: 'Repository URL is required' });
  }

  const folderName = `repo_${Date.now()}`;
  const cloneCommand = `git clone ${repoUrl} ${folderName}`;

  exec(cloneCommand, (cloneErr, stdout, stderr) => {
    if (cloneErr) {
      console.error('Clone Error:', cloneErr.message);
      return res.status(500).json({ error: 'Failed to clone repository' });
    }

    // Dummy scanner - replace this with real sonar-scanner integration if needed
    const dummyResult = `Dummy Sonar scan complete for ${repoUrl}`;

    // Save to DB
    const scanResult = new SonarResult({
      repoUrl,
      result: dummyResult
    });

    scanResult.save()
      .then(() => {
        // Cleanup
        fs.rmSync(path.join(__dirname, `../${folderName}`), { recursive: true, force: true });

        res.json({
          message: 'Sonar scan (dummy) completed and result saved.',
          result: dummyResult
        });
      })
      .catch((dbErr) => {
        console.error("DB Error:", dbErr);
        res.status(500).json({ error: 'Failed to save to database' });
      });
  });
};
