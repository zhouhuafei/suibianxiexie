// 页面路由
const extend = require('zhf.extend'); // 工具方法集合
const config = require('./config');
const controllerPath = '../../controllers/pages/'; // 控制器的路径
class Route {
    constructor(json) {
        this.opts = extend({
            app: null,
        }, json);
        if (!this.opts.app) {
            return;
        }
        this.init();
    }

    init() {
        const self = this;
        const app = self.opts.app;
        const appConfig = app.appConfig;
        const logger = require(`${appConfig.utilsPath}log4js`);
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
            } catch (error) {
                logger.error(error);
            }
        });
    }
}

module.exports = Route;
