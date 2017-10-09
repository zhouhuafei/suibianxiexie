// 页面路由
const tools = require('../../../../utils/tools');
const apiConfig = require('./config');
const controllerPath = '../../controllers/api/';// 控制器的路径
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
        Object.keys(apiConfig).forEach(function (attr) {
            try {
                const Controller = require(`${controllerPath}${attr}`);
                (function (Controller, attr) {
                    app.all(apiConfig[attr].route, function (req, res) {
                        // 渲染数据
                        new Controller({
                            req: req,
                            res: res,
                            routeName: attr,
                            isValidateLogin: apiConfig[attr].isValidateLogin,
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
