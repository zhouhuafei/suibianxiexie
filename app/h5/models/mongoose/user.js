const mongoose = require('../../../../db/mongoose');
const schema = new mongoose.Schema({
    // 用户名(账号)
    username: {
        type: String,
        unique: true,
        required: [true, '用户名是必填项'],
    },
    // 账号密码
    password: {
        type: String,
        default: null,
    },
    // 上次更新密码的时间(找回密码,和修改密码都算是更新密码)
    passwordUpdateTimePrev: {
        type: Date,
        default: null,
    },
    // 本次更新密码的时间(找回密码,和修改密码都算是更新密码)
    passwordUpdateTime: {
        type: Date,
        default: null,
    },
    // 账号创建的时间
    createTime: {
        type: Date,
        default: null,
    },
    // 上次登录的时间
    loginTimePrev: {
        type: Date,
        default: null,
    },
    // 本次登录的时间
    loginTime: {
        type: Date,
        default: null,
    },
    // 登录戳，用来做修改密码集体下线以及单设备登录的。
    loginStampSession: { // session开发方式时使用
        type: String,
        default: null,
    },
    // 登录戳，用来做修改密码集体下线以及单设备登录的。
    loginStampAccessToken: { // jwt开发方式时使用
        type: String,
        default: null,
    },
    // 登录戳，用来做修改密码集体下线以及单设备登录的。
    loginStampRefreshToken: { // jwt开发方式时使用
        type: String,
        default: null,
    },
    // 以下应该放到personal(个人信息)表中
    // 邮箱
    email: {
        type: String,
        default: null,
    },
    // 昵称
    nickname: {
        type: String,
        default: null,
    },
    // 身高
    height: {
        type: Number,
        default: null,
    },
    // 年龄
    age: {
        type: Number,
        default: null,
    },
    // 性别
    sex: {
        type: String,
        default: null,
    },
}, {collection: 'user'});
const bcrypt = require('bcrypt'); // 加密工具
const saltStrength = 10; // 加密强度
// 使用pre中间件在用户信息存储前进行密码加密
schema.pre('save', function (next) {
    const self = this;
    // 当密码有更改或者是新密码的时候
    if (self.isModified('password')) {
        // 进行加密(加盐)
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
    } else {
        next();
    }
});

// 对比密码
schema.methods.comparePassword = function (candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function (error, isMatch) {
        if (error) {
            callback(error);
        } else {
            callback(null, isMatch);
        }
    });
};

module.exports = mongoose.model('User', schema);
