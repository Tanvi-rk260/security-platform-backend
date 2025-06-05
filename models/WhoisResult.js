const mongoose = require('mongoose');

const WhoisResultSchema = new mongoose.Schema({
    domain: String,
    result: Object,
    scannedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('WhoisResult', WhoisResultSchema);
