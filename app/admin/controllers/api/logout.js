const Super = require('../api-super/super'); // 超类型

class Sub extends Super {
    // (查)(盖)查找数据(覆盖超类型)
    getData() {
        const self = this;
        const opts = self.opts;
        const req = opts.req;
        delete req.session.userInfo;
        this.render({
            status: 'success',
            message: '退出成功',
        });
    }
}

module.exports = Sub;
