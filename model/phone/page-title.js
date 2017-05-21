//对页面的标题进行处理
const phoneConfig = require('../../route/phone/config');

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
            for (var attr1 in phoneConfig) {
                if (phoneConfig.hasOwnProperty(attr1)) {
                    if (phoneConfig[attr1].route == path) {
                        if (phoneConfig[attr1].title) {
                            this.result = phoneConfig[attr1].title;
                        }
                    }
                }
            }
        }
    }
}

module.exports = pageTitle;