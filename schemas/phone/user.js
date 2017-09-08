const mongoose = require('../../config/mongoose');

const User = mongoose.Schema({
    username: String,
    password: String,
    registerDate: Date,
});

module.exports = mongoose.model('User', User);
