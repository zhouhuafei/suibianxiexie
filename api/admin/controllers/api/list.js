const Super = require('../api-super/super'); // 超类型

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
        self.render({
            status: 'success',
            message: '成功',
        });
    }
}

module.exports = Sub;
