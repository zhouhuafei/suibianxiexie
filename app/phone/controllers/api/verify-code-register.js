// 开发列表,页面路由的控制器
const Super = require('./super');// 超类型
const nodemailer = require('nodemailer');// 邮箱模块

class DevList extends Super {
    constructor(json) {
        super(json);
        this.init();// 调用超类型的初始化数据
    }

    // 获取数据(增)(覆盖超类型)
    postData() {
        // dataInfo数据处理待续...
    }

    // 删除数据(删)(覆盖超类型)
    deleteData() {
        // dataInfo数据处理待续...
    }

    // 修改数据(改)(覆盖超类型)
    putData() {
        // dataInfo数据处理待续...
    }

    // 查找数据(查)(覆盖超类型)
    getData() {
        // dataInfo数据处理待续...
        const self = this;
        const tools = this.tools;// 工具方法集合
        const opts = this.opts;
        const req = opts.req;
        const query = req.query;
        const username = query.username;
        if (!tools.isEmail(username)) {
            // 用户名不是邮箱
            self.extendDataInfo({
                status: 'failure',
                message: '账号需要是一个邮箱',
            });
            self.render();
        } else {
            // 用户名是邮箱

            // 检查用户名是否已被注册

            // 没被注册再发送验证码
            const verifyCode = tools.getRandom(100000, 999999);// random随机验证码
            const expirationDate = 1;// 有效期,单位是分钟
            const autoUser = 'this-is-a-code@foxmail.com';
            const transporter = nodemailer.createTransport({
                service: 'qq',
                auth: {
                    user: autoUser, // 发送者
                    pass: 'bwdddjldhdvihdaf', // 授权码,通过QQ获取
                },
            });
            const mailOptions = {
                from: autoUser, // 发送者
                to: username, // 接受者,可以同时发送多个,以逗号隔开
                subject: verifyCode, // 标题
                text: `这是一条验证码,有效期${expirationDate}分钟`, // 文本
                html: '', // html
            };
            // 验证码存session里
            transporter.sendMail(mailOptions, function (error, response) {
                if (error) {
                    self.extendDataInfo({
                        status: 'failure',
                        message: '验证码发送失败',
                        error: error,
                    });
                } else {
                    self.extendDataInfo({
                        status: 'success',
                        message: '验证码发送成功',
                        error: error,
                    });
                    (function (username) {
                        req.session[`verify-code-register-random-${username}`] = verifyCode;
                        setTimeout(function () {
                            delete req.session[`verify-code-register-random-${username}`];
                            console.log('over', req.session[`verify-code-register-random-${username}`]);
                        }, expirationDate * 60 * 1000);
                    }(username));
                }
                self.render();// 渲染数据
            });
            // 方案二 验证码存数据库里(过期时间要跑脚本,无奈,建议使用redis数据库)
            /*
            const VerifyCodes = require('../../schemas/verify-codes');
            const verifyCodes = new VerifyCodes({
                username: '1123486116@qq.com',
            });
            verifyCodes.save(function (error, response) {
                if (error) {
                    console.log(`Error:${error}`);
                    self.extendDataInfo({
                        status: 'failure',
                        message: '验证码发送失败',
                        error: error,
                    });
                    self.render();// 渲染数据
                } else {
                    console.log(`Res:${response}`);
                    transporter.sendMail(mailOptions, function (error, response) {
                        if (error) {
                            self.extendDataInfo({
                                status: 'failure',
                                message: '验证码发送失败',
                                error: error,
                            });
                        } else {
                            self.extendDataInfo({
                                status: 'success',
                                message: '验证码发送成功',
                                error: error,
                            });
                        }
                        self.render();// 渲染数据
                    });
                }
            });
            */
        }
    }
}

module.exports = DevList;
