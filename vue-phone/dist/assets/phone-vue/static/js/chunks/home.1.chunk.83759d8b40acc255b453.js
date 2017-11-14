webpackJsonp([1],{

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(89)
}
var Component = __webpack_require__(32)(
  /* script */
  __webpack_require__(91),
  /* template */
  __webpack_require__(97),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-30ec94be",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(90);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(34)("3b9ae48a", content, true);

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'home',
    data() {
        return {};
    },
    methods: {},
    components: {
        'g-img-list': function (resolve) {
            __webpack_require__.e/* require.ensure */(5).then((function () {
                resolve(__webpack_require__(92));
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
        }
    },
    created() {
        /*
        // 接口跨域测试
        this.$axios({
            url: '/phone/api/verify-code-register-random/', // 代理进行了跨域
            data: {
                username: '1123486116@qq.com',
            },
        });
        */
    },
    mounted() {
        const Dialog = __webpack_require__(15);
        document.querySelector('.js-dialog').addEventListener('click', function () {
            new Dialog({
                callback: {
                    confirm: function () {
                        new Dialog({ config: { alert: { icon: 'icon-chenggong', content: '已确认' } } });
                    },
                    cancel: function () {
                        new Dialog({ config: { alert: { icon: 'icon-chenggong', content: '已取消' } } });
                    },
                    close: function () {
                        new Dialog({ config: { alert: { icon: 'icon-chenggong', content: '已关闭' } } });
                    }
                },
                config: {
                    type: 'confirm'
                }
            });
        });
        console.log('this\n', this);
    }
});

/***/ }),

/***/ 97:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-view"
  }, [_c('div', [_vm._v("首页")]), _vm._v(" "), _c('div', {
    staticClass: "js-dialog"
  }, [_vm._v("弹窗")]), _vm._v(" "), _c('g-img-list'), _vm._v(" "), _c('g-img-list'), _vm._v(" "), _c('g-img-list'), _vm._v(" "), _c('g-img-list'), _vm._v(" "), _c('g-img-list'), _vm._v(" "), _c('g-img-list'), _vm._v(" "), _c('g-img-list'), _vm._v(" "), _c('g-img-list'), _vm._v(" "), _c('g-img-list'), _vm._v(" "), _c('g-img-list')], 1)
},staticRenderFns: []}

/***/ })

});
//# sourceMappingURL=home.1.chunk.83759d8b40acc255b453.js.map