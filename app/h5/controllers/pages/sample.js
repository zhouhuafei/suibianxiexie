const Super = require('../pages-super/super'); // 超类型

class Sub extends Super {
    // (处)(覆)处理数据(覆盖超类型)
    handleData() {
        const self = this;
        const opts = self.opts;
        const req = opts.req;
        const data = req.data;
        self.render();// 渲染视图(渲染数据)
    }
}

module.exports = Sub;
