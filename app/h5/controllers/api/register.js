const Super = require('../api-super/super'); // 超类型
const checkStr = require('zhf.check-str');

class Sub extends Super {
    // (增)(覆)新增数据(覆盖超类型)
    postData() {
        const self = this;
        const opts = self.opts;
        const req = opts.req;
        const app = opts.app;
        const redisClient = app.redisClient;
        const data = req.data;
        const username = data.username; // 用户名
        const password = data.password; // 密码
        const verifyCode = data.verifyCode; // 验证码
        if (!checkStr.isEmail(username)) {
            self.render({
                status: 'failure',
                message: '账号格式有误',
                result: {data: [{username: username}]},
            });
            return;
        }
        if (checkStr.isEmpty(password)) {
            self.render({
                status: 'failure',
                message: '密码不能为空',
                result: {data: [{password: password}]},
            });
            return;
        }

        redisClient.get(`verify-code-random-user-${username}-suibianxiexie`, function (error, value) {
            if (error) {
                self.render({
                    status: 'failure',
                    message: 'redis读取验证码出现错误',
                    result: {data: [{username: username}]},
                });
                return;
            }
            if (value !== verifyCode) {
                self.render({
                    status: 'failure',
                    message: '验证码有误,请重新输入或重新获取并输入',
                    result: {data: [{verifyCode: verifyCode}]},
                });
                return;
            }
            const User = require('../../models/mongoose/user');
            User.find({username: username}, function (error, result) {
                // 数据库查询出现错误
                if (error) {
                    self.render({
                        status: 'failure',
                        message: '数据库查询出现错误',
                    });
                    return;
                }
                // 已被注册
                if (result.length) {
                    self.render({
                        status: 'failure',
                        message: '账号已被注册',
                    });
                    return;
                }
                // 未被注册
                const user = new User({
                    username: username,
                    password: password,
                    createTime: new Date(),
                });
                user.save(function (error, result) {
                    // 数据库插入出现错误
                    if (error) {
                        self.render({
                            status: 'failure',
                            message: '数据库插入出现错误',
                            failureInfo: error,
                        });
                        return;
                    }
                    // 数据库插入成功
                    redisClient.del(`verify-code-random-user-${username}-suibianxiexie`, function (error, value) {
                        if (error) {
                            self.render({
                                status: 'success',
                                message: '虽然redis删除验证码失败,但是注册依然成功了',
                                result: {data: [{username: username}]},
                            });
                        } else {
                            self.render({
                                status: 'success',
                                message: '注册成功',
                                result: {data: [{username: username}]},
                            });
                        }
                    });
                });
            });
        });
    }
}

module.exports = Sub;
