// 接口数据
const tools = require('zhf.tools'); // 工具方法集合
const Admins = require(`../../models/mongoose/admins`);

class Super {
    constructor(json) {
        this.tools = tools; // 工具方法集合
        this.opts = tools.extend({
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
        this.isRendered = false; // 是否已经响应过了结果 一次请求只能响应一次结果 多次响应(render)会报错 Can't set headers after they are sent.
        this.init();
    }

    // (初)初始化数据
    init() {
        const self = this;
        const opts = self.opts;
        const req = opts.req;
        /*
        * javascript axios get params
        * javascript axios post/put/delete data
        * 把上述四种数据的传参方式进行统一化,统一使用data
        * nodejs express get req.query
        * nodejs express post/put/delete body-parser req.body
        * 把上述四种数据的传参方式进行统一化,统一使用req.data
        * */
        const method = req.method.toLowerCase(); // 请求方式
        if (method === 'get') {
            req.data = req.query;
        } else {
            req.data = req.body;
        }

        // 是否验证登录(请不要挪动顺序，保证位置在处理完的req.data之后，否则render时，req.data会是undefined，导致出现报错。)
        const session = req.session;
        const adminInfo = session.adminInfo;
        if (opts.isValidateLogin) { // 验证登录
            if (adminInfo === undefined) { // 未登录，管理端的接口都应该登陆后才有权调用。
                self.render({message: '未登录', failureCode: 401});
            } else {
                Admins.findOne({username: adminInfo.username}, function (error, result) {
                    if (error) { // 数据库查询出现错误
                        self.render({message: '验证登录时,数据库查询出现错误'});
                    }
                    if (result) {
                        if (result.loginStamp === adminInfo.loginStamp) { // 登录了
                            fnCrud();
                        } else { // 未登录
                            self.render({message: '未登录', failureCode: 401});
                        }
                    } else { // 账号不存在
                        self.render({message: '验证登录时,发现管理员账号不存在'});
                    }
                });
            }
        } else { // 不验证登录
            fnCrud();
        }

        function fnCrud() {
            if (method === 'post') {
                self.postData(); // 获取数据(增)
            }
            if (method === 'delete') {
                self.deleteData(); // 删除数据(删)
            }
            if (method === 'put') {
                self.putData(); // 修改数据(改)
            }
            if (method === 'get') {
                self.getData(); // 查找数据(查)
            }
        }
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
        if (!self.isRendered) {
            self.isRendered = true;
            const opts = self.opts;
            const req = opts.req;
            const res = opts.res;
            const data = req.data;
            const isJsonp = data.isJsonp === 'true'; // 是否是jsonp(jsonp only supports the get method)
            self.dataInfo = self.tools.extend(self.dataInfo, json);
            self.opts.callback(self);
            if (self.opts.isTriggerEnd) {
                res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
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
