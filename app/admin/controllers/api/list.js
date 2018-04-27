const Super = require('../api-super/super'); // 超类型

class Sub extends Super {
    // (增)(盖)获取数据(覆盖超类型)
    postData() {
        // dataInfo数据处理待续...
        this.render({
            status: 'success',
            message: '成功',
        });
    }

    // (删)(盖)删除数据(覆盖超类型)
    deleteData() {
        // dataInfo数据处理待续...
        this.render({
            status: 'success',
            message: '成功',
        });
    }

    // (改)(盖)修改数据(覆盖超类型)
    putData() {
        // dataInfo数据处理待续...
        this.render({
            status: 'success',
            message: '成功',
        });
    }

    // (查)(盖)查找数据(覆盖超类型)
    getData() {
        // dataInfo数据处理待续...
        this.render({
            status: 'success',
            message: '成功',
        });
    }
}

module.exports = Sub;
