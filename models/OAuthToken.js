import mongoose from 'mongoose';

const OAuthTokenSchema = new mongoose.Schema({
  token: { type: String, required: true },
  payload: { type: Object, required: true },
  issues: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now },

  // New field: timespan in milliseconds
  timespan: { type: Number, default: 0 },
});

const OAuthToken = mongoose.model('OAuthToken', OAuthTokenSchema);

export default OAuthToken;
