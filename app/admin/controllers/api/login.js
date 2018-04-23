const Super = require('../api-super/super'); // 超类型

class Sub extends Super {
    // (增)(盖)获取数据(覆盖超类型)
    postData() {
        const self = this;
        const tools = self.tools;// 工具方法集合
        const opts = self.opts;
        const req = opts.req;
        const data = req.data;
        const username = data.username;// 用户名
        const password = data.password;// 密码
        const verifyCode = data.verifyCode;// 验证码
        const session = req.session;
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
        } else {
            const Admins = require('../../models/mongoose/admins');
            Admins.find({username: username}, function (error, result) {
                // 数据库查询出现错误
                if (error) {
                    self.render({
                        message: '数据库查询出现错误',
                    });
                }
                if (result.length) {
                    const adminInfo = result[0];
                    adminInfo.comparePassword(password, function (error, isMatch) {
                        if (error) {
                            self.render({
                                message: '密码对比出现错误',
                                failureInfo: error,
                            });
                        }
                        if (isMatch) {
                            session.adminInfo = adminInfo;
                            self.render({
                                status: 'success',
                                message: '登录成功',
                                result: {
                                    data: [{username: adminInfo.username}],
                                },
                            });
                        } else {
                            self.render({
                                message: '用户名和密码不匹配',
                            });
                        }
                    });
                } else {
                    self.render({
                        message: '账号不存在',
                    });
                }
            });
        }
    }
}

module.exports = Sub;
