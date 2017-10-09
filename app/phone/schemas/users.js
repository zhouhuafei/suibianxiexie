const mongoose = require('../../../config/mongoose');
const usersSchema = new mongoose.Schema({
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
});
const bcrypt = require('bcrypt'); // 加密工具
const saltStrength = 10; // 加密强度
// 使用pre中间件在用户信息存储前进行密码加密
usersSchema.pre('save', function (next) {
    const self = this;
    // 进行加密（加盐）
    bcrypt.genSalt(saltStrength, function (error, salt) {
        if (error) {
            next(error);
        } else {
            bcrypt.hash(self.password, salt, function (error, hash) {
                if (error) {
                    next(error);
                } else {
                    self.password = hash;
                    next();
                }
            });
        }
    });
});

module.exports = mongoose.model('phone-users', usersSchema);
