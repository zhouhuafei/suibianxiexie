webpackJsonp([0],{

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (Vue) {
    Vue.component('g-img-test', {
        template: '<div class="g-img-test">\n            <div class="g-img-test-big">\n                <img class="g-lazy-load" data-src="' + __webpack_require__(168) + '" alt="">\n            </div>\n            <div class="g-img-test-small">\n                <img class="g-lazy-load" data-src="' + __webpack_require__(169) + '" alt="">\n            </div>\n        </div>',
        mounted: function mounted() {
            this.$lazyload.render();
        }
    });
};

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/p-waiting.d4f6dd4c.jpg";

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/p-waiting.054b1f3c.png";

/***/ })

});