//对页面的标题进行处理
const page = require('../../config/page');

class pageTitle {
    constructor(json) {
        this.opts = json || {};
        this.result = '没有配置标题';
        this.init();
    }

    init() {
        var path = this.opts.req.url.pathname;
        for (var attr in page) {
            if (page.hasOwnProperty(attr)) {
                if (page[attr].route == path) {
                    if (page[attr].title) {
                        this.result = page[attr].title;
                    }
                }
            }
        }
    }
}

module.exports = pageTitle;