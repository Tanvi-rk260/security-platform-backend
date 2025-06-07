import fetch from "node-fetch"; // or native fetch if on Node 18+
import { load } from "cheerio";
import MetaAnalyze from "../models/MetaAnalyze.js"; // optional if saving to DB

export const analyzeMetaTags = async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) return res.status(400).json({ error: "URL is required" });

    const response = await fetch(url);
    if (!response.ok) {
      return res.status(400).json({ error: "Failed to fetch the URL" });
    }

    const html = await response.text();
    const $ = load(html);

    const metaTags = [];
    $("meta").each((i, el) => {
      const name =
        $(el).attr("name") ||
        $(el).attr("property") ||
        $(el).attr("http-equiv");
      const content = $(el).attr("content");
      if (name && content) {
        metaTags.push({ name, content });
      }
    });

    await MetaAnalyze.create({ url, metaTags });

    res.json({ meta: metaTags });
  } catch (error) {
    console.error("Meta analyze error:", error);
    res.status(500).json({ error: "Server error while analyzing meta tags" });
  }
};
