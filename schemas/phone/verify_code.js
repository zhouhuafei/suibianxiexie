const mongoose = require('../../config/mongoose');

const VerifyCode = mongoose.Schema({
    // 用户名
    username: {
        type: String,
        default: null,
    },
    // 注册时用到的验证码
    register: {
        type: Object,
        default: {
            // 数字验证码
            num: {
                code: null,
                create_time: null,
            },
            // 图片验证码
            img: {
                code: null,
                create_time: null,
            },
        },
    },
    test: String,
});

module.exports = mongoose.model('verify_code', VerifyCode);
