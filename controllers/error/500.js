//首页模版渲染
const tools = require('../../base/tools');//对象的扩展方法

class Fn500 {
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
        let errorType = this.opts.req.url.split('/')[1];
        if (errorType === 'phone') {
            this.renderPhone();
        } else {
            this.renderOther();
        }
    }

    renderPhone() {
        let PageFooterNav = require('../../models/phone/page-footer-nav');
        this.pageInfo = {
            config: {},
            data: {
                title: `服务器报错`,
                footerNav: new PageFooterNav(this.opts).result
            }
        };
        this.opts.res.render(`phone/min/html/pages/500`, {
            pageInfo: this.pageInfo,
            pageInfoStr: JSON.stringify(this.pageInfo)
        });
    }

    renderOther() {
        this.opts.res.writeHead(500, {'Content-Type': 'text/plain;charset=utf-8'});
        this.opts.res.end(JSON.stringify({code: 500}));
    }
}

module.exports = Fn500;