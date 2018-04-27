const bcrypt = require('bcrypt'); // 加密工具
const saltStrength = 10; // 加密强度

module.exports = function (str, cb) {
    bcrypt.genSalt(saltStrength, function (error, salt) {
        if (error) {
            if (typeof cb === 'function') {
                cb(error);
            }
        } else {
            bcrypt.hash(str, salt, function (error, hash) {
                if (error) {
                    if (typeof cb === 'function') {
                        cb(error);
                    }
                } else {
                    if (typeof cb === 'function') {
                        cb(null, hash);
                    }
                }
            });
        }
    });
    return bcrypt;
};
