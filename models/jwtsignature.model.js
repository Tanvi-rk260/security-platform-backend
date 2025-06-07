import mongoose from 'mongoose';

const jwtSignatureSchema = new mongoose.Schema({
  token: { type: String, required: true },
  secret: { type: String, required: true },
  valid: { type: Boolean, required: true },
  header: { type: Object, required: false },
  payload: { type: Object, required: false },
  validatedAt: { type: Date, default: Date.now },

  // New timespan field in milliseconds
  timespan: { type: Number, default: 0 },
});

const JWTSignature = mongoose.model('JWTSignature', jwtSignatureSchema);

export default JWTSignature;
