const Super = require('../pages-super/super'); // 超类型
const randomNum = require('zhf.random-num');

class Sub extends Super {
    // (处)(覆)处理数据(覆盖超类型)
    handleData() {
        const self = this;
        const opts = self.opts;
        const req = opts.req;
        const data = req.data;
        // 图文验证码应该是一个单独的接口才对
        // req.session['verify-code-canvas'] = randomNum(100000, 999999);// canvas图形验证码
        // console.log('session', req.session);
        this.render();// 渲染视图(渲染数据)
    }
}

module.exports = Sub;
