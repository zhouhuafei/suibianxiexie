//首页模版渲染
const tools = require('../../base/tools');//对象的扩展方法

class Fn404 {
    constructor(json) {
        this.opts = tools.extend({
            defaults: {
                res: null,
                req: null
            },
            inherits: json
        });
    }

    render() {
        let errorType = this.opts.req.url.split('/')[2];
        if (errorType === 'min' || 'dev') {
            this.renderOther();
        } else {
            this.renderPhone();
        }
    }

    renderPhone() {
        let PageFooterNav = require('../../model/phone/page-footer-nav');
        this.pageInfo = {
            config: {},
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