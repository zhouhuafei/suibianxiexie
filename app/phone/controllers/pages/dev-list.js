const Super = require('../pages-super/super'); // 超类型

class Sub extends Super {
    // 处理数据(覆盖超类型)
    handleData() {
        const self = this;
        const routes = self.dataInfo.routes;
        const routesRender = [];
        Object.keys(routes).forEach(function (key) {
            if (key.indexOf('dev-') !== -1 && key.indexOf('dev-list') === -1) {
                routesRender.push(routes[key]);
            }
        });
        this.dataInfo.page.routesRender = routesRender;
        self.render();// 渲染视图(渲染数据)
    }
}

module.exports = Sub;
