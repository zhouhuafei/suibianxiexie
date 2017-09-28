webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tools = __webpack_require__(1); // 工具方法集合
var applications = __webpack_require__(0); // 应用方法集合
var SuperType = __webpack_require__(2); // 超类型(子类型继承的对象)

// 子类型
var SubType = tools.constructorInherit({
    superType: SuperType,
    // 默认参数(继承超类型)
    parameter: {
        wrap: '.g-wrap',
        // 回调
        callback: {
            click: function click() {},
            moduleDomRenderBefore: function moduleDomRenderBefore(self) {
                if (self.wrapDom && getComputedStyle(self.wrapDom).position === 'static') {
                    self.wrapDom.style.position = 'relative';
                }
            }
        },
        // 配置
        config: {
            isTransparent: false, // 是不是透明的(默认不透明)
            moduleDomIsShow: false // 内部模块是否显示(默认不显示)
        },
        // 数据
        data: {}
    }
});

// 内部模块的创建(覆盖超类型)
SubType.prototype.moduleDomCreate = function () {
    var isTransparent = '';
    if (this.opts.config.isTransparent) {
        isTransparent = 'g-mask-transparent';
    }
    this.moduleDom = applications.createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-mask ' + isTransparent,
            innerHTML: ''
        }
    });
};

// 功能(覆盖超类型)
SubType.prototype.power = function () {
    var self = this;
    this.moduleDom.addEventListener('click', function (ev) {
        self.opts.callback.click();
        ev.stopPropagation();
    });
};

module.exports = SubType;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tools = __webpack_require__(1); // 工具方法集合
var applications = __webpack_require__(0); // 应用方法集合
var SuperType = __webpack_require__(2); // 超类型(子类型继承的对象)
var TouchSlide = __webpack_require__(6); // 轮播图插件

// 子类型
var SubType = tools.constructorInherit({
    superType: SuperType,
    // 默认参数(继承超类型)
    parameter: {
        // 回调
        callback: {
            startFun: function startFun() {},
            endFun: function endFun() {}
        },
        // 配置
        config: {
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
    }
});

// 内部模块的创建(覆盖超类型)
SubType.prototype.moduleDomCreate = function () {
    this.moduleDom = applications.createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-slide',
            innerHTML: '\n                ' + this.renderHeader() + '\n                ' + this.renderBody() + '\n            '
        }
    });
};

