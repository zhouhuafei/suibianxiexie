const Super = require('../api-super/super'); // 超类型

class Sub extends Super {
    // (增)(覆)获取数据(覆盖超类型)
    postData() {
        const self = this;
        const tools = self.tools; // 工具方法集合
        const opts = self.opts;
        const app = opts.app;
        const appConfig = app.appConfig;
        const req = opts.req;
        const session = req.session;
        const data = req.data;
        const username = data.username || ''; // 用户名
        const password = data.password || ''; // 密码 -> isEmpty方法内部去掉了首尾空格,不适用于验证密码是否为空
        const verifyCodeCanvas = data['verify-code-canvas'] || ''; // 验证码,图文随机
        const checkStr = tools.checkStr;
        if (checkStr.isEmpty(username)) {
            self.render({
                message: '账号不能为空',
                result: {data: [{username: username}]},
            });
        } else if (password === '') {
            self.render({
                message: '密码不能为空',
                result: {data: [{password: password}]},
            });
        } else if (checkStr.isEmpty(verifyCodeCanvas)) {
            self.render({
                message: '验证码不能为空',
                result: {data: [{'verify-code-canvas': verifyCodeCanvas}]},
            });
        } else if (verifyCodeCanvas !== session.verifyCodeCanvasAdmin) {
            self.render({
                message: '验证码错误',
                result: {data: [{'verify-code-canvas': verifyCodeCanvas}]},
            });
        } else {
            const Admins = require('../../models/mongoose/admins');
            Admins.findOne({username: username}, function (error, result) {
                // 数据库查询出现错误
                if (error) {
                    self.render({
                        message: '数据库查询出现错误',
                    });
                }
                if (result) {
                    const adminInfo = result;
                    adminInfo.comparePassword(password, function (error, isMatch) {
                        if (error) {
                            self.render({
                                message: '密码对比出现错误',
                                failureInfo: error,
                            });
                        }
                        if (isMatch) {
                            session.adminInfo = adminInfo;
                            if (appConfig.isEnabledSingleDeviceLoginAdmin) { // 如果开启了单设备登录
                                const loginStamp = `${Math.random()}`.split('.')[1];
                                Admins.update({_id: adminInfo._id}, {$set: {loginStamp: loginStamp}}, function (error) {
                                    // 数据库更新出现错误
                                    if (error) {
                                        self.render({
                                            message: '更新登录戳出现错误',
                                            failureInfo: error,
                                        });
                                        return;
                                    }
                                    session.adminInfo.loginStamp = loginStamp; // 登录成功更改登录戳。
                                    delete session.verifyCodeCanvasAdmin; // 成功之后清掉验证码，验证码使用之后，让验证码无效。
                                    self.render({
                                        status: 'success',
                                        message: '登录成功',
                                        result: {
                                            data: [{username: adminInfo.username}],
                                        },
                                    });
                                });
                            } else {
                                self.render({
                                    status: 'success',
                                    message: '登录成功',
                                    result: {
                                        data: [{username: adminInfo.username}],
                                    },
                                });
                            }
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
