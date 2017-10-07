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
    loginTimePrev: {
        type: Date,
        default: null,
    },
    loginTime: {
        type: Date,
        default: null,
    },
}));
