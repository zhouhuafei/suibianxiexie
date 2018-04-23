webpackJsonp([2],{

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var tools = __webpack_require__(1); // 工具方法集合
var Dialog = __webpack_require__(14); // 弹窗

// 专门为请求成功写的跳转链接弹窗

var Super = function Super(opts) {
    _classCallCheck(this, Super);

    opts = tools.extend({
        title: '操作成功',
        seconds: 3,
        pageTitle: '登录',
        href: 'javascript:;'
    }, opts);
    var content = '<div class="g-dialog-jump-link">\n            <div class="g-dialog-jump-link-title">' + opts.title + '</div>\n            <div class="g-dialog-jump-link-body">\n                <div class="g-dialog-jump-link-body-seconds">' + opts.seconds + '</div>\n                <div>\u79D2\u540E\u81EA\u52A8\u8DF3\u8F6C\u5230</div>\n                <a href="' + opts.href + '" class="g-dialog-jump-link-body-page-title">' + opts.pageTitle + '\u9875</a>\n            </div>\n            <a href="' + opts.href + '" class="g-dialog-jump-link-footer">\u70B9\u51FB\u6B64\u5904\u624B\u52A8\u8DF3\u8F6C</a>\n        </div>';
    var dialog = new Dialog({
        config: {
            type: 'confirm', // 默认是提示框
            positionLocation: 'center', // 弹窗的定位位置
            // 确认框
            confirm: {
                // 点击确认是否关闭弹窗
                isShowHeader: false, // 是否显示头部
                headerContent: '提示:', // 头部内容
                isShowBody: true, // 是否显示主体
                content: content, // 主体内容
                isShowFooter: false, // 是否显示尾部
                footerContent: '', // 尾部内容
                isShowClose: false, // 是否显示关闭按钮
                closeContent: '<div class="iconfont icon-close"></div>', // 关闭按钮的内容
                isShowConfirm: false, // 是否显示确认按钮
                confirmContent: '确认', // 确认按钮的内容
                isShowCancel: false, // 是否显示取消按钮
                cancelContent: '取消', // 取消按钮的内容
                isCustom: false, // 是否自定义
                isShowIcon: false, // 是否显示icon
                icon: 'icon-warning', // icon的类型
                isShowMask: true, // 是否显示遮罩
                isHandHide: false // 是否手动隐藏(一般只用于点击确认时)
            }
        }
    });
    var seconds = dialog.moduleDom.querySelector('.g-dialog-jump-link-body-seconds');
    tools.timeCountDown({
        seconds: opts.seconds,
        callback: {
            run: function run(obj) {
                seconds.innerHTML = obj.seconds;
            },
            over: function over() {
                window.location.href = opts.href;
            }
        }
    });
};

module.exports = Super;

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(79);
var Super = __webpack_require__(7);

var Sub = function (_Super) {
    _inherits(Sub, _Super);

    function Sub() {
        _classCallCheck(this, Sub);

        return _possibleConstructorReturn(this, (Sub.__proto__ || Object.getPrototypeOf(Sub)).apply(this, arguments));
    }

    _createClass(Sub, [{
        key: 'power',
        value: function power() {
            var superSelf = this;
            var dataInfo = superSelf.dataInfo;
            var routes = dataInfo.routes;
            var api = dataInfo.api;
            var axios = superSelf.axios;

            // 验证
            (function () {
                var ValidateInput = __webpack_require__(9);
                new ValidateInput({ element: '.page-validate-form' });
            })();

            // 登陆
            (function () {
                var username = document.querySelector('#username');
                var password = document.querySelector('#password');
                var btn = document.querySelector('.js-button');
                btn.addEventListener('click', function () {
                    axios({
                        url: api.login.route,
                        method: 'post',
                        data: {
                            username: username.value,
                            password: password.value
                        }
                    }).then(function (json) {
                        if (json.status === 'success') {
                            var DialogJumpLink = __webpack_require__(35);
                            new DialogJumpLink({
                                title: json.message,
                                seconds: 3,
                                pageTitle: routes['website-info'].title,
                                href: routes['website-info'].route
                            });
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

/***/ 79:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[78]);