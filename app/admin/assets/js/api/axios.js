const axios = require('axios');
const tools = require('zhf.tools');
const Dialog = require('../components-dom/g-dialog');

module.exports = function (json) {
    json.method = json.method || json.type || 'get';
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
        opts.params = opts.data || opts.params; // 这里和$.ajax是不一样的，这里以前使用$.ajax的习惯传入data
    }
    return axios(opts).catch(function (error) {
        const response = {
            data: {
                status: 'error',
            },
        };
        if (opts.isHandleError) {
            new Dialog({
                config: {
                    alert: {
                        content: error, // 这里的error其实是一个Error类型的数据
                    },
                },
            });
        }
        return response;
    }).then(function (response) {
        const dataInfo = response.data;
        if (dataInfo.status === 'failure' && opts.isHandleFailure) {
            new Dialog({
                config: {
                    alert: {
                        content: `失败: ${dataInfo.message}`,
                    },
                },
            });
        }
        return dataInfo;
    });
};
