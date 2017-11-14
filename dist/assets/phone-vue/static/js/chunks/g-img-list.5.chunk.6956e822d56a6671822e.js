webpackJsonp([5],{

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(32)(
  /* script */
  __webpack_require__(93),
  /* template */
  __webpack_require__(94),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhouhuafei/Desktop/suibianxiexie/vue/phone/src/components-vue/g-img-list.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] g-img-list.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-26065107", Component.options)
  } else {
    hotAPI.reload("data-v-26065107", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 93:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'g-img-list',
    props: {},
    data() {
        return {};
    },
    methods: {},
    mounted() {
        this.$lazyload.render();
    }
});

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-img-list"
  }, [_c('div', {
    staticStyle: {
      "min-height": "120px"
    }
  }, [_c('img', {
    staticClass: "g-lazy-load",
    attrs: {
      "data-src": __webpack_require__(95),
      "alt": "",
      "src": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticStyle: {
      "min-height": "120px"
    }
  }, [_c('img', {
    staticClass: "g-lazy-load",
    attrs: {
      "data-src": __webpack_require__(96),
      "alt": "",
      "src": ""
    }
  })])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-26065107", module.exports)
  }
}

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/p-waiting.d4f6dd4c.jpg";

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/p-waiting.054b1f3c.png";

/***/ })

});
//# sourceMappingURL=g-img-list.5.chunk.6956e822d56a6671822e.js.map