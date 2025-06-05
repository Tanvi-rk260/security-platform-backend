// controllers/vulnController.js

import VulnResult from '../models/vulnResults.js';

// Save a new vulnerability result
export const saveVulnResult = async (data) => {
  const newResult = new VulnResult(data);
  return await newResult.save();
};

// Get all results
export const getAllVulnResults = async () => {
  return await VulnResult.find();
};

// Get one result by ID
export const getVulnResultById = async (id) => {
  return await VulnResult.findById(id);
};
