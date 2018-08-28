webpackJsonp([0],{

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (Vue) {
    Vue.component('g-img-test', {
        template: '<div class="g-img-test">\n            <div class="g-img-test-big">\n                <img class="g-lazy-load" data-src="' + __webpack_require__(173) + '" alt="">\n            </div>\n            <div class="g-img-test-small">\n                <img class="g-lazy-load" data-src="' + __webpack_require__(174) + '" alt="">\n            </div>\n        </div>',
        mounted: function mounted() {
            this.$lazyload.render();
        }
    });
};

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/p-waiting.d4f6dd4c.jpg";

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/p-waiting.054b1f3c.png";

/***/ })

});