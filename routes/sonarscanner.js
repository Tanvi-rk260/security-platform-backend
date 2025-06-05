const express = require('express');
const router = express.Router();

router.post('/sonar-scan', async (req, res) => {
  const { repoUrl } = req.body;

  if (!repoUrl) {
    return res.status(400).json({ error: 'Repository URL is required' });
  }

  try {
    // Simulate scanning delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Mocked SonarQube scan result
    const results = {
      status: 'Scan Complete',
      scanned_repository: repoUrl,
      metrics: {
        bugs: 3,
        vulnerabilities: 2,
        code_smells: 7,
        duplicated_lines_density: '4.2%',
        coverage: '85.6%'
      },
      issues: [
        {
          type: 'Bug',
          severity: 'Major',
          message: 'Null pointer exception possible',
          file: 'src/app.js',
          line: 58
        },
        {
          type: 'Vulnerability',
          severity: 'Critical',
          message: 'Hardcoded password found',
          file: 'config/secrets.js',
          line: 10
        },
        {
          type: 'Code Smell',
          severity: 'Minor',
          message: 'Function is too complex',
          file: 'utils/helper.js',
          line: 34
        }
      ]
    };

    res.json(results);
  } catch (err) {
    res.status(500).json({ error: 'Scan failed', details: err.message });
  }
});

module.exports = router;
