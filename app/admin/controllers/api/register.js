const Super = require('../api-super/super'); // 超类型

class Sub extends Super {
    // (增)(盖)获取数据(覆盖超类型)
    postData() {
        const self = this;
        const tools = self.tools; // 工具方法集合
        const opts = self.opts;
        const req = opts.req;
        const data = req.data;
        const username = data.username; // 用户名
        const password = data.password; // 密码
        const repeatPassword = data['repeat-password']; // 密码二次确认
        if (tools.isEmpty(username)) {
            self.render({
                message: '账号不能为空',
                result: {data: [{username: username}]},
            });
        } else if (tools.isEmpty(password)) {
            self.render({
                message: '密码不能为空',
                result: {data: [{password: password}]},
            });
        } else if (password !== repeatPassword) {
            self.render({
                message: '两次输入的密码不一致',
                result: {data: [{password: password, repeatPassword: repeatPassword}]},
            });
        } else {
            const Admins = require('../../models/mongoose/admins');
            // 如果管理员账号存在则不可以注册
            Admins.find({}, function (error, result) {
                // 数据库查询出现错误
                if (error) {
                    self.render({
                        message: '数据库查询出现错误',
                    });
                }
                if (result.length) {
                    self.render({
                        message: '管理员账号已经存在',
                    });
                } else {
                    const admins = new Admins({
                        username: username,
                        password: password,
                    });
                    admins.save(function (error, result) {
                        // 数据库插入出现错误
                        if (error) {
                            self.render({
                                message: '数据库插入出现错误',
                                failureInfo: error,
                            });
                            return;
                        }
                        self.render({
                            status: 'success',
                            message: '注册成功',
                            result: {data: [{username: username}]},
                        });
                    });
                }
            });
        }
    }
}

module.exports = Sub;
