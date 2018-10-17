webpackJsonp([4],{

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(125);
var Super = __webpack_require__(4);
var form = document.querySelector('.form');
var verifyCodeCanvas = document.querySelector('.g-verify-code-canvas img');
var verifyCodeRandom = document.querySelector('.g-verify-code-random');
var verifyCodeRandomHtml = verifyCodeRandom.innerHTML;
var userName = $('input[name=username]');
var timeCountDown = __webpack_require__(39);

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
            var ajax = superSelf.ajax;

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
                    data: { username: userName.val().trim() },
                    isHandleSuccess: true
                }).then(function (res) {
                    function fn() {
                        verifyCodeRandom.classList.add('g-verify-code-random_inactive');
                        timeCountDown({
                            seconds: res.result.remainingTime,
                            isToTime: true, // 是否转换成时间
                            callback: {
                                run: function run(json) {
                                    verifyCodeRandom.innerHTML = json.allSeconds;
                                },
                                over: function over() {
                                    delete randomDom.isSending;
                                    verifyCodeRandom.innerHTML = verifyCodeRandomHtml;
                                    verifyCodeRandom.classList.remove('g-verify-code-random_inactive');
                                }
                            }
                        });
                    }

                    if (res.status === 'success') {
                        // success
                        fn();
                    } else {
                        // error、failure
                        if (res.status === 'failure' && res.failureCode === 'not expired') {
                            fn();
                            return;
                        }
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

/***/ 125:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[124]);