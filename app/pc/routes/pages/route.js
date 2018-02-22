// 页面路由
const tools = require('../../../../utils/tools');
const config = require('./config');
const controllerPath = '../../controllers/pages/';// 控制器的路径
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
                        // 渲染数据
                        new Controller({
                            app: app,
                            req: req,
                            res: res,
                            routeName: attr,
                            isValidateLogin: config[attr].isValidateLogin,
                        });
                    });
                }(Controller, attr));
            } catch (err) {
                console.log(err);
            }
        });
    }
}

module.exports = Route;