SubType.prototype.renderHeader = function () {
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

SubType.prototype.renderBody = function () {
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
SubType.prototype.power = function () {
    var self = this;
    var callback = self.opts.callback;
    var config = self.opts.config;
    var touchSlide = config.touchSlide;
    touchSlide.slideCell = self.opts.wrap; // 外部容器,必须是id
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

module.exports = SubType;

/***/ }),
/* 6 */
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

var TouchSlide = function TouchSlide(a) {
    a = a || {};
    var opts = {
        slideCell: a.slideCell || "#touchSlide", //运行效果主对象，必须用id！，例如 slideCell:"#touchSlide"
        titCell: a.titCell || ".hd li", // 导航对象，当自动分页设为true时为“导航对象包裹层”
        mainCell: a.mainCell || ".bd", // 切换对象包裹层
        effect: a.effect || "left", // 效果，支持 left、leftLoop
        autoPlay: a.autoPlay || false, // 自动播放
        delayTime: a.delayTime || 200, // 效果持续时间
        interTime: a.interTime || 2500, // 自动运行间隔
        defaultIndex: a.defaultIndex || 0, // 默认的当前位置索引。0是第一个； defaultIndex:1 时，相当于从第2个开始执行
        titOnClassName: a.titOnClassName || "on", // 当前导航对象添加的className
        autoPage: a.autoPage || false, // 自动分页，当为true时titCell为“导航对象包裹层”
        prevCell: a.prevCell || ".prev", // 前一页按钮
        nextCell: a.nextCell || ".next", // 后一页按钮
        pageStateCell: a.pageStateCell || ".pageState", // 分页状态对象，用于显示分页状态，例如：2/3
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
        str = str.split(" ");
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
                        if (par[i][0] == "#") {
                            _retn.push(document.getElementById(par[i].replace("#", "")));
                        } else if (par[i][0] == ".") {
                            var tag = retn[r].getElementsByTagName('*');
                            for (var j = 0; j < tag.length; j++) {
                                var cln = tag[j].className;
                                if (cln && cln.search && cln.search(new RegExp("\\b" + par[i].replace(".", "") + "\\b")) != -1) {
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
        if (!ele || !className || ele.className && ele.className.search(new RegExp("\\b" + className + "\\b")) != -1) {
            return;
        }
        ele.className += (ele.className ? " " : "") + className;
    };
    var removeClass = function removeClass(ele, className) {
        if (!ele || !className || ele.className && ele.className.search(new RegExp("\\b" + className + "\\b")) == -1) {
            return;
        }
        ele.className = ele.className.replace(new RegExp("\\s*\\b" + className + "\\b", "g"), "");
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
    var autoPlay = !(opts.autoPlay == "false" || opts.autoPlay == false);
    var autoPage = !(opts.autoPage == "false" || opts.autoPage == false);
    var loop = !(opts.pnLoop == "false" || opts.pnLoop == false);
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
        navObj.innerHTML = "";
        var str = "";

        if (opts.autoPage == true || opts.autoPage == "true") {
            for (var i = 0; i < navObjSize; i++) {
                str += "<li>" + (i + 1) + "</li>";
            }
        } else {
            for (var x = 0; x < navObjSize; x++) {
                str += opts.autoPage.replace("$", x + 1);
            }
        }
        navObj.innerHTML = str;
        navObj = navObj.children; //重置navObj
    }
    if (effect == "leftLoop") {
        tempSize += 2;
        conBox.appendChild(conBox.children[0].cloneNode(true));
        conBox.insertBefore(conBox.children[conBoxSize - 1].cloneNode(true), conBox.children[0]);
    }
    twCell = wrap(conBox, '<div class="tempWrap" style="height:inherit;overflow:hidden; position:relative;"></div>');
    conBox.style.cssText = "display:flex;width:" + tempSize * slideW + "px;" + "position:relative;overflow:hidden;padding:0;margin:0;";
    for (var y = 0; y < tempSize; y++) {
        conBox.children[y].style.cssText = "height:inherit;display:flex;align-items: center;justify-content: center;width:" + slideW + "px";
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
        conBox.style.width = tempSize * slideW + "px";
        for (var i = 0; i < tempSize; i++) {
            conBox.children[i].style.width = slideW + "px";
        }
        var ind = effect == "leftLoop" ? index + 1 : index;
        translate(-ind * slideW, 0);
    };
    window.addEventListener("resize", orientationChange, false);
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
            case "left":
                if (index >= navObjSize) {
                    index = isTouch ? index - 1 : 0;
                } else if (index < 0) {
                    index = isTouch ? 0 : navObjSize - 1;
                }
                translate(-index * slideW, delayTime);
                oldIndex = index;
                break;
            case "leftLoop":
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
            var nowIndex = effect == "leftLoop" ? index + 1 : index;
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
                        img.style.backgroundImage = "url(" + imgSwitchSrc + ")";
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
            removeClass(nextBtn, "nextStop");
            removeClass(prevBtn, "prevStop");
            if (index == 0) {
                addClass(prevBtn, "prevStop");
            } else if (index == navObjSize - 1) {
                addClass(nextBtn, "nextStop");
            }
        }
        if (pageState) {
            pageState.innerHTML = "<span>" + (index + 1) + "</span>/" + navObjSize;
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
                case "left":
                    if (index == 0 && distX > 0 || index >= navObjSize - 1 && distX < 0) {
                        distX = distX * 0.4;
                    }
                    translate(-index * slideW + distX, 0);
                    break;
                case "leftLoop":
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tools = __webpack_require__(1); // 工具方法集合
var applications = __webpack_require__(0); // 应用方法集合
var SuperType = __webpack_require__(2);
// 超类型(子类型继承的对象)
var route = '/phone/';

// 子类型
var SubType = tools.constructorInherit({
    superType: SuperType,
    // 默认参数(继承超类型)
    parameter: {
        // 回调
        callback: {},
        // 配置
        config: {},
        // 数据
        data: {
            items: [{
                href: route,
                icon: 'icon-shouye',
                text: '首页',
                isShowMark: false
            }, {
                href: route + 'dev-globals/',
                icon: 'icon-kaifa',
                text: '开发全局',
                isShowMark: false
            }, {
                href: route + 'dev-components/',
                icon: 'icon-kaifa',
                text: '开发组件',
                isShowMark: false
            }, {
                href: route + 'dev-words/',
                icon: 'icon-kaifa',
                text: '标准词汇',
                isShowMark: false
            }, {
                href: route + 'mine/',
                icon: 'icon-wode',
                text: '我的',
                isShowMark: false
            }]
        }
    }
});

// 内部模块的创建(覆盖超类型)
SubType.prototype.moduleDomCreate = function () {
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
SubType.prototype.power = function () {
    // 功能重写待续...
};

module.exports = SubType;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tools = __webpack_require__(1); // 工具方法集合
var applications = __webpack_require__(0); // 应用方法集合
var SuperType = __webpack_require__(2); // 超类型(子类型继承的对象)
var Mask = __webpack_require__(4); // 遮罩

// 子类型
var SubType = tools.constructorInherit({
    superType: SuperType,
    // 默认参数(继承超类型)
    parameter: {
        // 回调
        callback: {
            moduleDomRenderBefore: function moduleDomRenderBefore(self) {
                if (self.opts.config.type === 'confirm') {
                    if (self.opts.config.confirm.isShowMask) {
                        self.mask = new Mask({
                            config: {
                                moduleDomIsShow: true,
                                moduleDomRenderMethod: { method: 'insertBefore' }
                            }
                        });
                    }
                    if (self.wrapDom && getComputedStyle(self.wrapDom).position === 'static') {
                        self.wrapDom.style.position = 'relative';
                    }
                }
            },
            // 确认
            confirm: function confirm() {},
            // 取消
            cancel: function cancel() {},
            // 关闭
            close: function close() {}
        },
        // 配置
        config: {
            /*
             * 弹窗类型
             * `alert`  提示信息类型
             * `confirm`    确认框类型
             * */
            type: 'alert', // 默认是提示框
            /*
             * 弹窗位置
             * `center` 居中
             * `bottom` 居下
             * `top` 居上
             * */
            positionLocation: 'center', // 弹窗的定位位置    positionMethod定位方式强制fixed
            // 提示框
            alert: {
                timer: null, // 定时器装载
                time: 3000, // 展示的时间
                isShowIcon: false, // 是否显示icon
                isShowClose: true, // 是否显示关闭按钮
                icon: 'icon-chenggong', // icon的class
                content: '成功' // 内容信息
            },
            // 确认框
            confirm: {
                // 点击确认是否关闭弹窗
                isShowHeader: true, // 是否显示头部
                headerContent: '提示:', // 头部内容
                isShowBody: true, // 是否显示主体
                bodyContent: '<div>确定要执行这个操作?</div>', // 主体内容
                isShowFooter: true, // 是否显示尾部
                footerContent: '', // 尾部内容
                isShowClose: true, // 是否显示关闭按钮
                closeContent: '<div class="iconfont icon-guanbi"></div>', // 关闭按钮的内容
                isShowConfirm: true, // 是否显示确认按钮
                confirmContent: '确认', // 确认按钮的内容
                isShowCancel: true, // 是否显示取消按钮
                cancelContent: '取消', // 取消按钮的内容
                isCustom: false, // 是否自定义
                customContent: '', // 自定义的内容
                isShowIcon: false, // 是否显示icon
                icon: 'icon-jinggao', // icon的类型
                isShowMask: true, // 是否显示遮罩
                isHandHide: false // 是否手动隐藏(一般只用于点击确认时)
            }
        },
        // 数据
        data: {}
    }
});

// 内部模块的创建(覆盖超类型)
SubType.prototype.moduleDomCreate = function () {
    var config = this.opts.config;
    var type = 'g-dialog-' + config.type; // 弹窗类型
    var positionLocation = 'g-dialog-' + config.positionLocation; // 弹窗的定位位置
    // 弹窗结构
    var html = '\n        ' + this.renderAlert() + '\n        ' + this.renderConfirm() + '\n    ';
    this.moduleDom = applications.createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-dialog ' + type + ' ' + positionLocation,
            innerHTML: html
        }
    });
};

// 提示框
SubType.prototype.renderAlert = function () {
    var config = this.opts.config;
    if (config.type !== 'alert') {
        return '';
    }
    var alert = config.alert;
    var htmlIcon = '';
    if (alert.isShowIcon) {
        htmlIcon = '<div class="g-dialog-alert-icon iconfont ' + alert.icon + '"></div>';
    }
    var closeHtml = '';
    if (alert.isShowClose) {
        closeHtml = '<div class="g-dialog-alert-close iconfont icon-guanbi" ></div>';
    }
    return '\n        ' + closeHtml + '\n        ' + htmlIcon + '\n        <div class="g-dialog-alert-text">' + alert.content + '</div>\n    ';
};

// 确认框
SubType.prototype.renderConfirm = function () {
    var config = this.opts.config;
    if (config.type !== 'confirm') {
        return '';
    }
    var confirm = config.confirm;
    var htmlHeader = '';
    if (confirm.isShowHeader) {
        htmlHeader = '<div class="g-dialog-confirm-header">' + confirm.headerContent + '</div>';
    }
    var htmlBody = '';
    if (confirm.isShowBody) {
        var htmlIcon = '';
        if (confirm.isShowIcon) {
            htmlIcon = '<div class="g-dialog-confirm-body-system-icon iconfont ' + confirm.icon + '"></div>';
        }
        var bodyClass = 'g-dialog-confirm-body-system';
        var bodyContent = '\n            ' + htmlIcon + '\n            <div class="g-dialog-confirm-body-system-text">' + confirm.bodyContent + '</div>\n        ';
        if (confirm.isCustom) {
            bodyClass = 'g-dialog-confirm-body-custom';
            bodyContent = confirm.bodyContent;
        }
        htmlBody = '\n            <div class="g-dialog-confirm-body">\n                <div class="' + bodyClass + '">\n                    ' + bodyContent + '\n                </div>\n            </div>\n        ';
    }
    var htmlFooter = '';
    if (confirm.isShowFooter) {
        var htmlCancel = '';
        if (confirm.isShowCancel) {
            htmlCancel = '<div class="g-button g-button-cancel g-dialog-confirm-footer-cancel">' + confirm.cancelContent + '</div>';
        }
        var htmlConfirm = '';
        if (confirm.isShowConfirm) {
            htmlConfirm = '<div class="g-button g-dialog-confirm-footer-confirm">' + confirm.confirmContent + '</div>';
        }
        htmlFooter = '<div class="g-dialog-confirm-footer">' + htmlCancel + htmlConfirm + '</div>';
    }
    var htmlClose = '';
    if (confirm.isShowClose) {
        htmlClose = '<div class="g-dialog-confirm-close">' + confirm.closeContent + '</div>';
    }
    return '\n        ' + htmlHeader + '\n        ' + htmlBody + '\n        ' + htmlFooter + '\n        ' + htmlClose + ' \n    ';
};

// 功能(覆盖超类型)
SubType.prototype.power = function () {
    var self = this;
    var config = this.opts.config;
    // 提示框
    if (config.type === 'alert') {
        var close = this.moduleDom.querySelector('.g-dialog-alert-close');
        config.alert.timer = setTimeout(function () {
            self.hide();
        }, config.alert.time);
        close.addEventListener('click', function () {
            clearTimeout(config.alert.timer);
            self.hide();
        });
    }
    // 确认框
    if (config.type === 'confirm') {
        var _close = this.moduleDom.querySelector('.g-dialog-confirm-close');
        if (_close) {
            _close.addEventListener('click', function () {
                self.hide();
                self.opts.callback.close();
            });
        }
        var cancel = this.moduleDom.querySelector('.g-dialog-confirm-footer-cancel');
        if (cancel) {
            cancel.addEventListener('click', function () {
                self.hide();
                self.opts.callback.cancel();
            });
        }
        var confirm = this.moduleDom.querySelector('.g-dialog-confirm-footer-confirm');
        if (confirm) {
            confirm.addEventListener('click', function () {
                if (!self.opts.config.confirm.isHandHide) {
                    self.hide();
                }
                self.opts.callback.confirm();
            });
        }
    }
};

SubType.prototype.hide = function () {
    this.moduleDomHide();
    if (this.mask) {
        this.mask.moduleDomHide();
    }
};

module.exports = SubType;

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tools = __webpack_require__(1); // 工具方法集合
var applications = __webpack_require__(0); // 应用方法集合
var SuperType = __webpack_require__(2); // 超类型(子类型继承的对象)

// 子类型
var SubType = tools.constructorInherit({
    superType: SuperType,
    // 默认参数(继承超类型)
    parameter: {
        // 回调
        callback: {},
        // 配置
        config: {
            // isShowMask: false,  //是否显示遮罩(默认不显示)
            status: 'loading', // 加载状态 loading(加载中) over(加载完毕)
            positionMethod: '', // 模块的定位方式 'fixed'(相对于整个文档) 'absolute'(相对于外部容器)
            positionLocation: 'center', // 模块的定位位置
            moduleDomIsShow: false // 内部模块是否显示(默认不显示)
        },
        // 数据
        data: {}
    }
});

// 内部模块的创建(覆盖超类型)
SubType.prototype.moduleDomCreate = function () {
    var config = this.opts.config;
    var moduleDomHtml = '';
    var moduleDomClass = '';
    var status = config.status;
    var positionMethod = config.positionMethod;
    var positionLocation = config.positionLocation;
    // 加载中
    if (status === 'loading') {
        moduleDomClass = 'g-loading-loading ';
        // 相对文档居中
        if (positionMethod === 'fixed') {
            moduleDomClass += 'g-loading-fixed g-loading-' + positionLocation;
        }
        // 相对容器居中
        if (positionMethod === 'absolute') {
            moduleDomClass += 'g-loading-absolute g-loading-' + positionLocation;
        }
        moduleDomHtml = '\n            <div class="g-loading-wrap">\n                <div class="g-loading-loading-icon iconfont icon-jiazaizhong"></div>\n            </div>\n        ';
    }
    // 加载完毕
    if (status === 'over') {
        moduleDomClass = 'g-loading-over ';
        // 相对文档居中
        if (positionMethod === 'fixed') {
            moduleDomClass += 'g-loading-fixed g-loading-' + positionLocation;
        }
        // 相对容器居中
        if (positionMethod === 'absolute') {
            moduleDomClass += 'g-loading-absolute g-loading-' + positionLocation;
        }
        moduleDomHtml = '\n            <div class="g-loading-wrap">\n                <div class="g-loading-over-icon iconfont icon-meiyoushuju"></div>\n                <div class="g-loading-over-text">\u6CA1\u6709\u6570\u636E\u4E86</div>\n            </div>\n        ';
    }
    // 模块创建
    this.moduleDom = applications.createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-loading ' + moduleDomClass,
            innerHTML: moduleDomHtml
        }
    });
};

