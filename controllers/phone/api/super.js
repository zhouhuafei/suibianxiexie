//接口数据
const tools = require('../../../base/tools');

class Super {
    constructor(json) {
        this.opts = tools.extend({
            defaults: {
                res: null,
                req: null
            },
            inherits: json
        });
        this.apiInfo = {
            status: 'failure',//状态  'success'   'failure'
            message: '接口数据的基本格式',//信息     '参数错误'
            result: {
                items: [
                    {
                        picture: {
                            width: 0,
                            height: 0,
                            url: ''
                        },
                        text: '请求失败了哟',
                        link: ''
                    }
                ],//数据集合
                allPage: 10,//总页数
                nowPage: 1,//当前页
                allCount: 200,//数据总条数
                nowCount: 20//当前页的数据条数
            }
        };
    }

    //初始化数据(这个方法需要在子类型里被调用)
    initData() {
        let req = this.opts.req;
        let method = req.method.toLowerCase(); //请求方式
        //获取数据(增)
        if (method === 'post') {
            this.postData();
        }

        //删除数据(删)
        if (method === 'delete') {
            this.deleteData();
        }

        //修改数据(改)
        if (method === 'put') {
            this.putData();
        }

        //查找数据(查)
        if (method === 'get') {
            this.getData();
        }
    }

    //获取数据(增)(这个需要在子类型里被覆盖掉)
    postData() {
    }

    //删除数据(删)(这个需要在子类型里被覆盖掉)
    deleteData() {
    }

    //修改数据(改)(这个需要在子类型里被覆盖掉)
    putData() {
    }

    //查找数据(查)(这个需要在子类型里被覆盖掉)
    getData() {
    }

    //获取数据
    renderData() {
        let res = this.opts.res;
        res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
        res.end(JSON.stringify(this.apiInfo));
    }
}

module.exports = Super;