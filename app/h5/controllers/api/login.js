const Super = require('../api-super/super'); // 超类型
const checkStr = require('zhf.check-str');

class Sub extends Super {
    // (增)(覆)增加数据(覆盖超类型)
    postData() {
        const self = this;
        const opts = self.opts;
        const req = opts.req;
        const data = req.data;
        const username = data.username;// 用户名
        const password = data.password;// 密码
        const verifyCode = data.verifyCode;// 验证码
        const session = req.session;
        if (!checkStr.isEmail(username)) {
            self.render({
                status: 'failure',
                message: '账号格式有误',
                result: {data: [{username: username}]},
            });
        } else if (checkStr.isEmpty(password)) {
            self.render({
                status: 'failure',
                message: '密码不能为空',
                result: {data: [{password: password}]},
            });
        } else {
            const User = require('../../models/mongoose/user');
            User.find({username: username}, function (error, result) {
                // 数据库查询出现错误
                if (error) {
                    self.render({
                        status: 'failure',
                        message: '数据库查询出现错误',
                    });
                }
                if (result.length) {
                    const userInfo = result[0];
                    userInfo.comparePassword(password, function (error, isMatch) {
                        if (error) {
                            self.render({
                                status: 'failure',
                                message: '密码对比出现错误',
                                failureInfo: error,
                            });
                        }
                        if (isMatch) {
                            session.userInfo = userInfo;
                            self.render({
                                status: 'success',
                                message: '登录成功',
                                result: {
                                    data: [{id: userInfo.id, username: userInfo.username}],
                                },
                            });
                        } else {
                            self.render({
                                status: 'failure',
                                message: '账号和密码不匹配',
                            });
                        }
                    });
                } else {
                    self.render({
                        status: 'failure',
                        message: '账号不存在',
                    });
                }
            });
        }
    }
}

module.exports = Sub;
