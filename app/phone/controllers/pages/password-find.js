// 忘记密码,去找回,页面路由的控制器
const Super = require('./super');// 超类型

class PasswordFind extends Super {
    constructor(json) {
        super(json);
        this.fileName = this.path.basename(__filename, '.js');// 覆盖超类型的属性
        this.init();// 调用超类型的初始化数据
        this.render();// 渲染视图(渲染数据)
    }

    // 处理数据dataInfo
    handleData() {
        const req = this.opts.req;
        const query = req.query;
        // dataInfo数据处理待续...
    }
}

module.exports = PasswordFind;
