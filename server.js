const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const connectDB = require('./config/db'); // ✅ Custom DB Connection
const WafResult = require('./models/WafResult');

const app = express();
const PORT = 5000;

// ✅ Connect MongoDB
connectDB(); // Only use this, no extra mongoose.connect()

// ✅ Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// ✅ All Routes
app.use('/api', require('./routes/checkmarxscanner'));
app.use('/api/recon', require('./routes/recon'));
app.use('/api', require('./routes/vulnerabilityScanner'));
app.use('/api', require('./routes/sharepointScanner'));
app.use('/api', require('./routes/brokenLinkChecker'));
app.use('/api', require('./routes/wordpressScanner'));
app.use('/api', require('./routes/sitemapGenerator'));
app.use('/api', require('./routes/apiTester'));
app.use('/api', require('./routes/metaTagAnalyzer'));
app.use('/api', require('./routes/pageSpeedTester'));
app.use('/api', require('./routes/keywordDensity'));
app.use('/api', require('./routes/sonarscanner'));
app.use('/api', require('./routes/whoisScanner'));
app.use('/api/whois', require('./routes/whois'));
app.use('/api/portscan', require('./routes/portscanner'));
app.use('/api/wafscanner', require('./routes/wafRouter'));
app.use('/api', require('./routes/optimizationRouter'));
app.use('/api/tools', require('./routes/vulnRouter'));
app.use('/api/tools', require('./routes/sonarRouter'));
const zapScanner = require('./routes/zapscanner');
app.use('/api/zapscanner', zapScanner);



// ✅ Serve Lighthouse Reports
app.use('/lighthouse-reports', express.static(path.join(__dirname, 'lighthouse-reports')));

// ✅ Server Start
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
