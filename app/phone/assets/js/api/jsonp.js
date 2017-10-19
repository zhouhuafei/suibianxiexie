const tools = require('../utils/tools');
const Dialog = require('../components/g-dialog');
module.exports = function (json) {
    const opts = tools.extend({
        defaults: {
            url: '',
            data: {},
            isHandleError: true, // 是否处理错误
            isHandleFailure: true, // 是否处理失败
            callback: function () {
            },
        },
        inherits: json,
    });
    const url = opts.url;
    const data = opts.data;
    const callback = opts.callback;

    function fnError() {
        const dataInfo = {
            status: 'error',
            message: '接口出错',
            error: 'url - 404 not found',
        };
        callback(dataInfo);
        if (opts.isHandleError) {
            new Dialog({
                config: {
                    alert: {
                        content: `错误 : ${dataInfo.error}`,
                    },
                },
            });
        }
    }

    if (url) {
        const fnName = `jsonpCallback${new Date().getTime()}`;
        window[fnName] = function (dataInfo) {
            callback(dataInfo);
            if (dataInfo.status === 'failure' && opts.isHandleFailure) {
                new Dialog({
                    config: {
                        alert: {
                            content: `失败 : ${dataInfo.message}`,
                        },
                    },
                });
            }
        };
        const script = document.createElement('script');
        script.addEventListener('load', function () {
            document.body.removeChild(script);
        });
        script.addEventListener('error', function (ev) {
            document.body.removeChild(script);
            fnError();
        });
        const parameter = tools.queryStringify(data);
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
