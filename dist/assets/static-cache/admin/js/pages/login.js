webpackJsonp([6],{

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(119);
var Super = __webpack_require__(6);

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
            var axios = superSelf.axios;

            // 验证
            (function () {
                var ValidateInput = __webpack_require__(13);
                new ValidateInput({ element: '.js-validate-form' });
            })();

            // 登陆
            (function () {
                var form = document.querySelector('#form');
                var username = document.querySelector('#username');
                var password = document.querySelector('#password');
                var btn = document.querySelector('.js-button');
                btn.addEventListener('click', function () {
                    axios({
                        url: form.action,
                        method: form.method,
                        /*
                        data: {
                            username: username.value,
                            password: password.value,
                        },
                        */
                        data: $(form).serialize()
                    }).then(function (json) {
                        if (json.status === 'success') {
                            window.location.href = routes['website-info'].route;
                        }
                        if (json.status === 'failure') {
                            document.querySelector('.g-verify-code-canvas img').click();
                        }
                    });
                });
            })();

            // 忘记密码,去删库
            document.querySelector('.js-del-db').addEventListener('click', function () {
                new superSelf.Dialog({
                    config: {
                        type: 'confirm', // 默认是提示框
                        confirm: {
                            content: '<div class="page-dialog-del-db">\n                            <div>1. \u94FE\u63A5\u4F60\u7684mongodb\u6570\u636E\u5E93\u3002</div>\n                            <div>2. \u627E\u5230\u540D\u4E3Asuibianxiexie\u7684\u6570\u636E\u5E93\u3002</div>\n                            <div>3. \u627E\u5230\u540D\u4E3Aadmins\u7684\u96C6\u5408\u3002</div>\n                            <div>4. \u5220\u9664\u540D\u4E3Aadmins\u7684\u96C6\u5408\u3002</div>\n                            <div>5. \u5728\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u91CC\u91CD\u65B0\u6CE8\u518C\u7BA1\u7406\u5458\u8D26\u53F7\u3002</div>\n                        </div>'
                        }
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

/***/ })

},[118]);