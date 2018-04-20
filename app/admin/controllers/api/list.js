const Super = require('../api-super/super'); // 超类型

class Sub extends Super {
    // 获取数据(增)(覆盖超类型)
    postData() {
        // dataInfo数据处理待续...
    }

    // 删除数据(删)(覆盖超类型)
    deleteData() {
        // dataInfo数据处理待续...
    }

    // 修改数据(改)(覆盖超类型)
    putData() {
        // dataInfo数据处理待续...
    }

    // 查找数据(查)(覆盖超类型)
    getData() {
        // dataInfo数据处理待续...
    }
}

module.exports = Sub;
