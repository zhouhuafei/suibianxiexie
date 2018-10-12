webpackJsonp([2],{

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(119);
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


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var extend = __webpack_require__(5); // 对象的扩展
var createElement = __webpack_require__(18); // 创建元素
var Super = __webpack_require__(121); // 超类型(子类型继承的对象)

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
            innerHTML: '\n                <div class="g-mask"></div>\n                <div class="g-gallery">\n                    <div class="g-gallery-category">\n                        <div class="g-gallery-category-item">\u5168\u90E8</div>\n                        <div class="g-gallery-category-item g-gallery-category-item_active">\u65E0\u5206\u7C7B</div>\n                        <div class="g-gallery-category-item">320*320</div>\n                        <div class="g-gallery-category-item">640*640</div>\n                        <div class="g-gallery-category-item">375*375</div>\n                        <div class="g-gallery-category-item">750*750</div>\n                    </div>\n                    <div class="g-gallery-content">\n                        <div class="g-gallery-content-header">\n                            <div class="g-display-flex">                            \n                                <div class="g-button g-button_small g-button_create g-margin-right-10 g-flex-0">\n                                    <div class="g-button-icon iconfont icon-plus"></div>\n                                    <div class="g-button-text">\u4E0A\u4F20\u56FE\u7247</div>\n                                </div>\n                                <label class="g-checkbox g-checkbox_small">\n                                    <span class="g-checkbox-body">\n                                        <input class="g-checkbox-body-main" type="checkbox">\n                                        <span class="g-checkbox-body-mark iconfont icon-checkbox"></span>\n                                    </span>\n                                    <span class="g-checkbox-text">\u5168\u9009</span>\n                                </label>\n                            </div>\n                        </div>\n                        <div class="g-gallery-content-body">\n                            <label class="g-gallery-content-body-item">\n                                <img src="" alt="">\n                                <span class="g-checkbox g-checkbox_small">\n                                    <span class="g-checkbox-body">\n                                        <input class="g-checkbox-body-main" type="checkbox">\n                                        <span class="g-checkbox-body-mark iconfont icon-checkbox"></span>\n                                    </span>\n                                    <span class="g-checkbox-text">\u56FE\u72471</span>\n                                </span>\n                            </label>\n                            <label class="g-gallery-content-body-item">\n                                <img src="" alt="">\n                                <span class="g-radio g-radio_small">\n                                    <span class="g-radio-body">\n                                        <input class="g-radio-body-main" type="radio">\n                                        <span class="g-radio-body-mark iconfont icon-radio"></span>\n                                    </span>\n                                    <span class="g-radio-text">\u56FE\u72472</span>\n                                </span>\n                            </label>\n                        </div>\n                        <div class="g-gallery-content-footer">\n                            <div class="g-button g-button_small g-button_hollow g-button_cancel g-width-100">\u53D6\u6D88</div>\n                            <div class="g-button g-button_small g-button_hollow g-width-100 g-margin-left-10">\u786E\u8BA4</div>\n                        </div>\n                    </div>\n                </div>\n            '
        }
    });
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {};

module.exports = Sub;

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _createClass=function(){function e(e,o){for(var t=0;t<o.length;t++){var m=o[t];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(e,m.key,m)}}return function(o,t,m){return t&&e(o.prototype,t),m&&e(o,m),o}}();function _classCallCheck(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}var extend=__webpack_require__(5),getDomArray=__webpack_require__(3),createElement=__webpack_require__(18),Super=function(){function e(o){_classCallCheck(this,e),this.opts=extend({wrap:"body",callback:{moduleDomCreateBefore:function(e){},moduleDomCreateAfter:function(e){},moduleDomRenderBefore:function(e){},moduleDomRenderAfter:function(e){},moduleDomRemoveBefore:function(e){},moduleDomRemoveAfter:function(e){},moduleDomShowBefore:function(e){},moduleDomShowAfter:function(e){},moduleDomHideBefore:function(e){},moduleDomHideAfter:function(e){},wrapDomGetBefore:function(e){},wrapDomGetAfter:function(e){},wrapDomRemoveBefore:function(e){},wrapDomRemoveAfter:function(e){}},config:{moduleDomAttribute:{},moduleDomCustomAttribute:{},moduleDomRenderMethod:{method:"appendChild",child:null},moduleDomStyle:{},moduleDomIsRender:!0,moduleDomIsClearTimer:!0}},o),this.moduleDom=null,this.wrapDom=null,this.moduleDomTimer={},this.init()}return _createClass(e,[{key:"init",value:function(){this.render(),this.power()}},{key:"render",value:function(){this.wrapDomGet(),this.moduleDomRemove();var e=this.opts.callback;e.moduleDomCreateBefore(this),this.moduleDomCreate(),e.moduleDomCreateAfter(this),this.moduleDomRender()}},{key:"power",value:function(){}},{key:"moduleDomCreate",value:function(){var e=this.opts.config;this.moduleDom=createElement({style:e.moduleDomStyle,customAttribute:e.moduleDomCustomAttribute,attribute:extend({},e.moduleDomAttribute)})}},{key:"moduleDomRender",value:function(){var e=this.opts.callback,o=this.opts.config;if(o.moduleDomIsRender&&this.wrapDom&&this.moduleDom){e.moduleDomRenderBefore(this);var t=o.moduleDomRenderMethod;if("insertBefore"===t.method){var m=getDomArray(t.child)[0];m?this.wrapDom.insertBefore(this.moduleDom,m):this.wrapDom.insertBefore(this.moduleDom,this.wrapDom.children[0])}"appendChild"===t.method&&this.wrapDom.appendChild(this.moduleDom),e.moduleDomRenderAfter(this)}}},{key:"moduleDomRemove",value:function(){var e=this.opts.callback;this.moduleDom&&this.moduleDom.parentNode&&(e.moduleDomRemoveBefore(this),this.moduleDom.parentNode.removeChild(this.moduleDom),e.moduleDomRemoveAfter(this)),this.moduleDomClearTimer()}},{key:"moduleDomClearTimer",value:function(){var e=this;e.opts.config.moduleDomIsClearTimer&&Object.keys(e.moduleDomTimer).forEach(function(o){clearInterval(e.moduleDomTimer[o]),clearTimeout(e.moduleDomTimer[o])})}},{key:"moduleDomHide",value:function(){var e=this.opts.callback;this.moduleDom&&this.moduleDom.parentNode&&(this.opts.config.moduleDomIsRender=!1,e.moduleDomHideBefore(this),this.moduleDom.parentNode.removeChild(this.moduleDom),e.moduleDomHideAfter(this))}},{key:"moduleDomShow",value:function(){var e=this.opts.callback;e.moduleDomShowBefore(this),this.wrapDom&&(this.opts.config.moduleDomIsRender=!0,this.moduleDomRender()),e.moduleDomShowAfter(this)}},{key:"wrapDomGet",value:function(){var e=this.opts.callback;e.wrapDomGetBefore(this),this.wrapDom=getDomArray(this.opts.wrap)[0],e.wrapDomGetAfter(this)}},{key:"wrapDomRemove",value:function(){var e=this.opts.callback;this.moduleDomRemove(),this.wrapDom&&this.wrapDom.parentNode&&(e.wrapDomRemoveBefore(this),this.wrapDom.parentNode.removeChild(this.wrapDom),e.wrapDomRemoveAfter(this))}},{key:"getModuleDomHtml",value:function(){return this.moduleDom?this.moduleDom.outerHTML:""}}]),e}();module.exports=Super;

/***/ })

},[118]);