//开发列表,页面路由的控制器
let Super = require('./super');//超类型

class DevList extends Super {
    constructor(json) {
        super(json);
        this.initData();//调用超类型的初始化数据
        this.renderData();//渲染数据
    }

    //获取数据(增)(覆盖超类型)
    postData() {
        //apiInfo数据处理待续...
        let tools = this.tools;//工具方法集合
        let opts = this.opts;
        let req = opts.req;
        let body = req.body;
        let sesstion = req.session;
        let username = body.username;//用户名
        let password = body.password;//密码
        let verifyCode = body['verify-code'];//验证码
        console.log('username', username);
        console.log('password', password);
        console.log('verifyCode', verifyCode);

        if (!tools.isEmail(username) || tools.isSpace(password) || Number(sesstion[username]) !== Number(verifyCode)) {
            return false;
        }
        delete sesstion[username];
        //存入数据库

    }

    //删除数据(删)(覆盖超类型)
    deleteData() {
        //apiInfo数据处理待续...
        console.log('delete');
        console.log('body', this.opts.req.body);
        console.log('query', this.opts.req.query);
    }

    //修改数据(改)(覆盖超类型)
    putData() {
        //apiInfo数据处理待续...
        console.log('put');
        console.log('body', this.opts.req.body);
        console.log('query', this.opts.req.query);
    }

    //查找数据(查)(覆盖超类型)
    getData() {
        //apiInfo数据处理待续...
        console.log('get');
        console.log('body', this.opts.req.body);
        console.log('query', this.opts.req.query);
    }
}

module.exports = DevList;