// 功能(覆盖超类型)
SubType.prototype.power = function () {
    // 功能重写待续...
};

module.exports = SubType;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var tools = __webpack_require__(1); // 工具方法集合
var applications = __webpack_require__(0); // 应用方法集合

// 底层构造函数

var SuperType = function () {
    function SuperType(json) {
        _classCallCheck(this, SuperType);

        // 函数外部传来的参数
        // (这个属性在其他模块的内部需要被重写)
        this.opts = tools.extend({
            // 内部默认参数
            defaults: {
                // 父级
                wrap: '.g-body', // 这个仅支持传入选择器和原生dom节点
                // 回调
                callback: {
                    // 内部模块创建之前
                    moduleDomCreateBefore: function moduleDomCreateBefore(self) {
                        // 内部模块创建之前的回调待续...
                    },
                    // 内部模块创建之后
                    moduleDomCreateAfter: function moduleDomCreateAfter(self) {
                        // 内部模块创建之后的回调待续...
                    },
                    // 内部模块渲染之前
                    moduleDomRenderBefore: function moduleDomRenderBefore(self) {
                        // 内部模块渲染之前的回调待续...
                    },
                    // 内部模块渲染之后
                    moduleDomRenderAfter: function moduleDomRenderAfter(self) {
                        // 内部模块渲染之后的回调待续...
                    },
                    // 内部模块移除之前
                    moduleDomRemoveBefore: function moduleDomRemoveBefore(self) {
                        // 内部模块移除之前的回调待续...
                    },
                    // 内部模块移除之后
                    moduleDomRemoveAfter: function moduleDomRemoveAfter(self) {
                        // 内部模块移除之后的回调待续...
                    },
                    // 内部模块显示之前
                    moduleDomShowBefore: function moduleDomShowBefore(self) {
                        // 内部模块显示之前的回调待续...
                    },
                    // 内部模块显示之后
                    moduleDomShowAfter: function moduleDomShowAfter(self) {
                        // 内部模块显示之后的回调待续...
                    },
                    // 内部模块隐藏之前
                    moduleDomHideBefore: function moduleDomHideBefore(self) {
                        // 内部模块隐藏之前的回调待续...
                    },
                    // 内部模块隐藏之后
                    moduleDomHideAfter: function moduleDomHideAfter(self) {
                        // 内部模块隐藏之后的回调待续...
                    },
                    // 外部容器获取之前
                    wrapDomGetBefore: function wrapDomGetBefore(self) {
                        // 外部容器获取之前的回调待续...
                    },
                    // 外部容器获取之后
                    wrapDomGetAfter: function wrapDomGetAfter(self) {
                        // 外部容器获取之后的回调待续...
                    },
                    // 外部容器移除之前
                    wrapDomRemoveBefore: function wrapDomRemoveBefore(self) {
                        // 外部容器移除之前的回调待续...
                    },
                    // 外部容器移除之后
                    wrapDomRemoveAfter: function wrapDomRemoveAfter(self) {
                        // 外部容器移除之后的回调待续...
                    }
                },
                // 配置
                config: {
                    // 内部模块的自定义属性
                    moduleDomCustomAttribute: {},
                    // 内部模块插入到外部容器的方式
                    moduleDomRenderMethod: {
                        method: 'appendChild', // 'appendChild','insertBefore'
                        child: null
                    },
                    moduleDomStyle: {}, // 内部模块的样式
                    moduleDomIsShow: true, // 内部模块是否显示(默认显示)
                    moduleDomIsClearTimer: true // 内部模块是否清除所有定时器(默认清除)
                },
                // 数据
                data: {}
            },
            // 外部传入参数
            inherits: json
        });
        // 函数内部自带的属性
        this.moduleDom = null; // 内部的模块
        this.wrapDom = null; // 内部模块的外部承载容器,如果没有也没关系,不过不往里面append罢了
        this.moduleDomTimer = {}; // 内部模块的定时器存储(假设内部模块有定时器)
        // this.init();//初始化(用es6继承的话,在超类里调初始化没有意义,因为子类的参数还没有被赋予新值,建议不要在超类里初始化,在子类里初始化)
    }

    // 初始化


    _createClass(SuperType, [{
        key: 'init',
        value: function init() {
            this.render();
            this.power();
        }

        // 渲染

    }, {
        key: 'render',
        value: function render() {
            this.moduleDomRemove(); // 内部模块的移除(重新初始化的时候要移除掉以前有的内部模块)

            var callback = this.opts.callback;
            callback.moduleDomCreateBefore(this);
            this.moduleDomCreate(); // 内部模块的创建
            callback.moduleDomCreateAfter(this);

            this.wrapDomGet(); // 外部容器的获取
            this.moduleDomRender(); // 内部模块的渲染(如果外部容器存在,就把内部模块填充到外部容器里)
        }

        // 功能(这个方法在其他模块的内部需要被重写)

    }, {
        key: 'power',
        value: function power() {}
        // 功能待续...


        // 内部模块的创建(这个方法在其他模块的内部需要被重写)

    }, {
        key: 'moduleDomCreate',
        value: function moduleDomCreate() {
            this.moduleDom = applications.createElement({
                style: this.opts.config.moduleDomStyle,
                customAttribute: this.opts.config.moduleDomCustomAttribute,
                attribute: {
                    className: 'g-super-type-es6',
                    innerHTML: '\n                    <div class="g-super-type-es6-text">\u5468\u534E\u98DE\u7231\u4FAF\u4E3D\u6770,\u4FAF\u4E3D\u6770\u7231\u5468\u534E\u98DE</div>\n                '
                }
            });
        }

        // 内部模块的渲染

    }, {
        key: 'moduleDomRender',
        value: function moduleDomRender() {
            var callback = this.opts.callback;
            var config = this.opts.config;
            if (config.moduleDomIsShow && this.wrapDom) {
                callback.moduleDomRenderBefore(this);
                var renderMethod = config.moduleDomRenderMethod;
                if (renderMethod.method === 'insertBefore') {
                    var dom = applications.getDomArray(renderMethod.child)[0];
                    if (dom) {
                        this.wrapDom.insertBefore(this.moduleDom, dom);
                    } else {
                        this.wrapDom.insertBefore(this.moduleDom, this.wrapDom.children[0]);
                    }
                }
                if (renderMethod.method === 'appendChild') {
                    this.wrapDom.appendChild(this.moduleDom);
                }
                callback.moduleDomRenderAfter(this);
            }
        }

        // 内部模块的移除

    }, {
        key: 'moduleDomRemove',
        value: function moduleDomRemove() {
            var callback = this.opts.callback;
            if (this.moduleDom && this.moduleDom.parentNode) {
                callback.moduleDomRemoveBefore(this);
                this.moduleDom.parentNode.removeChild(this.moduleDom);
                callback.moduleDomRemoveAfter(this);
            }
            this.moduleDomClearTimer();
        }

        // 内部模块的定时器清除(假设内部模块有定时器)

    }, {
        key: 'moduleDomClearTimer',
        value: function moduleDomClearTimer() {
            var self = this;
            if (self.opts.config.moduleDomIsClearTimer) {
                Object.keys(self.moduleDomTimer).forEach(function (attr) {
                    clearInterval(self.moduleDomTimer[attr]);
                    clearTimeout(self.moduleDomTimer[attr]);
                });
            }
        }

        // 内部模块的显示(显示隐藏和是否清除定时器无关)

    }, {
        key: 'moduleDomShow',
        value: function moduleDomShow() {
            var callback = this.opts.callback;
            callback.moduleDomShowBefore(this);
            if (this.wrapDom) {
                this.opts.config.moduleDomIsShow = true;
                this.moduleDomRender();
            }
            callback.moduleDomShowAfter(this);
        }

        // 内部模块的隐藏(显示隐藏和是否清除定时器无关)

    }, {
        key: 'moduleDomHide',
        value: function moduleDomHide() {
            var callback = this.opts.callback;
            if (this.moduleDom.parentNode) {
                this.opts.config.moduleDomIsShow = false;
                callback.moduleDomHideBefore(this);
                this.moduleDom.parentNode.removeChild(this.moduleDom);
                callback.moduleDomHideAfter(this);
            }
        }

        // 外部容器的获取

    }, {
        key: 'wrapDomGet',
        value: function wrapDomGet() {
            var callback = this.opts.callback;
            callback.wrapDomGetBefore(this);
            this.wrapDom = applications.getDomArray(this.opts.wrap)[0];
            callback.wrapDomGetAfter(this);
        }

        // 外部容器的移除

    }, {
        key: 'wrapDomRemove',
        value: function wrapDomRemove() {
            var callback = this.opts.callback;
            // 先移除内部的模块
            this.moduleDomRemove();
            // 再移除外部的容器
            if (this.wrapDom) {
                callback.wrapDomRemoveBefore(this);
                this.wrapDom.parentNode.removeChild(this.wrapDom);
                callback.wrapDomRemoveAfter(this);
            }
        }

        // 获取内部模块的整体html结构

    }, {
        key: 'getModuleDomHtml',
        value: function getModuleDomHtml() {
            return this.moduleDom.outerHTML;
        }
    }]);

    return SuperType;
}();

