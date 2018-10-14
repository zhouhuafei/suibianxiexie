webpackJsonp([10],{

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(152);
var Super = __webpack_require__(3);
var timeCountDown = __webpack_require__(55); // 倒计时

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
                        method: 'get',
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
                    method: 'post',
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

/***/ 152:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[151]);