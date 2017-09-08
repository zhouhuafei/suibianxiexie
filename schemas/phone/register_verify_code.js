const mongoose = require('../../config/mongoose');

const VerifyCode = mongoose.Schema({
    username: String,
    verify_code: Number,
    update_time: Date,
});

module.exports = mongoose.model('register_verify_code', VerifyCode);
