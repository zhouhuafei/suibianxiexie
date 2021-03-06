const Super = require('../api-super/super'); // 超类型
const checkStr = require('zhf.check-str');

class Sub extends Super {
    // (查)(覆)增加数据(覆盖超类型)
    getData() {
        const self = this;
        const opts = self.opts;
        const req = opts.req;
        const data = req.data;
        const username = (data['username'] || '').trim(); // 用户名
        if (checkStr.isEmpty(username)) {
            self.render({message: '用户名不能为空'});
            return;
        }
        const Admin = require('../../models/mongoose/admin');
        // 检测账号是否存在。
        Admin.findOne({username: username}, function (error, result) {
            if (error) {
                self.render({message: '数据库查询出现错误'});
            }
            if (result) {
                self.render({status: 'success', message: '账号存在', result: {isExist: true}});
            } else {
                self.render({status: 'success', message: '账号不存在', result: {isExist: false}});
            }
        });
    }
}

module.exports = Sub;
