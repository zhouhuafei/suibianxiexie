// 模版渲染
const tools = require('../../../../utils/tools'); // 工具方法集合
const applications = require('../../../../utils/applications'); // 应用方法集合
const routesConfig = require('../../routes/pages/config'); // 路由配置

class Super {
    constructor(json) {
        this.tools = tools; // 工具方法集合
        this.opts = tools.extend({
            defaults: {
                res: null,
                req: null,
                isValidateLogin: false, // 是否验证登录
                routeName: null, // 路由名称
            },
            inherits: json,
        });
    }

    // 初始化数据(这个方法需要在子类型里被调用)
    init() {
        const self = this;
        const opts = self.opts;
        const req = opts.req;
        this.dataInfo = {
            isShowCopyright: true, // 是否显示版权(需要从数据库里读取)
            routes: routesConfig, // 路由的配置
            qrCode: applications.qrCode(`http://${req.headers.host}${req.url}`), // 二维码数据
            title: routesConfig[opts.routeName].title || '没有配置标题', // 标题(需要从配置里读取)
        };
        const dataInfo = self.dataInfo;
        const isShowFooterNav = routesConfig[opts.routeName].isShowFooterNav;
        if (isShowFooterNav) {
            // 底部导航的数据
            dataInfo.footerNav = {
                config: {},
                data: [
                    {
                        routeName: 'home',
                        href: routesConfig.home.route,
                        text: routesConfig.home.title,
                        icon: 'icon-shouye',
                        isHighlight: false,
                        isShowMark: false,
                    },
                    {
                        routeName: 'dev-globals',
                        href: routesConfig['dev-globals'].route,
                        text: routesConfig['dev-globals'].title,
                        icon: 'icon-kaifa',
                        isHighlight: false,
                        isShowMark: false,
                    },
                    {
                        routeName: 'dev-components',
                        href: routesConfig['dev-components'].route,
                        text: routesConfig['dev-components'].title,
                        icon: 'icon-kaifa',
                        isHighlight: false,
                        isShowMark: false,
                    },
                    {
                        routeName: 'dev-words',
                        href: routesConfig['dev-words'].route,
                        text: routesConfig['dev-words'].title,
                        icon: 'icon-kaifa',
                        isHighlight: false,
                        isShowMark: false,
                    },
                    {
                        routeName: 'mine',
                        href: routesConfig.mine.route,
                        text: routesConfig.mine.title,
                        icon: 'icon-wode',
                        isHighlight: false,
                        isShowMark: false,
                    },

                ],
            };
            const footerNav = dataInfo.footerNav;
            if (footerNav.data && footerNav.data.length) {
                footerNav.data.forEach((v) => {
                    if (v.routeName === opts.routeName) {
                        v.isHighlight = true;
                    }
                });
            }
        }
        const isContinue = this.isValidateLogin(); // 是否验证登录
        if (isContinue) {
            this.handleData(); // 处理数据
        }
    }

    // 是否验证登录
    isValidateLogin() {
        const self = this;
        const opts = self.opts;
        const req = opts.req;
        const res = opts.res;
        let isContinue = true;
        // 验证
        if (opts.isValidateLogin) {
            // 未登录
            if (req.session.userInfo === undefined) {
                isContinue = false;
                res.redirect(routesConfig.login.route); // 重定向路由
            }
        }
        return isContinue;
    }

    // 处理数据(这个方法需要在子类型里被重写)
    handleData() {
    }

    // 渲染视图
    renderView() {
        const self = this;
        const opts = self.opts;
        const res = opts.res;
        res.render(routesConfig[opts.routeName].view, {
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
    render(obj = {}) {
        const self = this;
        const req = self.opts.req;
        self.dataInfo = self.tools.extend({defaults: self.dataInfo, inherits: obj});
        if (req.query.isOnlyRenderData === 'true') {
            self.renderData();// 渲染数据
        } else {
            self.renderView();// 渲染视图
        }
    }
}

module.exports = Super;
