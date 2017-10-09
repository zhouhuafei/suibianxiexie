// 开发模块,页面路由的控制器
const Super = require('./super');// 超类型

class DevModule extends Super {
    // 处理数据dataInfo
    handleData() {
        const self = this;
        const tools = self.tools; // 工具方法集合
        const opts = self.opts;
        const req = opts.req;
        const query = req.query;
        // dataInfo数据处理待续...
        this.render();// 渲染视图(渲染数据)
    }
}

module.exports = DevModule;
