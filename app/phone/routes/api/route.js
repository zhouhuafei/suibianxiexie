// 页面路由
const tools = require('../../../../utils/tools');
const apiConfig = require('./config');
const pagesConfig = require('../pages/config');

const controllerPath = '../../controllers/api/';// 控制器的路径
const session = require('express-session');
const cookieParser = require('cookie-parser');

class Route {
    constructor(json) {
        this.opts = tools.extend({
            defaults: {
                app: null,
            },
            inherits: json,
        });
        if (!this.opts.app) {
            return;
        }
        this.init();
    }

    init() {
        const self = this;
        const app = self.opts.app;
        // ---->session使用开始
        app.use(cookieParser());
        app.use(session({
            resave: true, // don't save session if unmodified
            saveUninitialized: false, // don't create session until something stored
            secret: 'love', // 这里是我的一个疑问
        }));
        // <----session使用结束
        Object.keys(apiConfig).forEach(function (attr) {
            try {
                const Controller = require(`${controllerPath}${attr}`);
                (function (Controller, attr) {
                    app.all(apiConfig[attr].route, function (req, res) {
                        // 验证是否登陆
                        if (apiConfig[attr].isValidateLogin) {
                            req.session.user = {username: '1123486116@qq.com'};// 设置session
                            console.log(req.session.user, 9999999);
                            const isLogin = req.session.user === undefined;
                            if (!isLogin) {
                                res.redirect(pagesConfig.login.route);// 重定向路由
                                return;
                            }
                        }
                        new Controller({req: req, res: res});// 渲染数据
                    });
                }(Controller, attr));
            } catch (err) {
                console.log(err);
            }
        });
    }
}

module.exports = Route;
