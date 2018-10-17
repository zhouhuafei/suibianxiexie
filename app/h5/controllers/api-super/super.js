// 接口数据
const extend = require('zhf.extend'); // 工具方法集合

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
        const opts = self.opts;
        const app = opts.app;
        const appConfig = app.appConfig;
        const apiDataFormat = require(`${appConfig.utilsDir}api-data-format`);
        this.dataInfo = apiDataFormat(json);
        this.isRendered = false; // 是否已经响应过了结果 一次请求只能响应一次结果 多次响应(render)会报错 Can't set headers after they are sent.
        this.init();
    }

    // (初)初始化数据
    init() {
        const self = this;
        const opts = self.opts;
        const req = opts.req;
        const method = req.method.toLowerCase(); // 请求方式
        /*
        * javascript axios get params
        * javascript axios post/put/delete data
        * 把上述四种数据的传参方式进行统一化,统一使用data
        * nodejs express get req.query
        * nodejs express post/put/delete body-parser req.body
        * 把上述四种数据的传参方式进行统一化,统一使用req.data
        * */
        if (method === 'get') {
            req.data = req.query;
        } else {
            req.data = req.body;
        }
        // 是否验证登录(请不要挪动顺序，保证位置在处理完的req.data之后，否则render时，req.data会是undefined，导致出现报错。)
        const isContinue = self.isValidateLogin();
        if (!isContinue) {
            return;
        }
        if (method === 'post') {
            this.postData(); // 获取数据(增)
        }
        if (method === 'delete') {
            this.deleteData(); // 删除数据(删)
        }
        if (method === 'put') {
            this.putData(); // 修改数据(改)
        }
        if (method === 'get') {
            this.getData(); // 查找数据(查)
        }
    }

    // (验)是否验证登录
    isValidateLogin() {
        const self = this;
        const opts = self.opts;
        const req = opts.req;
        let isContinue = true;
        // 验证
        if (opts.isValidateLogin) {
            // 未登录
            if (req.session.userInfo === undefined) {
                isContinue = false;
                self.render({message: '未登录', failureCode: 'not logged'});
            }
        }
        return isContinue;
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
            const req = opts.req;
            const res = opts.res;
            const data = req.data;
            const isJsonp = data.isJsonp === 'true'; // 是否是jsonp(jsonp only supports the get method)
            self.dataInfo = extend(self.dataInfo, json);
            self.opts.callback(self);
            if (self.opts.isTriggerEnd) {
                res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'}); // res.json默认返回的就是200和application/json
                if (isJsonp && self.opts.isSupportJsonp) {
                    res.end(`${req.query.callback || 'jsonpCallback'}(${JSON.stringify(self.dataInfo)})`);
                } else {
                    res.end(JSON.stringify(self.dataInfo));
                }
            }
        }
    }
}

module.exports = Super;
