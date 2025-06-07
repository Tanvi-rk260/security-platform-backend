import RegexScan from '../models/regexModel.js';

export const analyzeRegex = async (req, res) => {
  const { code } = req.body;
  if (!code) {
    return res.status(400).json({ error: 'Code is required' });
  }

  const issues = [];
  const fixes = [];
  const lines = code.split('\n');
  const regexPattern = /new RegExp\(([^)]+)\)/;

  lines.forEach((line, i) => {
    const match = line.match(regexPattern);
    if (match) {
      const arg = match[1];
      const isUnsafe = !/\.replace/.test(arg);

      if (isUnsafe) {
        issues.push({
          line: i + 1,
          pattern: line.trim(),
          risk: 'Unescaped user input in RegExp constructor'
        });

        const escapedCode = `${arg}.replace(/[.*+?^${"{}"}()|[\\]\\\\]/g, '\\\\$&')`;
const safeLine = line.replace(arg, escapedCode);

        fixes.push(safeLine);
      }
    }
  });

  await RegexScan.create({ code, issues, fixes });
  return res.json({ issues, fixes });
};
