const Super = require('../api-super/super'); // 超类型
const Admins = require(`../../models/mongoose/admins`);

class Sub extends Super {
    // (查)(覆)查找数据(覆盖超类型)
    getData() {
        const self = this;
        const tools = self.tools; // 工具方法集合
        const opts = self.opts;
        const req = opts.req;
        const session = req.session;
        const data = req.data;
        const username = data.username || ''; // 用户名
        let isLogin = false;
        if (tools.checkStr.isEmpty(username)) {
            self.render({message: '用户名不能为空'});
            return;
        }
        if (!session.adminInfo) {
            self.render({
                status: 'success',
                message: `未登录`,
                result: {isLogin},
            });
        } else {
            Admins.findOne({username: username}, function (error, result) {
                // 数据库查询出现错误
                if (error) {
                    self.render({message: '数据库查询出现错误'});
                }
                if (result) {
                    isLogin = result.loginStamp === session.adminInfo.loginStamp;
                    self.render({
                        status: 'success',
                        message: `${isLogin ? '已' : '未'}登录`,
                        result: {isLogin},
                    });
                } else {
                    self.render({message: '账号不存在'});
                }
            });
        }
    }
}

module.exports = Sub;
