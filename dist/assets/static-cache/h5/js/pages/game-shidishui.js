webpackJsonp([2],{

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(105);
var Super = __webpack_require__(0);
var offset = __webpack_require__(14);
var createElement = __webpack_require__(4);
var randomNum = __webpack_require__(13);

var Sub = function (_Super) {
    _inherits(Sub, _Super);

    function Sub() {
        _classCallCheck(this, Sub);

        return _possibleConstructorReturn(this, (Sub.__proto__ || Object.getPrototypeOf(Sub)).apply(this, arguments));
    }

    _createClass(Sub, [{
        key: 'power',

        // (功)(覆)功能(覆盖超类型)
        value: function power() {
            // 横屏的时候 90 -190 , 横屏的时候 0 180
            if (window.orientation === 90 || window.orientation === -90) {
                alert('请竖屏之后，刷新页面进行游戏');
            }
            var canvasWrap = document.querySelector('.canvas-wrap');
            var w = canvasWrap.offsetWidth;
            var h = document.documentElement.clientHeight;
            var padding = 20.5;
            var colNum = 7; // 7*7条线 6*6格
            var colWidth = (w - padding * 2) / (colNum - 1);
            var initX = padding;
            var initY = (h - w) / 2 + padding;
            var map = [];
            for (var i = 0; i < Math.pow(colNum, 2); i++) {
                var x = i % colNum;
                var y = Math.floor(i / colNum);
                var left = x * colWidth + initX;
                var top = y * colWidth + initY;
                map.push({
                    x: x,
                    y: y,
                    left: left,
                    top: top
                });
            }
            var gameNowLevel = 1; // 当前关卡
            var sortLevel = function sortLevel() {
                var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'diff';
                var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
                // 随机关卡
                type = String(type);
                var arr = [];
                if (type === 'easy') {
                    for (var _i = 0; _i < 36; _i++) {
                        arr.push(Math.floor(Math.random() * 5));
                    }
                } else if (type === 'diff') {
                    for (var _i2 = 0; _i2 < 8 - level; _i2++) {
                        arr.push(4);
                    }
                    for (var _i3 = 0; _i3 < 8 + level; _i3++) {
                        arr.push(3);
                    }
                    for (var _i4 = 0; _i4 < 10 - level; _i4++) {
                        arr.push(2);
                    }
                    for (var _i5 = 0; _i5 < 5 + level; _i5++) {
                        arr.push(1);
                    }
                    for (var _i6 = 31; _i6 < 36; _i6++) {
                        arr.push(0);
                    }
                    arr.sort(function () {
                        return Math.random() - 0.5;
                    });
                }
                return arr;
            };
            var gameMap = [];
            var gameColNum = colNum - 1;
            for (var _i7 = 0; _i7 < Math.pow(gameColNum, 2); _i7++) {
                var _x3 = _i7 % gameColNum;
                var _y = Math.floor(_i7 / gameColNum);
                var _left = _x3 * colWidth + initX;
                var _top = _y * colWidth + initY;
                gameMap.push({
                    x: _x3,
                    y: _y,
                    left: _left,
                    top: _top
                });
            }
            sortLevel('easy', gameNowLevel).forEach(function (v, i) {
                gameMap[i].type = v || 0;
            });
            var canvas = createElement({
                elementName: 'canvas',
                attribute: {
                    width: w,
                    height: h
                }
            });
            var ctx = canvas.getContext('2d');
            var drawBg = function drawBg() {
                ctx.save();
                ctx.beginPath();
                ctx.fillStyle = '#b8e2f6';
                ctx.rect(0, 0, w, h);
                ctx.fill();
                ctx.closePath();
                ctx.restore();
            };
            drawBg();
            var drawLine = function drawLine(startX, startY, endX, endY) {
                ctx.save();
                ctx.beginPath();
                ctx.strokeStyle = '#66ccff';
                ctx.moveTo(startX, startY);
                ctx.lineTo(endX, endY);
                ctx.stroke();
                ctx.closePath();
                ctx.restore();
            };
            var drawDrip = function drawDrip(x, y) {
                var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

                var img = document.createElement('img');
                img.addEventListener('load', function () {
                    ctx.save();
                    ctx.beginPath();
                    var scale = 0.8;
                    var wh = colWidth * scale;
                    var diff = colWidth - wh;
                    x += diff / 2;
                    y += diff / 2;
                    ctx.drawImage(img, x, y, wh, wh);
                    ctx.closePath();
                    ctx.restore();
                });
                img.src = __webpack_require__(106)("./" + type + '.png');
            };
            var drawCoordinate = function drawCoordinate(v) {
                ctx.save();
                ctx.beginPath();
                ctx.font = '10px 微软雅黑';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(v.x + ',' + v.y, v.left, v.top);
                ctx.closePath();
                ctx.restore();
            };
            map.forEach(function (v, i) {
                if (v.x === 0) {
                    var target = map[i + colNum - 1];
                    drawLine(parseInt(v.left) + 0.5, parseInt(v.top) + 0.5, parseInt(target.left) + 0.5, parseInt(target.top) + 0.5);
                }
                if (v.y === 0) {
                    var _target = map[colNum * colNum - 1 - (colNum - 1) + v.x];
                    drawLine(parseInt(v.left) + 0.5, parseInt(v.top) + 0.5, parseInt(_target.left) + 0.5, parseInt(_target.top) + 0.5);
                }
                drawCoordinate(v); // 画坐标
            });
            gameMap.forEach(function (v) {
                drawDrip(v.left, v.top, v.type);
            });
            canvasWrap.appendChild(canvas);
        }
    }]);

    return Sub;
}(Super);

new Sub();

/***/ }),

