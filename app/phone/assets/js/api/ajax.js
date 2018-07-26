const tools = require('zhf.tools');
const Message = require('../components-dom/g-message');

module.exports = function (json) {
    json.type = json.type || json.method || 'get'; // 这里和axios是不一样的，这里以前使用axios的习惯传入method
    json.dataType = json.dataType || 'json'; // 设置返回json格式的数据，axios默认就是返回json格式的
    const opts = tools.extend({
        type: 'get', // 请求方式默认get
        timeout: 30000, // 超时
        isHandleError: true, // 是否处理错误
        isHandleFailure: true, // 是否处理失败
        isHandleSuccess: false, // 是否处理成功
        callbackSuccess: function () { // 请求成功的回调
        },
        callbackFailure: function () { // 请求失败的回调
        },
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
        opts.data = opts.data || opts.params || {}; // 这里和axios是不一样的，这里以前使用axios的习惯传入params
        if (opts.data) {
            // 把json格式的对象处理成json格式的字符串，让get请求保持和axios一致的数据格式
            // 其实按理来说应该让axios保持与这边的一致，但是axios的get请求没有提供对外的接口，所以只能让这个保持和axios一致。
            // $.ajax的post,put,delete接收的全是字符串，即使你传的是对象，对象里有布尔值等，接收过来也会变成字符串，$.ajax的get处理之后，你传的对象里有布尔值，后端接收之后，布尔值还是布尔值，应该和post保持一致的。奈何axios的get没提供对外接口
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
    if (tools.typeOf(opts.data) === 'formdata') { // formdata类型需要关闭下面,否则会报错
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
