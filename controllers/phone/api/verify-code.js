// 开发列表,页面路由的控制器
const Super = require('./super');// 超类型
const nodemailer = require('nodemailer');// 邮箱模块

class DevList extends Super {
    constructor(json) {
        super(json);
        this.initData();// 调用超类型的初始化数据
    }

    // 获取数据(增)(覆盖超类型)
    postData() {
        // apiInfo数据处理待续...
    }

    // 删除数据(删)(覆盖超类型)
    deleteData() {
        // apiInfo数据处理待续...
    }

    // 修改数据(改)(覆盖超类型)
    putData() {
        // apiInfo数据处理待续...
    }

    // 查找数据(查)(覆盖超类型)
    getData() {
        // apiInfo数据处理待续...
        const self = this;
        const tools = this.tools;// 工具方法集合
        const opts = this.opts;
        const req = opts.req;
        const query = req.query;
        const username = query.username;
        if (!tools.isEmail(username)) {
            // 用户名不是邮箱
            self.apiInfo = {
                status: 'failure',
                message: '用户名需要是一个邮箱',
            };
            self.renderData();
        } else {
            // 用户名是邮箱

            // 检查用户名是否已被注册

            // 没被注册再发送验证码
            const verifyCode = tools.getRandom(100000, 999999);// 随机验证码
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
            transporter.sendMail(mailOptions, function (error, response) {
                if (error) {
                    self.apiInfo = {
                        status: 'failure',
                        message: '验证码发送失败',
                        error: error,
                    };
                } else {
                    self.apiInfo = {
                        status: 'success',
                        message: '验证码发送成功',
                    };
                    // 验证码存session
                    const session = req.session;
                    session[username] = verifyCode;
                    console.log('验证码过期之前的键名:', username);
                    console.log('验证码过期之前的session:', session);
                    setTimeout(function (key) {
                        // 删除session有BUG,如果有两个验证码,有一个删不掉
                        // 待续...
                        console.log('验证码过期之后的键名:', key);
                        session[key] = null;
                        console.log('验证码过期之后的session:', session);
                    }, expirationDate * 60000, username);
                }
                self.renderData();// 渲染数据
            });
        }
    }
}

module.exports = DevList;
