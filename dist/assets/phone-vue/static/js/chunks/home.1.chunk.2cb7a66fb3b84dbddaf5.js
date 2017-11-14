webpackJsonp([1],{

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
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
  "data-v-45a89412",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhouhuafei/Desktop/suibianxiexie/vue/phone/src/views/home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] home.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-45a89412", Component.options)
  } else {
    hotAPI.reload("data-v-45a89412", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

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
var update = __webpack_require__(34)("d51b7178", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-45a89412\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./home.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-45a89412\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./home.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"home.vue","sourceRoot":""}]);

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
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-view"
  }, [_c('div', [_vm._v("首页")]), _vm._v(" "), _c('div', {
    staticClass: "js-dialog"
  }, [_vm._v("弹窗")]), _vm._v(" "), _c('g-img-list'), _vm._v(" "), _c('g-img-list'), _vm._v(" "), _c('g-img-list'), _vm._v(" "), _c('g-img-list'), _vm._v(" "), _c('g-img-list'), _vm._v(" "), _c('g-img-list'), _vm._v(" "), _c('g-img-list'), _vm._v(" "), _c('g-img-list'), _vm._v(" "), _c('g-img-list'), _vm._v(" "), _c('g-img-list')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-45a89412", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=home.1.chunk.2cb7a66fb3b84dbddaf5.js.map