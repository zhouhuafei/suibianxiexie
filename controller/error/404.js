//首页模版渲染
const extend = require('../../libs/tools/extend');//对象的扩展方法

class Fn404 {
    constructor(json) {
        this.opts = extend({
            defaults: {
                res: null,
                req: null
            },
            inherits: json
        });
    }

    render() {
        var errorType = this.opts.req.url.split('/')[2];
        if (errorType == 'min'||'dev') {
            this.renderOther();
        } else {
            this.renderPhone();
        }
    }

    renderPhone() {
        var PageFooterNav = require('../../model/phone/page-footer-nav');
        var PageConfig = require('../../model/phone/page-config');
        this.pageInfo = {
            config: new PageConfig(this.opts).result,
            data: {
                title: `页面没有找到`,
                footerNav: new PageFooterNav(this.opts).result
            }
        };
        this.opts.res.render(`phone/min/html/pages/404`, {
            pageInfo: this.pageInfo,
            pageInfoStr: JSON.stringify(this.pageInfo)
        });
    }

    renderOther() {
        this.opts.res.writeHead(404, {'Content-Type': 'text/plain;charset=utf-8'});
        this.opts.res.end(JSON.stringify({code: 404}));
    }
}

module.exports = Fn404;