module.exports = SuperType;

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.addEventListener('load', function () {
    setTimeout(function () {
        var applications = __webpack_require__(0);

        // ajax测试
        (function () {
            // const Ajax = require('../api/ajax');
            // new Ajax({
            //     callback: {},
            //     config: {
            //         url: '/api/getList',
            //     },
            //     data: {
            //         hellow: 'hellow',
            //     },
            // });
        })();

        // base函数测试
        (function () {
            var WhenScrollBottom = applications.whenScrollBottom();
            // 测试滚动到底部loading
            new WhenScrollBottom({
                callback: {
                    success: function success(self) {
                        var Loading = __webpack_require__(10);
                        var loading = new Loading({
                            wrap: '.g-body',
                            config: {
                                status: 'loading'
                            }
                        });
                        loading.moduleDomShow();
                    }
                }
            });
        })();

        // slide切换
        (function () {
            var Slide = __webpack_require__(5);
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
            var Navigation = __webpack_require__(7);
            new Navigation({ wrap: '.page-navigation' });
        })();

        // 弹窗测试
        (function () {
            var Dialog = __webpack_require__(8);
            /*
            new Dialog({
                callback: {
                    confirm: function () {
                        new Dialog({config: {alert: {icon: 'icon-chenggong', content: '已确认'}}});
                    },
                    cancel: function () {
                        new Dialog({config: {alert: {icon: 'icon-chenggong', content: '已取消'}}});
                    },
                    close: function () {
                        new Dialog({config: {alert: {icon: 'icon-chenggong', content: '已关闭'}}});
                    },
                },
                config: {
                    type: 'confirm',
                },
            });
            */
        })();

        // 分页测试
        (function () {
            var Pagination = __webpack_require__(14);
            new Pagination({ wrap: '.page-pagination' });
        })();

        // 没有数据
        (function () {
            var NoData = __webpack_require__(15);
            new NoData({ wrap: '.page-no-data' });
        })();

        // 加载中
        (function () {
            var Loading = __webpack_require__(10);
            var loading = new Loading({
                config: {
                    status: 'loading'
                }
            });
            loading.moduleDomShow();
            var over = new Loading({
                config: {
                    status: 'over'
                }
            });
            over.moduleDomShow();
        })();

        // 超类型模块测试
        (function () {
            var SuperType = __webpack_require__(2);
            new SuperType({ wrap: '.page-super-type' });
            var SubType = __webpack_require__(16);
            new SubType({ wrap: '.page-super-type' });
            var SuperTypeEs6 = __webpack_require__(11);
            new SuperTypeEs6({ wrap: '.page-super-type' }).init(); // es6继承,不建立在超类型内部直接调init方法
            var SubTypeEs6 = __webpack_require__(17);
            new SubTypeEs6({ wrap: '.page-super-type' });
        })();

        // 遮罩
        (function () {
            var Mask = __webpack_require__(4);
            var mask = new Mask({
                callback: {
                    click: function click() {
                        mask.moduleDomHide();
                    }
                }
            });
            // mask.moduleDomShow();
        })();

        // 单选开关
        (function () {
            var Radio = __webpack_require__(18);
            new Radio({
                wrap: '.page-radio-switch',
                callback: {
                    click: function click(json) {
                        console.log(json);
                    }
                }
            });
        })();

        // 表格
        (function () {
            var Table = __webpack_require__(19);
            var table = new Table({
                wrap: '.page-table',
                data: {
                    header: [{
                        content: '<div>header0</div>'
                    }, {
                        content: '<div>header1</div>'
                    }, {
                        content: '<div>header2</div>'
                    }],
                    body: [[{
                        content: '<div>body0-0</div>'
                    }, {
                        content: '<div>body1-0</div>'
                    }, {
                        content: '<div>body2-0</div>'
                    }], [{
                        content: '<div>body0-1</div>'
                    }, {
                        content: '<div>body1-1</div>'
                    }, {
                        content: '<div>body2-1</div>'
                    }], [{
                        content: '<div>body0-2</div>'
                    }, {
                        content: '<div>body1-2</div>'
                    }, {
                        content: '<div>body2-2</div>'
                    }]],
                    footer: ''
                }
            });
        })();

        // 星评
        (function () {
            // const Star = require('../components/g-star');
            // const star = new Star({
            //     wrap: `.page-star`,
            //     callback: {
            //         click: function (json) {
            //             console.log(json);
            //         }
            //     }
            // });
            __webpack_require__.e/* require.ensure */(0).then((function (require) {
                var Star = __webpack_require__(56);
                var star = new Star({
                    wrap: '.page-star',
                    callback: {
                        click: function click(json) {
                            console.log(json);
                        }
                    }
                });
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
        })();

        __webpack_require__(20); // 当前页面用到的样式
        var common = __webpack_require__(3); // 每个页面都要用到的js(一定要放到最底部)
    }, 0);
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tools = __webpack_require__(1); // 工具方法集合
var applications = __webpack_require__(0); // 应用方法集合
var SuperType = __webpack_require__(2); // 超类型(子类型继承的对象)

// 默认数据
var defaultData = {
    nowCount: 10, // 当前页的数据条数
    allCount: 100, // 数据总条数
    nowPage: 1, // 当前页
    allPage: null // 总页数
};
defaultData.allPage = Math.ceil(defaultData.allCount / defaultData.nowCount);

// 子类型
var SubType = tools.constructorInherit({
    superType: SuperType,
    // 默认参数(继承超类型)
    parameter: {
        // 回调
        callback: {
            // 上一页的回调
            prevPage: function prevPage() {},
            // 下一页的回调
            nextPage: function nextPage() {},
            // 选择某一页的回调
            selectPage: function selectPage() {}
        },
        // 配置
        config: {},
        // 数据
        data: defaultData
    }
});

// 内部模块的创建(覆盖超类型)
SubType.prototype.moduleDomCreate = function () {
    this.moduleDom = applications.createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-pagination',
            innerHTML: '\n                <div class="g-pagination-text">\u7B2C</div>\n                <div class="g-pagination-now-page">\n                    <label class="g-select">\n                        <span class="g-select-wrap">\n                            <select class="g-select-select">\n                                ' + this.renderOption() + '\n                            </select>\n                            <span class="g-select-mark iconfont icon-select"></span>\n                        </span>\n                    </label>\n                </div>\n                <div class="g-pagination-text">\u9875</div>\n                <a href="javascript:;" class="g-pagination-btn g-pagination-btn-inactive iconfont icon-shangyiye"></a>\n                <a href="javascript:;" class="g-pagination-btn iconfont icon-xiayiye"></a>\n            '
        }
    });
    this.prevDom = this.moduleDom.querySelectorAll('.g-pagination-btn')[0]; // 上一页的按钮
    this.nextDom = this.moduleDom.querySelectorAll('.g-pagination-btn')[1]; // 下一页的按钮
    this.btnInactiveClass = 'g-pagination-btn-inactive'; // 上一页和下一页的禁用状态
    this.selectDom = this.moduleDom.querySelector('.g-pagination-now-page .g-select-select'); // 选择某一页的按钮
};

// 渲染第几页里面的页码
SubType.prototype.renderOption = function () {
    var html = '';
    for (var i = 0; i < this.opts.data.allPage; i++) {
        html += '<option value="' + (i + 1) + '">' + (i + 1) + '</option>';
    }
    return html;
};

// 功能(覆盖超类型)
SubType.prototype.power = function () {
    var self = this;
    var data = this.opts.data;
    if (data.nowPage === 1) {
        this.prevPageDisable();
    }
    if (data.nowPage === data.allPage) {
        this.nextPageDisable();
    }

    this.prevDom.addEventListener('click', function () {
        if (!this.classList.contains(self.btnInactiveClass)) {
            self.prevPage();
        }
    });

    this.nextDom.addEventListener('click', function () {
        if (!this.classList.contains(self.btnInactiveClass)) {
            self.nextPage();
        }
    });

    this.selectDom.addEventListener('change', function () {
        self.selectPage();
    });
};

// 上一页
SubType.prototype.prevPage = function () {
    var data = this.opts.data;
    if (data.nowPage > 1) {
        data.nowPage--;
        var oldChecked = this.selectDom.querySelector('option:checked');
        if (oldChecked.previousElementSibling) {
            oldChecked.selected = false;
            oldChecked.previousElementSibling.selected = true;
        }
        this.nextPageEnable();
        this.opts.callback.prevPage(this);
    }
    if (data.nowPage === 1) {
        this.prevPageDisable();
    }
    console.log(data);
};

// 下一页
SubType.prototype.nextPage = function () {
    var data = this.opts.data;
    if (data.nowPage < data.allPage) {
        data.nowPage++;
        var oldChecked = this.selectDom.querySelector('option:checked');
        if (oldChecked.nextElementSibling) {
            oldChecked.selected = false;
            oldChecked.nextElementSibling.selected = true;
        }
        this.prevPageEnable();
        this.opts.callback.nextPage(this);
    }
    if (data.nowPage === data.allPage) {
        this.nextPageDisable();
    }
    console.log(data);
};

// 选择第几页
SubType.prototype.selectPage = function () {
    var data = this.opts.data;
    data.nowPage = this.selectDom.value;
    this.nextPageEnable();
    this.prevPageEnable();
    if (data.nowPage === 1) {
        this.prevPageDisable();
    }
    if (data.nowPage === data.allPage) {
        this.nextPageDisable();
    }
    this.opts.callback.selectPage(this);
    console.log(data);
};

// 上一页禁用
SubType.prototype.prevPageDisable = function () {
    this.prevDom.classList.add(this.btnInactiveClass);
};

// 上一页启用
SubType.prototype.prevPageEnable = function () {
    this.prevDom.classList.remove(this.btnInactiveClass);
};

// 下一页禁用
SubType.prototype.nextPageDisable = function () {
    this.nextDom.classList.add(this.btnInactiveClass);
};

// 下一页启用
SubType.prototype.nextPageEnable = function () {
    this.nextDom.classList.remove(this.btnInactiveClass);
};

module.exports = SubType;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tools = __webpack_require__(1); // 工具方法集合
var applications = __webpack_require__(0); // 应用方法集合
var SuperType = __webpack_require__(2); // 超类型(子类型继承的对象)

// 子类型
var SubType = tools.constructorInherit({
    superType: SuperType,
    // 默认参数(继承超类型)
    parameter: {
        // 回调
        callback: {},
        // 配置
        config: {
            button: {
                isShowIcon: false
            }
        },
        // 数据
        data: {
            icon: 'icon-meiyoushuju',
            text: '没有数据',
            button: {
                icon: 'icon-shouye',
                text: '回首页',
                href: '/'
            }
        }
    }
});

// 内部模块的创建(覆盖超类型)
SubType.prototype.moduleDomCreate = function () {
    var data = this.opts.data;
    var buttonIconHtml = '';
    if (this.opts.config.button.isShowIcon) {
        buttonIconHtml = '<div class="g-button-icon iconfont ' + data.button.icon + '"></div>';
    }
    this.moduleDom = applications.createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-no-data',
            innerHTML: '\n                <div class="g-no-data-icon iconfont ' + data.icon + '"></div>\n                <div class="g-no-data-text">' + data.text + '</div>\n                <a class="g-no-data-button g-button" href="' + data.button.href + '">\n                    ' + buttonIconHtml + '\n                    <div class="g-button-text">' + data.button.text + '</div>\n                </a>\n            '
        }
    });
};

