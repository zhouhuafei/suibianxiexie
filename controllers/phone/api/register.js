// 开发列表,页面路由的控制器
const Super = require('./super');// 超类型

class DevList extends Super {
    constructor(json) {
        super(json);
        this.initData();// 调用超类型的初始化数据
    }

    // 新增数据(增)(覆盖超类型)
    postData() {
        // apiInfo数据处理待续...
        const self = this;
        const tools = self.tools;// 工具方法集合
        const opts = self.opts;
        const req = opts.req;
        const contentType = req.headers['content-type'].split(';')[0];
        if (contentType === 'multipart/form-data') {
            const multiparter = require('multiparty');
            const form = new multiparter.Form();
            form.parse(req, function (err, fields, files) {
                const username = fields.username;// 用户名
                const password = fields.password;// 密码
                const verifyCode = fields.verifyCode;// 验证码
                console.log('username', username);
                console.log('password', password);
                console.log('verifyCode', verifyCode);
                self.renderData();// 渲染数据
            });
        } else {
            const body = req.body;
            const username = body.username;// 用户名
            const password = body.password;// 密码
            const verifyCode = body.verifyCode;// 验证码
            const session = req.session;
            console.log('username', username);
            console.log('password', password);
            console.log('verifyCode', verifyCode);
            if (tools.isEmail(username) && !tools.isEmpty(password) || Number(session[username]) === Number(verifyCode)) {
                // 存入数据库
                delete session[username]; // 删除session
            }
            self.renderData();// 渲染数据
        }
    }

    // 删除数据(删)(覆盖超类型)
    deleteData() {
        // apiInfo数据处理待续...
        console.log('delete');
        console.log('body', this.opts.req.body);
        console.log('query', this.opts.req.query);
    }

    // 修改数据(改)(覆盖超类型)
    putData() {
        // apiInfo数据处理待续...
        console.log('put');
        console.log('body', this.opts.req.body);
        console.log('query', this.opts.req.query);
    }

    // 查找数据(查)(覆盖超类型)
    getData() {
        // apiInfo数据处理待续...
        console.log('get');
        console.log('body', this.opts.req.body);
        console.log('query', this.opts.req.query);
    }
}

module.exports = DevList;
