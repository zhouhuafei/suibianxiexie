//开发列表,页面路由的控制器
let Super = require('./super');//超类型

class DevList extends Super {
    constructor(json) {
        super(json);
        this.initData();//调用超类型的初始化数据
        this.handleData();//处理数据pageInfo
    }

    handleData() {
        let req = this.opts.req;
        let query = req.query;
        let method = req.method.toLowerCase(); //请求方式

        //获取数据(增)
        if (method === 'post') {

        }

        //删除数据(删)
        if (method === 'delete') {

        }

        //修改数据(改)
        if (method === 'put') {

        }

        //查找数据(查)
        if (method === 'get') {

        }

        //pageInfo数据处理待续...
    }
}

module.exports = DevList;