webpackJsonp([10],{

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(169);
var Super = __webpack_require__(3);

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
            var DialogConfirm = __webpack_require__(29);

            // 退出账号
            document.querySelector('.page-logout').addEventListener('click', function () {
                new DialogConfirm({
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

/***/ 169:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tools = __webpack_require__(0); // 工具方法集合
var applications = __webpack_require__(1); // 应用方法集合
var Super = __webpack_require__(2); // 超类型(子类型继承的对象)

// 子类型
var Sub = tools.constructorInherit(Super, {
    wrap: '.g-wrap',
    // 回调
    callback: {
        // 确认
        confirm: function confirm() {},
        // 取消
        cancel: function cancel() {},
        // 关闭
        close: function close() {}
    },
    // 配置
    config: {
        positionLocation: 'center', // 弹窗的定位位置('top'，'center'，'bottom')。positionMethod定位方式强制fixed。
        isShowClose: true, // 是否显示关闭按钮
        closeContent: '<div class="iconfont icon-close"></div>', // 关闭按钮的内容
        isShowHeader: true, // 是否显示头部
        headerContent: '提示:', // 头部内容
        isShowBody: true, // 是否显示主体
        isShowIcon: false, // 是否显示icon
        icon: 'icon-warning', // icon的类型
        isCustom: false, // 是否自定义
        content: '<div>确定要执行这个操作?</div>', // 主体内容
        isShowFooter: true, // 是否显示尾部
        isShowConfirm: true, // 是否显示确认按钮
        confirmContent: '确认', // 确认按钮的内容
        isShowCancel: true, // 是否显示取消按钮
        cancelContent: '取消', // 取消按钮的内容
        isShowMask: true, // 是否显示遮罩
        isHandHide: false // 是否手动隐藏(一般只用于点击确认时)
    },
    // 数据
    data: {}
});

// (建)(覆)内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    var config = this.opts.config;
    var positionLocation = 'g-dialog-confirm-wrap_' + config.positionLocation; // 弹窗的定位位置
    // 弹窗结构
    var html = this.renderConfirm();
    this.moduleDom = applications.createElement({
        style: config.moduleDomStyle,
        customAttribute: config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-dialog-confirm-wrap ' + positionLocation,
            innerHTML: html
        }
    });
};

// 确认框
Sub.prototype.renderConfirm = function () {
    var config = this.opts.config;
    var htmlHeader = '';
    if (config.isShowHeader) {
        htmlHeader = '<div class="g-dialog-confirm-header">' + config.headerContent + '</div>';
    }
    var htmlBody = '';
    if (config.isShowBody) {
        var htmlIcon = '';
        if (config.isShowIcon) {
            htmlIcon = '<div class="g-dialog-confirm-body-system-icon iconfont ' + config.icon + '"></div>';
        }
        var bodyClass = 'g-dialog-confirm-body-system';
        var bodyContent = '\n            ' + htmlIcon + '\n            <div class="g-dialog-confirm-body-system-text">' + config.content + '</div>\n        ';
        if (config.isCustom) {
            bodyClass = 'g-dialog-confirm-body-custom';
            bodyContent = config.content;
        }
        htmlBody = '\n            <div class="g-dialog-confirm-body">\n                <div class="' + bodyClass + '">\n                    ' + bodyContent + '\n                </div>\n            </div>\n        ';
    }
    var htmlFooter = '';
    if (config.isShowFooter) {
        var htmlCancel = '';
        if (config.isShowCancel) {
            htmlCancel = '<div class="g-button g-button_cancel g-dialog-confirm-footer-cancel">' + config.cancelContent + '</div>';
        }
        var htmlConfirm = '';
        if (config.isShowConfirm) {
            htmlConfirm = '<div class="g-button g-dialog-confirm-footer-confirm">' + config.confirmContent + '</div>';
        }
        htmlFooter = '<div class="g-dialog-confirm-footer">' + htmlCancel + htmlConfirm + '</div>';
    }
    var htmlClose = '';
    if (config.isShowClose) {
        htmlClose = '<div class="g-dialog-confirm-close">' + config.closeContent + '</div>';
    }
    var htmlMask = '';
    if (config.isShowMask) {
        htmlMask = '<div class="g-mask"></div>';
    }
    return '\n        ' + htmlMask + '\n        <div class="g-dialog-confirm">\n            ' + htmlHeader + '\n            ' + htmlBody + '\n            ' + htmlFooter + '\n            ' + htmlClose + ' \n        </div>\n    ';
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {
    var self = this;
    var config = this.opts.config;
    var callback = this.opts.callback;
    // 关闭
    var close = this.moduleDom.querySelector('.g-dialog-confirm-close');
    if (close) {
        close.addEventListener('click', function () {
            self.moduleDomHide();
            callback.close();
        });
    }
    // 取消
    var cancel = this.moduleDom.querySelector('.g-dialog-confirm-footer-cancel');
    if (cancel) {
        cancel.addEventListener('click', function () {
            self.moduleDomHide();
            callback.cancel();
        });
    }
    // 确认
    var confirm = this.moduleDom.querySelector('.g-dialog-confirm-footer-confirm');
    if (confirm) {
        confirm.addEventListener('click', function () {
            if (!config.isHandHide) {
                self.moduleDomHide();
            }
            callback.confirm();
        });
    }
};

module.exports = Sub;

/***/ })

},[168]);