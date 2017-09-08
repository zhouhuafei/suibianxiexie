// 页面路由
const tools = require('../../../utils/tools');
const config = require('./config');

const controllerPath = '../../../controllers/phone/pages/';// 控制器的路径

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
        Object.keys(config).forEach(function (attr) {
            try {
                const Controller = require(`${controllerPath}${attr}`);
                (function (Controller, attr) {
                    app.get(config[attr].route, function (req, res) {
                        // 验证是否登陆
                        if (config[attr].isValidateLogin) {
                            req.session.user = {username: '1123486116@qq.com'};// 设置session
                            console.log(req.session.user, 'is login ?');
                            const isLogin = req.session.user === undefined;
                            if (!isLogin) {
                                res.redirect(config.login.route);// 重定向路由
                                return;
                            }
                        }
                        new Controller({req: req, res: res});// 渲染视图(渲染数据)
                    });
                }(Controller, attr));
            } catch (err) {
                console.log(err);
            }
        });
    }
}

module.exports = Route;
