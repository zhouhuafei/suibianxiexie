webpackJsonp([7],{

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(107);
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
            var superSelf = this;
            var dataInfo = superSelf.dataInfo;
            var routes = dataInfo.routes;

            // slide切换
            (function () {
                var Slide = __webpack_require__(18);
                new Slide({
                    wrap: '.page-slide',
                    data: {
                        items: [{
                            img: {
                                width: 0,
                                height: 0,
                                src: 'http://img1.imgtn.bdimg.com/it/u=1056872014,4038868309&fm=23&gp=0.jpg'
                            },
                            href: ''
                        }, {
                            img: {
                                width: 0,
                                height: 0,
                                src: 'http://img3.imgtn.bdimg.com/it/u=1732308780,3782498029&fm=23&gp=0.jpg'
                            },
                            href: ''
                        }, {
                            img: {
                                width: 0,
                                height: 0,
                                src: 'http://img3.imgtn.bdimg.com/it/u=4027566086,3099254237&fm=23&gp=0.jpg'
                            },
                            href: ''
                        }, {
                            img: {
                                width: 0,
                                height: 0,
                                src: 'http://img4.imgtn.bdimg.com/it/u=120609946,455952432&fm=23&gp=0.jpg'
                            },
                            href: ''
                        }, {
                            img: {
                                width: 0,
                                height: 0,
                                src: 'http://img2.imgtn.bdimg.com/it/u=2763208243,961494673&fm=23&gp=0.jpg'
                            },
                            href: ''
                        }]
                    }
                });
            })();

            // 导航
            (function () {
                var Navigation = __webpack_require__(20);
                new Navigation({
                    wrap: '.page-navigation',
                    data: {
                        items: [{
                            href: routes['home'].route,
                            icon: 'icon-home',
                            text: '首页',
                            isShowMark: false
                        }, {
                            href: routes['dev-globals'].route,
                            icon: 'icon-dev',
                            text: '开发全局',
                            isShowMark: false
                        }, {
                            href: routes['dev-components'].route,
                            icon: 'icon-dev',
                            text: '开发组件',
                            isShowMark: false
                        }, {
                            href: routes['dev-words'].route,
                            icon: 'icon-dev',
                            text: '开发词汇',
                            isShowMark: false
                        }, {
                            href: routes['mine'].route,
                            icon: 'icon-mine',
                            text: '我的',
                            isShowMark: false
                        }]
                    }
                });
            })();

            // vue
            (function () {
                var Vue = superSelf.Vue;
                __webpack_require__.e/* require.ensure */(0).then((function (require) {
                    __webpack_require__(124)(Vue);
                    new Vue({
                        el: '.page-vue-app',
                        template: '<div class="page-vue">\n                        <g-img-list></g-img-list>\n                        <g-img-list></g-img-list>\n                        <g-img-list></g-img-list>\n                        <g-img-list></g-img-list>\n                        <g-img-list></g-img-list>\n                        <g-img-list></g-img-list>\n                        <g-img-list></g-img-list>\n                        <g-img-list></g-img-list>\n                        <g-img-list></g-img-list>\n                        <g-img-list></g-img-list>\n                    </div>',
                        mounted: function mounted() {
                            console.log(this);
                        }
                    });
                }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
            })();

            // jsonp错误测试
            /*
            this.jsonp({
                url: '/phone/api/verify-code-register-random2/',
                data: {
                    isJsonp: true,
                },
                callback: function (dataInfo) {
                    console.log('jsonp error test:\n', dataInfo);
                },
            });
            this.jsonp({
                url: '/phone/api/verify-code-register-random2/',
                data: {
                    isJsonp: true,
                },
                callback: function (dataInfo) {
                    console.log('jsonp error test:\n', dataInfo);
                },
            });
            */

            // axios错误测试
            /*
            this.axios({
                url: '/phone/api/verify-code-register-random2/',
                method: 'get',
            }).then(function (dataInfo) {
                console.log('axios error test:\n', dataInfo);
            });
            */
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

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tools = __webpack_require__(0); // 工具方法集合
var applications = __webpack_require__(1); // 应用方法集合
var Super = __webpack_require__(2); // 超类型(子类型继承的对象)
var TouchSlide = __webpack_require__(19); // 轮播图插件

// 子类型
var Sub = tools.constructorInherit(Super, {
    // 回调
    callback: {
        startFun: function startFun() {},
        endFun: function endFun() {}
    },
    // 配置
    config: {
        heightWidthScale: 1 / 2,
        isShowHref: true, // 是否有跳转
        // TouchSlide插件的配置
        touchSlide: {
            slideCell: '', // 外部容器,这个值会在底部进行覆盖,因为在这里没办法获取this
            mainCell: '.g-slide-body', // 切换元素的包裹层对象
            titCell: '.g-slide-header .g-slide-items', // 导航元素对象
            effect: 'leftLoop', // 效果'left' 'leftLoop'
            autoPlay: true, // 自动播放
            delayTime: 200, // 切换一次的持续时间
            interTime: 3000, // 多久切换一次
            startFun: function startFun() {
                console.log('此处的函数会被覆盖,请在callback里执行回调');
            },
            endFun: function endFun() {
                console.log('此处的函数会被覆盖,请在callback里执行回调');
            },
            defaultIndex: 0, // 默认的当前位置索引
            switchLoadClass: '.pre-load', // 预加载的class
            switchLoad: 'data-src' // 预加载的属性
        }
    },
    // 数据
    data: {
        items: [{
            img: {
                width: 0,
                height: 0,
                src: 'http://img1.imgtn.bdimg.com/it/u=1056872014,4038868309&fm=23&gp=0.jpg'
            },
            href: ''
        }]
    }
});

// 内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    this.moduleDom = applications.createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-slide',
            innerHTML: '\n                ' + this.renderHeader() + '\n                ' + this.renderBody() + '\n            '
        }
    });
};

