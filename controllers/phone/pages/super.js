//模版渲染
const PageTitle = require('../../../models/phone/page-title');//页面标题
const PageCopyright = require('../../../models/phone/page-copyright');//页面配置
const PageFooterNav = require('../../../models/phone/page-footer-nav');//页面底部导航
const routesConfig = require('../../../routes/phone/pages/config');//路由配置
const tools = require('../../../base/tools');//工具方法集合
const applications = require('../../../base/applications');//应用方法集合

class Super {
    constructor(json) {
        this.opts = tools.extend({
            defaults: {
                res: null,
                req: null
            },
            inherits: json
        });
        this.path = require('path');
        this.fileName = ``;//这个属性需要在子类型里被覆盖掉
    }

    //初始化数据(这个方法需要在子类型里被调用)
    initData() {
        let req = this.opts.req;
        this.pageInfo = {
            config: {
                isShowCopyright: new PageCopyright(this.opts).isShowCopyright,//是否显示版权(需要从数据库里读取)
                isShowFooterNav: routesConfig[this.fileName].isShowFooterNav//是否显示底部导航(需要从配置里读取)
            },
            data: {
                routes: routesConfig,//路由的配置
                qrCode: applications.qrCode(`http://${req.headers.host}${req.url}`),//二维码数据
                title: new PageTitle(this.opts).result,//标题(需要从配置里读取)
            }
        };
        let pageInfo = this.pageInfo;
        let config = pageInfo.config;
        let data = pageInfo.data;
        if (config.isShowFooterNav) {
            data.footerNav = new PageFooterNav(this.opts).result;//底部导航的数据(需要从配置里读取)
            if (data.footerNav && data.footerNav.data && data.footerNav.data.length) {
                data.footerNav.data.forEach((v) => {
                    if (v.routeName === this.fileName) {
                        v.isHighlight = true;
                    }
                })
            }
        }
    }

    //渲染视图
    renderView() {
        let res = this.opts.res;
        res.render(routesConfig[this.fileName].view, {
            pageInfo: this.pageInfo,
            pageInfoStr: JSON.stringify(this.pageInfo)
        });
    }

    //渲染数据
    renderData() {
        let res = this.opts.res;
        res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
        res.end(JSON.stringify(this.pageInfo));
    }
}

module.exports = Super;