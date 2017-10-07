// 模版渲染
const PageTitle = require('../../models/page-title'); // 页面标题
const PageCopyright = require('../../models/page-copyright'); // 页面配置
const PageFooterNav = require('../../models/page-footer-nav'); // 页面底部导航
const routesConfig = require('../../routes/pages/config'); // 路由配置
const tools = require('../../../../utils/tools'); // 工具方法集合
const applications = require('../../../../utils/applications'); // 应用方法集合

class Super {
    constructor(json) {
        this.tools = tools; // 工具方法集合
        this.opts = tools.extend({
            defaults: {
                res: null,
                req: null,
            },
            inherits: json,
        });
        this.path = require('path');
        this.fileName = ''; // 这个属性需要在子类型里被覆盖掉
    }

    // 初始化数据(这个方法需要在子类型里被调用)
    init() {
        const req = this.opts.req;
        this.dataInfo = {
            isShowCopyright: new PageCopyright(this.opts).isShowCopyright, // 是否显示版权(需要从数据库里读取)
            routes: routesConfig, // 路由的配置
            qrCode: applications.qrCode(`http://${req.headers.host}${req.url}`), // 二维码数据
            title: new PageTitle(this.opts).result, // 标题(需要从配置里读取)
        };
        const dataInfo = this.dataInfo;
        const isShowFooterNav = routesConfig[this.fileName].isShowFooterNav;
        if (isShowFooterNav) {
            dataInfo.footerNav = new PageFooterNav(this.opts).result;// 底部导航的数据
            const footerNav = dataInfo.footerNav;
            if (footerNav.data && footerNav.data.length) {
                footerNav.data.forEach((v) => {
                    if (v.routeName === this.fileName) {
                        v.isHighlight = true;
                    }
                });
            }
        }
        this.handleData(); // 处理数据
    }

    // 处理数据(这个方法需要在子类型里被重写)
    handleData() {
    }

    // 渲染视图
    renderView() {
        const res = this.opts.res;
        res.render(routesConfig[this.fileName].view, {
            dataInfo: this.dataInfo,
            dataInfoStr: JSON.stringify(this.dataInfo),
        });
    }

    // 渲染数据
    renderData() {
        const res = this.opts.res;
        res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
        res.end(JSON.stringify(this.dataInfo));
    }

    // 渲染(这个方法需要在子类型里被调用)
    render() {
        const req = this.opts.req;
        if (req.query.isOnlyRenderData === 'true') {
            this.renderData();// 渲染数据
        } else {
            this.renderView();// 渲染视图
        }
    }

    // 扩展dataInfo数据
    extendDataInfo(obj = {}) {
        return this.tools.extend({defaults: this.dataInfo, inherits: obj});
    }
}

module.exports = Super;
