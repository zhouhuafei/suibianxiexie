webpackJsonp([14],{

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(94);
var Super = __webpack_require__(3);

var Sub = function (_Super) {
    _inherits(Sub, _Super);

    function Sub() {
        _classCallCheck(this, Sub);

        return _possibleConstructorReturn(this, (Sub.__proto__ || Object.getPrototypeOf(Sub)).apply(this, arguments));
    }

    _createClass(Sub, [{
        key: 'power',
        value: function power() {
            var applications = this.applications;
            var canvasWrap = document.querySelector('.canvas-wrap');
            var w = document.documentElement.clientWidth;
            var h = document.documentElement.clientHeight;
            var size = w - 30;
            var lineNum = 15;
            var gap = size / 15;
            canvasWrap.style.width = w + 'px';
            canvasWrap.style.height = h + 'px';
            var canvas = applications.createElement({
                elementName: 'canvas',
                attribute: {
                    width: size,
                    height: size
                }
            });
            var ctx = canvas.getContext('2d');
            canvasWrap.appendChild(canvas);
        }
    }]);

    return Sub;
}(Super);

new Sub();

/***/ }),

/***/ 94:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[93]);