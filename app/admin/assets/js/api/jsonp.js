const tools = require('zhf.tools');
const DialogAlert = require('../components-dom/g-dialog-alert');
const queryString = tools.queryString;

module.exports = function (json) {
    const opts = tools.extend({
        url: '',
        data: {},
        isHandleError: true, // 是否处理错误
        isHandleFailure: true, // 是否处理失败
        callbackName: null, // 自定义服务器接收的callback名称
        callback: function () {
        },
    }, json);
    const url = opts.url;
    const data = opts.data;
    const callbackName = opts.callbackName;
    const callback = opts.callback;

    function fnError() {
        const dataInfo = {
            status: 'error',
            message: '接口出错',
            error: 'Request failed with status code 404',
        };
        callback(dataInfo);
        if (opts.isHandleError) {
            new DialogAlert({
                config: {
                    content: `错误: ${dataInfo.error}`,
                },
            });
        }
    }

    if (url) {
        const random = ('' + Math.random()).substring(2);
        let fnName = `jsonpCallback${new Date().getTime()}${random}`;
        if (callbackName && tools.typeOf(callbackName) === 'string') {
            fnName = callbackName;
        }
        window[fnName] = function (dataInfo) {
            callback(dataInfo);
            if (dataInfo.status === 'failure' && opts.isHandleFailure) {
                new DialogAlert({
                    config: {
                        content: `失败: ${dataInfo.message}`,
                    },
                });
            }
        };
        const script = document.createElement('script');
        script.addEventListener('error', function () {
            document.body.removeChild(script);
            fnError();
        });
        script.addEventListener('load', function () {
            document.body.removeChild(script);
        });
        const parameter = queryString.queryStringify(data);
        // jsonp - jsonp只支持get请求,其他一概不支持
        if (parameter) {
            script.src = `${url}?${parameter}&callback=${fnName}`;
        } else {
            script.src = `${url}?callback=${fnName}`;
        }
        document.body.appendChild(script);
    } else {
        fnError();
    }
};
