webpackJsonp([2],{

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(124);
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

            // 验证
            (function () {
                var ValidateInput = __webpack_require__(13);
                var validateInput = new ValidateInput({ element: '.js-validate-form' });
                validateInput.setValidate('no-999', function (value) {
                    return Number(value) !== 999;
                });
                document.querySelector('.js-button').addEventListener('click', function () {
                    console.log('isAllPassValidate', validateInput.isAllPassValidate());
                });
            })();

            // 测试application/x-www-form-urlencoded
            var axios = __webpack_require__(19);
            var ajax = __webpack_require__(125);
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
                data: { type: 'ajax', obj: { test: false, key: 'obj', b: { a: 1 } }, arr: ['a', 2, 'c', { a: 1 }], arr2: [] }
            }).then(function (json) {
                console.log('ajax测试application/x-www-form-urlencoded测试ajax:->', json);
            });
            // 测试multipart/form-data
            /*
            const formData = new FormData();
            formData.append('test', 'test');
            axios({
                url: dataInfo.api.list.route,
                method: 'post',
                data: formData,
            }).then(function (json) {
                console.log('axios测试multipart/form-data测试axios:->', json);
            });
            ajax({
                url: dataInfo.api.list.route,
                method: 'post',
                data: formData,
            }).then(function (json) {
                console.log('ajax测试multipart/form-data测试ajax:->', json);
            });
            */
            // 测试提示框
            var DialogAlert = __webpack_require__(143);
            new DialogAlert({
                config: {
                    time: 30000, // 展示的时间
                    isShowIcon: true, // 是否显示icon
                    isShowClose: true, // 是否显示关闭按钮
                    icon: 'icon-success', // icon的class
                    content: '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试', // 内容信息
                    positionLocation: 'center' // 弹窗的定位位置    positionMethod定位方式强制fixed
                }
            });
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

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tools = __webpack_require__(1);
var Dialog = __webpack_require__(11);

module.exports = function (json) {
    json.method = json.type || json.method || 'get'; // 这里和axios是不一样的，这里以前使用axios的习惯传入method
    json.dataType = json.dataType || 'json'; // 设置返回json格式的数据，axios默认就是返回json格式的
    var opts = tools.extend({
        method: 'get', // 请求方式默认get
        isHandleError: true, // 是否处理错误
        isHandleFailure: true, // 是否处理失败
        timeout: 30000 // 超时
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
            new Dialog({
                config: {
                    alert: {
                        content: '\u9519\u8BEF: ' + message // 这里的message就是error信息，只是一段普通的字符信息
                    }
                }
            });
        }
        return dataInfo;
    }).then(function (dataInfo, mark, xhr) {
        if (dataInfo.status === 'failure' && opts.isHandleFailure) {
            new Dialog({
                config: {
                    alert: {
                        content: '\u5931\u8D25: ' + dataInfo.message
                    }
                }
            });
        }
        return dataInfo;
    });
};

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tools = __webpack_require__(1); // 工具方法集合
var applications = __webpack_require__(4); // 应用方法集合
var Super = __webpack_require__(12); // 超类型(子类型继承的对象)

// 子类型
var Sub = tools.constructorInherit(Super, {
    wrap: '.g-wrap',
    // 回调
    callback: {
        // 关闭
        close: function close() {}
    },
    // 配置
    config: {
        time: 3000, // 展示的时间
        isShowIcon: false, // 是否显示icon
        isShowClose: true, // 是否显示关闭按钮
        icon: 'icon-success', // icon的class
        content: '成功', // 内容信息
        positionLocation: 'center' // 弹窗的定位位置    positionMethod定位方式强制fixed
    },
    // 数据
    data: {}
});

// (建)(覆)内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    var config = this.opts.config;
    var positionLocation = 'g-dialog-alert_' + config.positionLocation; // 弹窗的定位位置
    // 弹窗结构
    var html = this.renderAlert();
    this.moduleDom = applications.createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-dialog-alert ' + positionLocation,
            innerHTML: html
        }
    });
};

// 提示框
Sub.prototype.renderAlert = function () {
    var config = this.opts.config;
    var htmlIcon = '';
    if (config.isShowIcon) {
        htmlIcon = '<div class="g-dialog-alert-icon iconfont ' + config.icon + '"></div>';
    }
    var closeHtml = '';
    if (config.isShowClose) {
        closeHtml = '<div class="g-dialog-alert-close iconfont icon-close" ></div>';
    }
    return '\n        ' + closeHtml + '\n        ' + htmlIcon + '\n        <div class="g-dialog-alert-text">' + config.content + '</div>\n    ';
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {
    var self = this;
    var config = this.opts.config;
    var callback = this.opts.callback;
    var close = this.moduleDom.querySelector('.g-dialog-alert-close');
    var timer = null;
    timer = setTimeout(function () {
        self.moduleDomHide();
        callback.close();
    }, config.time);
    close.addEventListener('click', function () {
        clearTimeout(timer);
        self.moduleDomHide();
        callback.close();
    });
};

module.exports = Sub;

/***/ })

},[123]);