const express = require('express');
const router = express.Router();
const whoiser = require('whoiser');
const WhoisResult = require('../models/WhoisResult');

router.post('/whois-scan', async (req, res) => {
    const { domain } = req.body;

    if (!domain) {
        return res.status(400).json({ error: 'Domain is required' });
    }

    try {
        // 👇 use whoiser directly as a function
        const result = await whoiser(domain);

        await WhoisResult.create({ domain, result });

        res.json({ domain, result });
    } catch (error) {
        res.status(500).json({
            error: 'WHOIS scan failed',
            details: error.message,
        });
    }
});

module.exports = router;  
