const Super = require('../api-super/super'); // 超类型

class Sub extends Super {
    // (增)(盖)新增数据(覆盖超类型)
    postData() {
        const self = this;
        const tools = self.tools; // 工具方法集合
        const opts = self.opts;
        const req = opts.req;
        const app = opts.app;
        const redisClient = app.redisClient;
        const contentType = req.headers['content-type'].split(';')[0];
        if (contentType === 'multipart/form-data') {
            const multiparter = require('multiparty');
            const form = new multiparter.Form();
            form.parse(req, function (error, fields, files) {
                if (error) {
                    self.render({
                        status: 'failure',
                        message: '数据库操作待续...',
                    });
                } else {
                    const username = fields.username; // 用户名
                    const password = fields.password; // 密码
                    const verifyCode = fields.verifyCode; // 验证码
                    console.log('username', username);
                    console.log('password', password);
                    console.log('verifyCode', verifyCode);
                    self.render({
                        status: 'failure',
                        message: '数据库操作待续...',
                    });
                }
            });
        } else {
            const data = req.data;
            const username = data.username; // 用户名
            const password = data.password; // 密码
            const verifyCode = data.verifyCode; // 验证码
            const checkStr = tools.checkStr;
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

            redisClient.get(`suibianxiexie-user-verify-code-random-${username}`, function (error, value) {
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
                const Users = require('../../models/mongoose/users');
                Users.find({username: username}, function (error, result) {
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
                    const users = new Users({
                        username: username,
                        password: password,
                        createTime: new Date(),
                    });
                    users.save(function (error, result) {
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
                        redisClient.del(`suibianxiexie-user-verify-code-random-${username}`, function (error, value) {
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
}

module.exports = Sub;