Sub.prototype.renderHeader = function () {
    var self = this;
    var html = '';
    var data = self.opts.data;
    var className = '';
    data.items.forEach(function (v, i) {
        if (i === self.opts.config.touchSlide.defaultIndex) {
            className = 'on';
        }
        html += '<div class="g-slide-items ' + className + '"></div>';
    });
    return '<div class="g-slide-header">' + html + '</div>';
};

Sub.prototype.renderBody = function () {
    var self = this;
    var html = '';
    var data = self.opts.data;
    data.items.forEach(function (v) {
        if (self.opts.config.isShowHref) {
            html += '<a href="' + (v.href || 'javascript:;') + '" class="g-slide-items pre-load" data-src="' + v.img.src + '"></a>';
        } else {
            html += '<a class="g-slide-items pre-load" data-src="' + v.img.src + '"></a>';
        }
    });
    return '<div class="g-slide-body">' + html + '</div>';
};

// 功能(覆盖超类型)
Sub.prototype.power = function () {
    var self = this;
    var callback = self.opts.callback;
    var config = self.opts.config;
    var touchSlide = config.touchSlide;
    var moduleDom = self.moduleDom;
    moduleDom.style.height = moduleDom.offsetWidth * config.heightWidthScale + 'px';
    touchSlide.slideCell = moduleDom;
    touchSlide.startFun = function (i) {
        // 因为以下功能在插件本身进行了实现(本人对touch-slide插件进行了小修改),所以这里就注释了
        // var allImg = self.moduleDom.querySelectorAll('.g-slide-body .g-slide-items');
        // var nowIndex = ( i + 1);
        // if (touchSlide.effect == 'left') {
        //     nowIndex = i;
        // }
        // var nowImg = allImg[nowIndex];
        // var prevImg = allImg[nowIndex - 1];
        // var nextImg = allImg[nowIndex + 1];
        // nowImg.style.backgroundImage = `url(${nowImg.dataset.src})`;
        // prevImg && (prevImg.style.backgroundImage = `url(${prevImg.dataset.src})`);
        // nextImg && (nextImg.style.backgroundImage = `url(${nextImg.dataset.src})`);
        callback.startFun({ self: self, index: i });
    };
    touchSlide.endFun = function (i) {
        callback.endFun({ self: self, index: i });
    };
    TouchSlide(self.opts.config.touchSlide);
};

