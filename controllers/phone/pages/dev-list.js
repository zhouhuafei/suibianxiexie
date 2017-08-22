// 开发列表,页面路由的控制器
let Super = require('../pages-super/super');// 超类型

class DevList extends Super {
    constructor (json) {
        super(json);
        this.fileName = this.path.basename(__filename, '.js');// 覆盖超类型的属性
        this.initData();// 调用超类型的初始化数据
        this.handleData();// 处理数据pageInfo
    }

    handleData () {
        // let req = this.opts.req;
        // let query = req.query;
        // pageInfo数据处理待续...
    }
}

module.exports = DevList;
