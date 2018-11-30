webpackJsonp([9],{

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(119);
var Super = __webpack_require__(0);
var timeCountDown = __webpack_require__(120); // 倒计时

var _require = __webpack_require__(10),
    Message = _require.Message,
    Confirm = _require.Confirm,
    Validate = _require.Validate,
    GoTop = _require.GoTop,
    TooltipApp = _require.TooltipApp,
    Copyright = _require.Copyright,
    LazyLoad = _require.LazyLoad;

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
            var self = this;
            var dataInfo = self.dataInfo;
            var axios = self.axios;

            // 获取验证码
            var domForm = document.querySelector('#form');
            var domUsername = document.querySelector('#username');
            var domPassword = document.querySelector('#password');
            var domVerifyCode = document.querySelector('#verify-code');
            var domGetVerifyCode = document.querySelector('.get-verify-code');
            var domGetVerifyCodeHtml = domGetVerifyCode.innerHTML;
            var domGetVerifyCodeInactive = 'get-verify-code-inactive';
            var isCanGetVerifyCode = true;
            domGetVerifyCode.addEventListener('click', function (ev) {
                var domSelf = this;
                ev.preventDefault();
                if (isCanGetVerifyCode) {
                    isCanGetVerifyCode = false;
                    var username = domUsername.value;
                    var formData = new FormData();
                    formData.append('username', username);
                    formData.append('accountnum', 123456); // 数字 123456 会被立即转换成字符串 "123456"
                    axios({
                        url: dataInfo.api['verify-code-random'].route,
                        method: 'GET',
                        data: {
                            username: username
                        }
                    }).then(function (json) {
                        if (json.status === 'success') {
                            new Message({ config: { icon: 'icon-success', content: '验证码已发送' } });
                            domSelf.classList.add(domGetVerifyCodeInactive);
                            timeCountDown({
                                seconds: 90,
                                isToTime: false,
                                callback: {
                                    run: function run(obj) {
                                        domGetVerifyCode.innerHTML = '<span class="g-button">' + obj.allSeconds + '\u79D2</span>';
                                    },
                                    over: function over() {
                                        isCanGetVerifyCode = true;
                                        domGetVerifyCode.innerHTML = domGetVerifyCodeHtml;
                                        domSelf.classList.remove(domGetVerifyCodeInactive);
                                    }
                                }
                            });
                        } else {
                            isCanGetVerifyCode = true;
                        }
                    });
                }
            });

            // 立即注册
            document.querySelector('.register').addEventListener('click', function () {
                var isFormData = false;
                var userInfo = new FormData(domForm);
                if (!isFormData) {
                    userInfo = {
                        username: domUsername.value,
                        password: domPassword.value,
                        verifyCode: domVerifyCode.value
                    };
                }
                axios({
                    url: dataInfo.api.register.route,
                    method: 'POST',
                    data: userInfo
                }).then(function (json) {
                    if (json.status === 'success') {
                        window.location.href = dataInfo.routes.login.route;
                    }
                });
            });
        }
    }]);

    return Sub;
}(Super);

new Sub();

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var extend=__webpack_require__(5),secondsToTime=__webpack_require__(121);function timeCountDown(e){var n=extend({seconds:0,isToTime:!0,isHandleRunWhenZero:!1,isHandleOverWhenZero:!1,isHandleRunWhenOver:!1,callback:{run:function(){},over:function(){}}},e),o=Number(n.seconds)||0;o<0&&(o=0);var r=n.callback.run,s=n.callback.over,i=function(){n.isToTime?r(secondsToTime(o)):r({day:0,hours:0,minutes:0,seconds:0,allSeconds:o})};if(0===o&&(n.isHandleRunWhenZero&&i(),n.isHandleOverWhenZero&&s()),0<o){i();var a=setInterval(function(){0===--o?(clearInterval(a),n.isHandleRunWhenOver&&i(),s()):i()},1e3)}}module.exports=timeCountDown;

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o};!function(o,e){"object"===( false?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=e(): true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):window&&("object"!==Object.prototype.toString.call(window.zhf).slice(8,-1).toLowerCase()&&(window.zhf={}),window.zhf.secondsToTime=e())}(0,function(){return function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{day:Math.floor(o/3600/24),hours:Math.floor(o/3600%24),minutes:Math.floor(o%3600/60),seconds:Math.floor(o%60),allSeconds:o}}});

/***/ })

},[118]);