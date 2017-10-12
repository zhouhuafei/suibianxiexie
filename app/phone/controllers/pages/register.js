const Super = require('./super');// 超类型

class Sub extends Super {
    // 处理数据(覆盖超类型)
    handleData() {
        const self = this;
        const tools = self.tools; // 工具方法集合
        const opts = self.opts;
        const req = opts.req;
        const data = req.data;
        req.session['verify-code-register-canvas'] = tools.getRandom(100000, 999999);// canvas图形验证码
        // console.log('session', req.session);
        this.render();// 渲染视图(渲染数据)
    }
}

module.exports = Sub;
