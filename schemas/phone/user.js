const mongoose = require('../../config/mongoose');

const User = mongoose.Schema({
    username: String,
    password: String,
    createTime: Date,
    updateTime: Date,
});

module.exports = mongoose.model('User', User);
