//页面路由
const tools = require('../../../base/tools');
const apiConfig = require('./config');
const pagesConfig = require('../pages/config');
const controllerPath = `../../../controllers/phone/api/`;//控制器的路径
const session = require('express-session');
const cookieParser = require('cookie-parser');

class Route {
    constructor(json) {
        this.opts = tools.extend({
            defaults: {
                app: null
            },
            inherits: json
        });
        if (!this.opts.app) {
            return;
        }
        this.init();
    }

    init() {
        let self = this;
        let app = self.opts.app;
        //---->session使用开始
        app.use(cookieParser());
        app.use(session({
            resave: true, // don't save session if unmodified
            saveUninitialized: false, // don't create session until something stored
            secret: 'love'//这里是我的一个疑问
        }));
        //<----session使用结束
        for (let attr in apiConfig) {
            if (apiConfig.hasOwnProperty(attr)) {
                try {
                    let Controller = require(`${controllerPath}${attr}`);
                    (function (Controller, attr) {
                        app.all(apiConfig[attr].route, function (req, res) {
                            //验证是否登陆
                            if (apiConfig[attr].isValidateLogin) {
                                req.session.user = {username: '1123486116@qq.com'};//设置session
                                console.log(req.session.user, 9999999);
                                let isLogin = req.session.user === undefined;
                                if (!isLogin) {
                                    res.redirect(pagesConfig.login.route);//重定向路由
                                    return false;
                                }
                            }
                            //渲染数据
                            let controller = new Controller({req: req, res: res});
                            //controller.renderData();
                            //这里的渲染数据是不是应该拿到里面去执行,如果不这样,程序内部如果异步了,就很难搞了
                        })
                    })(Controller, attr);
                } catch (err) {
                    console.log(err);
                }
            }
        }
    }
}

module.exports = Route;