// 功能(覆盖超类型)
SubType.prototype.power = function () {
    // 功能重写待续...
};

module.exports = SubType;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tools = __webpack_require__(1); // 工具方法集合
var applications = __webpack_require__(0); // 应用方法集合
var SuperType = __webpack_require__(2); // 超类型(子类型继承的对象)

// 子类型
var SubType = tools.constructorInherit({
    superType: SuperType,
    // 默认参数(继承超类型)
    parameter: {
        // 回调
        callback: {},
        // 配置
        config: {},
        // 数据
        data: {}
    }
});

// 内部模块的创建(覆盖超类型)
SubType.prototype.moduleDomCreate = function () {
    this.moduleDom = applications.createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-sub-type',
            innerHTML: '\n                <div class="g-sub-type-text">\u5468\u534E\u98DE\u7231\u4FAF\u4E3D\u6770,\u4FAF\u4E3D\u6770\u7231\u5468\u534E\u98DE</div>\n            '
        }
    });
};

// 功能(覆盖超类型)
SubType.prototype.power = function () {
    // 功能重写待续...
};

module.exports = SubType;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tools = __webpack_require__(1); // 工具方法集合
var applications = __webpack_require__(0); // 应用方法集合
var SuperType = __webpack_require__(11); // 超类型(子类型继承的对象)

