//开发列表,页面路由的控制器
let Super = require('./super');//超类型
let nodemailer = require('nodemailer');//邮箱模块

class DevList extends Super {
    constructor(json) {
        super(json);
        this.initData();//调用超类型的初始化数据
    }

    //获取数据(增)(覆盖超类型)
    postData() {
        //apiInfo数据处理待续...
    }

    //删除数据(删)(覆盖超类型)
    deleteData() {
        //apiInfo数据处理待续...
    }

    //修改数据(改)(覆盖超类型)
    putData() {
        //apiInfo数据处理待续...
    }

    //查找数据(查)(覆盖超类型)
    getData() {
        //apiInfo数据处理待续...
        let opts = this.opts;
        let req = opts.req;
        //检查用户名是否已被注册
        //没被注册再发送验证码
        function getVerifyCode(max, min) {
            return Math.round(Math.random() * (max - min) + min);
        }

        let verifyCode = getVerifyCode(999999, 100000);//随即验证码

        let transporter = nodemailer.createTransport({
            service: 'qq',
            auth: {
                user: '1123486116@qq.com',
                pass: 'qtpavohugfediehj' //授权码,通过QQ获取

            }
        });
        let mailOptions = {
            from: '1123486116@qq.com', // 发送者
            to: '1256485941@qq.com', // 接受者,可以同时发送多个,以逗号隔开
            subject: '验证码测试', // 标题
            text: verifyCode, // 文本
            html: ``//html
        };
        //这里异步了怎么解决
        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log(err);
                return;
            }
            console.log('发送成功');
        });
    }
}

module.exports = DevList;