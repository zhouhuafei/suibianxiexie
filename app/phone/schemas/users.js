const mongoose = require('../../../config/mongoose');

module.exports = mongoose.model('phone-users', new mongoose.Schema({
    username: {
        type: String,
        default: null,
        unique: true,
        required: [true, 'username is required'],
    },
    password: {
        type: String,
        default: null,
    },
    createTime: {
        type: Date,
        default: null,
    },
    updateTime: {
        type: Date,
        default: null,
    },
}));