// 子类型

var SubType = function (_SuperType) {
    _inherits(SubType, _SuperType);

    function SubType(json) {
        _classCallCheck(this, SubType);

        // 这里会执行一次超类里的init
        // 制定内部的默认值
        var _this = _possibleConstructorReturn(this, (SubType.__proto__ || Object.getPrototypeOf(SubType)).call(this, json));
        /*
         * 继承超类型的属性和方法
         * 就算使用Super.call继承属性,也会先执行内部的init函数,这个和es6的比较
         * 我封装的es5继承函数constructor-inherit是先处理的参数this.opts,再进行的继承
         * 这里的es6继承,是先进行的继承,再处理的参数,因为继承之前,子类无this属性
         * 不管是es5的继承,还是es6的继承,都会执行函数内部的一切,例如
         * 我封装的constructor-inherit继承属性时Super.call(this,this.opts),函数内部的init方法被执行了
         * 执行前我处理了参数this.opts,所有一切还算稳定,我喜欢这个写法
         * es6继承属性和方法用super(json),继承时函数内部的init方法也被执行了,执行后才处理的参数this.opts
         * 后处理参数的话,即使我更新了默认的参数配置,覆盖了超类的方法,也获取不到最新参数上的数据,导致默认参数无效
         * 因为函数执行super(json)的时候,init已经被调用了,数据是后更新的,所以不能获取到,因此
         * 我需要清除内部模块,并进行重新调用,这点我很不喜欢,所以我现在的场景还是更适合es5的面向对象
         * 注:init方法是我封装的超类型里的初始化方法,this.opts是超类型里的参数,参数我喜欢用对象的形式
         * */


        _this.opts = tools.extend({
            defaults: _this.opts,
            // inherits里放默认参数(继承超类型)
            inherits: {
                // 回调
                callback: {},
                // 配置
                config: {},
                // 数据
                data: {}
            }
        });
        // 接收外部的参数
        _this.opts = tools.extend({
            defaults: _this.opts,
            inherits: json
        });
        _this.init(); // 用es6继承的话,在子类里调初始化才有意义,因为子类的参数已经被赋予新值,建议不要在超类里初始化,在子类里初始化
        return _this;
    }

    // 内部模块的创建(覆盖超类型)


    _createClass(SubType, [{
        key: 'moduleDomCreate',
        value: function moduleDomCreate() {
            this.moduleDom = applications.createElement({
                style: this.opts.config.moduleDomStyle,
                customAttribute: this.opts.config.moduleDomCustomAttribute,
                attribute: {
                    className: 'g-sub-type-es6',
                    innerHTML: '\n                    <div class="g-sub-type-es6-text">\u5468\u534E\u98DE\u7231\u4FAF\u4E3D\u6770,\u4FAF\u4E3D\u6770\u7231\u5468\u534E\u98DE</div>\n                '
                }
            });
        }

        // 功能重写(覆盖超类型)

    }, {
        key: 'power',
        value: function power() {
            // 功能重写待续...
        }
    }]);

    return SubType;
}(SuperType);