/***/ 105:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./0.png": 107,
	"./1.png": 108,
	"./2.png": 109,
	"./3.png": 110,
	"./4.png": 111,
	"./d.png": 112,
	"./l.png": 113,
	"./r.png": 114,
	"./u.png": 115
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 106;

/***/ }),

/***/ 107:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADMCAYAAAA/IkzyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjUxOTA0Q0MzOTlDMzExRTJBOUZGRjEzMDg3QTU3RTg4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjUxOTA0Q0M0OTlDMzExRTJBOUZGRjEzMDg3QTU3RTg4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTE5MDRDQzE5OUMzMTFFMkE5RkZGMTMwODdBNTdFODgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTE5MDRDQzI5OUMzMTFFMkE5RkZGMTMwODdBNTdFODgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5v6yzcAAAByElEQVR42uzTQQ0AAAjEMMC/58MCb9JKWLJOUsDNSACGAcOAYcAwYBgwjARgGDAMGAYMA4YBw0gAhgHDgGHAMGAYMIwEYBgwDBgGDAOGAcNIAIYBw4BhwDBgGDCMBGAYMAwYBgwDhgHDSACGAcOAYcAwYBgwjARgGDAMGAYMA4YBw0gAhgHDgGHAMGAYMIwEYBgwDBgGDAOGAcNIAIYBw4BhwDBgGDCMBGAYMAwYBgwDhgHDSACGAcOAYcAwYBgwjARgGDAMGAYMA4YBw0gAhgHDgGHAMGAYMIwEYBgwDBgGDAOGAcNIAIYBw4BhwDBgGDCMBGAYMAwYBgwDhgHDSACGAcOAYcAwYBgwjARgGDAMGAYMA4YBw0gAhgHDgGHAMGAYMIwEYBgwDBgGDAOGAcNIAIYBw4BhwDBgGDCMBGAYMAwYBgwDhgHDSACGAcOAYcAwYBgwjARgGDAMGAYMA4YBw0gAhgHDgGHAMGAYMIwEYBgwDBgGDAOGAcNIAIYBw4BhwDBgGDCMBGAYMAwYBgwDhgHDSACGAcOAYcAwYBgwjARgGDAMGAYMA4YBw0gAhgHDgGHAMGAYMIwEYBgwDBgGDAM/rQADAGYLBJWQ2EwsAAAAAElFTkSuQmCC"

/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/1.f9915047.png";

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/2.23db019d.png";

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/3.d031563a.png";

/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/4.be38886f.png";

/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/d.3ae26a75.png";

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/l.802ad42e.png";

/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/r.5ec323aa.png";

/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/u.a531ed5d.png";

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o};!function(o,t){"object"===( false?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=t(): true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):("object"!==Object.prototype.toString.call(window.zhf).slice(8,-1).toLowerCase()&&(window.zhf={}),window.zhf.randomNum=t())}(0,function(){return function(o,t){return t||(t=o,o=0),Math.round(Math.random()*(t-o)+o)}});

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var getDomArray=__webpack_require__(2);function offset(e){var t=0,r=0;for(e=getDomArray(e)[0];e;)t+=e.offsetTop,r+=e.offsetLeft,e=e.offsetParent;return{top:t,left:r}}module.exports=offset;

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,t){"object"===( false?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=t(): true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):("object"!==Object.prototype.toString.call(window.zhf).slice(8,-1).toLowerCase()&&(window.zhf={}),window.zhf.getDomArray=t())}(0,function(){function e(e,t){for(var o=t;o!==e&&null!==o;)o=o.parentNode;return o===e}return function(t,o){var n=[],l=document;if(o&&(l="string"===Object.prototype.toString.call(o).slice(8,-1).toLowerCase()?document.querySelector(o):1===o.nodeType?o:o===document?o:"htmlcollection"===Object.prototype.toString.call(o).slice(8,-1).toLowerCase()||"nodelist"===Object.prototype.toString.call(o).slice(8,-1).toLowerCase()?[].slice.call(o)[0]:null),!l)return[];if(t)if("string"===Object.prototype.toString.call(t).slice(8,-1).toLowerCase())n=[].slice.call(l.querySelectorAll(t));else if(1===t.nodeType)n=[t],o&&(e(l,t)||(n=[]));else if(t===document)n=[t],o&&(n=[]);else if(("htmlcollection"===Object.prototype.toString.call(t).slice(8,-1).toLowerCase()||"nodelist"===Object.prototype.toString.call(t).slice(8,-1).toLowerCase())&&(n=[].slice.call(t),o)){var r=[];n.forEach(function(t){e(l,t)&&r.push(t)}),n=r}return n}});

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t,e){"object"===( false?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=e(): true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):("object"!==Object.prototype.toString.call(window.zhf).slice(8,-1).toLowerCase()&&(window.zhf={}),window.zhf.createElement=e())}(0,function(){return function(t){var e=t||{};e.elementName=e.elementName||"div",e.style=e.style||{},e.customAttribute=e.customAttribute||{},e.attribute=e.attribute||{};var o=document.createElement(e.elementName);return Object.keys(e.style).forEach(function(t){o.style[t]=e.style[t]}),Object.keys(e.customAttribute).forEach(function(t){o.setAttribute("data-"+t,e.customAttribute[t])}),Object.keys(e.attribute).forEach(function(t){o[t]=e.attribute[t]}),o}});

/***/ })

},[104]);