module.exports = Sub;

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*!
 * TouchSlide v1.1
 * javascript触屏滑动特效插件，移动端滑动特效，触屏焦点图，触屏Tab切换，触屏多图切换等
 * 详尽信息请看官网：http://www.SuperSlide2.com/TouchSlide/
 *
 * Copyright 2013 大话主席
 *
 * 请尊重原创，保留头部版权
 * 在保留版权的前提下可应用于个人或商业用途

 * 1.1 宽度自适应（修复安卓横屏时滑动范围不变的bug）
 */

/*
 * 本人对此文件进行了稍微改动,还请见谅
 * 1.支持传入class和dom节点
 * 2.样式修改成flex布局
 * 3.把一些不规范的语法警告提示修正
 * 4.添加预加载功能pre-load,去掉插件自带的懒加载功能
 * 5.给主体区域的切换每一项加上className
 * */

/* eslint-disable */

var TouchSlide = function TouchSlide(a) {
    a = a || {};
    var opts = {
        slideCell: a.slideCell || '#touchSlide', //运行效果主对象，必须用id！，例如 slideCell:"#touchSlide"
        titCell: a.titCell || '.hd li', // 导航对象，当自动分页设为true时为“导航对象包裹层”
        mainCell: a.mainCell || '.bd', // 切换对象包裹层
        effect: a.effect || 'left', // 效果，支持 left、leftLoop
        autoPlay: a.autoPlay || false, // 自动播放
        delayTime: a.delayTime || 200, // 效果持续时间
        interTime: a.interTime || 2500, // 自动运行间隔
        defaultIndex: a.defaultIndex || 0, // 默认的当前位置索引。0是第一个； defaultIndex:1 时，相当于从第2个开始执行
        titOnClassName: a.titOnClassName || 'on', // 当前导航对象添加的className
        autoPage: a.autoPage || false, // 自动分页，当为true时titCell为“导航对象包裹层”
        prevCell: a.prevCell || '.prev', // 前一页按钮
        nextCell: a.nextCell || '.next', // 后一页按钮
        pageStateCell: a.pageStateCell || '.pageState', // 分页状态对象，用于显示分页状态，例如：2/3
        pnLoop: a.pnLoop == 'undefined ' ? true : a.pnLoop, // 前后按钮点击是否继续执行效果，当为最前/后页是会自动添加“prevStop”/“nextStop”控制样色
        startFun: a.startFun || null, // 每次切换效果开始时执行函数，用于处理特殊情况或创建更多效果。用法 satrtFun:function(i,c){ }； 其中i为当前分页，c为总页数
        endFun: a.endFun || null, // 每次切换效果结束时执行函数，用于处理特殊情况或创建更多效果。用法 endFun:function(i,c){ }； 其中i为当前分页，c为总页数
        switchLoadClass: a.switchLoadClass || '.pre-load', //预加载的class
        switchLoad: a.switchLoad || 'data-src' //预加载的属性
    };
    var slideCell = null;
    //如果是字符串
    if (Object.prototype.toString.call(opts.slideCell).slice(8, -1).toLowerCase() == 'string') {
        slideCell = document.querySelector(opts.slideCell);
    }
    //如果是dom节点(一个元素)    原生的
    if (opts.slideCell.nodeType == 1) {
        slideCell = opts.slideCell;
    }
    /*
     * 如果是dom集合(一组元素)    HtmlCollection(通过getElementsBy系列获取到的)
     * 如果是dom集合(一组元素)    NodeList(通过querySelectorAll获取到的)
     * */
    if (Object.prototype.toString.call(opts.slideCell).slice(8, -1).toLowerCase() == 'htmlcollection' || Object.prototype.toString.call(opts.slideCell).slice(8, -1).toLowerCase() == 'nodelist') {
        slideCell = opts.slideCell[0];
    }
    if (!slideCell) {
        return;
    }
    //简单模拟jquery选择器
    var obj = function obj(str, parEle) {
        str = str.split(' ');
        var par = [];
        parEle = parEle || document;
        var retn = [parEle];
        for (var attr in str) {
            if (str.hasOwnProperty(attr)) {
                if (str[attr].length != 0) {
                    par.push(str[attr]);
                }
            }
        }
        //去掉重复空格
        for (var i in par) {
            if (par.hasOwnProperty(i)) {
                if (retn.length == 0) {
                    return false;
                }
                var _retn = [];
                for (var r in retn) {
                    if (retn.hasOwnProperty(r)) {
                        if (par[i][0] == '#') {
                            _retn.push(document.getElementById(par[i].replace('#', '')));
                        } else if (par[i][0] == '.') {
                            var tag = retn[r].getElementsByTagName('*');
                            for (var j = 0; j < tag.length; j++) {
                                var cln = tag[j].className;
                                if (cln && cln.search && cln.search(new RegExp('\\b' + par[i].replace('.', '') + '\\b')) != -1) {
                                    _retn.push(tag[j]);
                                }
                            }
                        } else {
                            var tag2 = retn[r].getElementsByTagName(par[i]);
                            for (var k = 0; k < tag2.length; k++) {
                                _retn.push(tag2[k]);
                            }
                        }
                    }
                }
                retn = _retn;
            }
        }
        return retn.length == 0 || retn[0] == parEle ? false : retn;
    };
    // 创建包裹层
    var wrap = function wrap(el, v) {
        var tmp = document.createElement('div');
        tmp.innerHTML = v;
        tmp = tmp.children[0];
        var _el = el.cloneNode(true);
        tmp.appendChild(_el);
        el.parentNode.replaceChild(tmp, el);
        conBox = _el; // 重置conBox
        return tmp;
    };
    // class处理
    var addClass = function addClass(ele, className) {
        if (!ele || !className || ele.className && ele.className.search(new RegExp('\\b' + className + '\\b')) != -1) {
            return;
        }
        ele.className += (ele.className ? ' ' : '') + className;
    };
    var removeClass = function removeClass(ele, className) {
        if (!ele || !className || ele.className && ele.className.search(new RegExp('\\b' + className + '\\b')) == -1) {
            return;
        }
        ele.className = ele.className.replace(new RegExp('\\s*\\b' + className + '\\b', 'g'), '');
    };
    //全局对象
    var effect = opts.effect;
    var prevBtn = obj(opts.prevCell, slideCell)[0];
    var nextBtn = obj(opts.nextCell, slideCell)[0];
    var pageState = obj(opts.pageStateCell)[0];
    var conBox = obj(opts.mainCell, slideCell)[0]; //内容元素父层对象
    if (!conBox) {
        return;
    }
    var conBoxSize = conBox.children.length;
    var navObj = obj(opts.titCell, slideCell); //导航子元素结合
    var navObjSize = navObj ? navObj.length : conBoxSize;
    /*字符串转换*/
    var index = parseInt(opts.defaultIndex);
    var delayTime = parseInt(opts.delayTime);
    var interTime = parseInt(opts.interTime);
    var autoPlay = !(opts.autoPlay == 'false' || opts.autoPlay == false);
    var autoPage = !(opts.autoPage == 'false' || opts.autoPage == false);
    var loop = !(opts.pnLoop == 'false' || opts.pnLoop == false);
    var oldIndex = index;
    var inter = null; // autoPlay的setInterval
    var timeout = null; // leftLoop的setTimeout
    var endTimeout = null; //translate的setTimeout
    var startX = 0;
    var startY = 0;
    var distX = 0;
    var distY = 0;
    //var dist = 0; //手指滑动距离
    var isTouchPad = /hp-tablet/gi.test(navigator.appVersion);
    var hasTouch = 'ontouchstart' in window && !isTouchPad;
    var touchStart = hasTouch ? 'touchstart' : 'mousedown';
    var touchMove = hasTouch ? 'touchmove' : '';
    var touchEnd = hasTouch ? 'touchend' : 'mouseup';
    var slideW = conBox.parentNode.clientWidth; // mainCell滑动距离
    var twCell;
    var scrollY;
    var tempSize = conBoxSize;
    //处理分页
    if (navObjSize == 0) {
        navObjSize = conBoxSize;
    }
    if (autoPage) {
        navObjSize = conBoxSize;
        navObj = navObj[0];
        navObj.innerHTML = '';
        var str = '';

        if (opts.autoPage == true || opts.autoPage == 'true') {
            for (var i = 0; i < navObjSize; i++) {
                str += '<li>' + (i + 1) + '</li>';
            }
        } else {
            for (var x = 0; x < navObjSize; x++) {
                str += opts.autoPage.replace('$', x + 1);
            }
        }
        navObj.innerHTML = str;
        navObj = navObj.children; //重置navObj
    }
    if (effect == 'leftLoop') {
        tempSize += 2;
        conBox.appendChild(conBox.children[0].cloneNode(true));
        conBox.insertBefore(conBox.children[conBoxSize - 1].cloneNode(true), conBox.children[0]);
    }
    twCell = wrap(conBox, '<div class="tempWrap" style="height:inherit;overflow:hidden; position:relative;"></div>');
    conBox.style.cssText = 'display:flex;width:' + tempSize * slideW + 'px;' + 'position:relative;overflow:hidden;padding:0;margin:0;';
    for (var y = 0; y < tempSize; y++) {
        conBox.children[y].style.cssText = 'height:inherit;display:flex;align-items: center;justify-content: center;width:' + slideW + 'px';
    }
    var doStartFun = function doStartFun() {
        if (typeof opts.startFun == 'function') {
            opts.startFun(index, navObjSize);
        }
    };
    var doEndFun = function doEndFun() {
        if (typeof opts.endFun == 'function') {
            opts.endFun(index, navObjSize);
        }
    };
    //动态设置滑动宽度
    var orientationChange = function orientationChange() {
        slideW = twCell.clientWidth;
        conBox.style.width = tempSize * slideW + 'px';
        for (var i = 0; i < tempSize; i++) {
            conBox.children[i].style.width = slideW + 'px';
        }
        var ind = effect == 'leftLoop' ? index + 1 : index;
        translate(-ind * slideW, 0);
    };
    window.addEventListener('resize', orientationChange, false);
    //滑动效果
    var translate = function translate(dist, speed, ele) {
        if (!!ele) {
            ele = ele.style;
        } else {
            ele = conBox.style;
        }
        ele.webkitTransitionDuration = ele.MozTransitionDuration = ele.msTransitionDuration = ele.OTransitionDuration = ele.transitionDuration = speed + 'ms';
        ele.webkitTransform = 'translate(' + dist + 'px,0)' + 'translateZ(0)';
        ele.msTransform = ele.MozTransform = ele.OTransform = 'translateX(' + dist + 'px)';
    };
    //效果函数
    var doPlay = function doPlay(isTouch) {
        switch (effect) {
            case 'left':
                if (index >= navObjSize) {
                    index = isTouch ? index - 1 : 0;
                } else if (index < 0) {
                    index = isTouch ? 0 : navObjSize - 1;
                }
                translate(-index * slideW, delayTime);
                oldIndex = index;
                break;
            case 'leftLoop':
                translate(-(index + 1) * slideW, delayTime);
                if (index == -1) {
                    timeout = setTimeout(function () {
                        translate(-navObjSize * slideW, 0);
                    }, delayTime);
                    index = navObjSize - 1;
                } else if (index == navObjSize) {
                    timeout = setTimeout(function () {
                        translate(-slideW, 0);
                    }, delayTime);
                    index = 0;
                }
                oldIndex = index;
                break;

        }
        //预加载
        (function () {
            var nowIndex = effect == 'leftLoop' ? index + 1 : index;
            var allImage = conBox.querySelectorAll(opts.switchLoadClass);
            var changeImagesSrc = function changeImagesSrc(img) {
                if (img) {
                    var imgSwitchSrc = img.getAttribute(opts.switchLoad);
                    if (!imgSwitchSrc) {
                        return false;
                    }
                    if (img.tagName.toLowerCase() == 'img') {
                        img.src = imgSwitchSrc;
                    } else {
                        img.style.backgroundImage = 'url(' + imgSwitchSrc + ')';
                    }
                }
            };
            if (allImage.length > 0) {
                changeImagesSrc(allImage[nowIndex]);
                changeImagesSrc(allImage[nowIndex - 1]);
                changeImagesSrc(allImage[nowIndex + 1]);
            }
        })();
        doStartFun();
        endTimeout = setTimeout(function () {
            doEndFun();
        }, delayTime);
        //给按钮区域的切换每一项加上className
        for (var i = 0; i < navObjSize; i++) {
            removeClass(navObj[i], opts.titOnClassName);
            if (i == index) {
                addClass(navObj[i], opts.titOnClassName);
            }
        }
        /*
         * 给主体区域的切换每一项加上className
         * 注:如果想配合className写css3小效果,建议使用effect属性的left值
         * 否则切换到尾帧和切换到首帧时,视觉上的体验不好
         * */
        // (function () {
        //     var nowJ = effect == "leftLoop" ? index + 1 : index;
        //     for (var j = 0; j < conBox.children.length; j++) {
        //         removeClass(conBox.children[j], opts.titOnClassName);
        //         if (j == nowJ) {
        //             addClass(conBox.children[j], opts.titOnClassName);
        //         }
        //     }
        // })();
        //loop控制是否继续循环
        if (loop == false) {
            removeClass(nextBtn, 'nextStop');
            removeClass(prevBtn, 'prevStop');
            if (index == 0) {
                addClass(prevBtn, 'prevStop');
            } else if (index == navObjSize - 1) {
                addClass(nextBtn, 'nextStop');
            }
        }
        if (pageState) {
            pageState.innerHTML = '<span>' + (index + 1) + '</span>/' + navObjSize;
        }
    };
    //初始化执行
    doPlay();
    //自动播放
    if (autoPlay) {
        inter = setInterval(function () {
            index++;
            doPlay();
        }, interTime);
    }
    //点击事件
    if (navObj) {
        for (var z = 0; z < navObjSize; z++) {
            (function () {
                var j = z;
                navObj[j].addEventListener('click', function () {
                    clearTimeout(timeout);
                    clearTimeout(endTimeout);
                    index = j;
                    doPlay();
                });
            })();
        }
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', function () {
            if (loop == true || index != navObjSize - 1) {
                clearTimeout(timeout);
                clearTimeout(endTimeout);
                index++;
                doPlay();
            }
        });
    }
    if (prevBtn) {
        prevBtn.addEventListener('click', function () {
            if (loop == true || index != 0) {
                clearTimeout(timeout);
                clearTimeout(endTimeout);
                index--;
                doPlay();
            }
        });
    }
    //触摸开始函数
    var tStart = function tStart(e) {
        clearTimeout(timeout);
        clearTimeout(endTimeout);
        scrollY = undefined;
        distX = 0;
        var point = hasTouch ? e.touches[0] : e;
        startX = point.pageX;
        startY = point.pageY;
        //添加“触摸移动”事件监听
        conBox.addEventListener(touchMove, tMove, false);
        //添加“触摸结束”事件监听
        conBox.addEventListener(touchEnd, tEnd, false);
    };
    //触摸移动函数
    var tMove = function tMove(e) {
        if (hasTouch) {
            if (e.touches.length > 1 || e.scale && e.scale !== 1) {
                return;
            }
        }
        //多点或缩放
        var point = hasTouch ? e.touches[0] : e;
        distX = point.pageX - startX;
        distY = point.pageY - startY;
        if (typeof scrollY == 'undefined') {
            scrollY = !!(scrollY || Math.abs(distX) < Math.abs(distY));
        }
        if (!scrollY) {
            e.preventDefault();
            if (autoPlay) {
                clearInterval(inter);
            }
            switch (effect) {
                case 'left':
                    if (index == 0 && distX > 0 || index >= navObjSize - 1 && distX < 0) {
                        distX = distX * 0.4;
                    }
                    translate(-index * slideW + distX, 0);
                    break;
                case 'leftLoop':
                    translate(-(index + 1) * slideW + distX, 0);
                    break;
            }
        }
    };
    //触摸结束函数
    var tEnd = function tEnd(e) {
        if (distX == 0) {
            return;
        }
        e.preventDefault();
        if (!scrollY) {
            if (Math.abs(distX) > slideW / 10) {
                distX > 0 ? index-- : index++;
            }
            doPlay(true);
            if (autoPlay) {
                inter = setInterval(function () {
                    index++;
                    doPlay();
                }, interTime);
            }
        }

        conBox.removeEventListener(touchMove, tMove, false);
        conBox.removeEventListener(touchEnd, tEnd, false);
    };
    //添加“触摸开始”事件监听
    conBox.addEventListener(touchStart, tStart, false);
};

