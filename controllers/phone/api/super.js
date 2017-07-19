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
    }

    //初始化数据(这个方法需要在子类型里被调用)
    initData() {
        this.pageInfo = {
            status: 'success',//状态  'success'   'failure'
            message: '接口数据的基本格式',//信息     '参数错误'
            result: {
                data: [
                    {
                        picture: {
                            width: 0,
                            height: 0,
                            url: ''
                        },
                        text: '',
                        link: ''
                    }
                ],//数据集合
                allPage: 10,//总页数
                nowPage: 0,//当前页
                allCount: 200,//数据总条数
                nowCount: 20//当前页的数据条数
            }
        };
    }

    //获取数据
    renderData() {
        let res = this.opts.res;
        res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
        res.end(JSON.stringify(this.pageInfo));
    }
}

module.exports = Super;