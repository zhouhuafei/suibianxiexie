webpackJsonp([2],{

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(127);
var Super = __webpack_require__(6);

var DialogPopover = __webpack_require__(128);
$('.js-popover').each(function () {
    new DialogPopover({
        config: {
            element: this,
            content: '建议尺寸：640*640',
            eventType: 'click',
            positionLocation: 'top-center'
        }
    });
});

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

            // 验证
            (function () {
                var validateInput = superSelf.validateInput;
                validateInput.setValidate('no-999', function (value) {
                    return Number(value) !== 999;
                });
                document.querySelector('.js-save').addEventListener('click', function () {
                    // 测试确认框和提示框
                    var DialogAlert = __webpack_require__(11);
                    var DialogConfirm = __webpack_require__(31);
                    new DialogConfirm({
                        callback: {
                            cancel: function cancel() {
                                new DialogAlert({
                                    config: {
                                        time: 3000, // 展示的时间
                                        isShowIcon: false, // 是否显示icon
                                        isShowClose: true, // 是否显示关闭按钮
                                        icon: 'icon-success', // icon的class
                                        content: '已取消', // 内容信息
                                        positionLocation: 'center' // 弹窗的定位位置    positionMethod定位方式强制fixed
                                    }
                                });
                            },
                            confirm: function confirm() {
                                var isAllPassValidate = validateInput.isAllPassValidate();
                                new DialogAlert({
                                    config: {
                                        time: 3000, // 展示的时间
                                        isShowIcon: false, // 是否显示icon
                                        isShowClose: true, // 是否显示关闭按钮
                                        icon: 'icon-success', // icon的class
                                        content: isAllPassValidate ? '验证已通过，可执行保存操作' : '验证尚未通过，不可执行保存操作', // 内容信息
                                        positionLocation: 'center' // 弹窗的定位位置    positionMethod定位方式强制fixed
                                    }
                                });
                            },
                            close: function close() {
                                new DialogAlert({
                                    config: {
                                        time: 3000, // 展示的时间
                                        isShowIcon: false, // 是否显示icon
                                        isShowClose: true, // 是否显示关闭按钮
                                        icon: 'icon-success', // icon的class
                                        content: '已关闭', // 内容信息
                                        positionLocation: 'center' // 弹窗的定位位置    positionMethod定位方式强制fixed
                                    }
                                });
                            }
                        },
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
                        }
                    });
                });
            })();

            // 测试application/x-www-form-urlencoded
            var axios = __webpack_require__(18);
            var ajax = __webpack_require__(129);
            axios({
                url: dataInfo.api.list.route,
                method: 'post',
                data: { type: 'axios', obj: { test: true, key: 'obj', b: { a: 1 } }, arr: ['a', 2, 'c', { a: 1 }], arr2: [] }
            }).then(function (json) {
                console.log('axios测试application/x-www-form-urlencoded测试axios:->', json);
            });
            ajax({
                url: dataInfo.api.list.route,
                method: 'post',
                data: { type: 'ajax', obj: { test: true, key: 'obj', b: { a: 1 } }, arr: ['a', 2, 'c', { a: 1 }], arr2: [] }
            }).then(function (json) {
                console.log('ajax测试application/x-www-form-urlencoded测试ajax:->', json);
            });
            // 测试multipart/form-data
            {
                var formData = new FormData();
                formData.append('json', JSON.stringify({ a: 1, b: 2, obj: { arr: ['a', 'b', 'c'] } }));
                formData.append('type', 'axios');
                axios({
                    url: dataInfo.api.list.route,
                    method: 'post',
                    data: formData
                }).then(function (json) {
                    console.log('axios测试multipart/form-data测试axios:->', json);
                });
            }
            {
                var _formData = new FormData();
                _formData.append('json', JSON.stringify({ a: 1, b: 2, obj: { arr: ['a', 'b', 'c'] } }));
                _formData.append('type', 'ajax');
                ajax({
                    url: dataInfo.api.list.route,
                    method: 'post',
                    data: _formData
                }).then(function (json) {
                    console.log('ajax测试multipart/form-data测试ajax:->', json);
                });
            }
        }
    }]);

    return Sub;
}(Super);

new Sub();

/***/ }),

/***/ 127:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tools = __webpack_require__(0); // 工具方法集合
var applications = __webpack_require__(2); // 应用方法集合
var Super = __webpack_require__(7); // 超类型(子类型继承的对象)

