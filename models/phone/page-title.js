//标题的数据
const routeConfig = require('../../routes/phone/config');

class pageTitle {
    constructor(json) {
        this.opts = json || {};
        this.result = '没有配置标题';
        this.init();
    }

    init() {
        let route = this.opts.req.route;
        if (route) {
            let path = route.path;
            //页面标题
            for (let attr in routeConfig) {
                if (routeConfig.hasOwnProperty(attr)) {
                    if (routeConfig[attr].route === path) {
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