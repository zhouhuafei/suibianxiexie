// 模版渲染
const extend = require('zhf.extend'); // 工具方法集合
const routesConfig = require('../../routes/pages/config'); // 路由配置
const apiConfig = require('../../routes/api/config'); // 接口配置
const getClientIp = require('zhf.get-client-ip');

class Super {
    constructor(json) {
        this.opts = extend({
            app: null,
            req: null,
            res: null,
            routeName: null, // 路由名称
            isValidateLogin: false, // 是否验证登录
        }, json);
        this.init();
    }

    // (初)初始化数据
    init() {
        const self = this;
        // 是否验证登录
        const isContinue = self.isValidateLogin();
        if (!isContinue) {
            return;
        }
        const opts = self.opts;
        const req = opts.req;
        const method = req.method.toUpperCase(); // 请求方式
        /*
        * javascript axios GET params
        * javascript axios POST/PUT/DELETE data
        * 把上述四种数据的传参方式进行统一化,统一使用data
        * nodejs express GET req.query
        * nodejs express POST/PUT/DELETE body-parser req.body
        * 把上述四种数据的传参方式进行统一化,统一使用req.data
        * */
        if (method === 'GET') {
            req.data = req.query;
        } else {
            req.data = req.body;
        }
        const env = process.env.NODE_ENV;
        const isProduction = env === 'production';
        self.dataInfo = {
            staticV: '1.0.0', // 静态资源版本号(清缓存)
            ip: getClientIp(req, isProduction ? 'nginx' : ''), // 公网ip
            env: env, // 环境
            isProduction: isProduction, // 是否是生产环境
            api: apiConfig, // 接口配置
            routes: routesConfig, // 路由的配置
            title: routesConfig[opts.routeName].title || '没有配置标题', // 标题(需要从配置里读取)
            routeName: opts.routeName, // 路由名称
            query: req.query, // 参数
            isShowQrCode: routesConfig[opts.routeName].isShowQrCode, // 是否显示二维码
            isShowCopyright: routesConfig[opts.routeName].isShowCopyright, // 是否显示版权(需要从数据库里读取,暂时先从配置里读取)
            // 当前视图的数据
            page: {},
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
                        icon: 'icon-home',
                        isHighlight: false,
                        isShowMark: false,
                    },
                    {
                        routeName: 'game-list',
                        href: routesConfig['game-list'].route,
                        text: routesConfig['game-list'].title,
                        icon: 'icon-game',
                        isHighlight: false,
                        isShowMark: false,
                    },
                    {
                        routeName: 'mine',
                        href: routesConfig.mine.route,
                        text: routesConfig.mine.title,
                        icon: 'icon-mine',
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
        self.handleData(); // 处理数据
    }

    // (验)是否验证登录
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

    // (处)(覆)处理数据(这个方法需要在子类型里被覆盖掉)
    handleData() {
        const self = this;
        const opts = self.opts;
        const req = opts.req;
        const data = req.data;
        self.render();// 渲染视图(渲染数据)
    }

    // (渲)渲染视图
    renderView() {
        const self = this;
        const opts = self.opts;
        const res = opts.res;
        res.render(routesConfig[opts.routeName].view, {
            dataInfo: this.dataInfo,
            dataInfoStr: JSON.stringify(this.dataInfo),
        });
    }

    // (渲)渲染数据
    renderData() {
        const res = this.opts.res;
        res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
        res.end(JSON.stringify(this.dataInfo));
    }

    // (渲)渲染(这个方法需要在子类型里被调用)
    render(json = {}) {
        const self = this;
        const req = self.opts.req;
        self.dataInfo = extend(self.dataInfo, json);
        if (req.data.isOnlyRenderData === 'true') {
            self.renderData();// 渲染数据
        } else {
            self.renderView();// 渲染视图
        }
    }
}

module.exports = Super;
