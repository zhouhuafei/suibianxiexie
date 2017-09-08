const mongoose = require('../../config/mongoose');

const User = mongoose.Schema({
    username: {
        type: String,
        default: null,
    },
    password: {
        type: String,
        default: null,
    },
    createTime: {
        type: String,
        default: null,
    },
    updateTime: {
        type: String,
        default: null,
    },
});

module.exports = mongoose.model('user', User);
