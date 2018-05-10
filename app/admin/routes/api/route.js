// 页面路由
const tools = require('zhf.tools'); // 工具方法集合
const apiConfig = require('./config');
const controllerPath = '../../controllers/api/'; // 控制器的路径
const multer = require('multer'); // 用于处理 multipart/form-data 类型的表单数据，它主要用于上传文件。

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
        let upload = multer().array();
        Object.keys(apiConfig).forEach(function (attr) {
            try {
                const Controller = require(`${controllerPath}${attr}`);
                (function (Controller, attr) {
                    if (attr === 'uploads') {
                        upload = multer({dest: `${appConfig.projectDir}static-cache-wrap/static-cache/uploads/admin/`}).array('files');
                    }
                    app.all(apiConfig[attr].route, upload, function (req, res) {
                        // 渲染数据
                        new Controller({
                            app: app,
                            req: req,
                            res: res,
                            routeName: attr,
                            isValidateLogin: apiConfig[attr].isValidateLogin,
                            isSupportJsonp: apiConfig[attr].isSupportJsonp,
                        });
                    });
                }(Controller, attr));
            } catch (error) {
                const logs = require(`${appConfig.projectDir}utils/logs`);
                logs(error, `${appConfig.logsDir}admin.log`);
            }
        });
    }
}

module.exports = Route;
