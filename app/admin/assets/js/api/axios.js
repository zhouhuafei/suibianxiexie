const axios = require('axios');
const tools = require('zhf.tools');
const Dialog = require('../components-dom/g-dialog');
const qs = require('qs');

module.exports = function (json) {
    json.method = json.method || json.type || 'get'; // 这里和$.ajax是不一样的，这里以前使用$.ajax的习惯传入type
    const opts = tools.extend({
        method: 'get', // 请求方式默认get
        isHandleError: true, // 是否处理错误
        isHandleFailure: true, // 是否处理失败
        isHandleSuccess: false, // 是否处理成功
        timeout: 30000, // 超时
        callbackSuccess: function () { // 请求成功的回调
        },
        callbackSuccessDelayTriggerTime: 3000, // 请求成功的回调延迟几秒触发(默认3秒)
        callbackFailure: function () { // 请求失败的回调
        },
        callbackFailureDelayTriggerTime: 0, // 请求失败的回调延迟几秒触发(默认0秒)
        callbackComplete: function () { // 请求完成的回调
        },
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
        opts.params = opts.params || opts.data; // 这里和$.ajax是不一样的，这里以前使用$.ajax的习惯传入data
    } else {
        // 把非字符串的数据处理成字符串数据，让post,put,delete请求保持和$.ajax一致的数据格式(application/json变成application/x-www-form-urlencoded)
        // 为什么过滤掉了get,其实get也应该转成和$.ajax一致的，需要用qs.stringify处理一下，但是axios没有提供对外的操作方法，所以只能去修改$.ajax，让其请求方式为get时，数据保持和axios保持一致。
        // axios的post,put,delete处理之后,接收的全是字符串，即使你传的是对象，对象里有布尔值等，接收过来也会变成字符串，axios的get你传的如果是对象，对象里有布尔值，后端接收之后，布尔值还是布尔值，应该和post保持一致的。奈何axios的get没提供对外接口
        if (tools.typeOf(opts.data) === 'object') { // 过滤掉undefined,formdata等数据类型
            opts.data = qs.stringify(opts.data);
        }
    }
    return axios(opts).catch(function (error) {
        const response = {
            data: {
                status: 'error',
                message: error,
            },
        };
        if (opts.isHandleError) {
            new Dialog({
                config: {
                    alert: {
                        content: response.data.message, // 这里的error其实是一个Error类型的数据
                    },
                },
            });
        }
        return response;
    }).then(function (response) {
        const dataInfo = response.data;
        if (dataInfo.status === 'failure') { // 失败
            if (opts.isHandleFailure) {
                new Dialog({
                    config: {
                        alert: {
                            content: `失败: ${dataInfo.message}`,
                        },
                    },
                });
            }
            setTimeout(function () {
                (typeof opts.callbackFailure === 'function') && opts.callbackFailure(dataInfo);
            }, opts.callbackFailureDelayTriggerTime);
        }
        if (dataInfo.status === 'success') { // 成功
            if (opts.isHandleSuccess) {
                new Dialog({
                    config: {
                        alert: {
                            content: dataInfo.message,
                        },
                    },
                });
            }
            setTimeout(function () {
                (typeof opts.callbackSuccess === 'function') && opts.callbackSuccess(dataInfo);
            }, opts.callbackSuccessDelayTriggerTime);
        }
        (typeof opts.callbackComplete === 'function') && opts.callbackComplete(dataInfo);
        return dataInfo;
    });
};
