//首页模版渲染
const PageFooterNav = require('../../../model/phone/page-footer-nav');
const PageConfig = require('../../../model/phone/page-config');
const PageTitle = require('../../../model/phone/page-title');
const extend = require('../../../libs/tools/extend');//对象的扩展方法
const page = require('../../../route/phone/config');
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
    }

    render() {
        this.pageInfo.data.title = page.error[fileName].title;
        this.opts.res.render(page.error[fileName].view, {
            pageInfo: this.pageInfo,
            pageInfoStr: JSON.stringify(this.pageInfo)
        });
    }
}

module.exports = Home;