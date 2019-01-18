// 模版渲染
const extend = require('zhf.extend'); // 工具方法集合
const routesConfig = require('../../routes/pages/config'); // 路由配置
const apiConfig = require('../../routes/api/config'); // 接口配置
const getClientIp = require('zhf.get-client-ip');
const Admin = require(`../../models/mongoose/admin`);
const queryString = require('zhf.query-string');

class Super {
    constructor(json) {
        this.opts = extend({
            app: null,
            req: null,
            res: null,
            routeName: null, // 路由名称
            isValidateLogin: false, // 是否验证登录
        }, json);

        // 是否验证登录
        const self = this;
        const opts = self.opts;
        const req = opts.req;
        const res = opts.res;
        const session = req.session;
        const adminInfo = session.adminInfo;
        if (opts.isValidateLogin) { // 验证登录
            if (adminInfo === undefined) { // 未登录
                res.redirect(routesConfig.login.route); // 重定向路由
            } else {
                Admin.findOne({username: adminInfo.username}, function (error, result) {
                    if (error) { // 数据库查询出现错误
                        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                        res.end(`<div style="text-align: center;">
                            <h1>数据库查询出现错误</h1>
                            <hr />
                            <h2><a href="${routesConfig[opts.routeName].route}">点击此处进行重试</a></h2>
                            <h3><a href="${routesConfig[opts.routeName].route}"><span>3</span>秒后自动刷新</a></h3>
                            <script>
                                var span = document.querySelector('span');
                                var num = span.innerHTML;
                                setInterval(function() {
                                    num--;
                                    span.innerHTML=num;
                                    if(num < 0){
                                        window.location.reload();
                                    }
                                }, 1000);
                            </script>
                        </div>`);
                    }
                    if (result) {
                        if (result.loginStamp === adminInfo.loginStamp) { // 登录了
                            self.init();
                        } else { // 未登录
                            res.redirect(routesConfig.login.route); // 重定向路由
                        }
                    } else { // 账号不存在
                        res.redirect(routesConfig.register.route); // 重定向路由
                    }
                });
            }
        } else { // 不验证登录
            self.init();
        }
    }

    // (初)初始化数据
    init() {
        const self = this;
        const opts = self.opts;
        const req = opts.req;
        const session = req.session;
        /*
        * javascript axios GET params
        * javascript axios POST/PUT/DELETE data
        * 把上述四种数据的传参方式进行统一化,统一使用data
        * nodejs express GET req.query
        * nodejs express POST/PUT/DELETE body-parser req.body
        * 把上述四种数据的传参方式进行统一化,统一使用req.data
        * */
        const method = req.method.toUpperCase(); // 请求方式
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
            page: {}, // 当前视图的数据
            userInfo: session.adminInfo || {}, // 用户信息
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
                                name: 'ui',
                                title: 'ui',
                            },
                            {
                                name: 'website-info',
                                title: '信息',
                            },
                            {
                                name: 'home',
                                title: '首页',
                            },
                            {
                                name: 'decorate-edit',
                                title: '首页装修',
                                query: {
                                    type: 'home',
                                },
                            },
                            {
                                name: 'decorate-edit',
                                title: '自定义页面装修',
                                query: {
                                    type: 'custom',
                                },
                            },
                        ],
                    },
                    {
                        title: '文章',
                        items: [
                            {
                                name: 'article-list',
                                title: '列表',
                            },
                            {
                                name: 'article-edit',
                                title: '编辑',
                            },
                            {
                                name: 'article-category',
                                title: '分类',
                            },
                        ],
                    },
                    {
                        title: '账号',
                        items: [
                            {
                                name: 'logout',
                                title: '账号退出',
                                power: 'js-g-logout', // 功能型菜单
                            },
                            {
                                name: 'password-modify', // 更改密码,去修改
                                title: '密码修改',
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
                        if (v2.query && Object.keys(v2.query).length) {
                            v2.route += '?' + queryString.queryStringify(v2.query);
                        }
                        if (v2.name === opts.routeName) {
                            if (v2.name === 'decorate-edit') { // 有query时，对query进行处理。
                                if (v2.query.type === req.query.type) {
                                    v.isHighlight = true;
                                    v2.isHighlight = true;
                                }
                            } else {
                                v.isHighlight = true;
                                v2.isHighlight = true;
                            }
                        }
                    });
                });
                dataInfo.menu = menu;
            }
        })();
        self.handleData(); // 处理数据
    }

    // (处)(覆)处理数据(这个方法需要在子类型里被覆盖掉)
    handleData() {
        const self = this;
        const opts = self.opts;
        const req = opts.req;
        const data = req.data;
        self.render(); // 渲染视图(渲染数据)。这个方法没必要放到handleData中调用吧。handleData只处理数据不就行了？待续...
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
            self.renderData(); // 渲染数据
        } else {
            self.renderView(); // 渲染视图
        }
    }
}

module.exports = Super;
