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
        const oldPassword = data['old-password']; // 旧密码
        const newPassword = data['new-password']; // 新密码
        const repeatNewPassword = data['repeat-new-password']; // 新密码二次确认
        if (tools.isEmpty(username)) {
            self.render({
                message: '账号不能为空',
                result: {data: [{username: username}]},
            });
        } else if (tools.isEmpty(oldPassword) || tools.isEmpty(newPassword) || tools.isEmpty(repeatNewPassword)) {
            self.render({
                message: '密码不能为空',
                result: {
                    data: [{
                        'old-password': oldPassword,
                        'new-password': newPassword,
                        'repeat-new-password': repeatNewPassword,
                    }],
                },
            });
        } else if (newPassword !== repeatNewPassword) {
            self.render({
                message: '两次输入的新密码不一致',
                result: {
                    data: [{
                        'old-password': oldPassword,
                        'new-password': newPassword,
                        'repeat-new-password': repeatNewPassword,
                    }],
                },
            });
        } else {
            const Admins = require('../../models/mongoose/admins');
            // 如果管理员账号存在并且老密码正确则可以修改密码待续...
            Admins.find({username: username}, function (error, result) {
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
                        password: newPassword,
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
