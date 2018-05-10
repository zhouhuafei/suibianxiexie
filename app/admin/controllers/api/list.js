const Super = require('../api-super/super'); // 超类型

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
            message: '成功',
            result: {data: [data, req.files, req.file]},
        });
    }

    // (删)(覆)删除数据(覆盖超类型)
    deleteData() {
        this.render({
            status: 'success',
            message: '成功',
        });
    }

    // (改)(覆)修改数据(覆盖超类型)
    putData() {
        this.render({
            status: 'success',
            message: '成功',
        });
    }

    // (查)(覆)查找数据(覆盖超类型)
    getData() {
        this.render({
            status: 'success',
            message: '成功',
        });
    }
}

module.exports = Sub;