module.exports = SubType;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tools = __webpack_require__(1); // 工具方法集合
var applications = __webpack_require__(0); // 应用方法集合
var SuperType = __webpack_require__(2); // 超类型(子类型继承的对象)

// 子类型
var SubType = tools.constructorInherit({
    superType: SuperType,
    // 默认参数(继承超类型)
    parameter: {
        // 回调
        callback: {
            click: function click() {}
        },
        // 配置
        config: {
            isHand: false, // 是否手动控制
            status: 'on', // 状态
            txt: {
                on: '已开启',
                off: '已关闭'
            }
        },
        // 数据
        data: {}
    }
});

// 内部模块的创建(覆盖超类型)
SubType.prototype.moduleDomCreate = function () {
    var config = this.opts.config;
    this.moduleDomActiveClass = 'g-radio-switch-active';
    var isOn = '';
    if (config.status === 'on') {
        isOn = this.moduleDomActiveClass;
    }
    this.moduleDom = applications.createElement({
        style: config.moduleDomStyle,
        customAttribute: config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-radio-switch ' + isOn,
            innerHTML: '\n                <div class="g-radio-switch-wrap">\n                    <div class="g-radio-switch-round"></div>\n                </div>\n                <div class="g-radio-switch-text">' + config.txt[config.status] + '</div>\n            '
        }
    });
};

