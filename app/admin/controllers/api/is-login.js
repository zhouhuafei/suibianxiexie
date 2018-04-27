const Super = require('../api-super/super'); // 超类型
const Admins = require(`../../models/mongoose/admins`);

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
        let isLogin = false;
        Admins.findOne({username: username}, function (error, result) {
            // 数据库查询出现错误
            if (error) {
                self.render({
                    message: '数据库查询出现错误',
                });
            }
            if (result) {
                if (session.adminInfo) {
                    isLogin = result.login.stamp === session.adminInfo.login.stamp;
                }
                self.render({
                    status: 'success',
                    message: `${isLogin ? '已' : '未'}登录`,
                    result: {
                        data: [{isLogin: isLogin}],
                    },
                });
            } else {
                self.render({
                    message: '账号不存在',
                });
            }
        });
    }
}

module.exports = Sub;
