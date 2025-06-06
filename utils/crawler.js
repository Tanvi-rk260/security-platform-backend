// utils/crawler.js
import axios from 'axios';
import * as cheerio from 'cheerio';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const crawlWebsite = async (startUrl, maxDepth = 3) => {
  const visited = new Set();
  const queue = [{ url: startUrl, depth: 0 }];

  const domain = new URL(startUrl).hostname;
  const result = [];

  while (queue.length > 0) {
    const { url, depth } = queue.shift();

    if (visited.has(url) || depth > maxDepth) continue;

    try {
      const res = await axios.get(url);
      visited.add(url);
      result.push(url);

      const $ = cheerio.load(res.data);
      $('a[href]').each((_, el) => {
        let link = $(el).attr('href');
        if (link.startsWith('/')) link = `${startUrl}${link}`;
        if (link.startsWith('http') && new URL(link).hostname === domain) {
          queue.push({ url: link, depth: depth + 1 });
        }
      });

      await sleep(300); // Be nice to servers
    } catch (err) {
      console.warn(`Failed to crawl ${url}:`, err.message);
    }
  }

  return Array.from(new Set(result)); // Unique URLs
};

export default crawlWebsite;
