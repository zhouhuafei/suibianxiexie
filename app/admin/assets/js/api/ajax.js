const tools = require('zhf.tools');
const Dialog = require('../components-dom/g-dialog');

module.exports = function (json) {
    json.method = json.method || json.type || 'get';
    json.dataType = json.dataType || 'json';
    // complete success error回调处理待续...
    const opts = tools.extend({
        method: 'get', // 请求方式默认get
        isHandleError: true, // 是否处理错误
        isHandleFailure: true, // 是否处理失败
        timeout: 8000, // 超时
    }, json);
    /*
    * javascript axios get params
    * javascript axios post/put/delete data
    * 把上述四种数据的传参方式进行统一化,统一使用data
    * nodejs express get req.query
    * nodejs express post/put/delete body-parser req.body
    * 把上述四种数据的传参方式进行统一化,统一使用req.data
    * */
    if (opts.method.toLowerCase() === 'get') {
        opts.data = opts.params || opts.data; // 这里和axios是不一样的，这里以前使用axios的习惯传入params
    }
    return $.ajax(opts);
};
