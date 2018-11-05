webpackJsonp([3],{

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(152);
var Super = __webpack_require__(4);
var axios = __webpack_require__(17);
var Gallery = __webpack_require__(153);

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

            // 测试图片库
            $('.g-upload').on('click', function () {
                new Gallery();
            });

            // 上传
            /*
            $('.js-upload').on('change', function () {
                const self = this;
                const parent = this.parentNode;
                const bg = parent.querySelector('.g-upload-show');
                const text = parent.querySelector('.g-upload-text');
                const files = [].slice.call(self.files);
                const formData = new FormData();
                files.forEach(function (file) {
                    formData.append('images', file);
                });
                if (!files.length) {
                    return;
                }
                axios({
                    url: dataInfo.api.gallery.route,
                    method: 'POST',
                    data: formData,
                    onUploadProgress: function (progressEvent) { // 原生获取上传进度的事件
                        if (progressEvent.lengthComputable) {
                            // 属性lengthComputable主要表明总共需要完成的工作量和已经完成的工作是否可以被测量
                            // 如果lengthComputable为false，就获取不到progressEvent.total和progressEvent.loaded
                            console.log('上传进度:->', `${Math.ceil(progressEvent.loaded / progressEvent.total) * 100}%`);
                        }
                    },
                }).then(function (json) {
                    if (json.status === 'success') {
                        const result = json.result[0];
                        const resultStr = JSON.stringify(result);
                        const url = result.url;
                        const w = result.width;
                        const h = result.height;
                        self.dataset.value = 'no-empty';
                        bg.style.backgroundImage = `url('${url}')`;
                        // text.innerText = `${w}*${h}`;
                        parent.querySelector('input[type=hidden]').value = resultStr;
                        parent.classList.add('g-upload_active');
                        superSelf.validateInput.validateInput(self);
                    }
                });
            });
            */
        }
    }]);

    return Sub;
}(Super);

new Sub();

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var extend = __webpack_require__(0); // 对象的扩展
var createElement = __webpack_require__(1); // 创建元素
var Super = __webpack_require__(2); // 超类型(子类型继承的对象)

// 子类型

var Sub = function (_Super) {
    _inherits(Sub, _Super);

    function Sub(opts) {
        _classCallCheck(this, Sub);

        return _possibleConstructorReturn(this, (Sub.__proto__ || Object.getPrototypeOf(Sub)).call(this, extend({
            // 容器
            wrap: '.g-wrap',
            // 回调
            callback: {},
            // 配置
            config: {}
        }, opts)));
    }

    return Sub;
}(Super);

// (建)(覆)内部模块的创建(覆盖超类型)


Sub.prototype.moduleDomCreate = function () {
    this.moduleDom = createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-gallery-wrap',
            innerHTML: '\n                <div class="g-mask"></div>\n                <div class="g-gallery">\n                    <div class="g-gallery-category">\n                        <div class="g-gallery-category-item">\u5168\u90E8</div>\n                        <div class="g-gallery-category-item g-gallery-category-item_active">\u65E0\u5206\u7C7B</div>\n                        <div class="g-gallery-category-item">320*320</div>\n                        <div class="g-gallery-category-item">640*640</div>\n                        <div class="g-gallery-category-item">375*375</div>\n                        <div class="g-gallery-category-item">750*750</div>\n                    </div>\n                    <div class="g-gallery-content">\n                        <div class="g-gallery-content-header">\n                            <div class="g-display_flex">                            \n                                <div class="g-button g-button_small g-button_create g-margin-right_10 g-flex_0">\n                                    <div class="g-button-icon iconfont icon-plus"></div>\n                                    <div class="g-button-text">\u4E0A\u4F20\u56FE\u7247</div>\n                                </div>\n                                <label class="g-checkbox g-checkbox_small g-margin-top_10">\n                                    <span class="g-checkbox-body">\n                                        <input class="g-checkbox-body-main" type="checkbox">\n                                        <span class="g-checkbox-body-mark iconfont icon-checkbox"></span>\n                                    </span>\n                                    <span class="g-checkbox-text">\u5168\u9009</span>\n                                </label>\n                            </div>\n                        </div>\n                        <div class="g-gallery-content-body">\n                            <label class="g-gallery-content-body-item">\n                                <img src="" alt="">\n                                <span class="g-checkbox g-checkbox_small">\n                                    <span class="g-checkbox-body">\n                                        <input class="g-checkbox-body-main" type="checkbox">\n                                        <span class="g-checkbox-body-mark iconfont icon-checkbox"></span>\n                                    </span>\n                                    <span class="g-checkbox-text">\u56FE\u72471</span>\n                                </span>\n                            </label>\n                            <label class="g-gallery-content-body-item">\n                                <img src="" alt="">\n                                <span class="g-radio g-radio_small">\n                                    <span class="g-radio-body">\n                                        <input class="g-radio-body-main" type="radio">\n                                        <span class="g-radio-body-mark iconfont icon-radio"></span>\n                                    </span>\n                                    <span class="g-radio-text">\u56FE\u72472</span>\n                                </span>\n                            </label>\n                        </div>\n                        <div class="g-gallery-content-footer">\n                            <div class="g-button g-button_small g-button_hollow g-button_cancel g-width_100 js-button_cancel">\u53D6\u6D88</div>\n                            <div class="g-button g-button_small g-button_hollow g-width_100 g-margin-left_10 js-button_confirm">\u786E\u8BA4</div>\n                        </div>\n                    </div>\n                </div>\n            '
        }
    });
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {
    var self = this;
    var moduleDom = this.moduleDom;
    $(moduleDom).find('.js-button_cancel').on('click', function () {
        self.moduleDomHide();
    });
    $(moduleDom).find('.js-button_confirm').on('click', function () {
        self.moduleDomHide();
    });
};

module.exports = Sub;

/***/ })

},[151]);