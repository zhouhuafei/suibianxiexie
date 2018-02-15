webpackJsonp([16],{

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(90);
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
            // 横屏的时候 90 -190 , 横屏的时候 0 180
            if (window.orientation === 90 || window.orientation === -90) {
                alert('请竖屏之后，刷新页面进行游戏');
            }
            var tools = this.tools;
            var applications = this.applications;
            var canvasWrap = document.querySelector('.canvas-wrap');
            var w = canvasWrap.offsetWidth;
            var h = document.documentElement.clientHeight;
            var canvas = applications.createElement({
                elementName: 'canvas',
                attribute: {
                    width: w,
                    height: h
                }
            });
            canvas.addEventListener('click', function () {});
            canvasWrap.appendChild(canvas);
            var ctx = canvas.getContext('2d');
            var col = 4;
            var row = 4;
            var gap = 10;
            var item = {
                w: (w - (col - 1) * gap) / col,
                h: (h - (row - 1) * gap) / row,
                bg: '#000'
            };
            var map = [];

            function randomMap() {
                var result = [];
                var random = tools.getRandom(0, col - 1);
                result.push([random * item.w + random * gap, -item.h, item.w, item.h]);
                return result;
            }

            setInterval(function () {
                if (map.length === 0) {
                    map.push(randomMap());
                } else {
                    if (map[map.length - 1][0][1] >= gap) {
                        map.push(randomMap());
                    }
                }
            }, 60);

            function drawRect(row, index, array) {
                ctx.save();
                ctx.beginPath();
                ctx.fillStyle = '#000';
                row.forEach(function (v) {
                    ctx.rect.apply(ctx, _toConsumableArray(v));
                    if (v[1] >= h) {
                        array.splice(index, 1);
                        console.log(map);
                    } else {
                        v[1] += 10;
                    }
                });
                ctx.fill();
                ctx.closePath();
                ctx.restore();
            }

            function step() {
                requestAnimationFrame(function () {
                    ctx.clearRect(0, 0, w, h);
                    map.forEach(function (row, index, array) {
                        drawRect(row, index, array);
                    });
                    step();
                });
            }

            step();
        }
    }]);

    return Sub;
}(Super);

new Sub();

/***/ }),

/***/ 90:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[89]);