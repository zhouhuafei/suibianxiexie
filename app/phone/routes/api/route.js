// 页面路由
const tools = require('zhf.tools'); // 工具方法集合
const apiConfig = require('./config');
const controllerPath = '../../controllers/api/'; // 控制器的路径
const multer = require('multer'); // 用于处理 multipart/form-data 类型的表单数据，它主要用于上传文件。
let upload = multer().array(); // 只要array后面不传参数，其他接口如果你传文件就报错，这是对的，如果传的是multipart/form-data类型的文本域表单，则是可以接收到的，这是对的。

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
        Object.keys(apiConfig).forEach(function (attr) {
            try {
                const Controller = require(`${controllerPath}${attr}`);
                (function (Controller, attr) {
                    if (attr === 'galleries') {
                        upload = multer({dest: `${appConfig.projectDir}static-cache-wrap/static-cache/galleries/phone/`}).array('images');
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
            } catch (err) {
                console.log(err);
            }
        });
    }
}

module.exports = Route;
