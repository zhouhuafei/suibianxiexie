webpackJsonp([17],{

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (Vue) {
    Vue.component('g-img-list', {
        template: '<div class="g-img-list">\n            <div style="min-height: 120px;">\n                <img class="g-lazy-load" data-src="' + __webpack_require__(40) + '" alt="">\n            </div>\n            <div style="min-height: 120px;">\n                <img class="g-lazy-load" data-src="' + __webpack_require__(41) + '" alt="">\n            </div>\n        </div>',
        mounted: function mounted() {
            this.$lazyload.render();
        }
    });
};

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/p-waiting.d4f6dd4c.jpg";

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/p-waiting.054b1f3c.png";

/***/ })

});