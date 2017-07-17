//页面路由
let path =require('path');
console.log(path.basename(__dirname),22222);
const tools = require('../../base/tools');
const config = require('./config');
const controllerPath = `../../controllers/phone/pages/`;//控制器的路径
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
        for (let attr in config) {
            if (config.hasOwnProperty(attr)) {
                try {
                    let Controller = require(`${controllerPath}${attr}`);
                    (function (Controller, attr) {
                        app.get(config[attr].route, function (req, res) {
                            //验证是否登陆
                            if (config[attr].isValidateLogin) {
                                req.session.user = {username: '1123486116@qq.com'};//设置session
                                console.log(req.session.user, 9999999);
                                let isLogin = req.session.user !== undefined;
                                if (!isLogin) {
                                    res.redirect(config.login.route);//重定向路由
                                    return false;
                                }
                            }
                            //渲染视图(渲染数据)
                            let controller = new Controller({req: req, res: res});
                            if (req.query.isDev === 'true') {
                                controller.renderData();
                            } else {
                                controller.renderView();
                            }
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