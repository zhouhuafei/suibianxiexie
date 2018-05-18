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
        failureInfo: null, // 失败信息
        failureCode: null, // 失败编码 401 未授权,未登录
        /*
        // result不放出来,是因为扩展extend的时候会进行循环比对,而mongoose里查询结果的get和set是被处理过的,如果把mongoose的查询结果直接替换result,比对赋值时,会导致数据出现在_doc上
        result: {
            // 其他的数据结构。字段请自行定义。
            // name: 'rookie',
            // sex: 'male',
            // items: [1, 2, 3],
            // data: {a: 'a', b: 'b', c: 'c'},
            // 列表的数据结构。字段请和下面的字段保持一致。
            // list: [
            //     // {
            //     //     img: {
            //     //         width: 0,
            //     //         height: 0,
            //     //         src: '',
            //     //     },
            //     //     text: '接口格式保持一致',
            //     //     href: '',
            //     // },
            // ],
            // allPage: 1, // 总页数
            // nowPage: 1, // 当前页
            // allCount: 0, // 数据总条数
            // nowCount: 0, // 当前页的数据条数
        },
        */
    }, opts);
};
