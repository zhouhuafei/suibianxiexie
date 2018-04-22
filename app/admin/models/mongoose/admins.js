const mongoose = require('../../../../db/mongoose');
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
});
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

module.exports = mongoose.model('admins', schema);
