// 开发列表,页面路由的控制器
let Super = require('../api-super/super');// 超类型
let nodemailer = require('nodemailer');// 邮箱模块

class DevList extends Super {
    constructor (json) {
        super(json);
        this.initData();// 调用超类型的初始化数据
    }

    // 获取数据(增)(覆盖超类型)
    postData () {
        // apiInfo数据处理待续...
    }

    // 删除数据(删)(覆盖超类型)
    deleteData () {
        // apiInfo数据处理待续...
    }

    // 修改数据(改)(覆盖超类型)
    putData () {
        // apiInfo数据处理待续...
    }

    // 查找数据(查)(覆盖超类型)
    getData () {
        // apiInfo数据处理待续...
        let self = this;
        let tools = this.tools;// 工具方法集合
        let opts = this.opts;
        let req = opts.req;
        let {username} = req.query;
        if (!tools.isEmail(username)) {
            self.apiInfo = {
                status: 'failure',
                message: '用户名需要是一个邮箱',
            };
            self.renderData();
            return false;
        }// 用户名是不是邮箱

        // 检查用户名是否已被注册

        // 没被注册再发送验证码
        let verifyCode = tools.getRandom(100000, 999999);// 随机验证码
        // 验证码存session
        req.session[username] = verifyCode;
        console.log(req.session);
        let expirationDate = 10;// 有效期,单位是分钟
        let autoUser = 'this-is-a-code@foxmail.com';
        let transporter = nodemailer.createTransport({
            service: 'qq',
            auth: {
                user: autoUser, // 发送者
                pass: 'bwdddjldhdvihdaf', // 授权码,通过QQ获取
            },
        });
        let mailOptions = {
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
                    message: error,
                };
                return;
            } else {
                self.apiInfo = {
                    status: 'success',
                    message: '验证码发送成功',
                };
            }
            self.renderData();// 渲染数据
        });
    }
}

module.exports = DevList;