// 功能(覆盖超类型)
SubType.prototype.power = function () {
    var self = this;
    var config = this.opts.config;
    this.moduleDom.addEventListener('click', function () {
        if (!config.isHand) {
            if (!self.isOn()) {
                self.on();
            } else {
                self.off();
            }
        }
        self.opts.callback.click({ status: config.status });
    });
};

// 是否处于开启状态
SubType.prototype.isOn = function () {
    return this.moduleDom.classList.contains(this.moduleDomActiveClass);
};

// 开启
SubType.prototype.on = function () {
    var config = this.opts.config;
    if (!this.isOn()) {
        this.moduleDom.classList.add(this.moduleDomActiveClass);
        config.status = 'on';
        this.moduleDom.querySelector('.g-radio-switch-text').innerHTML = '' + config.txt[config.status];
    }
};

// 关闭
SubType.prototype.off = function () {
    var config = this.opts.config;
    if (this.isOn()) {
        this.moduleDom.classList.remove(this.moduleDomActiveClass);
        config.status = 'off';
        this.moduleDom.querySelector('.g-radio-switch-text').innerHTML = '' + config.txt[config.status];
    }
};

module.exports = SubType;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tools = __webpack_require__(1); // 工具方法集合
var applications = __webpack_require__(0); // 应用方法集合
var SuperType = __webpack_require__(2); // 超类型(子类型继承的对象)

// 子类型
var SubType = tools.constructorInherit({
    superType: SuperType,
    // 默认参数(继承超类型)
    parameter: {
        // 回调
        callback: {},
        // 配置
        config: {},
        // 数据
        data: {
            header: [{ content: 'undefined-header0' }, { content: 'undefined-header1' }, { content: 'undefined-header2' }],
            body: [[{ content: 'undefined-body0-0' }, { content: 'undefined-body0-1' }, { content: 'undefined-body0-2' }]],
            footer: ''
        }
    }
});

// 内部模块的创建(覆盖超类型)
SubType.prototype.moduleDomCreate = function () {
    this.moduleDom = applications.createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-table',
            innerHTML: '\n                <div class="g-table-header">\n                    <div class="g-table-row">\n                        ' + this.moduleDomCreateHeader() + '\n                    </div>\n                </div>\n                <div class="g-table-body">\n                    ' + this.moduleDomCreateBody() + '\n                </div>\n                <div class="g-table-footer">\n                    ' + this.moduleDomCreateFooter() + '\n                </div>\n            '
        }
    });
};

SubType.prototype.moduleDomCreateHeader = function () {
    var html = '';
    this.opts.data.header.forEach(function (v) {
        html += '\n            <div class="g-table-col">\n                <div class="g-table-col-wrap">\n                    ' + v.content + '\n                </div>\n            </div>\n        ';
    });
    return html;
};

SubType.prototype.moduleDomCreateBody = function () {
    var html = '';
    this.opts.data.body.forEach(function (v0) {
        var row = '';
        v0.forEach(function (v1) {
            row += '\n                <div class="g-table-col">\n                    <div class="g-table-col-wrap">\n                        ' + v1.content + '\n                    </div>\n                </div>\n            ';
        });
        html += '<div class="g-table-row">' + row + '</div>';
    });
    return html;
};

SubType.prototype.moduleDomCreateFooter = function () {
    return this.opts.data.footer;
};

// 功能(覆盖超类型)
SubType.prototype.power = function () {
    // 功能重写待续...
};

module.exports = SubType;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[13]);