const tools = require('zhf.tools');

module.exports = function (opts = {}) {
    return tools.extend({
        /*
        * 状态信息:
        * 成功(success)   服务端响应状态是200且满足业务逻辑,则状态是success,预定义的数据格式:{status: 'success'}
        * 失败(failure)   服务端响应状态是200且不满足业务逻辑,则状态是failure,预定义的数据格式:{status: 'failure'}
        * 错误(error)     服务端响应状态不是200,则状态是error,预定义的数据格式:{status: 'error'}
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
    }, opts);
};
