// 接口数据
const tools = require('zhf.tools'); // 工具方法集合

class Sub {
    constructor(json) {
        this.tools = tools; // 工具方法集合
        this.opts = tools.extend({
            app: null,
            req: null,
            res: null,
            routeName: null, // 路由名称
            isValidateLogin: false, // 是否验证登录
            isTriggerEnd: true, // 是否触发数据返回(api默认直接输出数据,但是当给视图模板使用时,只需要拿数据,不需要触发end方法,但不建议使用)
            // 渲染完毕的回调(接口不应该给视图模板使用,因为会导致页面加载很慢,所以这个callback回调方法,和isTriggerEnd属性只需要知道有这种东西即可,但不建议使用)
            callback: function (self) {
            },
        }, json);
        this.dataInfo = {
            /*
            * 状态信息:
            * 成功(success)   有返回结果,结果的状态是success,预定义的数据格式:{status: 'success'}
            * 失败(failure)   有返回结果,结果的状态是failure,预定义的数据格式:{status: 'failure'}
            * */
            status: 'failure', // 状态信息
            message: '接口数据的基本格式', // 提示信息 - '参数错误'
            failureInfo: null, // 错误信息
            failureCode: null, // 401 未授权,未登录
            result: {
                // 数据集合(格式必须统一为数组,哪怕只有一条数据)
                data: [
                    /*
                    {
                        img: {
                            width: 0,
                            height: 0,
                            src: '',
                        },
                        text: '接口格式保持一致',
                        href: '',
                    },
                    */
                ],
                allPage: 1, // 总页数
                nowPage: 1, // 当前页
                allCount: 0, // 数据总条数
                nowCount: 0, // 当前页的数据条数
            },
        };
        this.init();
    }

    // (初)初始化数据
    init() {
        const self = this;
        const isContinue = self.isValidateLogin(); // 是否验证登录
        if (!isContinue) {
            return;
        }
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
            if (req.session.phoneUserInfo === undefined) {
                isContinue = false;
                self.render({
                    message: '未登录',
                    failureCode: 401,
                });
            }
        }
        return isContinue;
    }

    // (增)(盖)获取数据(这个方法需要在子类型里被覆盖掉)
    postData() {
        console.log('postData:', this.opts.req.data);
        this.render();
    }

    // (删)(盖)删除数据(这个方法需要在子类型里被覆盖掉)
    deleteData() {
        console.log('deleteData:', this.opts.req.data);
        this.render();
    }

    // (改)(盖)修改数据(这个方法需要在子类型里被覆盖掉)
    putData() {
        console.log('putData:', this.opts.req.data);
        this.render();
    }

    // (查)(盖)查找数据(这个方法需要在子类型里被覆盖掉)
    getData() {
        console.log('getData:', this.opts.req.data);
        this.render();
    }

    // (渲)渲染数据(这个方法需要在子类型里被调用)
    render(json = {}) {
        const self = this;
        const opts = self.opts;
        const req = opts.req;
        const res = opts.res;
        const data = req.data;
        const isJsonp = data.isJsonp === 'true'; // 是否是jsonp(jsonp only supports the get method)
        self.dataInfo = self.tools.extend(self.dataInfo, json);
        self.opts.callback(self);
        if (self.opts.isTriggerEnd) {
            res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
            if (isJsonp) {
                res.end(`${req.query.callback || `jsonpCallback${new Date().getTime()}`}(${JSON.stringify(self.dataInfo)})`);
            } else {
                res.end(JSON.stringify(self.dataInfo));
            }
        }
    }
}

module.exports = Sub;
