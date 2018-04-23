// 模版渲染
const tools = require('zhf.tools'); // 工具方法集合
const routesConfig = require('../../routes/pages/config'); // 路由配置
const apiConfig = require('../../routes/api/config'); // 接口配置
const getClientIp = require('zhf.get-client-ip');

class Super {
    constructor(json) {
        this.tools = tools; // 工具方法集合
        this.opts = tools.extend({
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
        const method = req.method.toLowerCase(); // 请求方式
        /*
        * javascript axios get params
        * javascript axios post/put/delete data
        * 把上述四种数据的传参方式进行统一化,统一使用data
        * nodejs express get req.query
        * nodejs express post/put/delete body-parser req.body
        * 把上述四种数据的传参方式进行统一化,统一使用req.data
        * */
        if (method === 'get') {
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
            isShowQrCode: routesConfig[opts.routeName].isShowQrCode, // 是否显示二维码
            isShowCopyright: routesConfig[opts.routeName].isShowCopyright, // 是否显示版权(需要从数据库里读取,暂时先从配置里读取)
            // 当前视图的数据
            page: {
                routeName: opts.routeName,
            },
        };
        const dataInfo = self.dataInfo;
        // 菜单的数据
        (function () {
            const isShowMenu = routesConfig[opts.routeName].isShowMenu;
            if (isShowMenu) {
                const menu = [
                    {
                        title: '网站',
                        items: [
                            {
                                name: 'website-info',
                                title: '信息',
                            },
                        ],
                    },
                    {
                        title: '账号',
                        items: [
                            {
                                name: 'register',
                                title: '注册',
                            },
                            {
                                name: 'login',
                                title: '登陆',
                            },
                            {
                                name: 'password-modify', // 更改密码,去修改
                                title: '改密',
                            },
                            {
                                name: 'logout',
                                title: '退出',
                                power: 'js-logout', // 功能型菜单
                            },
                        ],
                    },
                ];
                menu.forEach(function (v) {
                    v.isHighlight = true;
                    v.items.forEach(function (v2) {
                        v2.isHighlight = false;
                        v2.power = v2.power || ''; // 功能型菜单
                        v2.route = (v2.power || !routesConfig[v2.name]) ? 'javascript:;' : routesConfig[v2.name].route; // 功能型菜单无跳转
                        if (v2.name === opts.routeName) {
                            v.isHighlight = true;
                            v2.isHighlight = true;
                        }
                    });
                });
                dataInfo.menu = menu;
            }
        })();
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
            if (req.session.adminInfo === undefined) {
                isContinue = false;
                res.redirect(routesConfig.login.route); // 重定向路由
            }
        }
        return isContinue;
    }

    // (盖)处理数据(这个方法需要在子类型里被覆盖掉)
    handleData() {
        const self = this;
        const tools = self.tools; // 工具方法集合
        const opts = self.opts;
        const req = opts.req;
        const data = req.data;
        // self.dataInfo数据处理待续...
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
        self.dataInfo = self.tools.extend(self.dataInfo, json);
        if (req.data.isOnlyRenderData === 'true') {
            self.renderData();// 渲染数据
        } else {
            self.renderView();// 渲染视图
        }
    }
}

module.exports = Super;