// 子类型
var Sub = tools.constructorInherit(Super, {
    wrap: '.g-wrap',
    // 回调
    callback: {},
    // 配置
    config: {
        moduleDomIsRender: false,
        element: '.js-popover',
        eventType: 'mouseover',
        positionLocation: 'top-left', // 弹窗的定位位置('top-left'，'top-center'，'top-right')。
        content: 'no popover content'
    },
    // 数据
    data: {}
});

// (建)(覆)内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    var config = this.opts.config;
    var positionLocation = 'g-dialog-popover_' + config.positionLocation; // 弹窗的定位位置
    // 弹窗结构
    this.moduleDom = applications.createElement({
        style: config.moduleDomStyle,
        customAttribute: config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-dialog-popover ' + positionLocation,
            innerHTML: '\n                <div class="g-dialog-popover-content">' + config.content + '</div>\n                <div class="g-dialog-popover-icon"></div>                \n            '
        }
    });
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {
    var self = this;
    var opts = self.opts;
    var config = opts.config;
    var positionLocation = config.positionLocation;
    var moduleDom = self.moduleDom;
    if (config.eventType === 'mouseover' || config.eventType === 'mouseenter') {
        $(config.element).on('mouseenter', function (ev) {
            ev.preventDefault();
            ev.stopPropagation();
            self.moduleDomShow();
            setCss(this);
            clearTimeout(self.gDialogPopoverMouseenterTimer);
        });
        $(config.element).on('mouseleave', function (ev) {
            ev.preventDefault();
            ev.stopPropagation();
            fnModuleDomHide();
        });
        $(moduleDom).on('mouseenter', function (ev) {
            ev.preventDefault();
            ev.stopPropagation();
            clearTimeout(self.gDialogPopoverMouseenterTimer);
        });
        $(moduleDom).on('mouseleave', function (ev) {
            ev.preventDefault();
            ev.stopPropagation();
            fnModuleDomHide();
        });
    }

    function fnModuleDomHide() {
        self.gDialogPopoverMouseenterTimer = setTimeout(function () {
            self.moduleDomHide();
        }, 60);
    }

    if (config.eventType === 'click') {
        $(config.element).on('click', function (ev) {
            ev.preventDefault();
            ev.stopPropagation();
            if (self.moduleDom.offsetWidth === 0) {
                self.moduleDomShow();
                setCss(this);
            } else {
                self.moduleDomHide();
            }
        });
    }

    function setCss(eventDom) {
        // 水平居上
        if (positionLocation === 'top-left') {
            $(moduleDom).css({
                left: $(eventDom).offset().left,
                top: $(eventDom).offset().top - moduleDom.offsetHeight
            });
        }
        if (positionLocation === 'top-center') {
            $(moduleDom).css({
                left: $(eventDom).offset().left - (moduleDom.offsetWidth - eventDom.offsetWidth) / 2,
                top: $(eventDom).offset().top - moduleDom.offsetHeight
            });
        }
        if (positionLocation === 'top-right') {
            $(moduleDom).css({
                left: $(eventDom).offset().left - (moduleDom.offsetWidth - eventDom.offsetWidth),
                top: $(eventDom).offset().top - moduleDom.offsetHeight
            });
        }
        // 水平居下
        if (positionLocation === 'bottom-left') {
            $(moduleDom).css({
                left: $(eventDom).offset().left,
                top: $(eventDom).offset().top + eventDom.offsetHeight
            });
        }
        if (positionLocation === 'bottom-center') {
            $(moduleDom).css({
                left: $(eventDom).offset().left - (moduleDom.offsetWidth - eventDom.offsetWidth) / 2,
                top: $(eventDom).offset().top + eventDom.offsetHeight
            });
        }
        if (positionLocation === 'bottom-right') {
            $(moduleDom).css({
                left: $(eventDom).offset().left - (moduleDom.offsetWidth - eventDom.offsetWidth),
                top: $(eventDom).offset().top + eventDom.offsetHeight
            });
        }
        // 垂直居左
        if (positionLocation === 'left-top') {
            $(moduleDom).css({
                left: $(eventDom).offset().left - moduleDom.offsetWidth,
                top: $(eventDom).offset().top
            });
        }
        if (positionLocation === 'left-center') {
            $(moduleDom).css({
                left: $(eventDom).offset().left - moduleDom.offsetWidth,
                top: $(eventDom).offset().top - (moduleDom.offsetHeight - eventDom.offsetHeight) / 2
            });
        }
        if (positionLocation === 'left-bottom') {
            $(moduleDom).css({
                left: $(eventDom).offset().left - moduleDom.offsetWidth,
                top: $(eventDom).offset().top - (moduleDom.offsetHeight - eventDom.offsetHeight)
            });
        }
        // 垂直居右
        if (positionLocation === 'right-top') {
            $(moduleDom).css({
                left: $(eventDom).offset().left + eventDom.offsetWidth,
                top: $(eventDom).offset().top
            });
        }
        if (positionLocation === 'right-center') {
            $(moduleDom).css({
                left: $(eventDom).offset().left + eventDom.offsetWidth,
                top: $(eventDom).offset().top - (moduleDom.offsetHeight - eventDom.offsetHeight) / 2
            });
        }
        if (positionLocation === 'right-bottom') {
            $(moduleDom).css({
                left: $(eventDom).offset().left + eventDom.offsetWidth,
                top: $(eventDom).offset().top - (moduleDom.offsetHeight - eventDom.offsetHeight)
            });
        }
    }
};

