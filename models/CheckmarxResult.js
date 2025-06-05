// // models/CheckmarxResult.js

// import mongoose from 'mongoose';

// const checkmarxResultSchema = new mongoose.Schema({
//   url: String,
//   issuesFound: Number,
//   details: String,
//   timestamp: { type: Date, default: Date.now }
// });

// const CheckmarxResult = mongoose.model('CheckmarxResult', checkmarxResultSchema);

// export default CheckmarxResult;


import moongoose from 'mongoose';

const checkmarxResultSchema = new moongoose.Schema({
  url: { type: String, required: true }
  ,issuesFound: { type: Number, default: 0 }
  ,details: { type: String, default: '' }
},{timestamps: true});
