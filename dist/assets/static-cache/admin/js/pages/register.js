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
var userName = $('input[name=username]');
var timeCountDown = __webpack_require__(88);

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

/***/ 124:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var extend = __webpack_require__(0),
    secondsToTime = __webpack_require__(89);function timeCountDown(e) {
  var n = extend({ seconds: 0, isToTime: !0, isHandleRunWhenZero: !1, isHandleOverWhenZero: !1, isHandleRunWhenOver: !1, callback: { run: function run() {}, over: function over() {} } }, e),
      o = Number(n.seconds) || 0;o < 0 && (o = 0);var r = n.callback.run,
      s = n.callback.over,
      i = function i() {
    n.isToTime ? r(secondsToTime(o)) : r({ day: 0, hours: 0, minutes: 0, seconds: 0, allSeconds: o });
  };if (0 === o && (n.isHandleRunWhenZero && i(), n.isHandleOverWhenZero && s()), 0 < o) {
    i();var a = setInterval(function () {
      0 === --o ? (clearInterval(a), n.isHandleRunWhenOver && i(), s()) : i();
    }, 1e3);
  }
}module.exports = timeCountDown;

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (o) {
  return typeof o === "undefined" ? "undefined" : _typeof2(o);
} : function (o) {
  return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o === "undefined" ? "undefined" : _typeof2(o);
};!function (o, e) {
  "object" === ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : window && ("object" !== Object.prototype.toString.call(window.zhf).slice(8, -1).toLowerCase() && (window.zhf = {}), window.zhf.secondsToTime = e());
}(0, function () {
  return function () {
    var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;return { day: Math.floor(o / 3600 / 24), hours: Math.floor(o / 3600 % 24), minutes: Math.floor(o % 3600 / 60), seconds: Math.floor(o % 60), allSeconds: o };
  };
});

/***/ })

},[123]);