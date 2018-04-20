webpackJsonp([6],{

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(104);
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
            canvasWrap.appendChild(canvas);
            var ctx = canvas.getContext('2d');
            var col = 4;
            var row = 4;
            var gap = 10;
            var step = 10;
            var score = 0;
            var hp = 100;
            var item = {
                w: (w - (col - 1) * gap) / col,
                h: (h - (row - 1) * gap) / row,
                bg: '#000'
            };
            var map = [];

            function randomMap() {
                var result = [];
                var max = 10;
                var randomRow = tools.getRandom(0, max);
                var colNum = 1;
                if (randomRow === max) {
                    // 当随机数等于max的时候,一行3个
                    colNum = 3;
                }
                if (randomRow === max / 2) {
                    // 当随机数等于max/2的时候,一行2个
                    colNum = 2;
                }
                var randomResult = [];
                // 随机2个时,这2个不允许被随机到同一个位置
                var random = tools.getRandom(0, col - 1); // 当前这个在这一行是第几个
                while (randomResult.indexOf(random) === -1 && randomResult.length < colNum) {
                    randomResult.push(random);
                    random = tools.getRandom(0, col - 1); // 当前这个在这一行是第几个
                }
                randomResult.forEach(function (v) {
                    result.push([v * item.w + v * gap, -item.h, item.w, item.h]);
                });
                return result;
            }

            var drawTxt = function drawTxt() {
                ctx.save();
                ctx.beginPath();
                ctx.fillStyle = '#f00';
                ctx.font = '12px 微软雅黑';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText('\u79EF\u5206:' + score + ',\u751F\u547D\u503C:' + hp, w / 2, 20);
                ctx.closePath();
                ctx.restore();
            };

            function move() {
                requestAnimationFrame(function () {
                    if (map.length === 0) {
                        map.push(randomMap());
                    } else {
                        if (map[map.length - 1][0][1] >= gap) {
                            map.push(randomMap());
                        }
                    }
                    ctx.clearRect(0, 0, w, h);
                    map.forEach(function (row) {
                        row.forEach(function (v) {
                            ctx.save();
                            ctx.beginPath();
                            ctx.fillStyle = '#000';
                            ctx.rect.apply(ctx, _toConsumableArray(v));
                            v[1] += step;
                            ctx.fill();
                            ctx.closePath();
                            ctx.restore();
                        });
                    });
                    if (hp < 0) {
                        setTimeout(function () {
                            alert('\u6E38\u620F\u7ED3\u675F,\u603B\u79EF\u5206' + score);
                            window.location.reload();
                        }, 60);
                        return;
                    }
                    drawTxt();
                    map.forEach(function (row, index) {
                        if (row[0][1] >= h) {
                            map.splice(index, 1);
                            hp--;
                        }
                    });
                    move();
                });
            }

            // 声音
            var audioWrap = document.querySelector('.audios-wrap');
            var audioSrc = [];
            for (var i = 0; i < 7; i++) {
                audioSrc.push(__webpack_require__(23)("./" + (i + 1) + '.mp3'));
            }
            var hasSound = audioWrap.classList.contains('_on');
            audioWrap.addEventListener('click', function () {
                hasSound = !hasSound;
                this.classList.toggle('_on');
            });

            var isPc = document.querySelector('html').classList.contains('g-pc');

            // 踩黑块
            canvas.addEventListener('' + (isPc ? 'click' : 'touchstart'), function (ev) {
                ev.preventDefault();
                ev.stopPropagation();
                ev = isPc ? ev : ev.changedTouches[0];
                var clientX = ev.clientX - applications.offset(canvasWrap).left;
                var clientY = ev.clientY;
                var isClickSuccess = false;
                map.forEach(function (row, index) {
                    row.forEach(function (v, i) {
                        if (clientX >= v[0] && clientX <= v[0] + item.w && clientY >= v[1] && clientY <= v[1] + item.h) {
                            row.splice(i, 1);
                            score++;
                            // 音乐
                            if (hasSound) {
                                var audioDom = applications.createElement({ elementName: 'audio' });
                                // audioDom.setAttribute('src', audioSrc[score % audioSrc.length]);
                                audioDom.setAttribute('src', audioSrc[tools.getRandom(0, audioSrc.length - 1)]);
                                audioDom.play();
                                audioDom = null;
                            }
                            isClickSuccess = true;
                        }
                    });
                    if (row.length === 0) {
                        map.splice(index, 1);
                    }
                });
                if (!isClickSuccess) {
                    hp--;
                    if (hp < 0) {
                        alert('\u6E38\u620F\u7ED3\u675F,\u603B\u79EF\u5206' + score);
                        window.location.reload();
                    }
                }
            });

            // 游戏开始
            document.querySelector('.game-start').addEventListener('click', function () {
                this.style.display = 'none';
                audioWrap.style.display = 'none';
                move();
            });
        }
    }]);

    return Sub;
}(Super);

new Sub();

/***/ }),

/***/ 104:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./1.mp3": 24,
	"./2.mp3": 25,
	"./3.mp3": 26,
	"./4.mp3": 27,
	"./5.mp3": 28,
	"./6.mp3": 29,
	"./7.mp3": 30
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
webpackContext.id = 23;

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "audios/1.38e46759.mp3";

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "audios/2.5576c20e.mp3";

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "audios/3.25e1d33d.mp3";

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "audios/4.220478be.mp3";

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "audios/5.ab15dc12.mp3";

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "audios/6.44295654.mp3";

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "audios/7.c04a5503.mp3";

/***/ })

},[103]);