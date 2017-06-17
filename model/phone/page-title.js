//标题的数据
const routeConfig = require('../../route/phone/config');

class pageTitle {
    constructor(json) {
        this.opts = json || {};
        this.result = '没有配置标题';
        this.init();
    }

    init() {
        var route = this.opts.req.route;
        if (route) {
            var path = route.path;
            //页面标题
            for (var attr in routeConfig) {
                if (routeConfig.hasOwnProperty(attr)) {
                    if (routeConfig[attr].route == path) {
                        if (routeConfig[attr].title) {
                            this.result = routeConfig[attr].title;
                        }
                    }
                }
            }
        }
    }
}

module.exports = pageTitle;