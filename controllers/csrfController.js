import CsrfReport from '../models/CsrfReport.js';
import { parse } from 'node-html-parser';

export const analyzeCSRF = async (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ error: 'Code is required' });
  }

  const issues = [];
  let vulnerable = false;

  try {
    // Parse HTML from code
    const root = parse(code);

    // Check all forms for CSRF token input
    const forms = root.querySelectorAll('form');
    let formWithoutToken = false;
    for (const form of forms) {
      const hasCsrfToken = form.querySelector('input[name="_csrf"], input[name="csrf_token"], input[name="_token"]');
      if (!hasCsrfToken) {
        formWithoutToken = true;
        break;
      }
    }

    if (forms.length > 0 && formWithoutToken) {
      issues.push('Form element detected without CSRF token.');
      vulnerable = true;
    }

    // Check fetch or XMLHttpRequest usage
    const codeLower = code.toLowerCase();

    // Basic fetch POST without credentials check
    if (codeLower.includes('fetch(')) {
      const fetchPostWithoutCredentials = /fetch\([^)]*method\s*:\s*['"]post['"][^)]*credentials\s*:\s*['"]?include['"]?/.test(codeLower) === false;
      if (fetchPostWithoutCredentials) {
        issues.push('Potential unsafe fetch POST without credentials included.');
        vulnerable = true;
      }
    }

    // Check XMLHttpRequest usage without withCredentials = true
    if (codeLower.includes('xmlhttprequest')) {
      if (!codeLower.includes('withcredentials=true')) {
        issues.push('Potential unsafe XMLHttpRequest POST without credentials included.');
        vulnerable = true;
      }
    }

    // Check cookies without SameSite attribute
    if (codeLower.includes('set-cookie') && !codeLower.includes('samesite')) {
      issues.push('Cookie usage without SameSite attribute detected.');
      vulnerable = true;
    }
  } catch (error) {
    return res.status(400).json({ error: 'Invalid HTML or code format' });
  }

  // Save report
  const report = new CsrfReport({ code, vulnerable, issues });
  await report.save();

  res.status(200).json({ vulnerable, issues });
};
