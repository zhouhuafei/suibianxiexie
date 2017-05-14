//首页模版渲染
const extend = require('../../libs/tools/extend');//对象的扩展方法
const pageCommon = require('../../model/base/common');//每个页面都要用到的数据
const page = require('../../config/page');

class Home {
    constructor(json) {
        this.opts = extend({
            defaults: {
                res: null,
                req: null
            },
            inherits: json
        });
        this.init();
    }

    init() {
        var pageInfo = {
            config: pageCommon.pageConfig(this.opts),
            data: {
                title: pageCommon.pageTitle(this.opts),
                footerNav: pageCommon.footerNav(this.opts)
            }
        };
        this.opts.res.render(page['404'].view, {
            pageInfo: pageInfo,
            pageInfoStr: JSON.stringify(pageInfo)
        });
    }
}

module.exports = Home;