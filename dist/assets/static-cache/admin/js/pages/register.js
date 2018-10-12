webpackJsonp([5],{

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(126);
var Super = __webpack_require__(7);

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
                var ValidateInput = __webpack_require__(20);
                new ValidateInput({ element: '.js-validate-form' });
            })();

            // 注册
            (function () {
                var form = document.querySelector('#form');
                var username = document.querySelector('#username');
                var password = document.querySelector('#password');
                var repeatPassword = document.querySelector('#repeat-password');
                var btn = document.querySelector('.js-button');
                btn.addEventListener('click', function () {
                    axios({
                        url: form.action,
                        method: form.method,
                        /*
                        data: {
                            username: username.value,
                            password: password.value,
                            'repeat-password': repeatPassword.value,
                        },
                        */
                        data: $(form).serialize()
                    }).then(function (json) {
                        if (json.status === 'success') {
                            window.location.href = routes['login'].route;
                        }
                        if (json.status === 'failure') {
                            document.querySelector('.g-verify-code-canvas img').click();
                        }
                    });
                });
            })();
        }
    }]);

    return Sub;
}(Super);

new Sub();

/***/ }),

/***/ 126:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[125]);