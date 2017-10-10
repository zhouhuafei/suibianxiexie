webpackJsonp([12],{

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.addEventListener('load', function () {
    setTimeout(function () {
        var axios = __webpack_require__(48);

        // 登录
        var domUsername = document.querySelector('#username');
        var domPassword = document.querySelector('#password');
        document.querySelector('.page-login').addEventListener('click', function () {
            axios({
                url: gDataInfo.api.login.route,
                method: 'post',
                data: {
                    username: domUsername.value,
                    password: domPassword.value
                }
            }).then(function (dataInfo) {
                if (dataInfo.status === 'success') {
                    window.location.href = gDataInfo.routes.mine.route;
                }
            });
        });

        __webpack_require__(40); // 当前页面用到的样式
        var common = __webpack_require__(3); // 每个页面都要用到的js(一定要放到最底部)
    }, 0);
});

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tools = __webpack_require__(1); // 工具方法集合
var applications = __webpack_require__(0); // 应用方法集合
var SuperType = __webpack_require__(2); // 超类型(子类型继承的对象)

// 子类型
var SubType = tools.constructorInherit({
    superType: SuperType,
    // 默认参数(继承超类型)
    parameter: {
        // 回调
        callback: {
            click: function click() {},
            moduleDomRenderBefore: function moduleDomRenderBefore(self) {
                if (self.wrapDom && getComputedStyle(self.wrapDom).position === 'static') {
                    self.wrapDom.style.position = 'relative';
                }
            }
        },
        // 配置
        config: {
            isTransparent: false, // 是不是透明的(默认不透明)
            moduleDomIsShow: false, // 内部模块是否显示(默认不显示)
            positionMethod: 'fixed' // 模块的定位方式 'fixed'(相对于整个文档) 'absolute'(相对于外部容器)
        },
        // 数据
        data: {}
    }
});

// 内部模块的创建(覆盖超类型)
SubType.prototype.moduleDomCreate = function () {
    var config = this.opts.config;
    var className = '';
    if (config.isTransparent) {
        className = 'g-mask-transparent';
    }
    if (config.positionMethod === 'fixed') {
        className = 'g-mask-fixed';
    }
    this.moduleDom = applications.createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-mask ' + className,
            innerHTML: ''
        }
    });
};

// 功能(覆盖超类型)
SubType.prototype.power = function () {
    var self = this;
    this.moduleDom.addEventListener('click', function (ev) {
        self.opts.callback.click();
        ev.stopPropagation();
    });
};

module.exports = SubType;

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var axios = __webpack_require__(12);
var tools = __webpack_require__(1);
var Dialog = __webpack_require__(8);

module.exports = function (json) {
    var opts = tools.extend({
        defaults: {
            isHandleError: true, // 是否处理错误
            isHandleFailure: true // 是否处理失败
        },
        inherits: json
    });
    /*
    * javascript axios get params
    * javascript axios post/put/delete data
    * 把上述四种数据的传参方式进行统一化,统一使用data
    * nodejs express get req.query
    * nodejs express post/put/delete body-parser req.body
    * 把上述四种数据的传参方式进行统一化,统一使用req.data
    * */
    if (opts.method.toLowerCase() === 'get') {
        opts.params = opts.data || opts.params;
    }
    return axios(opts).catch(function (error) {
        if (opts.isHandleError) {
            new Dialog({
                config: {
                    alert: {
                        content: '\u9519\u8BEF : ' + error
                    }
                }
            });
        }
    }).then(function (response) {
        var dataInfo = null;
        if (response) {
            dataInfo = response.data;
            if (dataInfo.status === 'failure' && opts.isHandleFailure) {
                new Dialog({
                    config: {
                        alert: {
                            content: '\u5931\u8D25 : ' + dataInfo.message
                        }
                    }
                });
            }
        }
        return dataInfo;
    });
};

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tools = __webpack_require__(1); // 工具方法集合
var applications = __webpack_require__(0); // 应用方法集合
var SuperType = __webpack_require__(2); // 超类型(子类型继承的对象)
var Mask = __webpack_require__(4); // 遮罩

