import mongoose from 'mongoose';

const IPGeoSchema = new mongoose.Schema({
  domain: { type: String, required: true },
  ip: { type: String, required: true },
  geo: {
    country: String,
    regionName: String,
    city: String,
    isp: String,
    org: String,
    as: String,
  },
  timestamp: { type: Date, default: Date.now },
});

const IPGeo = mongoose.model('IPGeo', IPGeoSchema);
export default IPGeo;
