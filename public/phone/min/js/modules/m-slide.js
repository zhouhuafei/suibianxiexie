"use strict";

(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);throw new Error("Cannot find module '" + o + "'");
            }var f = n[o] = { exports: {} };t[o][0].call(f.exports, function (e) {
                var n = t[o][1][e];return s(n ? n : e);
            }, f, f.exports, e, t, n, r);
        }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
        s(r[o]);
    }return s;
})({ 1: [function (require, module, exports) {
        var createElement = require('../function/create-element'); //创建元素节点
        var constructorInherit = require('../tools/constructor-inherit'); //构造函数的继承(拷贝继承)
        var TouchSlide = require('../plugs/touch-slide'); //轮播图插件
        var SuperType = require('../modules/m-super-type'); //超类型(子类型继承的对象)

        //子类型
        var SubType = constructorInherit({
            superType: SuperType,
            //默认参数(继承超类型)
            parameter: {
                //回调
                callback: {
                    startFun: function startFun() {},
                    endFun: function endFun() {}
                },
                //配置
                config: {
                    isShowHref: true, //是否有跳转
                    //TouchSlide插件的配置
                    touchSlide: {
                        slideCell: '', //外部容器,这个值会在底部进行覆盖,因为在这里没办法获取this
                        mainCell: '.m-slide-body', //切换元素的包裹层对象
                        titCell: '.m-slide-header .m-slide-items', //导航元素对象
                        effect: "leftLoop", //效果'left' 'leftLoop'
                        autoPlay: true, //自动播放
                        delayTime: 200, //切换一次的持续时间
                        interTime: 3000, //多久切换一次
                        startFun: function startFun() {
                            console.log('此处的函数会被覆盖,请在callback里执行回调');
                        },
                        endFun: function endFun() {
                            console.log('此处的函数会被覆盖,请在callback里执行回调');
                        },
                        defaultIndex: 0, //默认的当前位置索引
                        switchLoadClass: '.pre-load', //预加载的class
                        switchLoad: 'data-src' //预加载的属性
                    }
                },
                //数据
                data: {
                    items: [{
                        img: {
                            width: 0,
                            height: 0,
                            url: 'http://img1.imgtn.bdimg.com/it/u=1056872014,4038868309&fm=23&gp=0.jpg'
                        },
                        link: ''
                    }]
                }
            }
        });

        //内部模块的创建(覆盖超类型)
        SubType.prototype.moduleDomCreate = function () {
            this.moduleDom = createElement({
                style: this.opts.config.moduleDomStyle,
                custom: this.opts.config.moduleDomCustomAttr,
                attribute: {
                    className: "m-slide",
                    innerHTML: "\n                " + this.renderHeader() + "\n                " + this.renderBody() + "\n            "
                }
            });
        };

        SubType.prototype.renderHeader = function () {
            var self = this;
            var html = "";
            var data = self.opts.data;
            var className = "";
            data.items.forEach(function (v, i) {
                if (i == self.opts.config.touchSlide.defaultIndex) {
                    className = "on";
                }
                html += "<div class=\"m-slide-items " + className + "\"></div>";
            });
            return "<div class=\"m-slide-header\">" + html + "</div>";
        };

        SubType.prototype.renderBody = function () {
            var self = this;
            var html = "";
            var data = self.opts.data;
            data.items.forEach(function (v) {
                if (self.opts.config.isShowHref) {
                    html += "<a href=\"" + (v.link || 'javascript:;') + "\" class=\"m-slide-items pre-load\" data-src=\"" + v.img.url + "\"></a>";
                } else {
                    html += "<a class=\"m-slide-items pre-load\" data-src=\"" + v.img.url + "\"></a>";
                }
            });
            return "<div class=\"m-slide-body\">" + html + "</div>";
        };

        //功能(覆盖超类型)
        SubType.prototype.power = function () {
            var self = this;
            var callback = self.opts.callback;
            var config = self.opts.config;
            var touchSlide = config.touchSlide;
            touchSlide.slideCell = self.opts.wrap; //外部容器,必须是id
            touchSlide.startFun = function (i) {
                // 因为以下功能在插件本身进行了实现(本人对touch-slide插件进行了小修改),所以这里就注释了
                // var allImg = self.moduleDom.querySelectorAll('.m-slide-body .m-slide-items');
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
    }, { "../function/create-element": 2, "../modules/m-super-type": 4, "../plugs/touch-slide": 5, "../tools/constructor-inherit": 6 }], 2: [function (require, module, exports) {
        //创建元素节点
        function createElement(json) {
            var opts = json || {};
            opts.elementName = opts.elementName || 'div'; //标签名称
            opts.style = opts.style || ""; //style样式
            opts.custom = opts.custom || {}; //自定义属性
            opts.attribute = opts.attribute || {}; //普通属性,checked,selected
            var elementNode = document.createElement(opts.elementName); //元素节点
            if (opts.style) {
                elementNode.setAttribute('style', opts.style);
            }
            for (var attr1 in opts.custom) {
                if (opts.custom.hasOwnProperty(attr1)) {
                    elementNode.setAttribute('data-' + attr1, opts.custom[attr1]);
                }
            }
            for (var attr0 in opts.attribute) {
                if (opts.attribute.hasOwnProperty(attr0)) {
                    elementNode[attr0] = opts.attribute[attr0];
                }
            }
            return elementNode;
        }

        module.exports = createElement;
    }, {}], 3: [function (require, module, exports) {
        //获取原生的dom节点并转换成数组,传入的参数支持:1.原生的dom节点,2.原生的dom集合,3.css选择器
        function getDomArray(json) {
            var opts = json || {};
            var dom = [];
            var element = opts.element ? opts.element : false;
            if (element) {
                //如果是字符串
                if (Object.prototype.toString.call(element).slice(8, -1).toLowerCase() == 'string') {
                    dom = [].slice.call(document.querySelectorAll(element));
                }
                //如果是dom节点(一个元素)    原生的
                if (element.nodeType == 1) {
                    dom = [element];
                }
                /*
                 * 如果是dom集合(一组元素)    HtmlCollection(通过getElementsBy系列获取到的)
                 * 如果是dom集合(一组元素)    NodeList(通过querySelectorAll获取到的)
                 * */
                if (Object.prototype.toString.call(element).slice(8, -1).toLowerCase() == 'htmlcollection' || Object.prototype.toString.call(element).slice(8, -1).toLowerCase() == 'nodelist') {
                    dom = [].slice.call(element);
                }
            }
            return dom;
        }

        module.exports = getDomArray;
    }, {}], 4: [function (require, module, exports) {
        var extend = require('../tools/extend'); //对象的扩展方法
        var createElement = require('../function/create-element'); //创建元素节点
        var getDomArray = require('../function/get-dom-array'); //获取原生的dom节点并转换成数组

        //底层构造函数
        function SuperType(json) {
            //函数外部传来的参数(这个属性在其他模块的内部需要被重写)
            this.opts = extend({
                //内部默认参数
                defaults: {
                    //父级
                    wrap: ".g-wrap", //这个仅支持传入选择器和原生dom节点
                    //回调
                    callback: {
                        //内部模块创建之前
                        moduleDomCreateBefore: function moduleDomCreateBefore(self) {
                            //内部模块创建之前的回调待续...
                        },
                        //内部模块创建之后
                        moduleDomCreateAfter: function moduleDomCreateAfter(self) {
                            //内部模块创建之后的回调待续...
                        },
                        //内部模块渲染之前
                        moduleDomRenderBefore: function moduleDomRenderBefore(self) {
                            //内部模块渲染之前的回调待续...
                        },
                        //内部模块渲染之后
                        moduleDomRenderAfter: function moduleDomRenderAfter(self) {
                            //内部模块渲染之后的回调待续...
                        },
                        //内部模块移除之前
                        moduleDomRemoveBefore: function moduleDomRemoveBefore(self) {
                            //内部模块移除之前的回调待续...
                        },
                        //内部模块移除之后
                        moduleDomRemoveAfter: function moduleDomRemoveAfter(self) {
                            //内部模块移除之后的回调待续...
                        },
                        //内部模块显示之前
                        moduleDomShowBefore: function moduleDomShowBefore(self) {
                            //内部模块显示之前的回调待续...
                        },
                        //内部模块显示之后
                        moduleDomShowAfter: function moduleDomShowAfter(self) {
                            //内部模块显示之后的回调待续...
                        },
                        //内部模块隐藏之前
                        moduleDomHideBefore: function moduleDomHideBefore(self) {
                            //内部模块隐藏之前的回调待续...
                        },
                        //内部模块隐藏之后
                        moduleDomHideAfter: function moduleDomHideAfter(self) {
                            //内部模块隐藏之后的回调待续...
                        },
                        //外部容器获取之前
                        wrapDomGetBefore: function wrapDomGetBefore(self) {
                            //外部容器获取之前的回调待续...
                        },
                        //外部容器获取之后
                        wrapDomGetAfter: function wrapDomGetAfter(self) {
                            //外部容器获取之后的回调待续...
                        },
                        //外部容器移除之前
                        wrapDomRemoveBefore: function wrapDomRemoveBefore(self) {
                            //外部容器移除之前的回调待续...
                        },
                        //外部容器移除之后
                        wrapDomRemoveAfter: function wrapDomRemoveAfter(self) {
                            //外部容器移除之后的回调待续...
                        }
                    },
                    //配置
                    config: {
                        //内部模块的自定义属性
                        moduleDomCustomAttr: {},
                        //内部模块插入到外部容器的方式
                        moduleDomRenderMethod: {
                            method: 'appendChild', //'appendChild','insertBefore'
                            child: null
                        },
                        moduleDomStyle: "", //内部模块的样式(写法和css相同)
                        moduleDomIsShow: true, //内部模块是否显示(默认显示)
                        moduleDomIsClearTimer: true //内部模块是否清除所有定时器(默认清除)
                    },
                    //数据
                    data: {}
                },
                //外部传入参数
                inherits: json
            });
            //函数内部自带的属性
            this.moduleDom = null; //内部的模块
            this.wrapDom = null; //内部模块的外部承载容器,如果没有也没关系,不过不往里面append罢了
            this.moduleDomTimer = {}; //内部模块的定时器存储(假设内部模块有定时器)
            this.init(); //初始化
        }

        //初始化
        SuperType.prototype.init = function () {
            this.render();
            this.power();
        };

        //渲染
        SuperType.prototype.render = function () {
            this.moduleDomRemove(); //内部模块的移除(重新初始化的时候要移除掉以前有的内部模块)
            var callback = this.opts.callback;
            callback.moduleDomCreateBefore(this);
            this.moduleDomCreate(); //内部模块的创建
            callback.moduleDomCreateAfter(this);
            this.wrapDomGet(); //外部容器的获取
            this.moduleDomRender(); //内部模块的渲染(如果外部容器存在,就把内部模块填充到外部容器里)
        };

        //功能(这个方法在其他模块的内部需要被重写)
        SuperType.prototype.power = function () {
            //功能待续...
        };

        //内部模块的创建(这个方法在其他模块的内部需要被重写)
        SuperType.prototype.moduleDomCreate = function () {
            this.moduleDom = createElement({
                style: this.opts.config.moduleDomStyle,
                custom: this.opts.config.moduleDomCustomAttr,
                attribute: {
                    className: "m-super-type",
                    innerHTML: "\n                <div class=\"m-super-type-txt\">\u5468\u534E\u98DE\u7231\u4FAF\u4E3D\u6770,\u4FAF\u4E3D\u6770\u7231\u5468\u534E\u98DE</div>\n            "
                }
            });
        };

        //内部模块的渲染
        SuperType.prototype.moduleDomRender = function () {
            var callback = this.opts.callback;
            var config = this.opts.config;
            if (config.moduleDomIsShow && this.wrapDom) {
                callback.moduleDomRenderBefore(this);
                var renderMethod = config.moduleDomRenderMethod;
                if (renderMethod.method == 'insertBefore') {
                    var dom = getDomArray({ element: renderMethod.child })[0];
                    if (dom) {
                        this.wrapDom.insertBefore(this.moduleDom, dom);
                    } else {
                        this.wrapDom.insertBefore(this.moduleDom, this.wrapDom.children[0]);
                    }
                }
                if (renderMethod.method == 'appendChild') {
                    this.wrapDom.appendChild(this.moduleDom);
                }
                callback.moduleDomRenderAfter(this);
            }
        };

        //内部模块的移除
        SuperType.prototype.moduleDomRemove = function () {
            var callback = this.opts.callback;
            if (this.moduleDom && this.moduleDom.parentNode) {
                callback.moduleDomRemoveBefore(this);
                this.moduleDom.parentNode.removeChild(this.moduleDom);
                callback.moduleDomRemoveAfter(this);
            }
            this.moduleDomClearTimer();
        };

        //内部模块的定时器清除(假设内部模块有定时器)
        SuperType.prototype.moduleDomClearTimer = function () {
            if (this.opts.config.moduleDomIsClearTimer) {
                for (var attr in this.moduleDomTimer) {
                    if (this.moduleDomTimer.hasOwnProperty(attr)) {
                        clearInterval(this.moduleDomTimer[attr]);
                        clearTimeout(this.moduleDomTimer[attr]);
                    }
                }
            }
        };

        //内部模块的显示(显示隐藏和是否清除定时器无关)
        SuperType.prototype.moduleDomShow = function () {
            var callback = this.opts.callback;
            callback.moduleDomShowBefore(this);
            if (this.wrapDom) {
                this.opts.config.moduleDomIsShow = true;
                this.moduleDomRender();
            }
            callback.moduleDomShowAfter(this);
        };

        //内部模块的隐藏(显示隐藏和是否清除定时器无关)
        SuperType.prototype.moduleDomHide = function () {
            var callback = this.opts.callback;
            if (this.moduleDom.parentNode) {
                this.opts.config.moduleDomIsShow = false;
                callback.moduleDomHideBefore(this);
                this.moduleDom.parentNode.removeChild(this.moduleDom);
                callback.moduleDomHideAfter(this);
            }
        };

        //外部容器的获取
        SuperType.prototype.wrapDomGet = function () {
            var callback = this.opts.callback;
            callback.wrapDomGetBefore(this);
            this.wrapDom = getDomArray({ element: this.opts.wrap })[0];
            callback.wrapDomGetAfter(this);
        };

        //外部容器的移除
        SuperType.prototype.wrapDomRemove = function () {
            var callback = this.opts.callback;
            //先移除内部的模块
            this.moduleDomRemove();
            //再移除外部的容器
            if (this.wrapDom) {
                callback.wrapDomRemoveBefore(this);
                this.wrapDom.parentNode.removeChild(this.wrapDom);
                callback.wrapDomRemoveAfter(this);
            }
        };

        //获取内部模块的整体html结构
        SuperType.prototype.getModuleDomHtml = function () {
            return this.moduleDom.outerHTML;
        };

        module.exports = SuperType;
    }, { "../function/create-element": 2, "../function/get-dom-array": 3, "../tools/extend": 7 }], 5: [function (require, module, exports) {
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
                                        if (cln && cln.search(new RegExp("\\b" + par[i].replace(".", "") + "\\b")) != -1) {
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
    }, {}], 6: [function (require, module, exports) {
        var extend = require('../tools/extend'); //对象的扩展方法
        var objRemoveQuote = require('../tools/obj-remove-quote'); //对象移除引用

        //构造函数的继承(拷贝继承)
        function constructorInherit(json) {
            var opts = extend({
                defaults: {
                    superType: null, //继承哪个超类(这个必须传的是一个构造函数,或者不传值)
                    parameter: {} //默认参数(这个必须传的是一个对象,或者不传值)
                },
                inherits: json
            });
            //超类型(需要是个构造函数)
            var SuperType = opts.superType;
            //子类型的默认参数(需要是个对象)
            var parameter = opts.parameter;
            //如果超类型不存在
            if (Object.prototype.toString.call(SuperType).toLowerCase().slice(8, -1) != 'function') {
                console.log('no find SuperType or SuperType error');
                return false;
            }
            //子类型
            function SubType(json) {
                //子类型自身的属性
                /*
                 * 注意:
                 * defaults要防止对象的引用(如果不防止的话,会出现BUG)
                 * 例如 wrap的默认值是'.g-wrap'
                 * 第一次   var obj1=new Sub({wrap:'body'});   wrap的值是'body'
                 * 第二次   var obj2=new Sub();    这里按理说wrap的值应该是默认值'.g-wrap'
                 * 但是由于对象引用的原因,这里的值会变成'body'
                 * 因此这里要处理掉对象的引用,所以我使用了JSON的方法进行了阻止
                 * 但是JSON.stringify方法居然会过滤掉对象内部的所有函数,真是日了狗了
                 * 所以我就封装了一个移除对象引用的函数
                 * */
                this.opts = extend({
                    defaults: objRemoveQuote({ obj: parameter }),
                    inherits: json
                });
                //子类型继承超类型的属性
                opts.superType.call(this, this.opts);
            }

            //子类型继承超类型的方法
            for (var attr in SuperType.prototype) {
                if (SuperType.prototype.hasOwnProperty(attr)) {
                    SubType.prototype[attr] = SuperType.prototype[attr];
                }
            }
            return SubType;
        }

        module.exports = constructorInherit;
    }, { "../tools/extend": 7, "../tools/obj-remove-quote": 8 }], 7: [function (require, module, exports) {
        //对象的扩展方法
        function extend(json) {
            var opts = json || {};
            opts.defaults = opts.defaults || {}; //默认对象
            opts.inherits = opts.inherits || {}; //继承对像
            opts.isDeep = opts.isDeep == false ? opts.isDeep : true; //是否进行深拷贝(默认进行深拷贝)
            var defaultsType = Object.prototype.toString.call(opts.defaults).slice(8, -1).toLowerCase();
            var inheritsType = Object.prototype.toString.call(opts.inherits).slice(8, -1).toLowerCase();
            if (defaultsType == inheritsType && opts.isDeep) {
                if (defaultsType == 'object' || defaultsType == 'array') {
                    //当为对象或者为数组
                    for (var attr in opts.inherits) {
                        if (opts.inherits.hasOwnProperty(attr)) {
                            var attrDefaultsType = Object.prototype.toString.call(opts.defaults[attr]).slice(8, -1).toLowerCase();
                            var attrInheritsType = Object.prototype.toString.call(opts.inherits[attr]).slice(8, -1).toLowerCase();
                            if (attrDefaultsType == attrInheritsType && opts.isDeep) {
                                //类型相同
                                if (attrDefaultsType == 'object' || attrDefaultsType == 'array') {
                                    //当为对象或者为数组
                                    extend({ defaults: opts.defaults[attr], inherits: opts.inherits[attr] });
                                } else {
                                    opts.defaults[attr] = opts.inherits[attr];
                                }
                            } else {
                                //类型不同,直接后面的覆盖前面的
                                opts.defaults[attr] = opts.inherits[attr];
                            }
                        }
                    }
                } else {
                    opts.defaults = opts.inherits;
                }
            } else {
                opts.defaults = opts.inherits;
            }
            return opts.defaults;
        }
        // var obj1 = extend({
        //     defaults: {
        //         a: 'a',
        //         b: {
        //             b1: 'b1',
        //             b2: 'b2',
        //             b3: {
        //                 c1: 'c1'
        //             }
        //         }
        //     },
        //     inherits: {
        //         a: 0,
        //         b: {
        //             b2: 1,
        //             b3: {
        //                 c2: 2
        //             }
        //         }
        //     }
        // });
        // console.log(obj1);//{a: 0, b: {b1: 'b1', b2: 1, b3: {c1: 'c1', c2: 2}}}
        // var obj2 = extend({
        //     defaults: {
        //         a: [
        //             0,
        //             [9, 8, 7],
        //             {
        //                 arr: [
        //                     1,
        //                     2,
        //                     3,
        //                     [7, 9, 10],
        //                     {good: 'good'}
        //                 ]
        //             }
        //         ],
        //         b: [
        //             {a1: 'a1'},
        //             {a2: 'a2'}
        //         ]
        //     },
        //     inherits: {
        //         a: [
        //             1,
        //             [3, 1],
        //             {
        //                 arr: [
        //                     8,
        //                     8,
        //                     8,
        //                     [6, 8]
        //                 ]
        //             }
        //         ],
        //         b: [
        //             'what?',
        //             {b1: 'b1'},
        //             {b2: 'b2'}
        //         ]
        //     }
        // });
        // console.log(obj2);//{a: [1, [3, 1, 7],{arr: [8, 8, 8, [6, 8, 10], {good: 'good'}]}], b: ['what?', {a2: 'a2', b1: 'b1'}, {b2: 'b2'}]}

        module.exports = extend;
    }, {}], 8: [function (require, module, exports) {
        //移除对象引用
        function objRemoveQuote(json) {
            var opts = json || {};
            var obj = opts.obj; //这里一定不能给默认值
            var objType = Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
            if (objType != 'object' && objType != 'array') {
                return obj;
            }
            var newObj = {};
            if (objType == 'array') {
                newObj = [];
            }
            for (var attr in obj) {
                if (obj.hasOwnProperty(attr)) {
                    newObj[attr] = objRemoveQuote({ obj: obj[attr] });
                }
            }
            return newObj;
        }

        module.exports = objRemoveQuote;
    }, {}] }, {}, [1]);