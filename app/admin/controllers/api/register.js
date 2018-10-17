const Super = require('../api-super/super'); // 超类型
const checkStr = require('zhf.check-str');
const Admin = require('../../models/mongoose/admin');

class Sub extends Super {
    // (增)(覆)增加数据(覆盖超类型)
    postData() {
        const self = this;
        const opts = self.opts;
        const req = opts.req;
        const app = opts.app;
        const redisClient = opts.app.redisClient;
        const session = req.session;
        const data = req.data;
        const username = (data.username || '').trim(); // 用户名
        const password = (data.password || '').trim(); // 密码 -> isEmpty方法内部去掉了首尾空格,不适用于验证密码是否为空
        const repeatPassword = (data['repeat-password'] || '').trim(); // 密码二次确认 -> isEmpty方法内部去掉了首尾空格,不适用于验证密码是否为空
        const verifyCodeRandom = (data['verify-code-random'] || '').trim(); // 验证码,邮箱(短信)验证码
        const verifyCodeCanvas = (data['verify-code-canvas'] || '').trim(); // 验证码,图文验证码
        const sessionVerifyCodeCanvasAdmin = session.verifyCodeCanvasAdmin; // 先保存一份验证码，留着下面做验证。
        delete session.verifyCodeCanvasAdmin; // 请求一次之后就清掉验证码，无论成功失败，都要让验证码无效。
        if (checkStr.isEmpty(username)) {
            self.render({
                message: '账号不能为空',
                result: {username: username},
            });
        } else if (password === '' || repeatPassword === '') {
            self.render({
                message: '密码不能为空',
                result: {password: password, 'repeat-password': repeatPassword},
            });
        } else if (password !== repeatPassword) {
            self.render({
                message: '两次输入的密码不一致',
                result: {password: password, 'repeat-password': repeatPassword},
            });
        } else if (checkStr.isEmpty(verifyCodeCanvas)) {
            self.render({
                message: '验证码不能为空',
                result: {'verify-code-canvas': verifyCodeCanvas},
            });
        } else if (verifyCodeCanvas !== sessionVerifyCodeCanvasAdmin) {
            self.render({
                message: '图文验证码错误',
                result: {'verify-code-canvas': verifyCodeCanvas},
            });
        } else {
            redisClient.get(`admin-${username}_verify-code-random_register`, function (error, value) {
                if (error) {
                    self.render({
                        status: 'failure',
                        message: 'redis读取验证码出现错误',
                        result: {data: [{username: username}]},
                    });
                    return;
                }
                if (value !== verifyCodeRandom) {
                    self.render({message: '验证码有误,请重新输入或重新获取并输入'});
                    return;
                }
                // 如果管理员账号存在则不可以注册
                Admin.findOne({}, function (error, result) {
                    // 数据库查询出现错误
                    if (error) {
                        self.render({message: '数据库查询出现错误'});
                    }
                    if (result) {
                        self.render({message: '管理员账号已经存在'});
                    } else {
                        const admin = new Admin({
                            username: username,
                            password: password,
                        });
                        admin.save(function (error, result) {
                            // 数据库插入出现错误
                            if (error) {
                                self.render({
                                    message: '数据库插入出现错误',
                                    failureInfo: error,
                                });
                                return;
                            }
                            // 数据库插入成功
                            redisClient.del(`admin-${username}_verify-code-random_register`, function (error, value) {
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
                    }
                });
            });
        }
    }
}

module.exports = Sub;
