webpackJsonp([4],{

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(136);
var Super = __webpack_require__(3);
var randomNum = __webpack_require__(29);
var createElement = __webpack_require__(1);
var offset = __webpack_require__(21);

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
            var canvas = createElement({
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
                var randomRow = randomNum(0, max);
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
                var random = randomNum(0, col - 1); // 当前这个在这一行是第几个
                while (randomResult.indexOf(random) === -1 && randomResult.length < colNum) {
                    randomResult.push(random);
                    random = randomNum(0, col - 1); // 当前这个在这一行是第几个
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
            var audioWrap = document.querySelector('.g-audio');
            var audioSrc = [];
            for (var i = 0; i < 7; i++) {
                audioSrc.push(__webpack_require__(30)("./" + (i + 1) + '.mp3'));
            }
            var hasSound = audioWrap.classList.contains('g-audio_on');
            audioWrap.addEventListener('click', function () {
                hasSound = !hasSound;
                this.classList.toggle('g-audio_on');
            });

            var isPc = document.querySelector('html').classList.contains('g-pc');

            // 踩黑块
            canvas.addEventListener('' + (isPc ? 'click' : 'touchstart'), function (ev) {
                ev.preventDefault();
                ev.stopPropagation();
                ev = isPc ? ev : ev.changedTouches[0];
                var clientX = ev.clientX - offset(canvasWrap).left;
                var clientY = ev.clientY;
                var isClickSuccess = false;
                map.forEach(function (row, index) {
                    row.forEach(function (v, i) {
                        if (clientX >= v[0] && clientX <= v[0] + item.w && clientY >= v[1] && clientY <= v[1] + item.h) {
                            row.splice(i, 1);
                            score++;
                            // 音乐
                            if (hasSound) {
                                var audioDom = createElement({ elementName: 'audio' });
                                // audioDom.setAttribute('src', audioSrc[score % audioSrc.length]);
                                audioDom.setAttribute('src', audioSrc[randomNum(0, audioSrc.length - 1)]);
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

/***/ 136:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (o) {
  return typeof o === "undefined" ? "undefined" : _typeof2(o);
} : function (o) {
  return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o === "undefined" ? "undefined" : _typeof2(o);
};!function (o, t) {
  "object" === ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : ("object" !== Object.prototype.toString.call(window.zhf).slice(8, -1).toLowerCase() && (window.zhf = {}), window.zhf.randomNum = t());
}(0, function () {
  return function (o, t) {
    return t || (t = o, o = 0), Math.round(Math.random() * (t - o) + o);
  };
});

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./1.mp3": 31,
	"./2.mp3": 32,
	"./3.mp3": 33,
	"./4.mp3": 34,
	"./5.mp3": 35,
	"./6.mp3": 36,
	"./7.mp3": 37
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
webpackContext.id = 30;

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "audios/1.38e46759.mp3";

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "audios/2.5576c20e.mp3";

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "audios/3.25e1d33d.mp3";

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "audios/4.220478be.mp3";

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "audios/5.ab15dc12.mp3";

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "audios/6.44295654.mp3";

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "audios/7.c04a5503.mp3";

/***/ })

},[135]);