const Super = require('../api-super/super'); // 超类型
const Uploads = require('../../models/mongoose/uploads');

class Sub extends Super {
    // (增)(覆)获取数据(覆盖超类型)
    postData() {
        const self = this;
        const tools = self.tools; // 工具方法集合
        const opts = self.opts;
        const req = opts.req;
        const data = req.data;
        self.render({
            status: 'success',
            message: '上传成功',
            result: {data: [data, req.files, req.file]},
        });
        /*
        const uploads = new Uploads({
            name: null,
            type: null,
            size: {
                B: null, // 多少字节
                KB: null, // 多少千字节
                M: null, // 多少兆
            },
            url: null,
            createTime: null,
        });
        uploads.save(function (error, result) {
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
                result: {data: []},
            });
        });
        */
    }
}

module.exports = Sub;
