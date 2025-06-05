import CheckmarxResult from '../models/CheckmarxResult.js';

// Save a new Checkmarx result
export const saveResult = async (data) => {
  try {
    const result = new CheckmarxResult(data);
    await result.save();
    return result;
  } catch (error) {
    throw error;
  }
};

// Get all Checkmarx results
export const getAllResults = async () => {
  try {
    return await CheckmarxResult.find().sort({ timestamp: -1 });
  } catch (error) {
    throw error;
  }
};

// Get a Checkmarx result by ID
export const getResultById = async (id) => {
  try {
    return await CheckmarxResult.findById(id);
  } catch (error) {
    throw error;
  }
};
