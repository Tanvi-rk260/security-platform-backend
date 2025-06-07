import SessionFixationReport from '../models/sessionFixationReport.js';

export const analyzeSessionFixation = async (req, res) => {
  try {
    const { code } = req.body;

    if (!code || code.trim() === '') {
      return res.status(400).json({ error: 'Code is required for analysis' });
    }

    // Dummy analysis logic for session fixation vulnerability
    // In real scenario, use AST parsing or regex or static code analysis tools

    const report = [];

    // Example checks (very simplified)
    if (code.includes('req.sessionID') || code.includes('req.session.id')) {
      report.push({
        severity: 'High',
        message: 'Possible session fixation vulnerability detected: Session ID may be reused or not regenerated.',
        suggestion: 'Regenerate session ID on login using req.session.regenerate().',
      });
    }

    if (!code.includes('req.session.regenerate')) {
      report.push({
        severity: 'Medium',
        message: 'No session regeneration found after authentication.',
        suggestion: 'Always regenerate session ID after login to prevent fixation.',
      });
    }

    if (report.length === 0) {
      report.push({
        severity: 'Low',
        message: 'No obvious session fixation issues detected. Manual review recommended.',
        suggestion: 'Ensure session IDs are regenerated upon login and session management is secure.',
      });
    }

    // Save report to database
    const savedReport = await SessionFixationReport.create({ code, report });

    return res.json({ report: savedReport.report });
  } catch (error) {
    console.error('Error analyzing session fixation:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
