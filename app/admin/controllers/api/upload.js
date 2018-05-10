const Super = require('../api-super/super'); // 超类型
const Uploads = require('../../models/mongoose/uploads');
const multiparter = require('multiparty');
const appConfig = require('../../../../app-config');
console.log(`${appConfig.projectDir}dist-upload/admin/`);
const form = new multiparter.Form({uploadDir: `${appConfig.projectDir}dist-upload/admin/`});

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
                self.render({
                    message: 'multiparty模块数据解析(parse)失败',
                    failureInfo: error,
                });
            } else {
                console.log('fields', fields);
                console.log('files', files);
                self.render({
                    status: 'success',
                    message: '上传成功',
                    result: {data: []},
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
    }
}

module.exports = Sub;
