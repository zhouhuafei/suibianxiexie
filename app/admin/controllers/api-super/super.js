// 接口数据
const extend = require('zhf.extend'); // 工具方法集合
const qs = require('qs');
const appConfig = require('../../../../app-config');

class Super {
    constructor(json) {
        this.opts = extend({
            app: null,
            req: null,
            res: null,
            routeName: null, // 路由名称
            isValidateLogin: false, // 是否验证登录
            isSupportJsonp: false, // 是否支持jsonp
            isTriggerEnd: true, // 是否触发数据返回(api默认直接输出数据,但是当给视图模板使用时,只需要拿数据,不需要触发end方法,但不建议使用)
            // 渲染完毕的回调(接口不应该给视图模板使用,因为会导致页面加载很慢,所以这个callback回调方法,和isTriggerEnd属性只需要知道有这种东西即可,但不建议使用)
            callback: function (self) {
            },
        }, json);
        this.isRendered = false; // 是否已经响应过了结果 一次请求只能响应一次结果 多次响应(render)会报错 Can't set headers after they are sent.
        this.init();
    }

    // (初)初始化数据
    init() {
        const self = this;
        const opts = self.opts;
        const req = opts.req;
        /*
        * javascript axios GET params
        * javascript axios POST/PUT/DELETE data
        * 把上述四种数据的传参方式进行统一化,统一使用data
        * nodejs express GET req.query
        * nodejs express POST/PUT/DELETE body-parser req.body
        * 把上述四种数据的传参方式进行统一化,统一使用req.data
        * */
        const method = req.method.toUpperCase(); // 请求方式
        if (method === 'GET') {
            req.data = req.query;
        } else {
            // 把接收到的数据全部都处理成字符串格式，无论你嵌套了多少层。数字1会变成字符串'1'。布尔值true会变成字符串'true'。
            // 如果传输的时候是application/json，传输的对象是个字符串格式的，则内部该是什么类型的还是什么类型
            // 如果传输的时候是application/x-www-form-urlencoded，传输的对象是个字符串格式的，则内部该是什么类型的还是什么类型
            if (req.body) {
                req.body = qs.parse(qs.stringify(req.body));
            }
            req.data = req.body;
        }

        if (appConfig.isProduction) { // 生产环境下防止CSRF攻击。
            if (req.headers.referer.indexOf('sbxx') === -1) {
                self.render({message: '此接口不支持在非sbxx域名下调用'});
            }
        }

        fnCrud();

        function fnCrud() {
            self.handleData(); // 提前处理数据,例如去除首尾空格
            if (method === 'POST') {
                self.postData(); // 获取数据(增)
            } else if (method === 'DELETE') {
                self.deleteData(); // 删除数据(删)
            } else if (method === 'PUT') {
                self.putData(); // 修改数据(改)
            } else if (method === 'GET') {
                self.getData(); // 查找数据(查)
            } else {
                self.render({message: '不支持此类型的请求方式'});
            }
        }
    }

    // (处)(覆)处理数据(这个方法需要在子类型里被覆盖掉)
    handleData() {
    }

    // (增)(覆)增加数据(这个方法需要在子类型里被覆盖掉)
    postData() {
        console.log('postData:', this.opts.req.data);
        this.render();
    }

    // (删)(覆)删除数据(这个方法需要在子类型里被覆盖掉)
    deleteData() {
        console.log('deleteData:', this.opts.req.data);
        this.render();
    }

    // (改)(覆)修改数据(这个方法需要在子类型里被覆盖掉)
    putData() {
        console.log('putData:', this.opts.req.data);
        this.render();
    }

    // (查)(覆)查找数据(这个方法需要在子类型里被覆盖掉)
    getData() {
        console.log('getData:', this.opts.req.data);
        this.render();
    }

    // (渲)渲染数据(这个方法需要在子类型里被调用)
    render(json = {}) {
        const self = this;
        if (!self.isRendered) {
            self.isRendered = true;
            const opts = self.opts;
            const app = opts.app;
            const appConfig = app.appConfig;
            const req = opts.req;
            const res = opts.res;
            const data = req.data;
            const isJsonp = data.isJsonp === 'true'; // 是否是jsonp(jsonp only supports the GET method)
            const apiDataFormat = require(`${appConfig.utilsPath}api-data-format`);
            const dataInfo = apiDataFormat(json);
            self.opts.callback(self);
            if (self.opts.isTriggerEnd) {
                res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'}); // res.json默认返回的就是200和application/json
                if (isJsonp && self.opts.isSupportJsonp) {
                    res.end(`${req.query.callback || 'jsonpCallback'}(${JSON.stringify(dataInfo)})`);
                } else {
                    res.end(JSON.stringify(dataInfo));
                }
            }
        }
    }
}

module.exports = Super;
