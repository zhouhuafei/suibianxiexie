// 页面路由
const tools = require('zhf.tools'); // 工具方法集合
const config = require('./config');
const controllerPath = '../../controllers/pages/'; // 控制器的路径
class Route {
    constructor(json) {
        this.opts = tools.extend({
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
        const logs = require(`${appConfig.projectDir}utils/logs`);
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
                logs(error, `${appConfig.logsDir}phone.log`);
            }
        });
    }
}

module.exports = Route;
