const Super = require('../api-super/super'); // 超类型
const nodemailer = require('nodemailer');// 邮箱模块

class Sub extends Super {
    // (查)(盖)查找数据(覆盖超类型)
    getData() {
        const self = this;
        const tools = this.tools;// 工具方法集合
        const opts = this.opts;
        const req = opts.req;
        const data = req.data;
        const username = data.username;
        if (!tools.isEmail(username)) {
            // 用户名不是邮箱
            self.render({
                status: 'failure',
                message: '账号需要是一个邮箱',
            });
        } else {
            // 用户名是邮箱

            // 检查用户名是否已被注册

            // 没被注册再发送验证码
            const verifyCode = tools.getRandom(100000, 999999);// random随机验证码
            const expirationDate = 10;// 有效期,单位是分钟
            const autoUser = 'this-is-a-code@foxmail.com';
            const transporter = nodemailer.createTransport({
                service: 'qq',
                auth: {
                    user: autoUser, // 发送者
                    pass: 'fycxbmhqlildhjib', // 授权码,通过QQ获取
                },
            });
            const mailOptions = {
                from: autoUser, // 发送者
                to: username, // 接受者,可以同时发送多个,以逗号隔开
                subject: verifyCode, // 标题
                text: `这是一条验证码,有效期${expirationDate}分钟,此验证码仅用于账号注册`, // 文本
                html: '', // html
            };
            // 验证码存session里
            transporter.sendMail(mailOptions, function (error, result) {
                if (error) {
                    // 验证码发送失败
                    self.render({
                        status: 'failure',
                        message: '验证码发送失败,请重新发送',
                        error: error,
                    });
                } else {
                    self.opts.app.redisClient.set(`verify-code-register-random-${username}`, verifyCode, 'EX', expirationDate * 60);
                    self.render({
                        status: 'success',
                        message: '验证码发送成功',
                    });
                }
            });
            // 验证码存redis待续
        }
    }
}

module.exports = Sub;