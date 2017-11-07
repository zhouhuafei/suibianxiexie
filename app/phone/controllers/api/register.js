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
            });
        } else {
            const data = req.data;
            const username = data.username; // 用户名
            const password = data.password; // 密码
            const verifyCode = data.verifyCode; // 验证码
            // redis如何删除一个键待续...?
            redisClient.get(`verify-code-register-random-${username}`, function (err, value) {
                console.log('验证吗删除之后', value);
                if (err) {
                    self.render({
                        status: 'failure',
                        message: '账号格式有误',
                        result: {data: [{username: username}]},
                    });
                } else if (!tools.isEmail(username)) {
                    self.render({
                        status: 'failure',
                        message: '账号格式有误',
                        result: {data: [{username: username}]},
                    });
                } else if (tools.isEmpty(password)) {
                    self.render({
                        status: 'failure',
                        message: '密码不能为空',
                        result: {data: [{password: password}]},
                    });
                } else if (value !== verifyCode) {
                    self.render({
                        status: 'failure',
                        message: '验证码有误,请重新输入或重新获取并输入',
                        result: {data: [{verifyCode: verifyCode}]},
                    });
                } else {
                    const Users = require('../../models/mongoose/users');
                    Users.find({username: username}, function (error, result) {
                        // 数据库查询出现错误
                        if (error) {
                            self.render({
                                status: 'failure',
                                message: '数据库查询出现错误',
                            });
                        }
                        if (result.length) {
                            // 已被注册
                            self.render({
                                status: 'failure',
                                message: '账号已被注册',
                            });
                        } else {
                            // 未被注册
                            const users = new Users({
                                username: username,
                                password: password,
                                createTime: new Date(),
                            });
                            users.save(function (error, result) {
                                if (error) {
                                    // 数据库插入出现错误
                                    self.render({
                                        status: 'failure',
                                        message: '数据库插入出现错误',
                                        error: error,
                                    });
                                } else {
                                    // 数据库插入成功
                                    // 清空redis里存储的`verify-code-register-random-${username}`验证码
                                    self.render({
                                        status: 'success',
                                        message: '注册成功',
                                        result: {data: [{username: username}]},
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    }
}

module.exports = Sub;
