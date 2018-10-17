webpackJsonp([4],{

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(124);
var Super = __webpack_require__(4);
var form = document.querySelector('.form');
var verifyCodeCanvas = document.querySelector('.g-verify-code-canvas img');
var verifyCodeRandom = document.querySelector('.g-verify-code-random');
var verifyCodeRandomHtml = verifyCodeRandom.innerHTML;
var ajax = __webpack_require__(127);
var userName = $('input[name=username]');
var timeCountDown = __webpack_require__(88);

var _require = __webpack_require__(15),
    Message = _require.Message;

var Sub = function (_Super) {
    _inherits(Sub, _Super);

    function Sub() {
        _classCallCheck(this, Sub);

        return _possibleConstructorReturn(this, (Sub.__proto__ || Object.getPrototypeOf(Sub)).apply(this, arguments));
    }

    _createClass(Sub, [{
        key: 'power',

        // (功)(覆)功能(覆盖超类型)
        value: function power() {
            var superSelf = this;
            var dataInfo = superSelf.dataInfo;
            var routes = dataInfo.routes;
            var api = dataInfo.api;

            // 发送验证码
            $('.js-verify-code-random').on('click', function () {
                var randomDom = this;
                if (randomDom.isSending) {
                    return;
                }
                randomDom.isSending = true;
                ajax({
                    url: api['verify-code-random_register'].route,
                    method: 'get',
                    data: { username: userName.val().trim() }
                }).then(function (json) {
                    if (json.status === 'success') {
                        // success
                        timeCountDown({
                            seconds: 90,
                            isToTime: true, // 是否转换成时间
                            callback: {
                                run: function run(json) {
                                    verifyCodeRandom.innerHTML = json.allSeconds;
                                    verifyCodeRandom.classList.add('.g-verify-code-random_inactive');
                                },
                                over: function over() {
                                    delete randomDom.isSending;
                                    verifyCodeRandom.innerHTML = verifyCodeRandomHtml;
                                    verifyCodeRandom.classList.remove('.g-verify-code-random_inactive');
                                }
                            }
                        });
                    } else {
                        // error、failure
                        delete randomDom.isSending;
                    }
                });
            });

            // 注册成功
            form.callbackSuccess = function () {
                window.location.href = routes['login'].route;
            };

            // 注册失败
            form.callbackFailure = function () {
                verifyCodeCanvas.click();
            };
        }
    }]);

    return Sub;
}(Super);

new Sub();

/***/ }),

/***/ 124:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var extend = __webpack_require__(0);
var typeOf = __webpack_require__(17);
var Message = __webpack_require__(11);

module.exports = function (json) {
    json.type = json.type || json.method || 'get'; // 这里和axios是不一样的，这里以前使用axios的习惯传入method
    json.dataType = json.dataType || 'json'; // 设置返回json格式的数据，axios默认就是返回json格式的
    var opts = extend({
        type: 'get', // 请求方式默认get
        timeout: 30000, // 超时
        isHandleError: true, // 是否处理错误
        isHandleFailure: true, // 是否处理失败
        isHandleSuccess: false, // 是否处理成功
        callbackSuccess: function callbackSuccess() {// 请求成功的回调
        },
        callbackFailure: function callbackFailure() {// 请求失败的回调
        },
        callbackComplete: function callbackComplete() {// 请求完成的回调
        }
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
                var obj = opts.data[keys];
                var type = Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
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
    if (typeOf(opts.data) === 'formdata') {
        // formdata类型需要关闭下面,否则会报错
        opts.processData = false;
        opts.contentType = false;
    }
    return $.ajax(opts).catch(function (xhr, mark, message) {
        var dataInfo = {
            status: 'error',
            message: message
        };
        if (opts.isHandleError) {
            new Message({
                config: {
                    content: '\u9519\u8BEF: ' + message // 这里的message就是error信息，只是一段普通的字符信息
                }
            });
        }
        return dataInfo;
    }).then(function (dataInfo, mark, xhr) {
        if (dataInfo.status === 'failure') {
            // 失败
            if (opts.isHandleFailure) {
                new Message({
                    config: {
                        content: '\u5931\u8D25: ' + dataInfo.message
                    }
                });
            }
            typeof opts.callbackFailure === 'function' && opts.callbackFailure(dataInfo);
        }
        if (dataInfo.status === 'success') {
            // 成功
            if (opts.isHandleSuccess) {
                new Message({
                    config: {
                        content: '\u6210\u529F: ' + dataInfo.message
                    }
                });
            }
            typeof opts.callbackSuccess === 'function' && opts.callbackSuccess(dataInfo);
        }
        typeof opts.callbackComplete === 'function' && opts.callbackComplete(dataInfo);
        return dataInfo;
    });
};

/***/ })

},[123]);