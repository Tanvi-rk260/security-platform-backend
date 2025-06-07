import dns from "dns/promises";
import IPGeo from "../models/ipgeo.model.js";
import fetch from "node-fetch"; // Use native fetch if Node >= 18

export async function lookupIPGeo(req, res) {
  const { domain } = req.body;

  if (!domain) {
    return res.status(400).json({ error: "Domain is required" });
  }

  try {
    const addresses = await dns.lookup(domain);
    const ip = addresses.address;

    const geoRes = await fetch(`http://ip-api.com/json/${ip}`);
    const geo = await geoRes.json();

    const record = await IPGeo.create({ domain, ip, geo });
    res.json(record);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to lookup IP or geo data." });
  }
}
