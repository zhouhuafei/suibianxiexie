const mongoose = require('../../config/mongoose');

const VerifyCode = mongoose.Schema({
    username: String,
    verifyCode: Number,
    sendDate: Date,
});

module.exports = mongoose.model('VerifyCode', VerifyCode);
