import mongoose from "mongoose";

const jwtTokenSchema = new mongoose.Schema({
  token: { type: String, required: true },
  secret: { type: String }, // optional secret if you want to store it
  createdAt: { type: Date, default: Date.now },
});

const JwtToken = mongoose.model("JwtToken", jwtTokenSchema);

export default JwtToken;
