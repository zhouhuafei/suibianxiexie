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
        const session = req.session;
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
                    const adminInfo = result[0];
                    adminInfo.comparePassword(oldPassword, function (error, isMatch) {
                        if (error) {
                            self.render({
                                message: '密码对比出现错误',
                                failureInfo: error,
                            });
                        }
                        if (isMatch) {
                            // 用户名和老密码匹配了,则进行密码替换
                            const bcrypt = require('bcrypt'); // 加密工具
                            const saltStrength = 10; // 加密强度
                            // 密码加密
                            bcrypt.genSalt(saltStrength, function (error, salt) {
                                if (error) {
                                    self.render({
                                        message: '密码加密出现错误',
                                        failureInfo: error,
                                    });
                                } else {
                                    bcrypt.hash(newPassword, salt, function (error, hash) {
                                        if (error) {
                                            self.render({
                                                message: '密码加密出现错误',
                                                failureInfo: error,
                                            });
                                        } else {
                                            Admins.update({_id: adminInfo._id}, {$set: {password: hash}}, function (error) {
                                                // 数据库更新出现错误
                                                if (error) {
                                                    self.render({
                                                        message: '密码更新出现错误',
                                                        failureInfo: error,
                                                    });
                                                    return;
                                                }
                                                delete session.adminInfo; // 不加这句话，改了密码，不会掉线，加了这句话也只是当前用户掉线，其他人不掉线。
                                                self.render({
                                                    status: 'success',
                                                    message: '已成功修改密码',
                                                    result: {
                                                        data: [{username: adminInfo.username}],
                                                    },
                                                });
                                            });
                                        }
                                    });
                                }
                            });
                        } else {
                            self.render({
                                message: '用户名和老密码不匹配',
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