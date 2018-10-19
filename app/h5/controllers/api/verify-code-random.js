const Super = require('../api-super/super'); // 超类型
const nodemailer = require('nodemailer');// 邮箱模块
const checkStr = require('zhf.check-str');
const randomNum = require('zhf.random-num');

class Sub extends Super {
    // (查)(覆)查找数据(覆盖超类型)
    getData() {
        const self = this;
        const opts = this.opts;
        const app = opts.app;
        const req = opts.req;
        const data = req.data;
        const username = data.username;
        const redisClient = app.redisClient;
        if (!checkStr.isEmail(username)) { // 用户名不是邮箱
            self.render({message: '账号需要是一个邮箱'});
        } else { // 用户名是邮箱
            const verifyCodeRandomKey = `user-${username}_verify-code-random`;
            const verifyCodeRandomSendingKey = `${verifyCodeRandomKey}-sending`;
            redisClient.get(verifyCodeRandomSendingKey, function (error, result) { // 规定期间内，只允许发送一次验证码
                if (error) {
                    self.render({
                        message: '查询邮箱(短信)验证码是否在有效期内时出现错误',
                        failureInfo: error,
                    });
                    return;
                }
                if (result !== null) {
                    redisClient.ttl(verifyCodeRandomSendingKey, function (error, ttl) { // 剩余时间
                        if (error) {
                            self.render({
                                message: '查询邮箱(短信)验证码是否在有效期内时出现错误',
                                failureInfo: error,
                            });
                            return;
                        }
                        self.render({
                            message: `${result / 60}分钟之内只允许发送一次`,
                            failureCode: 'not expired',
                            result: {
                                remainingTime: ttl,
                            },
                        });
                    });
                    return;
                }
                const verifyCode = randomNum(100000, 999999); // random随机验证码
                const expirationDate = 10;// 有效期,单位是分钟
                const autoUser = 'this-is-a-code@foxmail.com';
                const transporter = nodemailer.createTransport({
                    service: 'qq',
                    auth: {
                        user: autoUser, // 发送者
                        pass: 'paudrqaxbntmigfe', // 授权码,通过QQ获取
                    },
                });
                const mailOptions = {
                    from: autoUser, // 发送者
                    to: username, // 接受者,可以同时发送多个,以逗号隔开
                    subject: verifyCode, // 标题
                    text: `这是一条验证码,有效期${expirationDate}分钟,此验证码仅用于账号注册`, // 文本
                    html: '', // html
                };
                // 验证码存redis里(不存session，是因为session主要用来存用户登录的有效期，时间比较长，验证码过期期限比较短，过期时间不一致，所以不能存到一起。)
                transporter.sendMail(mailOptions, function (error, result) {
                    if (error) {
                        // 验证码发送失败
                        self.render({
                            message: '验证码发送失败,请重新发送',
                            failureInfo: error,
                        });
                    } else {
                        // 在redis里设置上注册验证码的数据(异步的)(此处假设百分百设置成功)
                        redisClient.set(verifyCodeRandomKey, verifyCode, 'ex', expirationDate * 60);
                        redisClient.set(verifyCodeRandomSendingKey, expirationDate * 60, 'ex', expirationDate * 60); // 10分钟内只允许发送一次
                        self.render({
                            status: 'success',
                            message: '验证码发送成功',
                            result: {
                                remainingTime: expirationDate * 60,
                            },
                        });
                    }
                });
            });
        }
    }
}

module.exports = Sub;