// 子类型
var SubType = tools.constructorInherit({
    superType: SuperType,
    // 默认参数(继承超类型)
    parameter: {
        // 回调
        callback: {
            moduleDomRenderBefore: function moduleDomRenderBefore(self) {
                if (self.opts.config.type === 'confirm') {
                    if (self.opts.config.confirm.isShowMask) {
                        self.mask = new Mask({
                            config: {
                                moduleDomIsShow: true,
                                moduleDomRenderMethod: { method: 'insertBefore' }
                            }
                        });
                    }
                    if (self.wrapDom && getComputedStyle(self.wrapDom).position === 'static') {
                        self.wrapDom.style.position = 'relative';
                    }
                }
            },
            // 确认
            confirm: function confirm() {},
            // 取消
            cancel: function cancel() {},
            // 关闭
            close: function close() {}
        },
        // 配置
        config: {
            /*
             * 弹窗类型
             * `alert`  提示信息类型
             * `confirm`    确认框类型
             * */
            type: 'alert', // 默认是提示框
            /*
             * 弹窗位置
             * `center` 居中
             * `bottom` 居下
             * `top` 居上
             * */
            positionLocation: 'center', // 弹窗的定位位置    positionMethod定位方式强制fixed
            // 提示框
            alert: {
                timer: null, // 定时器装载
                time: 3000, // 展示的时间
                isShowIcon: false, // 是否显示icon
                isShowClose: true, // 是否显示关闭按钮
                icon: 'icon-chenggong', // icon的class
                content: '成功' // 内容信息
            },
            // 确认框
            confirm: {
                // 点击确认是否关闭弹窗
                isShowHeader: true, // 是否显示头部
                headerContent: '提示:', // 头部内容
                isShowBody: true, // 是否显示主体
                bodyContent: '<div>确定要执行这个操作?</div>', // 主体内容
                isShowFooter: true, // 是否显示尾部
                footerContent: '', // 尾部内容
                isShowClose: true, // 是否显示关闭按钮
                closeContent: '<div class="iconfont icon-guanbi"></div>', // 关闭按钮的内容
                isShowConfirm: true, // 是否显示确认按钮
                confirmContent: '确认', // 确认按钮的内容
                isShowCancel: true, // 是否显示取消按钮
                cancelContent: '取消', // 取消按钮的内容
                isCustom: false, // 是否自定义
                customContent: '', // 自定义的内容
                isShowIcon: false, // 是否显示icon
                icon: 'icon-jinggao', // icon的类型
                isShowMask: true, // 是否显示遮罩
                isHandHide: false // 是否手动隐藏(一般只用于点击确认时)
            }
        },
        // 数据
        data: {}
    }
});

// 内部模块的创建(覆盖超类型)
SubType.prototype.moduleDomCreate = function () {
    var config = this.opts.config;
    var type = 'g-dialog-' + config.type; // 弹窗类型
    var positionLocation = 'g-dialog-' + config.positionLocation; // 弹窗的定位位置
    // 弹窗结构
    var html = '\n        ' + this.renderAlert() + '\n        ' + this.renderConfirm() + '\n    ';
    this.moduleDom = applications.createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-dialog ' + type + ' ' + positionLocation,
            innerHTML: html
        }
    });
};

// 提示框
SubType.prototype.renderAlert = function () {
    var config = this.opts.config;
    if (config.type !== 'alert') {
        return '';
    }
    var alert = config.alert;
    var htmlIcon = '';
    if (alert.isShowIcon) {
        htmlIcon = '<div class="g-dialog-alert-icon iconfont ' + alert.icon + '"></div>';
    }
    var closeHtml = '';
    if (alert.isShowClose) {
        closeHtml = '<div class="g-dialog-alert-close iconfont icon-guanbi" ></div>';
    }
    return '\n        ' + closeHtml + '\n        ' + htmlIcon + '\n        <div class="g-dialog-alert-text">' + alert.content + '</div>\n    ';
};

