const tools = require('zhf.tools');
const Dialog = require('../components-dom/g-dialog');

module.exports = function (json) {
    json.method = json.type || json.method || 'get'; // 这里和axios是不一样的，这里以前使用axios的习惯传入method
    json.dataType = json.dataType || 'json'; // 设置返回json格式的数据，axios默认就是返回json格式的
    const opts = tools.extend({
        method: 'get', // 请求方式默认get
        isHandleError: true, // 是否处理错误
        isHandleFailure: true, // 是否处理失败
        timeout: 8000, // 超时
    }, json);
    opts.success = function (dataInfo, mark, xhr) {
        if (dataInfo.status === 'failure' && opts.isHandleFailure) {
            new Dialog({
                config: {
                    alert: {
                        content: `失败: ${dataInfo.message}`,
                    },
                },
            });
        }
        if (typeof json.success === 'function') {
            json.success(dataInfo, mark, xhr);
        }
    };
    if (opts.isHandleError) {
        opts.error = function (xhr, mark, message) {
            new Dialog({
                config: {
                    alert: {
                        content: `错误: ${message}`, // 这里的message就是error信息，只是一段普通的字符信息
                    },
                },
            });
        };
    }
    /*
    * javascript axios get params
    * javascript axios post/put/delete data
    * 把上述四种数据的传参方式进行统一化,统一使用data
    * nodejs express get req.query
    * nodejs express post/put/delete body-parser req.body
    * 把上述四种数据的传参方式进行统一化,统一使用req.data
    * */
    if (opts.method.toLowerCase() === 'get') {
        opts.data = opts.data || opts.params; // 这里和axios是不一样的，这里以前使用axios的习惯传入params
    }
    return $.ajax(opts);
};
