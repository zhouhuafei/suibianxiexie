// 开发列表,页面路由的控制器
const Super = require('./super'); // 超类型

class DevList extends Super {
    constructor(json) {
        super(json);
        this.init();// 调用超类型的初始化数据
    }

    // 新增数据(增)(覆盖超类型)
    postData() {
        // dataInfo数据处理待续...
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
                self.render({
                    status: 'failure',
                    message: '数据库操作待续...',
                });
            });
        } else {
            const body = req.body;
            const username = body.username;// 用户名
            const password = body.password;// 密码
            const verifyCode = body.verifyCode;// 验证码
            const session = req.session;
            if (!tools.isEmail(username)) {
                self.render({
                    status: 'failure',
                    message: '账号格式有误',
                    result: {data: [{username: username}]},
                });
            } else if (tools.isEmpty(password)) {
                self.render({
                    status: 'failure',
                    message: '密码不能为空',
                    result: {data: [{password: password}]},
                });
            } else if (Number(session[`verify-code-register-random-${username}`]) !== Number(verifyCode)) {
                self.render({
                    status: 'failure',
                    message: '验证码有误,请重新获取验证码',
                    result: {data: [{verifyCode: verifyCode}]},
                });
            } else {
                const Users = require('../../schemas/users');
                Users.find({username: username}, function (error, response) {
                    // 数据库查询出现错误
                    if (error) {
                        self.render({
                            status: 'failure',
                            message: '数据库查询出现错误',
                        });
                    }
                    // 已被注册
                    if (response) {
                        self.render({
                            status: 'failure',
                            message: '账号已被注册',
                        });
                    }
                    // 未被注册
                    if (!response) {
                        const users = new Users({
                            username: username,
                            password: password,
                            createTime: new Date(),
                        });
                        users.save(function (error, response) {
                            if (error) {
                                // 数据库插入出现错误
                                self.render({
                                    status: 'failure',
                                    message: '数据库插入出现错误',
                                    error: error,
                                });
                            } else {
                                // 数据库插入成功
                                delete session[`verify-code-register-random-${username}`];// 删除session里存储的验证码
                                self.render({
                                    status: 'success',
                                    message: '注册成功',
                                    error: error,
                                    result: {data: [{username: username}]},
                                });
                            }
                        });
                    }
                });
            }
        }
    }

    // 删除数据(删)(覆盖超类型)
    deleteData() {
        // dataInfo数据处理待续...
        console.log('delete');
        console.log('body', this.opts.req.body);
        console.log('query', this.opts.req.query);
    }

    // 修改数据(改)(覆盖超类型)
    putData() {
        // dataInfo数据处理待续...
        console.log('put');
        console.log('body', this.opts.req.body);
        console.log('query', this.opts.req.query);
    }

    // 查找数据(查)(覆盖超类型)
    getData() {
        // dataInfo数据处理待续...
        console.log('get');
        console.log('body', this.opts.req.body);
        console.log('query', this.opts.req.query);
    }
}

module.exports = DevList;
