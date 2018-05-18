const Super = require('../api-super/super'); // 超类型
const WebsiteInfo = require('../../models/mongoose/website-info');

class Sub extends Super {
    // (增)(覆)获取数据(覆盖超类型)
    postData() {
        const self = this;
        console.log(self.opts.req.data);
        self.render({
            status: 'success',
            message: '成功',
        });
    }

    // (改)(覆)修改数据(覆盖超类型)
    putData() {
        const self = this;
        console.log(self.opts.req.data);
        self.render({
            status: 'success',
            message: '成功',
        });
    }

    // (查)(覆)查找数据(覆盖超类型)
    getData() {
        const self = this;
        const opts = self.opts;
        const req = opts.req;
        console.log(req.isLogin);
        WebsiteInfo.findOne({}, function (error, result) {
            if (error) {
                self.render({
                    message: '数据库查询失败',
                    failureInfo: error,
                });
            }
            if (result) {
                self.render({
                    status: 'success',
                    message: '查询成功',
                    result,
                });
            } else {
                self.render({message: '数据不存在'});
            }
        });
    }
}

module.exports = Sub;