module.exports = TouchSlide;

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tools = __webpack_require__(0); // 工具方法集合
var applications = __webpack_require__(1); // 应用方法集合
var Super = __webpack_require__(2); // 超类型(子类型继承的对象)
// 超类型(子类型继承的对象)
var route = '/phone/';

// 子类型
var Sub = tools.constructorInherit(Super, {
    // 回调
    callback: {},
    // 配置
    config: {},
    // 数据
    data: {
        items: [
            /*
            {
                href: route,
                icon: 'icon-home',
                text: '首页',
                isShowMark: false,
            },
            {
                href: `${route}dev-globals/`,
                icon: 'icon-dev',
                text: '开发全局',
                isShowMark: false,
            },
            {
                href: `${route}dev-components/`,
                icon: 'icon-dev',
                text: '开发组件',
                isShowMark: false,
            },
            {
                href: `${route}dev-words/`,
                icon: 'icon-dev',
                text: '开发词汇',
                isShowMark: false,
            },
            {
                href: `${route}mine/`,
                icon: 'icon-mine',
                text: '我的',
                isShowMark: false,
            },
            */
        ]
    }
});

// 内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    var data = this.opts.data;
    var items = data.items;
    var html = '';
    items.forEach(function (v) {
        var markHtml = '';
        if (v.isShowMark) {
            markHtml = '<div class="g-navigation-mark"></div>';
        }
        html += '\n            <a href="' + v.href + '" class="g-navigation-item">\n                <div class="g-navigation-icon iconfont ' + v.icon + '"></div>\n                <div class="g-navigation-text">' + v.text + '</div>\n                ' + markHtml + '\n            </a>\n        ';
    });
    this.moduleDom = applications.createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-navigation',
            innerHTML: html
        }
    });
};

// 功能(覆盖超类型)
Sub.prototype.power = function () {
    // 功能重写待续...
};

module.exports = Sub;

/***/ })

},[106]);