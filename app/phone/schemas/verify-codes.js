const mongoose = require('../../../config/mongoose');

module.exports = mongoose.model('phone-verify-codes', new mongoose.Schema({
    // 用户名
    username: {
        type: String,
        default: null,
        unique: true,
        required: [true, 'username is required'],
    },
    // 注册时用到的验证码
    register: {
        type: Object,
        default: {
            // 数字验证码
            num: {
                code: null,
                createTime: null,
            },
            // 图片验证码
            img: {
                code: null,
                createTime: null,
            },
        },
    },
}));
