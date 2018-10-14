webpackJsonp([5],{

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(38)(
  /* script */
  __webpack_require__(130),
  /* template */
  __webpack_require__(131),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhouhuafei/Desktop/www/suibianxiexie/vue/h5/components_vue/g-img-test.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] g-img-test.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-782da606", Component.options)
  } else {
    hotAPI.reload("data-v-782da606", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 130:
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

exports.default = {
    name: 'g-img-test',
    props: {},
    data: function data() {
        return {};
    },

    methods: {},
    mounted: function mounted() {
        this.$lazyload.render();
    }
};

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-img-test"
  }, [_c('div', {
    staticClass: "g-img-test-big"
  }, [_c('img', {
    staticClass: "g-lazy-load",
    attrs: {
      "data-src": __webpack_require__(132),
      "alt": "",
      "src": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "g-img-test-small"
  }, [_c('img', {
    staticClass: "g-lazy-load",
    attrs: {
      "data-src": __webpack_require__(133),
      "alt": "",
      "src": ""
    }
  })])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-782da606", module.exports)
  }
}

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/p-waiting.d4f6dd4c.jpg";

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/p-waiting.054b1f3c.png";

/***/ })

});