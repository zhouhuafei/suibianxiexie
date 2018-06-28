const Super = require('../api-super/super'); // 超类型
const tools = require('zhf.tools');

class Sub extends Super {
    // (查)(覆)增加数据(覆盖超类型)
    getData() {
        const self = this;
        const tools = self.tools; // 工具方法集合
        const opts = self.opts;
        const req = opts.req;
        const data = req.data;
        const username = (data['username'] || '').trim(); // 用户名
        const checkStr = tools.checkStr;
        if (checkStr.isEmpty(username)) {
            self.render({
                message: '用户名不能为空',
                result: {'username': username},
            });
            return;
        }
        const Admins = require('../../models/mongoose/admins');
        // 检测新用户名是否已经被注册。
        Admins.findOne({username: username}, function (error, result) {
            if (error) {
                self.render({message: '数据库查询出现错误'});
            }
            if (result) {
                self.render({message: '账号存在', isExist: true});
            } else {
                self.render({message: '账号不存在', isExist: false});
            }
        });
    }
}

module.exports = Sub;
