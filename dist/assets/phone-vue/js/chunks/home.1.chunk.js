webpackJsonp([1],{

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(132)
}
var Component = __webpack_require__(39)(
  /* script */
  __webpack_require__(134),
  /* template */
  __webpack_require__(140),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-090d106c",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\www\\suibianxiexie\\vue\\phone\\views\\home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] home.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-090d106c", Component.options)
  } else {
    hotAPI.reload("data-v-090d106c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(133);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(41)("51f185af", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-090d106c\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./home.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-090d106c\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./home.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(40)(undefined);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\n/*\n// px转rem(pc) 这个是给电脑端用的。\n@function px2rem($px) {\n    @return $px * 1px;\n}\n*/\n", ""]);

// exports


/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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

exports.default = {
    name: 'home',
    data: function data() {
        return {};
    },

    methods: {},
    components: {
        'g-img-test': function gImgTest(resolve) {
            __webpack_require__.e/* require.ensure */(5).then((function () {
                resolve(__webpack_require__(135));
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
        }
    },
    created: function created() {
        /*
        // 接口跨域测试
        this.$axios({
            url: '/phone/api/verify-code-random/', // 代理进行了跨域
            data: {
                username: '1123486116@qq.com',
            },
        });
        */
    },
    mounted: function mounted() {
        var Dialog = __webpack_require__(17);
        document.querySelector('.js-dialog').addEventListener('click', function () {
            new Dialog({
                callback: {
                    confirm: function confirm() {
                        new Dialog({ config: { alert: { icon: 'icon-success', content: '已确认' } } });
                    },
                    cancel: function cancel() {
                        new Dialog({ config: { alert: { icon: 'icon-success', content: '已取消' } } });
                    },
                    close: function close() {
                        new Dialog({ config: { alert: { icon: 'icon-success', content: '已关闭' } } });
                    }
                },
                config: {
                    type: 'confirm'
                }
            });
        });
        console.log('this\n', this);
    }
};

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-view"
  }, [_c('div', [_vm._v("首页")]), _vm._v(" "), _c('div', {
    staticClass: "js-dialog"
  }, [_vm._v("弹窗")]), _vm._v(" "), _c('g-img-test'), _vm._v(" "), _c('g-img-test'), _vm._v(" "), _c('g-img-test'), _vm._v(" "), _c('g-img-test'), _vm._v(" "), _c('g-img-test'), _vm._v(" "), _c('g-img-test'), _vm._v(" "), _c('g-img-test'), _vm._v(" "), _c('g-img-test'), _vm._v(" "), _c('g-img-test'), _vm._v(" "), _c('g-img-test')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-090d106c", module.exports)
  }
}

/***/ })

});