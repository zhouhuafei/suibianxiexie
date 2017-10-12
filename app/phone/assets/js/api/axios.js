const axios = require('axios');
const tools = require('../utils/tools');
const Dialog = require('../components/g-dialog');

module.exports = function (json) {
    const opts = tools.extend({
        defaults: {
            isHandleError: true, // 是否处理错误
            isHandleFailure: true, // 是否处理失败
            timeout: 5000, // 超时
        },
        inherits: json,
    });
    /*
    * javascript axios get params
    * javascript axios post/put/delete data
    * 把上述四种数据的传参方式进行统一化,统一使用data
    * nodejs express get req.query
    * nodejs express post/put/delete body-parser req.body
    * 把上述四种数据的传参方式进行统一化,统一使用req.data
    * */
    if (opts.method.toLowerCase() === 'get') {
        opts.params = opts.data || opts.params;
    }
    return axios(opts).catch(function (error) {
        if (opts.isHandleError) {
            new Dialog({
                config: {
                    alert: {
                        content: `错误 : ${error}`,
                    },
                },
            });
        }
    }).then(function (response) {
        let dataInfo = {};
        if (response) {
            dataInfo = response.data;
            if (dataInfo.status === 'failure' && opts.isHandleFailure) {
                new Dialog({
                    config: {
                        alert: {
                            content: `失败 : ${dataInfo.message}`,
                        },
                    },
                });
            }
        }
        return dataInfo;
    });
};
