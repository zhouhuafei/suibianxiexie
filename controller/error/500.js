//首页模版渲染
const extend = require('../../libs/tools/extend');//对象的扩展方法

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
        var errorType = this.opts.req.url.split('/')[1];
        if (errorType == 'phone') {
            this.renderPhone();
        } else {
            this.renderOther();
        }
    }

    renderPhone() {
        var PageFooterNav = require('../../model/phone/page-footer-nav');
        var PageConfig = require('../../model/phone/page-config');
        this.pageInfo = {
            config: new PageConfig(this.opts).result,
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
        this.opts.res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
        this.opts.res.end(JSON.stringify({code: 500}));
    }
}

module.exports = Fn500;