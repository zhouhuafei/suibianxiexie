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
            var w = canvasWrap.offsetWidth;
            var h = document.documentElement.clientHeight;
            var padding = 20.5;
            var colNum = 15 - 4; // 正规应该是15列
            var gobangColor = 'black'; // 五子棋的颜色
            var colWidth = (w - padding * 2) / (colNum - 1);
            var initX = padding;
            var initY = (h - w) / 2 + padding;
            var map = [];
            for (var i = 0; i < Math.pow(colNum, 2); i++) {
                var x = i % colNum;
                var y = Math.floor(i / colNum);
                map.push({
                    x: x,
                    y: y,
                    left: x * colWidth + initX,
                    top: y * colWidth + initY,
                    radius: colWidth / 2.4,
                    type: 'transparent'
                });
            }
            var canvas = applications.createElement({
                elementName: 'canvas',
                attribute: {
                    width: w,
                    height: h
                }
            });
            var ctx = canvas.getContext('2d');
            var drawLine = function drawLine(startX, startY, endX, endY) {
                ctx.save();
                ctx.beginPath();
                ctx.strokeStyle = '#000';
                ctx.moveTo(startX, startY);
                ctx.lineTo(endX, endY);
                ctx.stroke();
                ctx.closePath();
                ctx.restore();
            };
            var drawCircle = function drawCircle(x, y, r, fillStyle) {
                ctx.save();
                ctx.beginPath();
                ctx.fillStyle = fillStyle;
                ctx.arc(x, y, r, 0, Math.PI * 2, false);
                ctx.fill();
                ctx.closePath();
                ctx.restore();
            };
            map.forEach(function (v, i) {
                if (v.x === 0) {
                    var target = map[i + colNum - 1];
                    drawLine(v.left, v.top, target.left, target.top);
                }
                if (v.y === 0) {
                    var _target = map[colNum * colNum - 1 - (colNum - 1) + v.x];
                    drawLine(v.left, v.top, _target.left, _target.top);
                }
                if (i === Math.floor(map.length / 2)) {
                    drawCircle(v.left, v.top, v.radius / 4, 'black');
                }
            });
            canvas.addEventListener('click', function (ev) {
                var clientX = ev.clientX - applications.offset(canvasWrap).left;
                var clientY = ev.clientY;
                map.forEach(function (v) {
                    if (clientX >= v.left - v.radius && clientX <= v.left + v.radius && clientY >= v.top - v.radius && clientY <= v.top + v.radius) {
                        // 判断点击范围是否是正确的区域
                        if (v.type === 'transparent') {
                            drawCircle(v.left, v.top, v.radius, gobangColor);
                            v.type = gobangColor;
                            gobangColor = gobangColor === 'black' ? 'white' : 'black';
                        }
                    }
                });
                // 判断输赢
                map.forEach(function (v) {});
            });
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