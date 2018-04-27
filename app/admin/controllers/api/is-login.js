const Super = require('../api-super/super'); // 超类型
const Admin = require(`../../models/mongoose/admins`);

class Sub extends Super {
    // (查)(盖)查找数据(覆盖超类型)
    getData() {
        const self = this;
        const tools = self.tools; // 工具方法集合
        const opts = self.opts;
        const app = opts.app;
        const appConfig = app.appConfig;
        const req = opts.req;
        const session = req.session;
        const data = req.data;
        const username = data.username; // 用户名
        this.render({
            status: 'success',
            message: '成功',
        });
        // dataInfo数据处理待续...
    }
}

module.exports = Sub;
