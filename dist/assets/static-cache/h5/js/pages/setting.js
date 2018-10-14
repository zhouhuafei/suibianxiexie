webpackJsonp([8],{

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(156);
var Super = __webpack_require__(3);

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

            // 退出账号
            document.querySelector('.page-logout').addEventListener('click', function () {
                new Confirm({
                    callback: {
                        confirm: function confirm() {
                            axios({
                                url: dataInfo.api.logout.route,
                                method: 'get'
                            }).then(function (json) {
                                if (json.status === 'success') {
                                    window.location.href = dataInfo.routes.login.route;
                                }
                            });
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

/***/ 156:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[155]);