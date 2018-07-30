webpackJsonp([3],{

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
        value: function power() {
            // 测试图片库
            var Gallery = __webpack_require__(120);
            new Gallery();
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


var tools = __webpack_require__(0); // 工具方法集合
var applications = __webpack_require__(2); // 应用方法集合
var Super = __webpack_require__(7); // 超类型(子类型继承的对象)

// 子类型
var Sub = tools.constructorInherit(Super, {
    // 容器
    wrap: '.g-wrap',
    // 回调
    callback: {},
    // 配置
    config: {},
    // 数据
    data: {}
});

// (建)(覆)内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    this.moduleDom = applications.createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-gallery-wrap',
            innerHTML: '\n                <div class="g-mask"></div>\n                <div class="g-gallery">\n                    <div class="g-gallery-category">\n                        <div class="g-gallery-category-item">\u5168\u90E8</div>\n                        <div class="g-gallery-category-item g-gallery-category-item_active">\u65E0\u5206\u7C7B</div>\n                        <div class="g-gallery-category-item">640*640</div>\n                    </div>\n                    <div class="g-gallery-content">\n                        <div class="g-gallery-content-header">\n                            <div class="g-display-flex">                            \n                                <div class="g-button g-button_small g-button_create g-margin-right-10 g-flex-0">\n                                    <div class="g-button-icon iconfont icon-plus"></div>\n                                    <div class="g-button-text">\u4E0A\u4F20\u56FE\u7247</div>\n                                </div>\n                                <label class="g-checkbox g-checkbox_small">\n                                    <span class="g-checkbox-body">\n                                        <input class="g-checkbox-body-checkbox" type="checkbox">\n                                        <span class="g-checkbox-body-mark iconfont icon-checkbox"></span>\n                                    </span>\n                                    <span class="g-checkbox-text">\u5168\u9009</span>\n                                </label>\n                            </div>\n                        </div>\n                        <div class="g-gallery-content-body">\n                            <div class="g-gallery-content-body-item">\n                                <img src="" alt="">                            \n                                <label class="g-checkbox g-checkbox_small">\n                                    <span class="g-checkbox-body">\n                                        <input class="g-checkbox-body-checkbox" type="checkbox">\n                                        <span class="g-checkbox-body-mark iconfont icon-checkbox"></span>\n                                    </span>\n                                    <span class="g-checkbox-text">\u5168\u9009</span>\n                                </label>\n                            </div>\n                        </div>\n                        <div class="g-gallery-content-footer">\n                            <div class="g-button g-button_small g-button_hollow g-button_cancel g-width-100">\u53D6\u6D88</div>\n                            <div class="g-button g-button_small g-button_hollow g-width-100 g-margin-left-10">\u786E\u8BA4</div>\n                        </div>\n                    </div>\n                </div>\n            '
        }
    });
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {};

module.exports = Sub;

/***/ })

},[118]);