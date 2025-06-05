// controllers/wafController.js

import WafResult from '../models/wafResults.js';

// Save new WAF result
export const saveWafResult = async (data) => {
  const newResult = new WafResult(data);
  return await newResult.save();
};

// Get all WAF results
export const getAllWafResults = async () => {
  return await WafResult.find();
};

// Get WAF result by ID
export const getWafResultById = async (id) => {
  return await WafResult.findById(id);
};
