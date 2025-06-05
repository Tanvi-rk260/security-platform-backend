// controllers/sonarController.js

import SonarResult from "../models/SonarResult.js";

export const saveSonarResult = async (req, res) => {
  try {
    const result = new SonarResult(req.body);
    const saved = await result.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllSonarResults = async (req, res) => {
  try {
    const results = await SonarResult.find();
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getSonarResultById = async (req, res) => {
  try {
    const result = await SonarResult.findById(req.params.id);
    if (!result) {
      return res.status(404).json({ error: "Result not found" });
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
