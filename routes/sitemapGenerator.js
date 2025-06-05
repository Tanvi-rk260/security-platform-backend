const express = require('express');
const router = express.Router();
const axios = require('axios');
const xml2js = require('xml2js');

const commonSitemapPaths = [
    '/sitemap.xml',
    '/sitemap_index.xml',
    '/sitemap-index.xml',
    '/sitemap1.xml'
];

router.post('/sitemap-generator', async (req, res) => {
    const { domain } = req.body;
    if (!domain) return res.status(400).json({ error: 'Domain is required' });

    try {
        let sitemapUrl;
        let sitemapData;

        for (let path of commonSitemapPaths) {
            const url = `https://${domain}${path}`;
            try {
                const response = await axios.get(url);
                sitemapUrl = url;
                sitemapData = response.data;
                break; // found!
            } catch (err) {
                continue; // try next path
            }
        }

        if (!sitemapData) {
            return res.status(404).json({ error: 'No accessible sitemap found from known paths.' });
        }

        const parser = new xml2js.Parser();
        const result = await parser.parseStringPromise(sitemapData);

        const urls = [];
        if (result.urlset && result.urlset.url) {
            result.urlset.url.forEach(entry => {
                if (entry.loc && entry.loc[0]) {
                    urls.push(entry.loc[0]);
                }
            });
        }

        res.json({
            sitemapUrl,
            totalUrls: urls.length,
            urls
        });

    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch or parse sitemap: ' + error.message });
    }
});

module.exports = router;
