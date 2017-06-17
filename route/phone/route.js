//页面路由
const extend = require('../../libs/tools/extend');
const config = require('./config');
const controllerPath = `../../controller/phone/pages/`;//控制器的路径

class Route {
    constructor(json) {
        this.opts = extend({
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
        for (let attr in config) {
            if (config.hasOwnProperty(attr)) {
                try {
                    let Controller = require(`${controllerPath}${attr}`);
                    (function (Controller, attr) {
                        app.get(config[attr].route, function (req, res) {
                            //验证是否登陆
                            if (config[attr].isValidateLogin) {
                                let isLogin = true;//假设登陆了
                                //如果没登录,去登陆待续...
                                if (!isLogin) {
                                    res.redirect(config.login.route);//重定向路由
                                    return false;
                                }
                            }
                            //渲染视图(渲染数据)
                            let controller = new Controller({req: req, res: res});
                            if (req.query.isDev == 'true') {
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