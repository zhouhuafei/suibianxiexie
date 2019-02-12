const extend = require('zhf.extend');
const typeOf = require('zhf.type-of');
const Message = require('zhf.g-ui/dist/js/components_dom/g-message/index.js');

module.exports = function (json) {
    json.type = (json.type || json.method || 'GET').toUpperCase(); // 这里和axios是不一样的，这里以前使用axios的习惯传入method
    json.dataType = json.dataType || 'json'; // 设置返回json格式的数据，axios默认就是返回json格式的
    const opts = extend({
        type: 'GET', // 请求方式默认GET
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
        opts.data = opts.data || opts.params || {}; // 这里和axios是不一样的，这里以前使用axios的习惯传入params
        if (opts.data) {
            // 把json格式的对象处理成json格式的字符串，让GET请求保持和axios一致的数据格式
            // 其实按理来说应该让axios保持与这边的一致，但是axios的GET请求没有提供对外的接口，所以只能让这个保持和axios一致。
            // $.ajax的POST,PUT,DELETE接收的全是字符串，即使你传的是对象，对象里有布尔值等，接收过来也会变成字符串，$.ajax的GET处理之后，你传的对象里有布尔值，后端接收之后，布尔值还是布尔值，应该和POST保持一致的。奈何axios的GET没提供对外接口
            Object.keys(opts.data).forEach(function (keys) {
                const obj = opts.data[keys];
                const type = Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
                if (type === 'object') {
                    opts.data[keys] = JSON.stringify(obj);
                }
                if (type === 'array') {
                    obj.forEach(function (v, i, a) {
                        if (Object.prototype.toString.call(v).slice(8, -1).toLowerCase() === 'object') {
                            a[i] = JSON.stringify(v);
                        }
                    });
                }
            });
        }
    }
    if (typeOf(opts.data) === 'formdata') { // formdata类型需要关闭下面,否则会报错
        opts.processData = false;
        opts.contentType = false;
    }
    return $.ajax(opts).catch(function (xhr, mark, message) {
        const dataInfo = {
            status: 'error',
            message: message,
        };
        if (opts.isHandleError) {
            new Message({
                config: {
                    content: `错误: ${message}`, // 这里的message就是error信息，只是一段普通的字符信息
                },
            });
            (typeof opts.callbackError === 'function') && opts.callbackError(dataInfo);
        }
        return dataInfo;
    }).then(function (dataInfo, mark, xhr) {
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
