// 页面路由
const Admin = require(`../../models/mongoose/admin`);
const extend = require('zhf.extend'); // 工具方法集合
const apiConfig = require('./config');
const controllerPath = '../../controllers/api/'; // 控制器的路径
const multer = require('multer'); // 用于处理 multipart/form-data 类型的表单数据，它主要用于上传文件。
let upload = multer().array(); // 只要array后面不传参数，其他接口如果你传文件就报错，这是对的，如果传的是multipart/form-data类型的文本域表单，则是可以接收到的，这是对的。

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
        const logger = require(`${appConfig.utilsDir}log4js`);
        const apiDataFormat = require(`${appConfig.utilsDir}api-data-format`);
        Object.keys(apiConfig).forEach(function (attr) {
            try {
                const Controller = require(`${controllerPath}${attr}`);
                (function (Controller, attr) {
                    const apiConfigNow = apiConfig[attr];
                    if (typeof apiConfigNow.upload === 'function') {
                        upload = apiConfigNow.upload;
                        delete apiConfigNow.upload; // 这里不删除的话，其实转成json的时候，也会自动过滤掉。
                    }
                    app.all(apiConfigNow.route, function (req, res, next) {
                        // 是否验证登录，如果验证，则继续验证是否登录了
                        const session = req.session;
                        const adminInfo = session.adminInfo;
                        const method = req.method.toUpperCase(); // 请求方式
                        if (apiConfigNow.isValidateLogin && (apiConfigNow.whichRequestMethodNoValidateLogin === undefined || apiConfigNow.whichRequestMethodNoValidateLogin.indexOf(method) === -1)) { // 验证登录(当whichRequestMethodNoValidateLogin值为undefined时，表示所有请求方式都需要验证登陆，为数组时则数组里所属的请求方式不验证登陆)
                            // session验证身份
                            if (adminInfo === undefined) { // 未登录，管理端的接口都应该登陆后才有权调用。
                                res.json(apiDataFormat({message: '未登录', failureCode: 'no login'}));
                            } else {
                                Admin.findOne({username: adminInfo.username}, function (error, result) {
                                    if (error) { // 数据库查询出现错误
                                        res.json(apiDataFormat({message: '验证登录时,数据库查询出现错误'}));
                                    }
                                    if (result) {
                                        if (result.loginStamp === adminInfo.loginStamp) { // 登录了
                                            next();
                                        } else { // 未登录
                                            res.json(apiDataFormat({message: '未登录', failureCode: 'no login'}));
                                        }
                                    } else { // 账号不存在
                                        res.json(apiDataFormat({message: '验证登录时,发现管理员账号不存在'}));
                                    }
                                });
                            }
                        } else { // 不验证登录
                            next();
                        }
                    }, upload, function (req, res) {
                        // 渲染数据
                        new Controller({
                            app: app,
                            req: req,
                            res: res,
                            routeName: attr,
                            isValidateLogin: apiConfigNow.isValidateLogin,
                            isSupportJsonp: apiConfigNow.isSupportJsonp,
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
