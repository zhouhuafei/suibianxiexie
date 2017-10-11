// 接口数据
const tools = require('../../../../utils/tools'); // 工具方法集合

class Sub {
    constructor(json) {
        this.tools = tools;// 工具方法集合
        this.opts = tools.extend({
            defaults: {
                res: null,
                req: null,
                isValidateLogin: false, // 是否验证登录
                routeName: '', // 路由名称
            },
            inherits: json,
        });
        this.dataInfo = {
            status: 'failure', // 状态  'success'   'failure'
            message: '接口数据的基本格式', // 信息     '参数错误'
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
                        text: '请求失败!',
                        href: '',
                    },
                    */
                ],
                allPage: 1, // 总页数
                nowPage: 1, // 当前页
                allCount: 1, // 数据总条数
                nowCount: 1, // 当前页的数据条数
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
            if (req.session.userInfo === undefined) {
                isContinue = false;
                self.render({
                    message: '未登录',
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
    render(obj = {}) {
        const self = this;
        const res = self.opts.res;
        self.dataInfo = self.tools.extend({defaults: self.dataInfo, inherits: obj});
        res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
        res.end(JSON.stringify(self.dataInfo));
    }
}

module.exports = Sub;
