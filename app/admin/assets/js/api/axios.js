const axios = require('axios');
const extend = require('zhf.extend');
const typeOf = require('zhf.type-of');
const Message = require('zhf.g-ui/dist/js/components_dom/g-message/index.js');
const qs = require('qs');

/*
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // return config; // config是请求的配置参数。重点：此处如果返回Promise对象，可以阻塞接口请求。如此直接就可以解决刷新token时的接口并发问题。
    // 以下是返回Promise对象的案例。
    return new Promise(function (resolve, reject) {
        setTimeout(function () { // 模拟等待refreshToken
            resolve(config);
        }, 5000);
    });
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // const config = response.config; // config是请求的配置参数
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
*/

module.exports = function (json) {
    json.method = (json.method || json.type || 'GET').toUpperCase(); // 这里和$.ajax是不一样的，这里以前使用$.ajax的习惯传入type
    const opts = extend({
        method: 'GET', // 请求方式默认GET
        timeout: 30000, // 超时
        isHandleError: true, // 是否处理错误
        isHandleFailure: true, // 是否处理失败
        isHandleSuccess: false, // 是否处理成功
        headers: {},
        /*
        优先级：错误回调>失败回调>成功回调>完成回调。
        调用方法时，要么用回调的方式走异步，要么用Promise的方式。
        用Promise的方式，还请自己去判断dataInfo.status字段，是否出错，失败，成功，完成。
        */
        callbackError: function () { // 请求错误的回调
        },
        callbackFailure: function () { // 请求失败的回调
        },
        callbackSuccess: function () { // 请求成功的回调
        },
        callbackComplete: function () { // 请求完成的回调
        },
    }, json);
    /*
    * javascript axios GET params
    * javascript axios POST/PUT/DELETE data
    * 把上述四种数据的传参方式进行统一化,统一使用data
    * nodejs express GET req.query
    * nodejs express POST/PUT/DELETE body-parser req.body
    * 把上述四种数据的传参方式进行统一化,统一使用req.data
    * */
    if (opts.method.toUpperCase() === 'GET') {
        opts.params = opts.params || opts.data; // 这里和$.ajax是不一样的，这里以前使用$.ajax的习惯传入data
    } else {
        // 把非字符串的数据处理成字符串数据，让POST,PUT,DELETE请求保持和$.ajax一致的数据格式(application/json变成application/x-www-form-urlencoded)
        // 为什么过滤掉了GET,其实GET也应该转成和$.ajax一致的，需要用qs.stringify处理一下，但是axios没有提供对外的操作方法，所以只能去修改$.ajax，让其请求方式为GET时，数据保持和axios保持一致。
        // axios的POST,PUT,DELETE处理之后,接收的全是字符串，即使你传的是对象，对象里有布尔值等，接收过来也会变成字符串，axios的GET你传的如果是对象，对象里有布尔值，后端接收之后，布尔值还是布尔值，应该和POST保持一致的。奈何axios的GET没提供对外接口
        if (typeOf(opts.data) === 'object') { // 过滤掉undefined,formdata等数据类型
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
        const dataInfo = response.data;
        if (opts.isHandleError) {
            new Message({
                config: {
                    content: response.data.message, // 这里的error其实是一个Error类型的数据
                },
            });
            (typeof opts.callbackError === 'function') && opts.callbackError(dataInfo);
        }
        return response;
    }).then(function (response) {
        const dataInfo = response.data;
        if (dataInfo.status === 'failure') { // 失败
            if (opts.isHandleFailure) {
                new Message({
                    config: {
                        content: `失败: ${dataInfo.message}`,
                    },
                });
            }
            (typeof opts.callbackFailure === 'function') && opts.callbackFailure(dataInfo);
        }
        if (dataInfo.status === 'success') { // 成功
            if (opts.isHandleSuccess) {
                new Message({
                    config: {
                        content: `成功: ${dataInfo.message}`,
                    },
                });
            }
            (typeof opts.callbackSuccess === 'function') && opts.callbackSuccess(dataInfo);
        }
        (typeof opts.callbackComplete === 'function') && opts.callbackComplete(dataInfo);
        return dataInfo;
    });
};
