const Super = require('../api-super/super'); // 超类型
const fs = require('fs');
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
        const dbFiles = [];
        files.forEach(function (file) {
            console.log('api-file', file);
        });
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

    // (删)(覆)删除数据(覆盖超类型)
    deleteData() {
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
        console.log(self.opts.req.data);
        // all 全部分类 - 数据库里找全部
        // system 系统分类 - 读取硬盘里的文件
        // default 默认分类 - 数据库里根据id找
        // 一堆hash值 其他分类 - 数据库里根据id找
        self.render({
            status: 'success',
            message: '成功',
        });
    }
}

module.exports = Sub;
