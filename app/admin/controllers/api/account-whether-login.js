const Super = require('../api-super/super'); // 超类型
const Admin = require(`../../models/mongoose/admin`);
const checkStr = require('zhf.check-str');

class Sub extends Super {
    // (查)(覆)查找数据(覆盖超类型)
    getData() {
        const self = this;

        const opts = self.opts;
        const req = opts.req;
        const session = req.session;
        const data = req.data;
        const username = (data.username || '').trim(); // 用户名
        let isLogin = false;
        if (checkStr.isEmpty(username)) {
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
            Admin.findOne({username: username}, function (error, result) {
                // 数据库查询出现错误
                if (error) {
                    self.render({message: '数据库查询出现错误'});
                }
                if (result) {
                    isLogin = result.loginStampSession === session.adminInfo.loginStampSession;
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
