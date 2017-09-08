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
    create_time: {
        type: String,
        default: null,
    },
    update_time: {
        type: String,
        default: null,
    },
});

module.exports = mongoose.model('User', User);
