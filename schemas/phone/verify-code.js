const mongoose = require('../../config/mongoose');

const VerifyCode = mongoose.Schema({
    username: String,
    verifyCode: Number,
    createTime: Date,
});

module.exports = mongoose.model('VerifyCode', VerifyCode);
