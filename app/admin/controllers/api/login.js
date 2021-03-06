const Super = require('../api-super/super'); // 超类型
const checkStr = require('zhf.check-str');

class Sub extends Super {
    // (增)(覆)增加数据(覆盖超类型)
    postData() {
        const self = this;
        const opts = self.opts;
        const app = opts.app;
        const appConfig = app.appConfig;
        const req = opts.req;
        const session = req.session;
        const data = req.data;
        const username = (data.username || '').trim(); // 用户名
        const password = (data.password || '').trim(); // 密码 -> isEmpty方法内部去掉了首尾空格,不适用于验证密码是否为空
        const verifyCodeCanvas = (data['verify-code-canvas'] || '').trim(); // 验证码,图文随机
        const sessionVerifyCodeCanvasAdmin = session.verifyCodeCanvasAdmin; // 先保存一份验证码，留着下面做验证。
        delete session.verifyCodeCanvasAdmin; // 请求一次之后就清掉验证码，无论成功失败，都要让验证码无效。
        if (checkStr.isEmpty(username)) {
            self.render({
                message: '账号不能为空',
                result: {username: username},
            });
        } else if (password === '') {
            self.render({
                message: '密码不能为空',
                result: {password: password},
            });
        } else if (checkStr.isEmpty(verifyCodeCanvas)) {
            self.render({
                message: '验证码不能为空',
                result: {'verify-code-canvas': verifyCodeCanvas},
            });
        } else if (verifyCodeCanvas !== sessionVerifyCodeCanvasAdmin) {
            self.render({
                message: '验证码错误',
                result: {'verify-code-canvas': verifyCodeCanvas},
            });
        } else {
            const Admin = require('../../models/mongoose/admin');
            Admin.findOne({username: username}, function (error, result) {
                // 数据库查询出现错误
                if (error) {
                    self.render({message: '数据库查询出现错误'});
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
                                const loginStampSession = `${Math.random()}`.split('.')[1];
                                Admin.update({_id: adminInfo._id}, {$set: {loginStampSession: loginStampSession}}, function (error) {
                                    // 数据库更新出现错误
                                    if (error) {
                                        self.render({
                                            message: '更新登录戳出现错误',
                                            failureInfo: error,
                                        });
                                        return;
                                    }
                                    session.adminInfo.loginStampSession = loginStampSession; // 登录成功更改登录戳。
                                    self.render({
                                        status: 'success',
                                        message: '登录成功',
                                        result: {},
                                    });
                                });
                            } else {
                                self.render({
                                    status: 'success',
                                    message: '登录成功',
                                    result: {},
                                });
                            }
                        } else {
                            self.render({message: '用户名和密码不匹配'});
                        }
                    });
                } else {
                    self.render({message: '账号不存在'});
                }
            });
        }
    }
}

module.exports = Sub;
