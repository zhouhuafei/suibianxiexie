//我的,页面路由的控制器
let Super = require('./super');//超类型

class Mine extends Super {
    constructor(json) {
        super(json);
        this.fileName = this.path.basename(__filename, '.js');//覆盖超类型的属性
        this.initData();//调用超类型的初始化数据
        this.handleData();//处理数据pageInfo
    }

    handleData() {
        let req = this.opts.req;
        let query = req.query;
        //pageInfo数据处理待续...
        let footerNavData = this.pageInfo.footerNav.data;
        footerNavData.unshift(footerNavData.pop(footerNavData.length - 1));
    }
}

module.exports = Mine;