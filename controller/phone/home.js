//模版渲染
const PageTitle = require('../../model/phone/page-title');//页面标题
const PageConfig = require('../../model/phone/page-config');//页面配置
const PageFooterNav = require('../../model/phone/page-footer-nav');//页面底部导航
const routeConfig = require('../../route/phone/config');//路由配置
const path = require('path');
const fileName = path.basename(__filename, '.js');
const extend = require('../../libs/tools/extend');//对象的扩展方法

class Home {
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
            config: new PageConfig(this.opts).result,
            data: {
                title: new PageTitle(this.opts).result,
                footerNav: new PageFooterNav(this.opts).result
            }
        };
        var data = this.pageInfo.data;
        if (data.footerNav && data.footerNav.data && data.footerNav.data[fileName]) {
            data.footerNav.data[fileName].isHighlight = true;
        }
    }

    render() {
        this.opts.res.render(routeConfig[fileName].view, {
            pageInfo: this.pageInfo,
            pageInfoStr: JSON.stringify(this.pageInfo)
        });
    }

    getPageInfo() {
        this.opts.res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
        this.opts.res.end(JSON.stringify(this.pageInfo));
    }
}

module.exports = Home;