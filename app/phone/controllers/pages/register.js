// 注册,页面路由的控制器
const Super = require('./super');// 超类型

class Register extends Super {
    constructor(json) {
        super(json);
        this.fileName = this.path.basename(__filename, '.js');// 覆盖超类型的属性
        this.init();// 调用超类型的初始化数据
        this.render();// 渲染视图(渲染数据)
    }

    // 处理数据dataInfo
    handleData() {
        const self = this;
        const tools = self.tools; // 工具方法集合
        const req = self.opts.req;
        const query = req.query;
        req.session['verify-code-register-canvas'] = tools.getRandom(100000, 999999);// canvas图形验证码
        // dataInfo数据处理待续...
        console.log('session', req.session);
    }
}

module.exports = Register;
