const Super = require('../api-super/super'); // 超类型
const multiparter = require('multiparty');
const form = new multiparter.Form();

class Sub extends Super {
    // (增)(覆)获取数据(覆盖超类型)
    postData() {
        const self = this;
        const tools = self.tools; // 工具方法集合
        const opts = self.opts;
        const req = opts.req;
        const data = req.data;
        form.parse(req, parse);

        function parse(error, fields, files) {
            if (error) {
                self.render({message: 'multiparty模块数据解析parse失败'});
            } else {
                self.render({
                    status: 'success',
                    message: '数据库操作待续...',
                });
            }
        }
    }
}

module.exports = Sub;
