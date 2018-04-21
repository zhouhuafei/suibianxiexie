webpackJsonp([19],{

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (Vue) {
    Vue.component('g-img-list', {
        template: '<div class="g-img-list">\n            <div class="g-img-list-big">\n                <img class="g-lazy-load" data-src="' + __webpack_require__(155) + '" alt="">\n            </div>\n            <div class="g-img-list-small">\n                <img class="g-lazy-load" data-src="' + __webpack_require__(156) + '" alt="">\n            </div>\n        </div>',
        mounted: function mounted() {
            this.$lazyload.render();
        }
    });
};

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/p-waiting.d4f6dd4c.jpg";

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/p-waiting.054b1f3c.png";

/***/ })

});