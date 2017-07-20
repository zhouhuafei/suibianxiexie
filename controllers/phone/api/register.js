//开发列表,页面路由的控制器
let Super = require('./super');//超类型

class DevList extends Super {
    constructor(json) {
        super(json);
        this.initData();//调用超类型的初始化数据
    }

    //获取数据(增)(覆盖超类型)
    postData() {
        //apiInfo数据处理待续...
        let opts = this.opts;
        let req = opts.req;
        let username = '';//用户名
        let password = '';//密码
        let verificationCode = '';//验证码
        console.log('post');
        console.log('body', this.opts.req.body);
        console.log('query', this.opts.req.query);
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