module.exports = Sub;

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tools = __webpack_require__(0);
var DialogAlert = __webpack_require__(11);

module.exports = function (json) {
    json.type = json.type || json.method || 'get'; // 这里和axios是不一样的，这里以前使用axios的习惯传入method
    json.dataType = json.dataType || 'json'; // 设置返回json格式的数据，axios默认就是返回json格式的
    var opts = tools.extend({
        type: 'get', // 请求方式默认get
        timeout: 30000, // 超时
        isHandleError: true, // 是否处理错误
        isHandleFailure: true, // 是否处理失败
        isHandleSuccess: false, // 是否处理成功
        callbackSuccess: function callbackSuccess() {// 请求成功的回调
        },
        callbackFailure: function callbackFailure() {// 请求失败的回调
        },
        callbackComplete: function callbackComplete() {// 请求完成的回调
        }
    }, json);
    /*
    * javascript axios get params
    * javascript axios post/put/delete data
    * 把上述四种数据的传参方式进行统一化,统一使用data
    * nodejs express get req.query
    * nodejs express post/put/delete body-parser req.body
    * 把上述四种数据的传参方式进行统一化,统一使用req.data
    * */
    if (opts.method.toLowerCase() === 'get') {
        opts.data = opts.data || opts.params || {}; // 这里和axios是不一样的，这里以前使用axios的习惯传入params
        if (opts.data) {
            // 把json格式的对象处理成json格式的字符串，让get请求保持和axios一致的数据格式
            // 其实按理来说应该让axios保持与这边的一致，但是axios的get请求没有提供对外的接口，所以只能让这个保持和axios一致。
            // $.ajax的post,put,delete接收的全是字符串，即使你传的是对象，对象里有布尔值等，接收过来也会变成字符串，$.ajax的get处理之后，你传的对象里有布尔值，后端接收之后，布尔值还是布尔值，应该和post保持一致的。奈何axios的get没提供对外接口
            Object.keys(opts.data).forEach(function (keys) {
                var obj = opts.data[keys];
                var type = Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
                if (type === 'object') {
                    opts.data[keys] = JSON.stringify(obj);
                }
                if (type === 'array') {
                    obj.forEach(function (v, i, a) {
                        if (Object.prototype.toString.call(v).slice(8, -1).toLowerCase() === 'object') {
                            a[i] = JSON.stringify(v);
                        }
                    });
                }
            });
        }
    }
    if (tools.typeOf(opts.data) === 'formdata') {
        // formdata类型需要关闭下面,否则会报错
        opts.processData = false;
        opts.contentType = false;
    }
    return $.ajax(opts).catch(function (xhr, mark, message) {
        var dataInfo = {
            status: 'error',
            message: message
        };
        if (opts.isHandleError) {
            new DialogAlert({
                config: {
                    content: '\u9519\u8BEF: ' + message // 这里的message就是error信息，只是一段普通的字符信息
                }
            });
        }
        return dataInfo;
    }).then(function (dataInfo, mark, xhr) {
        if (dataInfo.status === 'failure') {
            // 失败
            if (opts.isHandleFailure) {
                new DialogAlert({
                    config: {
                        content: '\u5931\u8D25: ' + dataInfo.message
                    }
                });
            }
            typeof opts.callbackFailure === 'function' && opts.callbackFailure(dataInfo);
        }
        if (dataInfo.status === 'success') {
            // 成功
            if (opts.isHandleSuccess) {
                new DialogAlert({
                    config: {
                        content: '\u6210\u529F: ' + dataInfo.message
                    }
                });
            }
            typeof opts.callbackSuccess === 'function' && opts.callbackSuccess(dataInfo);
        }
        typeof opts.callbackComplete === 'function' && opts.callbackComplete(dataInfo);
        return dataInfo;
    });
};

/***/ })

},[126]);