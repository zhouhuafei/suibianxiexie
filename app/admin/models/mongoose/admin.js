const mongoose = require('../../../../db/mongoose');

// 数据格式
const schema = new mongoose.Schema({
    // 用户名(账号)
    username: {
        type: String,
        default: null,
        unique: true,
        required: [true, 'username is required'],
    },
    // 账号密码
    password: {
        type: String,
        default: null,
    },
    // 账号创建的时间
    createTime: {
        type: Date,
        default: null,
    },
    // 登录戳，用来做修改密码集体下线以及单设备登录的。
    loginStamp: {
        type: String,
        default: null,
    },
}, {collection: 'admin'});

// 使用pre中间件在用户信息存储前进行密码加密
const fnBcrypt = require('../../../../utils/bcrypt'); // 加密工具
const saltPassword = function (next) {
    const self = this;
    // 当密码有更改或者是新密码的时候
    if (self.isModified('password')) {
        // 进行加密(加盐)
        fnBcrypt(self.password, function (error, hash) {
            if (error) {
                next(error);
            } else {
                self.password = hash;
                next();
            }
        });
    } else {
        next();
    }
};
schema.pre('save', saltPassword); // 更新密码不会触发这个，所以更新密码时，需要重新加密。

// 对比密码
const bcrypt = require('bcrypt');
schema.methods.comparePassword = function (candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function (error, isMatch) {
        if (error) {
            callback(error);
        } else {
            callback(null, isMatch);
        }
    });
};

module.exports = mongoose.model('Admin', schema);
