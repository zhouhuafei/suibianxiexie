//首页模版渲染
var extend = require('../libs/tools/extend');//对象的扩展方法
var FooterNav = require('../modle/footer-nav');//底部导航的数据
var PageConfig = require('../modle/page-config');//页面配置的数据
var PageTitle = require('../modle/page-title');//页面标题的数据

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
            config: new PageConfig(this.opts).result,
            data: {
                title: new PageTitle(this.opts).result,
                footerNav: new FooterNav(this.opts).result
            }
        };
        this.opts.res.render('home', {
            pageInfo: pageInfo,
            pageInfoStr: JSON.stringify(pageInfo)
        });
    }
}

module.exports = Home;