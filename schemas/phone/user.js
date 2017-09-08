const mongoose = require('../../config/mongoose');

const User = mongoose.Schema({
    username: String,
    password: String,
    create_time: Date,
    update_time: Date,
});

module.exports = mongoose.model('User', User);
