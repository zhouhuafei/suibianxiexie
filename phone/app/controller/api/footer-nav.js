//首页模版渲染
const pageCommon = require('../../model/base/common');//每个页面都要用到的数据
const extend = require('../../libs/tools/extend');//对象的扩展方法

class FooterNav {
    constructor(json) {
        this.opts = extend({
            defaults: {
                res: null,
                req: null
            },
            inherits: json
        });
        this.handleData();
    }

    handleData() {
        this.pageInfo = {
            config: pageCommon.pageConfig(this.opts),
            data: {
                title: pageCommon.pageTitle(this.opts),
                footerNav: pageCommon.footerNav(this.opts)
            }
        };
        var data = this.pageInfo.data;
        if (data.footerNav && data.footerNav.data && data.footerNav.data.home) {
            data.footerNav.data.home.isHighlight = true;
        }
    }

    render() {
        this.opts.res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
        this.opts.res.end(JSON.stringify(this.pageInfo));
    }
}

module.exports = FooterNav;