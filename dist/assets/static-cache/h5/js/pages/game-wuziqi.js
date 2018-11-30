webpackJsonp([3],{

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(107);
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
            var colNum = 15; // 正规应该是15列
            var game = {
                nextColor: 'black', // 下一颗棋子的颜色
                blackNum: 0, // 黑色棋子个数
                whiteNum: 0 // 白色棋子个数
            };
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
            var canvas = createElement({
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
            var drawTxt = function drawTxt() {
                ctx.save();
                ctx.beginPath();
                ctx.clearRect(0, 0, w, initY / 1.4);
                ctx.font = '16px 微软雅黑';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText('\u8BF7' + (game.nextColor === 'black' ? '黑色' : '白色') + '\u68CB\u5B50\u843D\u5B50', w / 2, initY / 2);
                ctx.closePath();
                ctx.restore();
            };
            drawTxt();
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
                    drawLine(v.left, v.top, target.left, target.top);
                }
                if (v.y === 0) {
                    var _target = map[colNum * colNum - 1 - (colNum - 1) + v.x];
                    drawLine(v.left, v.top, _target.left, _target.top);
                }
                if (i === Math.floor(map.length / 2)) {
                    drawCircle(v.left, v.top, v.radius / 4, 'black');
                }
                // drawCoordinate(v); // 画坐标
            });
            // 声音
            var audioWrap = document.querySelector('.g-audio');
            var audioSrc = [];
            for (var _i = 0; _i < 7; _i++) {
                audioSrc.push(__webpack_require__(15)("./" + (_i + 1) + '.mp3'));
            }
            var hasSound = audioWrap.classList.contains('g-audio_on');
            audioWrap.addEventListener('click', function () {
                hasSound = !hasSound;
                this.classList.toggle('g-audio_on');
            });
            // 落子
            canvas.addEventListener('click', function (ev) {
                var clientX = ev.clientX - offset(canvasWrap).left;
                var clientY = ev.clientY;
                var nowX = null;
                var nowY = null;
                map.forEach(function (v) {
                    if (clientX >= v.left - v.radius && clientX <= v.left + v.radius && clientY >= v.top - v.radius && clientY <= v.top + v.radius) {
                        // 判断点击范围是否是正确的区域
                        if (v.type === 'transparent') {
                            // 音乐
                            if (hasSound) {
                                var audioDom = createElement({ elementName: 'audio' });
                                // audioDom.setAttribute('src', audioSrc[(game.blackNum + game.whiteNum) % audioSrc.length]);
                                audioDom.setAttribute('src', audioSrc[randomNum(0, audioSrc.length - 1)]);
                                audioDom.play();
                                audioDom = null;
                            }
                            drawCircle(v.left, v.top, v.radius, game.nextColor);
                            v.type = game.nextColor;
                            nowX = v.x;
                            nowY = v.y;
                            if (game.nextColor === 'black') {
                                game.blackNum++;
                                game.nextColor = 'white';
                            } else {
                                game.whiteNum++;
                                game.nextColor = 'black';
                            }
                        }
                    }
                });
                // 提示信息
                drawTxt();
                // 判断输赢
                var result = ['', '', '', ''];
                map.forEach(function (v) {
                    var str = '';
                    if (v.type === 'transparent') {
                        str = 't';
                    }
                    if (v.type === 'black') {
                        str = 'b';
                    }
                    if (v.type === 'white') {
                        str = 'w';
                    }
                    if (v.x === nowX) {
                        //  垂直
                        result[0] += str;
                    }
                    if (v.y === nowY) {
                        //  水平
                        result[1] += str;
                    }
                    if (v.x + v.y === nowX + nowY) {
                        // 左斜
                        result[2] += str;
                    }
                    if (v.x - v.y === nowX - nowY) {
                        // 右斜
                        result[3] += str;
                    }
                });
                var victory = [{
                    k: 'bbbbb',
                    v: '黑棋获胜'
                }, {
                    k: 'wwwww',
                    v: '白棋获胜'
                }];
                result.forEach(function (v1) {
                    victory.forEach(function (v2) {
                        if (v1.indexOf(v2.k) !== -1) {
                            setTimeout(function () {
                                alert(v2.v);
                                window.location.reload();
                            }, 60);
                        }
                    });
                });
            });
            canvasWrap.appendChild(canvas);
        }
    }]);

    return Sub;
}(Super);

new Sub();

/***/ }),

/***/ 107:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./1.mp3": 16,
	"./2.mp3": 17,
	"./3.mp3": 18,
	"./4.mp3": 19,
	"./5.mp3": 20,
	"./6.mp3": 21,
	"./7.mp3": 22
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
webpackContext.id = 15;

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "audios/1.38e46759.mp3";

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "audios/2.5576c20e.mp3";

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "audios/3.25e1d33d.mp3";

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "audios/4.220478be.mp3";

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

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "audios/5.ab15dc12.mp3";

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "audios/6.44295654.mp3";

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "audios/7.c04a5503.mp3";

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

},[106]);