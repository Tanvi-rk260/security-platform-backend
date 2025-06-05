// controllers/reconController.js

import ReconResult from '../models/ReconResult.js';

// Save a new Recon result
export const saveReconResult = async (data) => {
  const result = new ReconResult(data);
  return await result.save();
};

// Get all Recon results
export const getAllReconResults = async () => {
  return await ReconResult.find();
};

// Get a single result by ID
export const getReconResultById = async (id) => {
  return await ReconResult.findById(id);
};
