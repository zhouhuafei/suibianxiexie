const Super = require('../api-super/super'); // 超类型
const Galleries = require('../../models/mongoose/galleries');

class Sub extends Super {
    // (增)(覆)获取数据(覆盖超类型)
    postData() {
        const self = this;
        const tools = self.tools; // 工具方法集合
        const opts = self.opts;
        const req = opts.req;
        const data = req.data;
        const files = req.files;
        const length = files.length;
        if (length === 0) {
            self.render({message: '请选择图片'});
            return;
        }
        self.render({
            status: 'success',
            message: '上传成功',
            result: {testData: [data, req.files, req.file]},
        });
        /*
        const galleries = new Galleries();
        galleries.save(function (error, result) {
            // 数据库插入出现错误
            if (error) {
                self.render({
                    message: '数据库插入出现错误',
                    failureInfo: error,
                });
                return;
            }
            self.render({
                status: 'success',
                message: '上传成功',
            });
        });
        */
    }
}

module.exports = Sub;
