const mongoose = require('../../../db/mongoose');

module.exports = mongoose.model('phone-personals', new mongoose.Schema({
    username: {
        type: String,
        default: null,
        unique: true,
        required: [true, 'username is required'],
    },
    nickname: {
        type: String,
        default: null,
    },
    height: {
        type: String,
        default: null,
    },
    age: {
        type: String,
        default: null,
    },
    sex: {
        type: String,
        default: null,
    },
}));
