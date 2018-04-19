webpackJsonp([4],{

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(106);
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
            var audioWrap = document.querySelector('.audios-wrap');
            var audioSrc = [];
            for (var _i = 0; _i < 7; _i++) {
                audioSrc.push(__webpack_require__(21)("./" + (_i + 1) + '.mp3'));
            }
            var hasSound = audioWrap.classList.contains('_on');
            audioWrap.addEventListener('click', function () {
                hasSound = !hasSound;
                this.classList.toggle('_on');
            });
            // 落子
            canvas.addEventListener('click', function (ev) {
                var clientX = ev.clientX - applications.offset(canvasWrap).left;
                var clientY = ev.clientY;
                var nowX = null;
                var nowY = null;
                map.forEach(function (v) {
                    if (clientX >= v.left - v.radius && clientX <= v.left + v.radius && clientY >= v.top - v.radius && clientY <= v.top + v.radius) {
                        // 判断点击范围是否是正确的区域
                        if (v.type === 'transparent') {
                            // 音乐
                            if (hasSound) {
                                var audioDom = applications.createElement({ elementName: 'audio' });
                                // audioDom.setAttribute('src', audioSrc[(game.blackNum + game.whiteNum) % audioSrc.length]);
                                audioDom.setAttribute('src', audioSrc[tools.getRandom(0, audioSrc.length - 1)]);
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

/***/ 106:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./1.mp3": 22,
	"./2.mp3": 23,
	"./3.mp3": 24,
	"./4.mp3": 25,
	"./5.mp3": 26,
	"./6.mp3": 27,
	"./7.mp3": 28
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
webpackContext.id = 21;

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "audios/1.38e46759.mp3";

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "audios/2.5576c20e.mp3";

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "audios/3.25e1d33d.mp3";

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "audios/4.220478be.mp3";

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "audios/5.ab15dc12.mp3";

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "audios/6.44295654.mp3";

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "audios/7.c04a5503.mp3";

/***/ })

},[105]);