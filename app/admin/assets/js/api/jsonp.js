const extend = require('zhf.extend');
const typeOf = require('zhf.type-of');
const queryString = require('zhf.query-string');
const Message = require('zhf.g-ui/src/js/components_dom/g-message/index.js');

module.exports = function (json) {
    const opts = extend({
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
            new Message({
                config: {
                    content: `错误: ${dataInfo.error}`,
                },
            });
        }
    }

    if (url) {
        const random = ('' + Math.random()).substring(2);
        let fnName = `jsonpCallback${new Date().getTime()}${random}`;
        if (callbackName && typeOf(callbackName) === 'string') {
            fnName = callbackName;
        }
        window[fnName] = function (dataInfo) {
            callback(dataInfo);
            if (dataInfo.status === 'failure' && opts.isHandleFailure) {
                new Message({
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
