webpackJsonp([0],{

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (Vue) {
    Vue.component('g-img-list', {
        template: '<div class="g-img-list">\n            <div style="min-height: 120px;">\n                <img style="width:5.013333333333334rem;height: 2.1333333333333333rem;" class="g-lazy-load" data-src="' + __webpack_require__(112) + '" alt="">\n            </div>\n            <div style="min-height: 120px;">\n                <img style="width:1.92rem;height:1.96rem;" class="g-lazy-load" data-src="' + __webpack_require__(113) + '" alt="">\n            </div>\n        </div>',
        mounted: function mounted() {
            this.$lazyload.render();
        }
    });
};

/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/p-waiting.d4f6dd4c.jpg";

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/p-waiting.054b1f3c.png";

/***/ })

});