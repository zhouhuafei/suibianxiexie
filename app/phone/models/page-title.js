// 标题的数据
const routeConfig = require('../routes/pages/config');

class pageTitle {
    constructor(json) {
        this.opts = json || {};
        this.result = '没有配置标题';
        this.init();
    }

    init() {
        const self = this;
        const route = self.opts.req.route;
        if (route) {
            const path = route.path;
            // 页面标题
            Object.keys(routeConfig).forEach(function (attr) {
                if (routeConfig[attr].route === path) {
                    if (routeConfig[attr].title) {
                        self.result = routeConfig[attr].title;
                    }
                }
            });
        }
    }
}

module.exports = pageTitle;
