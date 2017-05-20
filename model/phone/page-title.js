//对页面的标题进行处理
const page = require('../../route/phone/config');
const pages = page.pages;

const api = page.api;

class pageTitle {
    constructor(json) {
        this.opts = json || {};
        this.result = '没有配置标题';
        this.init();
    }

    init() {
        var route = this.opts.req.route;
        if (route) {
            var path = route.path;//报错的页面是没有path的,例如404页面和500页面,所以那些页面数据要单独处理
            //页面标题
            for (var attr1 in pages) {
                if (pages.hasOwnProperty(attr1)) {
                    if (pages[attr1].route == path) {
                        if (pages[attr1].title) {
                            this.result = pages[attr1].title;
                        }
                    }
                }
            }
            //路由标题
            for (var attr2 in api) {
                if (api.hasOwnProperty(attr2)) {
                    if (api[attr2].route == path) {
                        if (api[attr2].title) {
                            this.result = api[attr2].title;
                        }
                    }
                }
            }
        }
    }
}

module.exports = pageTitle;