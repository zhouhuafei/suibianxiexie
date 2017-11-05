const mongoose = require('../../../../db/mongoose');

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
            // random随机验证码
            random: {
                code: null,
                createTime: null,
            },
            // canvas图形验证码
            canvas: {
                code: null,
                createTime: null,
            },
        },
    },
}));