// 确认框
SubType.prototype.renderConfirm = function () {
    var config = this.opts.config;
    if (config.type !== 'confirm') {
        return '';
    }
    var confirm = config.confirm;
    var htmlHeader = '';
    if (confirm.isShowHeader) {
        htmlHeader = '<div class="g-dialog-confirm-header">' + confirm.headerContent + '</div>';
    }
    var htmlBody = '';
    if (confirm.isShowBody) {
        var htmlIcon = '';
        if (confirm.isShowIcon) {
            htmlIcon = '<div class="g-dialog-confirm-body-system-icon iconfont ' + confirm.icon + '"></div>';
        }
        var bodyClass = 'g-dialog-confirm-body-system';
        var bodyContent = '\n            ' + htmlIcon + '\n            <div class="g-dialog-confirm-body-system-text">' + confirm.bodyContent + '</div>\n        ';
        if (confirm.isCustom) {
            bodyClass = 'g-dialog-confirm-body-custom';
            bodyContent = confirm.bodyContent;
        }
        htmlBody = '\n            <div class="g-dialog-confirm-body">\n                <div class="' + bodyClass + '">\n                    ' + bodyContent + '\n                </div>\n            </div>\n        ';
    }
    var htmlFooter = '';
    if (confirm.isShowFooter) {
        var htmlCancel = '';
        if (confirm.isShowCancel) {
            htmlCancel = '<div class="g-button g-button-cancel g-dialog-confirm-footer-cancel">' + confirm.cancelContent + '</div>';
        }
        var htmlConfirm = '';
        if (confirm.isShowConfirm) {
            htmlConfirm = '<div class="g-button g-dialog-confirm-footer-confirm">' + confirm.confirmContent + '</div>';
        }
        htmlFooter = '<div class="g-dialog-confirm-footer">' + htmlCancel + htmlConfirm + '</div>';
    }
    var htmlClose = '';
    if (confirm.isShowClose) {
        htmlClose = '<div class="g-dialog-confirm-close">' + confirm.closeContent + '</div>';
    }
    return '\n        ' + htmlHeader + '\n        ' + htmlBody + '\n        ' + htmlFooter + '\n        ' + htmlClose + ' \n    ';
};

// 功能(覆盖超类型)
SubType.prototype.power = function () {
    var self = this;
    var config = this.opts.config;
    // 提示框
    if (config.type === 'alert') {
        var close = this.moduleDom.querySelector('.g-dialog-alert-close');
        config.alert.timer = setTimeout(function () {
            self.hide();
        }, config.alert.time);
        close.addEventListener('click', function () {
            clearTimeout(config.alert.timer);
            self.hide();
        });
    }
    // 确认框
    if (config.type === 'confirm') {
        var _close = this.moduleDom.querySelector('.g-dialog-confirm-close');
        if (_close) {
            _close.addEventListener('click', function () {
                self.hide();
                self.opts.callback.close();
            });
        }
        var cancel = this.moduleDom.querySelector('.g-dialog-confirm-footer-cancel');
        if (cancel) {
            cancel.addEventListener('click', function () {
                self.hide();
                self.opts.callback.cancel();
            });
        }
        var confirm = this.moduleDom.querySelector('.g-dialog-confirm-footer-confirm');
        if (confirm) {
            confirm.addEventListener('click', function () {
                if (!self.opts.config.confirm.isHandHide) {
                    self.hide();
                }
                self.opts.callback.confirm();
            });
        }
    }
};

SubType.prototype.hide = function () {
    this.moduleDomHide();
    if (this.mask) {
        this.mask.moduleDomHide();
    }
};

module.exports = SubType;

/***/ })

},[39]);