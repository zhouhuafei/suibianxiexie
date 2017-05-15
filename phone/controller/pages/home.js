//首页模版渲染
const pageCommon = require('../../model/base/common');//每个页面都要用到的数据
const extend = require('../../libs/tools/extend');//对象的扩展方法
const page = require('../../config/page');
const path = require('path');
const fileName = path.basename(__filename, '.js');

class Home {
    constructor(json) {
        this.opts = extend({
            defaults: {
                res: null,
                req: null
            },
            inherits: json
        });
        this.pageInfo = {
            config: pageCommon.pageConfig(this.opts),
            data: {
                title: pageCommon.pageTitle(this.opts),
                footerNav: pageCommon.footerNav(this.opts)
            }
        };
        this.init();
    }

    init() {
        //数据二次处理
        var data = this.pageInfo.data;
        if (data.footerNav && data.footerNav.data && data.footerNav.data.home) {
            data.footerNav.data.home.isHighlight = true;
        }
        this.opts.res.render(page[fileName].view, {
            pageInfo: this.pageInfo,
            pageInfoStr: JSON.stringify(this.pageInfo)
        });
    }
}

module.exports = Home;