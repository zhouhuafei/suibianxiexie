const bcrypt = require('bcrypt'); // 加密工具
const saltStrength = 10; // 加密强度

module.exports = function (opts) {
    const str = opts.str;
    const cbSuccess = opts.cbSuccess;
    const cbError = opts.cbError;
    bcrypt.genSalt(saltStrength, function (error, salt) {
        if (error) {
            if (typeof cbError === 'function') {
                cbError(error);
            }
        } else {
            bcrypt.hash(str, salt, function (error, hash) {
                if (error) {
                    if (typeof cbError === 'function') {
                        cbError(error);
                    }
                } else {
                    if (typeof cbSuccess === 'function') {
                        cbSuccess(hash);
                    }
                }
            });
        }
    });
};
