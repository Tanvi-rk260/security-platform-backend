import mongoose from 'mongoose';

const OAuthTokenSchema = new mongoose.Schema({
  token: { type: String, required: true },
  payload: { type: Object, required: true },
  issues: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now },
});

const OAuthToken = mongoose.model('OAuthToken', OAuthTokenSchema);

export default OAuthToken;
