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
        //一些小方法
        var base = {
            userAgent: require('../function/user-agent'), //用户代理(判断是否是安卓,苹果,微信,电脑)
            arrayRemoveRepeat: require('../function/array-remove-repeat'), //数组去重
            objRemoveQuote: require('../function/obj-remove-quote'), //移除对象引用
            Select: require('../function/select'), //全选,不选,反选
            offset: require('../function/offset'), //获取元素距离文档的left和top
            constructorInherit: require('../function/constructor-inherit'), //构造函数继承
            cookie: require('../function/cookie'), //cookie操作
            fillZero: require('../function/fill-zero'), //补零
            getParent: require('../function/get-parent'), //获取父级
            scrollTo: require('../function/scroll-to'), //滚动到
            htmlToDom: require('../function/html-to-dom'), //html转成dom节点
            whetherDisableScroll: require('../function/whether-disable-scroll'), //是否禁止浏览器滚动
            WhenScrollBottom: require('../function/when-scroll-bottom'), //当滚动到底部
            objToArray: require('../function/obj-to-array'), //把json格式的对象转成数组
            secondsToTime: require('../function/seconds-to-time'), //秒转时间
            timeCountDown: require('../function/time-count-down'), //倒计时
            strLimit: require('../function/str-limit'), //字符串限制
            getDomArray: require('../function/get-dom-array'), //获取一组dom节点
            createElement: require('../function/create-element'), //创建元素节点
            extend: require('../function/extend') //对象扩展
        };
        module.exports = base;
    }, { "../function/array-remove-repeat": 3, "../function/constructor-inherit": 4, "../function/cookie": 5, "../function/create-element": 6, "../function/extend": 7, "../function/fill-zero": 8, "../function/get-dom-array": 9, "../function/get-parent": 10, "../function/html-to-dom": 11, "../function/obj-remove-quote": 12, "../function/obj-to-array": 13, "../function/offset": 14, "../function/scroll-to": 15, "../function/seconds-to-time": 16, "../function/select": 17, "../function/str-limit": 18, "../function/time-count-down": 19, "../function/user-agent": 20, "../function/when-scroll-bottom": 21, "../function/whether-disable-scroll": 22 }], 2: [function (require, module, exports) {
        //底层方法
        var base = require('../base/base');
        var TouchSlide = require('../plugs/touch-slide');

        //超类型(子类型继承的对象)
        var SuperType = require('../modules/m-super-type');

        //子类型
        var SubType = base.constructorInherit({
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
                    touchSlide: {
                        slideCell: '', //外部容器,必须是id,这个值会在底部进行覆盖,因为在这里没办法获取this
                        mainCell: '.m-slide-body', //切换元素的包裹层对象
                        titCell: '.m-slide-header .m-slide-item', //导航元素对象
                        effect: "leftLoop", //效果
                        autoPlay: true, //自动播放
                        delayTime: 200, //切换一次的持续时间
                        interTime: 3000, //多久切换一次
                        startFun: function startFun() {},
                        endFun: function endFun() {},
                        defaultIndex: 0 //默认的当前位置索引
                    }
                },
                //数据
                data: {
                    items: [{
                        src: '',
                        href: ''
                    }]
                }
            }
        });

        //内部模块的创建(覆盖超类型)
        SubType.prototype.moduleDomCreate = function () {
            this.moduleDom = base.createElement({
                style: this.opt.config.moduleDomStyle,
                custom: this.opt.config.moduleDomCustomAttr,
                attribute: {
                    className: "m-slide",
                    innerHTML: "\n                " + this.renderHeader() + "\n                " + this.renderBody() + "\n            "
                }
            });
        };

        SubType.prototype.renderHeader = function () {
            var self = this;
            var html = "";
            var data = self.opt.data;
            var className = "";
            data.items.forEach(function (v, i) {
                if (i == self.opt.config.touchSlide.defaultIndex) {
                    className = "on";
                }
                html += "<div class=\"m-slide-item " + className + "\"></div>";
            });
            return "<div class=\"m-slide-header\">" + html + "</div>";
        };

        SubType.prototype.renderBody = function () {
            var self = this;
            var html = "";
            var data = self.opt.data;
            data.items.forEach(function (v) {
                if (self.opt.config.isShowHref) {
                    html += "<a href=\"" + (v.href || 'javascript:;') + "\" class=\"m-slide-item\"><img data-src=\"" + v.src + "\" src=\"\" alt=\"\"></a>";
                } else {
                    html += "<a class=\"m-slide-item\"><img data-src=\"" + v.src + "\" src=\"\" alt=\"\"></a>";
                }
            });
            return "<div class=\"m-slide-body\">" + html + "</div>";
        };

        //功能(覆盖超类型)
        SubType.prototype.power = function () {
            var self = this;
            var callback = self.opt.callback;
            var config = self.opt.config;
            var touchSlide = config.touchSlide;
            touchSlide.slideCell = self.opt.wrap; //外部容器,必须是id
            touchSlide.startFun = function (i) {
                var allImg = self.moduleDom.querySelectorAll('.m-slide-body img');
                var nowIndex = i + 1;
                if (touchSlide.effect == 'left') {
                    nowIndex = i;
                }
                var nowImg = allImg[nowIndex];
                var prevImg = allImg[nowIndex - 1];
                var nextImg = allImg[nowIndex + 1];
                nowImg.src = nowImg.dataset.src;
                prevImg.src = prevImg.dataset.src;
                nextImg.src = nextImg.dataset.src;
                callback.startFun({ self: self, index: i });
            };
            touchSlide.endFun = function (i) {
                callback.endFun({ self: self, index: i });
            };
            TouchSlide(self.opt.config.touchSlide);
        };

        module.exports = SubType;
    }, { "../base/base": 1, "../modules/m-super-type": 23, "../plugs/touch-slide": 24 }], 3: [function (require, module, exports) {
        //数组去重
        function arrayRemoveRepeat(json) {
            var opt = json || {};
            var array = opt.array || [];
            if (Object.prototype.toString.call(array).slice(8, -1).toLowerCase() != 'array') {
                return [];
            }
            var newArray = [];
            array.forEach(function (v) {
                if (newArray.indexOf(v) == -1) {
                    newArray.push(v);
                }
            });
            return newArray;
        }
        module.exports = arrayRemoveRepeat;
    }, {}], 4: [function (require, module, exports) {
        var extend = require('../function/extend'); //对象的扩展方法
        var objRemoveQuote = require('../function/obj-remove-quote'); //对象移除引用

        //构造函数的继承(拷贝继承)
        function constructorInherit(json) {
            var opt = extend({
                default: {
                    superType: null, //继承哪个超类(这个必须传的是一个构造函数,或者不传值)
                    parameter: {} //默认参数(这个必须传的是一个对象,或者不传值)
                },
                inherit: json
            });
            //超类型(需要是个构造函数)
            var SuperType = opt.superType;
            //子类型的默认参数(需要是个对象)
            var parameter = opt.parameter;
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
                 * default要防止对象的引用(如果不防止的话,会出现BUG)
                 * 例如 wrap的默认值是'.g-page'
                 * 第一次   var obj1=new Sub({wrap:'body'});   wrap的值是'body'
                 * 第二次   var obj2=new Sub();    这里按理说wrap的值应该是默认值'.g-page'
                 * 但是由于对象引用的原因,这里的值会变成'body'
                 * 因此这里要处理掉对象的引用,所以我使用了JSON的方法进行了阻止
                 * 但是JSON.stringify方法居然会过滤掉对象内部的所有函数,真是日了狗了
                 * 所以我就封装了一个移除对象引用的函数
                 * */
                this.opt = extend({
                    default: objRemoveQuote({ obj: parameter }),
                    inherit: json
                });
                //子类型继承超类型的属性
                opt.superType.call(this, this.opt);
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
    }, { "../function/extend": 7, "../function/obj-remove-quote": 12 }], 5: [function (require, module, exports) {
        //设置cookie
        function setCookie(json) {
            var opt = json || {};
            var name = opt.name;
            var value = opt.value;
            var expires = opt.expires;
            var myDate = new Date();
            var myTime = myDate.getTime();
            myDate.setTime(myTime + expires * 24 * 60 * 60 * 1000);
            document.cookie = name + '=' + value + '; expires=' + myDate;
        }
        //获取cookie
        function getCookie(json) {
            var opt = json || {};
            var name = opt.name;
            var cookie = document.cookie;
            var arr = cookie.split('; ');
            var value = '';
            arr.forEach(function (v) {
                var arr2 = v.split('=');
                if (arr2[0] == name) {
                    value = arr2[1];
                    return false;
                }
            });
            return value;
        }
        //清除cookie
        function removeCookie(json) {
            var opt = json || {};
            var name = opt.name;
            setCookie(name, '', -1);
        }
        var obj = {
            setCookie: setCookie,
            getCookie: getCookie,
            removeCookie: removeCookie
        };
        module.exports = obj;
    }, {}], 6: [function (require, module, exports) {
        //创建元素节点
        function createElement(json) {
            var opt = json || {};
            opt.elementName = opt.elementName || 'div'; //标签名称
            opt.style = opt.style || ""; //style样式
            opt.custom = opt.custom || {}; //自定义属性
            opt.attribute = opt.attribute || {}; //普通属性,checked,selected
            var elementNode = document.createElement(opt.elementName); //元素节点
            if (opt.style) {
                elementNode.setAttribute('style', opt.style);
            }
            for (var attr1 in opt.custom) {
                if (opt.custom.hasOwnProperty(attr1)) {
                    elementNode.setAttribute('data-' + attr1, opt.custom[attr1]);
                }
            }
            for (var attr0 in opt.attribute) {
                if (opt.attribute.hasOwnProperty(attr0)) {
                    elementNode[attr0] = opt.attribute[attr0];
                }
            }
            return elementNode;
        }
        module.exports = createElement;
    }, {}], 7: [function (require, module, exports) {
        //对象的扩展方法
        function extend(json) {
            var opt = json || {};
            opt.default = opt.default || {}; //默认对象
            opt.inherit = opt.inherit || {}; //继承对像
            opt.isDeep = opt.isDeep == false ? opt.isDeep : true; //是否进行深拷贝(默认进行深拷贝)
            var defaultType = Object.prototype.toString.call(opt.default).slice(8, -1).toLowerCase();
            var inheritType = Object.prototype.toString.call(opt.inherit).slice(8, -1).toLowerCase();
            if (defaultType == inheritType && opt.isDeep) {
                if (defaultType == 'object' || defaultType == 'array') {
                    for (var attr in opt.inherit) {
                        if (opt.inherit.hasOwnProperty(attr)) {
                            var attrDefaultType = Object.prototype.toString.call(opt.default[attr]).slice(8, -1).toLowerCase();
                            var attrInheritType = Object.prototype.toString.call(opt.inherit[attr]).slice(8, -1).toLowerCase();
                            if (attrDefaultType == attrInheritType && opt.isDeep) {
                                //类型相同
                                if (attrDefaultType == 'object') {
                                    //当为对象
                                    extend({ default: opt.default[attr], inherit: opt.inherit[attr] });
                                } else if (attrDefaultType == 'array') {
                                    //当为数组时
                                    opt.inherit[attr].forEach(function (v, i) {
                                        var vDefaultType = Object.prototype.toString.call(opt.default[attr][i]).slice(8, -1).toLowerCase();
                                        var vInheritType = Object.prototype.toString.call(opt.inherit[attr][i]).slice(8, -1).toLowerCase();
                                        if (vInheritType == vDefaultType && opt.isDeep) {
                                            if (vDefaultType == 'object') {
                                                extend({ default: opt.default[attr][i], inherit: opt.inherit[attr][i] });
                                            } else {
                                                opt.default[attr][i] = opt.inherit[attr][i];
                                            }
                                        } else {
                                            opt.default[attr][i] = opt.inherit[attr][i];
                                        }
                                    });
                                } else {
                                    opt.default[attr] = opt.inherit[attr];
                                }
                            } else {
                                //类型不同,直接后面的覆盖前面的
                                opt.default[attr] = opt.inherit[attr];
                            }
                        }
                    }
                } else {
                    opt.default = opt.inherit;
                }
            } else {
                opt.default = opt.inherit;
            }
            return opt.default;
        }
        // var obj1 = extend({
        //     default: {
        //         a: 'a',
        //         b: {
        //             b1: 'b1',
        //             b2: 'b2',
        //             b3: {
        //                 c1: 'c1'
        //             }
        //         }
        //     },
        //     inherit: {
        //         a: 0,
        //         b: {
        //             b2: 1,
        //             b3: {
        //                 c2: 2
        //             }
        //         }
        //     }
        // });
        // console.log(obj1);//{ a: 0, b: { b1: 'b1', b2: 1, b3: { c1: 'c1', c2: 2 } } }
        // var obj2 = extend({
        //     default: {
        //         b: [
        //             {a1: 'a1'},
        //             {a2: 'a2'}
        //         ]
        //     },
        //     inherit: {
        //         b: [
        //             'what?',
        //             {b1: 'b1'},
        //             {b2: 'b2'}
        //         ]
        //     }
        // });
        // console.log(obj2);//{ b: [ 'what?', { a2: 'a2', b1: 'b1' }, { b2: 'b2' } ] }
        module.exports = extend;
    }, {}], 8: [function (require, module, exports) {
        //对象的扩展方法
        var extend = require('../function/extend');

        //补零函数
        function fillZero(json) {
            var opt = extend({
                default: {
                    num: null
                },
                inherit: json
            });
            var num = opt.num;
            if (num < 10) {
                return '0' + num;
            } else {
                return '' + num;
            }
        }
        module.exports = fillZero;
    }, { "../function/extend": 7 }], 9: [function (require, module, exports) {
        var extend = require('../function/extend'); //对象的扩展方法

        //获取原生的dom节点并转换成数组,传入的参数仅支持:1.原生的dom节点,2.原生的dom集合,3.css选择器
        function getDomArray(json) {
            var opt = extend({
                default: {
                    element: null
                },
                inherit: json
            });
            var dom = [];
            if (opt.element) {
                //如果是字符串
                if (Object.prototype.toString.call(opt.element).slice(8, -1).toLowerCase() == 'string') {
                    dom = [].slice.call(document.querySelectorAll(opt.element));
                }
                //如果是dom节点(一个元素)    原生的
                if (opt.element.nodeType == 1) {
                    dom = [opt.element];
                }
                /*
                 * 如果是dom集合(一组元素)    HtmlCollection(通过getElementsBy系列获取到的)
                 * 如果是dom集合(一组元素)    NodeList(通过querySelectorAll获取到的)
                 * */
                if (Object.prototype.toString.call(opt.element).slice(8, -1).toLowerCase() == 'htmlcollection' || Object.prototype.toString.call(opt.element).slice(8, -1).toLowerCase() == 'nodelist') {
                    dom = [].slice.call(opt.element);
                }
            }
            return dom;
        }
        module.exports = getDomArray;
    }, { "../function/extend": 7 }], 10: [function (require, module, exports) {
        //获取指定父级
        function getParent(json) {
            var opt = json || {};
            var obj = opt.obj;
            var selector = opt.selector;
            if (!obj) {
                //第一参数不符合规范
                console.log('参数错误,第一参数需要一个元素节点对象');
                return null;
            }
            if (!selector) {
                //没有第二参数默认选取直接父级
                return obj.parentNode;
            } else if (typeof selector == 'string') {
                obj = obj.parentNode;
                switch (selector.charAt(0)) {
                    case '.':
                        //通过class获取父级
                        while (obj) {
                            if (!obj.classList) {
                                console.log('no find class');
                                return null;
                            }
                            if (obj.classList.contains(selector.substring(1))) {
                                return obj;
                            } else {
                                obj = obj.parentNode;
                            }
                        }
                        break;
                    case '#':
                        //通过id获取父级
                        while (obj) {
                            if (obj == document) {
                                console.log('no find id');
                                return null;
                            }
                            if (obj.id == selector.substring(1)) {
                                return obj;
                            } else {
                                obj = obj.parentNode;
                            }
                        }
                        break;
                    default:
                        //通过标签名获取父级
                        while (obj) {
                            if (obj == document) {
                                console.log('no find tagName');
                                return null;
                            }
                            if (obj.tagName.toLowerCase() == selector) {
                                return obj;
                            } else {
                                obj = obj.parentNode;
                            }
                        }
                        break;
                }
            }
        }
        module.exports = getParent;
    }, {}], 11: [function (require, module, exports) {
        //html转成DOM节点
        function htmlToDom(json) {
            var opt = json || {};
            var html = opt.html;
            var div = document.createElement('div');
            div.innerHTML = html;
            return div.children[0];
        }
        module.exports = htmlToDom;
    }, {}], 12: [function (require, module, exports) {
        //移除对象引用
        function objRemoveQuote(json) {
            var opt = json || {};
            var obj = opt.obj;
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
    }, {}], 13: [function (require, module, exports) {
        //把json格式的对象转成数组
        function objToArray(json) {
            var opt = json || {};
            var obj = opt.obj;
            var arr = [];
            if (obj instanceof Array) {
                obj.forEach(function (v, i) {
                    arr.push([i, v]);
                });
            } else {
                for (var attr in obj) {
                    if (obj.hasOwnProperty(attr)) {
                        arr.push({ key: attr, value: obj[attr] });
                    }
                }
            }
            return arr;
        }
        module.exports = objToArray;
    }, {}], 14: [function (require, module, exports) {
        var extend = require('../function/extend'); //对象的扩展
        var getDomArray = require('../function/get-dom-array'); //获取一组dom节点

        //获取元素距离文档的left和top
        function offset(json) {
            var opt = extend({
                default: {
                    element: null
                },
                inherit: json
            });
            var top = 0;
            var left = 0;
            var obj = getDomArray({ element: opt.element })[0];
            while (obj) {
                top += obj.offsetTop;
                left += obj.offsetLeft;
                obj = obj.offsetParent;
            }
            return {
                top: top,
                left: left
            };
        }
        module.exports = offset;
    }, { "../function/extend": 7, "../function/get-dom-array": 9 }], 15: [function (require, module, exports) {
        //滚动到指定位置
        function scrollTo(json) {
            var opt = json || {};
            var to = opt.to || '0';
            var scale = 6;
            var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
            var speed = 0;
            var timer = null;
            var fn = function fn() {
                speed = Math.ceil((scrollT - to) / scale);
                scrollT -= speed;
                window.scrollTo(0, scrollT);
                timer = requestAnimationFrame(fn);
                if (scrollT <= to * 1) {
                    cancelAnimationFrame(timer);
                }
            };
            requestAnimationFrame(fn);
        }
        module.exports = scrollTo;
    }, {}], 16: [function (require, module, exports) {
        //秒转时间
        function secondsToTime(json) {
            var opt = json || {};
            var seconds = opt.seconds;
            //天
            var d = Math.floor(seconds / 3600 / 24);
            //时
            var h = Math.floor(seconds / 3600 % 24);
            //分
            var m = Math.floor(seconds % 3600 / 60);
            //秒
            var s = Math.floor(seconds % 60);
            return { d: d, h: h, m: m, s: s, a: seconds };
        }
        module.exports = secondsToTime;
    }, {}], 17: [function (require, module, exports) {
        //全选,不选,反选
        var extend = require('../function/extend');
        var getDomArray = require('../function/get-dom-array');

        function Select(json) {
            this.opt = extend({
                default: {
                    items: null, //所有的被选项
                    callback: {
                        click: function click() {}
                    }
                },
                inherit: json
            });
            this.itemsDom = getDomArray({ element: this.opt.items });
            this.init();
        }

        //初始化
        Select.prototype.init = function () {
            this.power();
        };

        //不选
        Select.prototype.selectNothing = function () {
            this.itemsDom.forEach(function (v) {
                v.checked = false;
            });
        };

        //全选
        Select.prototype.selectAll = function () {
            this.itemsDom.forEach(function (v) {
                v.checked = true;
            });
        };

        //反选
        Select.prototype.selectReverse = function () {
            this.itemsDom.forEach(function (v) {
                v.checked = !v.checked;
            });
        };

        //当某一项被选中时,是否全部选项都被选中了
        Select.prototype.power = function () {
            var self = this;
            this.itemsDom.forEach(function (v1) {
                v1.addEventListener('click', function () {
                    var isCheckedAll = true; //是否全部的选项都被选中了(假设全部选中)
                    self.itemsDom.forEach(function (v2) {
                        if (v2.checked == false) {
                            isCheckedAll = false;
                        }
                    });
                    self.opt.callback.click({ element: this, isCheckedAll: isCheckedAll });
                });
            });
        };

        module.exports = Select;
    }, { "../function/extend": 7, "../function/get-dom-array": 9 }], 18: [function (require, module, exports) {
        //字符数量限制
        function strLimit(json) {
            var opt = json || {};
            var max = opt.max;
            var str = opt.str;
            if (!str) {
                return '';
            }
            var length = str.length;
            if (length > max) {
                str = str.substring(0, max);
            }
            return str;
        }
        module.exports = strLimit;
    }, {}], 19: [function (require, module, exports) {
        var extend = require('../function/extend');
        var secondsToTime = require('../function/seconds-to-time'); //时间转换

        //倒计时
        function timeCountDown(json) {
            var opt = extend({
                default: {
                    seconds: 0,
                    callback: {
                        run: function run() {},
                        over: function over() {}
                    }
                },
                inherit: json
            });
            var seconds = opt.seconds; //秒数
            var run = opt.callback.run; //运行的回调
            var over = opt.callback.over; //结束的回调
            //时间大于等于0秒
            if (seconds >= 0) {
                run(secondsToTime({ seconds: seconds })); //运行时的回调
                //倒计时走你
                var timer = setInterval(function () {
                    seconds--;
                    if (seconds >= 0) {
                        run(secondsToTime({ seconds: seconds })); //运行时的回调
                    } else {
                        over(); //结束时的回调
                        clearInterval(timer);
                    }
                }, 1000);
            }
            //时间小于0秒
            if (seconds < 0) {
                console.log('倒计时的秒数不能小于0');
            }
        }
        module.exports = timeCountDown;
    }, { "../function/extend": 7, "../function/seconds-to-time": 16 }], 20: [function (require, module, exports) {
        //是不是PC
        function isPc() {
            var userAgentInfo = navigator.userAgent;
            var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
            var flag = true;
            for (var v = 0; v < Agents.length; v++) {
                if (userAgentInfo.indexOf(Agents[v]) > 0) {
                    flag = false;
                    break;
                }
            }
            return flag;
        }
        //是不是微信
        function isWeiXin() {
            return navigator.userAgent.toLowerCase().match(/MicroMessenger/ig);
        }
        //是不是iphone
        function isIphone() {
            return window.navigator.appVersion.match(/iphone/ig);
        }
        //是不是android
        function isAndroid() {
            return window.navigator.appVersion.match(/android/ig);
        }
        module.exports.isPc = isPc;
        module.exports.isWeiXin = isWeiXin;
        module.exports.isIphone = isIphone;
        module.exports.isAndroid = isAndroid;
    }, {}], 21: [function (require, module, exports) {
        var extend = require('../function/extend');

        //当滚动到了浏览器的底部
        function WhenScrollBottom(json) {
            this.opt = extend({
                default: {
                    callback: {
                        success: function success() {},
                        fail: function fail() {}
                    },
                    interval: 80, //函数节流时间(延迟时间)
                    errorHeight: 0 //滚动到底部上面一定高度就算是滚动到底部了(误差高度)
                },
                inherit: json
            });
            this.isLoadOver = false; //数据是否加载完毕
            this.init();
        }

        WhenScrollBottom.prototype.init = function () {
            this.render();
            this.power();
        };

        WhenScrollBottom.prototype.render = function () {
            var callback = this.opt.callback;
            var allH = document.body.scrollHeight;
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            var clientHeight = document.documentElement.clientHeight;
            if (scrollTop + clientHeight >= allH - this.opt.errorHeight && !this.isLoadOver) {
                this.isLoadOver = true;
                callback.success(this);
                /*
                 * 条件:当你拿到请求的数据之后
                 * 可能性:1.如果你的数据加载完毕了,你需要手动把isLoadOver开关变成true
                 * 可能性:2.如果你的数据尚未加载完毕,你需要手动把isLoadOver开关变成false
                 * */
            } else {
                callback.fail();
            }
        };

        WhenScrollBottom.prototype.power = function () {
            var self = this;
            var timer = null;
            window.addEventListener('scroll', function () {
                clearTimeout(timer);
                timer = setTimeout(function () {
                    self.render();
                }, self.opt.interval);
            });
        };
        module.exports = WhenScrollBottom;
    }, { "../function/extend": 7 }], 22: [function (require, module, exports) {
        //是否禁止浏览器滚动
        function whetherDisableScroll() {
            var doc = document;
            return {
                //阻止冒泡
                stopPropagation: function stopPropagation(ev) {
                    ev.stopPropagation();
                },
                //阻止默认事件
                preventDefault: function preventDefault(ev) {
                    ev.preventDefault();
                },
                //阻止冒泡,阻止默认事件
                returnFalse: function returnFalse(ev) {
                    ev.preventDefault();
                    ev.stopPropagation();
                },
                //禁止滚动
                noScroll: function noScroll() {
                    doc.addEventListener('touchmove', this.preventDefault, false);
                    doc.documentElement.style.overflow = 'hidden';
                },
                //解除禁止浏览器滚动
                yesScroll: function yesScroll() {
                    doc.removeEventListener('touchmove', this.preventDefault, false);
                    doc.documentElement.style.overflow = 'auto';
                }
            };
        }
        module.exports = whetherDisableScroll;
    }, {}], 23: [function (require, module, exports) {
        //底层方法
        var base = require('../base/base');

        //底层构造函数
        function SuperType(json) {
            //函数外部传来的参数(这个属性在其他模块的内部需要被重写)
            this.opt = base.extend({
                //内部默认参数
                default: {
                    //父级
                    wrap: ".g-page", //这个仅支持传入选择器和原生dom节点
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
                        //外部容器创建之前
                        wrapDomCreateBefore: function wrapDomCreateBefore(self) {
                            //外部容器创建之前的回调待续...
                        },
                        //外部容器创建之后
                        wrapDomCreateAfter: function wrapDomCreateAfter(self) {
                            //外部容器创建之后的回调待续...
                        },
                        //外部容器渲染之前
                        wrapDomRenderBefore: function wrapDomRenderBefore(self) {
                            //外部容器渲染之前的回调待续...
                        },
                        //外部容器渲染之后
                        wrapDomRenderAfter: function wrapDomRenderAfter(self) {
                            //外部容器渲染之后的回调待续...
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
                inherit: json
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
            this.moduleDomRender();
            this.wrapDomRender();
        };

        //功能(这个方法在其他模块的内部需要被重写)
        SuperType.prototype.power = function () {
            //功能待续...
        };

        //内部模块的创建(这个方法在其他模块的内部需要被重写)
        SuperType.prototype.moduleDomCreate = function () {
            this.moduleDom = base.createElement({
                style: this.opt.config.moduleDomStyle,
                custom: this.opt.config.moduleDomCustomAttr,
                attribute: {
                    className: "m-super-type",
                    innerHTML: "\n                <div class=\"m-super-type-txt\">\u5468\u534E\u98DE\u7231\u4FAF\u4E3D\u6770,\u4FAF\u4E3D\u6770\u7231\u5468\u534E\u98DE</div>\n            "
                }
            });
        };

        //内部模块的渲染
        SuperType.prototype.moduleDomRender = function () {
            this.moduleDomRemove();
            var callback = this.opt.callback;
            callback.moduleDomCreateBefore(this);
            this.moduleDomCreate();
            callback.moduleDomCreateAfter(this);
        };

        //内部模块的移除
        SuperType.prototype.moduleDomRemove = function () {
            var callback = this.opt.callback;
            callback.moduleDomRemoveBefore(this);
            if (this.moduleDom && this.moduleDom.parentNode) {
                this.moduleDom.parentNode.removeChild(this.moduleDom);
            }
            this.moduleDomClearTimer();
            callback.moduleDomRemoveAfter(this);
        };

        //内部模块的定时器清除(假设内部模块有定时器)
        SuperType.prototype.moduleDomClearTimer = function () {
            if (this.opt.config.moduleDomIsClearTimer) {
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
            var callback = this.opt.callback;
            callback.moduleDomShowBefore(this);
            if (this.wrapDom) {
                this.opt.config.moduleDomIsShow = true;
                this.wrapDomRenderMethod();
            }
            callback.moduleDomShowAfter(this);
        };

        //内部模块的隐藏(显示隐藏和是否清除定时器无关)
        SuperType.prototype.moduleDomHide = function () {
            var callback = this.opt.callback;
            callback.moduleDomHideBefore(this);
            if (this.moduleDom.parentNode) {
                this.moduleDom.parentNode.removeChild(this.moduleDom);
                this.opt.config.moduleDomIsShow = false;
            }
            callback.moduleDomHideAfter(this);
        };

        //外部容器的创建
        SuperType.prototype.wrapDomCreate = function () {
            this.wrapDom = base.getDomArray({ element: this.opt.wrap })[0];
        };

        //外部容器的渲染
        SuperType.prototype.wrapDomRender = function () {
            var callback = this.opt.callback;
            callback.wrapDomCreateBefore(this);
            this.wrapDomCreate();
            callback.wrapDomCreateAfter(this);
            if (this.wrapDom) {
                callback.moduleDomRenderBefore(this);
                callback.wrapDomRenderBefore(this);
                this.wrapDomRenderMethod();
                callback.wrapDomRenderAfter(this);
                callback.moduleDomRenderAfter(this);
            }
        };

        //外部容器的渲染方式
        SuperType.prototype.wrapDomRenderMethod = function () {
            var config = this.opt.config;
            if (config.moduleDomIsShow) {
                var renderMethod = config.moduleDomRenderMethod;
                if (renderMethod.method == 'insertBefore') {
                    var dom = base.getDomArray({ element: renderMethod.child })[0];
                    if (dom) {
                        this.wrapDom.insertBefore(this.moduleDom, dom);
                    } else {
                        this.wrapDom.insertBefore(this.moduleDom, this.wrapDom.children[0]);
                    }
                }
                if (renderMethod.method == 'appendChild') {
                    this.wrapDom.appendChild(this.moduleDom);
                }
            }
        };

        //外部容器的移除
        SuperType.prototype.wrapDomRemove = function () {
            var callback = this.opt.callback;
            callback.wrapDomRemoveBefore(this);
            //先移除内部的模块
            this.moduleDomRemove();
            //再移除外部的容器
            if (this.wrapDom) {
                this.wrapDom.parentNode.removeChild(this.wrapDom);
            }
            callback.wrapDomRemoveAfter(this);
        };

        //获取内部模块的整体html结构
        SuperType.prototype.getModuleDomHtml = function () {
            return this.moduleDom.outerHTML;
        };

        module.exports = SuperType;
    }, { "../base/base": 1 }], 24: [function (require, module, exports) {
        //TouchSlide插件

        var TouchSlide = function TouchSlide(a) {
            a = a || {};var b = { slideCell: a.slideCell || "#touchSlide", titCell: a.titCell || ".hd li", mainCell: a.mainCell || ".bd", effect: a.effect || "left", autoPlay: a.autoPlay || !1, delayTime: a.delayTime || 200, interTime: a.interTime || 2500, defaultIndex: a.defaultIndex || 0, titOnClassName: a.titOnClassName || "on", autoPage: a.autoPage || !1, prevCell: a.prevCell || ".prev", nextCell: a.nextCell || ".next", pageStateCell: a.pageStateCell || ".pageState", pnLoop: "undefined " == a.pnLoop ? !0 : a.pnLoop, startFun: a.startFun || null, endFun: a.endFun || null, switchLoad: a.switchLoad || null },
                c = document.getElementById(b.slideCell.replace("#", ""));if (!c) return !1;var d = function d(a, b) {
                a = a.split(" ");var c = [];b = b || document;var d = [b];for (var e in a) {
                    0 != a[e].length && c.push(a[e]);
                }for (var e in c) {
                    if (0 == d.length) return !1;var f = [];for (var g in d) {
                        if ("#" == c[e][0]) f.push(document.getElementById(c[e].replace("#", "")));else if ("." == c[e][0]) for (var h = d[g].getElementsByTagName("*"), i = 0; i < h.length; i++) {
                            var j = h[i].className;j && -1 != j.search(new RegExp("\\b" + c[e].replace(".", "") + "\\b")) && f.push(h[i]);
                        } else for (var h = d[g].getElementsByTagName(c[e]), i = 0; i < h.length; i++) {
                            f.push(h[i]);
                        }
                    }d = f;
                }return 0 == d.length || d[0] == b ? !1 : d;
            },
                e = function e(a, b) {
                var c = document.createElement("div");c.innerHTML = b, c = c.children[0];var d = a.cloneNode(!0);return c.appendChild(d), a.parentNode.replaceChild(c, a), m = d, c;
            },
                g = function g(a, b) {
                !a || !b || a.className && -1 != a.className.search(new RegExp("\\b" + b + "\\b")) || (a.className += (a.className ? " " : "") + b);
            },
                h = function h(a, b) {
                !a || !b || a.className && -1 == a.className.search(new RegExp("\\b" + b + "\\b")) || (a.className = a.className.replace(new RegExp("\\s*\\b" + b + "\\b", "g"), ""));
            },
                i = b.effect,
                j = d(b.prevCell, c)[0],
                k = d(b.nextCell, c)[0],
                l = d(b.pageStateCell)[0],
                m = d(b.mainCell, c)[0];if (!m) return !1;var N,
                O,
                n = m.children.length,
                o = d(b.titCell, c),
                p = o ? o.length : n,
                q = b.switchLoad,
                r = parseInt(b.defaultIndex),
                s = parseInt(b.delayTime),
                t = parseInt(b.interTime),
                u = "false" == b.autoPlay || 0 == b.autoPlay ? !1 : !0,
                v = "false" == b.autoPage || 0 == b.autoPage ? !1 : !0,
                w = "false" == b.pnLoop || 0 == b.pnLoop ? !1 : !0,
                x = r,
                y = null,
                z = null,
                A = null,
                B = 0,
                C = 0,
                D = 0,
                E = 0,
                G = /hp-tablet/gi.test(navigator.appVersion),
                H = "ontouchstart" in window && !G,
                I = H ? "touchstart" : "mousedown",
                J = H ? "touchmove" : "",
                K = H ? "touchend" : "mouseup",
                M = m.parentNode.clientWidth,
                P = n;if (0 == p && (p = n), v) {
                p = n, o = o[0], o.innerHTML = "";var Q = "";if (1 == b.autoPage || "true" == b.autoPage) for (var R = 0; p > R; R++) {
                    Q += "<li>" + (R + 1) + "</li>";
                } else for (var R = 0; p > R; R++) {
                    Q += b.autoPage.replace("$", R + 1);
                }o.innerHTML = Q, o = o.children;
            }"leftLoop" == i && (P += 2, m.appendChild(m.children[0].cloneNode(!0)), m.insertBefore(m.children[n - 1].cloneNode(!0), m.children[0])), N = e(m, '<div class="tempWrap" style="overflow:hidden; position:relative;"></div>'), m.style.cssText = "width:" + P * M + "px;" + "position:relative;overflow:hidden;padding:0;margin:0;";for (var R = 0; P > R; R++) {
                m.children[R].style.cssText = "display:table-cell;vertical-align:top;width:" + M + "px";
            }var S = function S() {
                "function" == typeof b.startFun && b.startFun(r, p);
            },
                T = function T() {
                "function" == typeof b.endFun && b.endFun(r, p);
            },
                U = function U(a) {
                var b = ("leftLoop" == i ? r + 1 : r) + a,
                    c = function c(a) {
                    for (var b = m.children[a].getElementsByTagName("img"), c = 0; c < b.length; c++) {
                        b[c].getAttribute(q) && (b[c].setAttribute("src", b[c].getAttribute(q)), b[c].removeAttribute(q));
                    }
                };if (c(b), "leftLoop" == i) switch (b) {case 0:
                        c(n);break;case 1:
                        c(n + 1);break;case n:
                        c(0);break;case n + 1:
                        c(1);}
            },
                V = function V() {
                M = N.clientWidth, m.style.width = P * M + "px";for (var a = 0; P > a; a++) {
                    m.children[a].style.width = M + "px";
                }var b = "leftLoop" == i ? r + 1 : r;W(-b * M, 0);
            };window.addEventListener("resize", V, !1);var W = function W(a, b, c) {
                c = c ? c.style : m.style, c.webkitTransitionDuration = c.MozTransitionDuration = c.msTransitionDuration = c.OTransitionDuration = c.transitionDuration = b + "ms", c.webkitTransform = "translate(" + a + "px,0)" + "translateZ(0)", c.msTransform = c.MozTransform = c.OTransform = "translateX(" + a + "px)";
            },
                X = function X(a) {
                switch (i) {case "left":
                        r >= p ? r = a ? r - 1 : 0 : 0 > r && (r = a ? 0 : p - 1), null != q && U(0), W(-r * M, s), x = r;break;case "leftLoop":
                        null != q && U(0), W(-(r + 1) * M, s), -1 == r ? (z = setTimeout(function () {
                            W(-p * M, 0);
                        }, s), r = p - 1) : r == p && (z = setTimeout(function () {
                            W(-M, 0);
                        }, s), r = 0), x = r;}S(), A = setTimeout(function () {
                    T();
                }, s);for (var c = 0; p > c; c++) {
                    h(o[c], b.titOnClassName), c == r && g(o[c], b.titOnClassName);
                }0 == w && (h(k, "nextStop"), h(j, "prevStop"), 0 == r ? g(j, "prevStop") : r == p - 1 && g(k, "nextStop")), l && (l.innerHTML = "<span>" + (r + 1) + "</span>/" + p);
            };if (X(), u && (y = setInterval(function () {
                r++, X();
            }, t)), o) for (var R = 0; p > R; R++) {
                !function () {
                    var a = R;o[a].addEventListener("click", function () {
                        clearTimeout(z), clearTimeout(A), r = a, X();
                    });
                }();
            }k && k.addEventListener("click", function () {
                (1 == w || r != p - 1) && (clearTimeout(z), clearTimeout(A), r++, X());
            }), j && j.addEventListener("click", function () {
                (1 == w || 0 != r) && (clearTimeout(z), clearTimeout(A), r--, X());
            });var Y = function Y(a) {
                clearTimeout(z), clearTimeout(A), O = void 0, D = 0;var b = H ? a.touches[0] : a;B = b.pageX, C = b.pageY, m.addEventListener(J, Z, !1), m.addEventListener(K, $, !1);
            },
                Z = function Z(a) {
                if (!H || !(a.touches.length > 1 || a.scale && 1 !== a.scale)) {
                    var b = H ? a.touches[0] : a;if (D = b.pageX - B, E = b.pageY - C, "undefined" == typeof O && (O = !!(O || Math.abs(D) < Math.abs(E))), !O) {
                        switch (a.preventDefault(), u && clearInterval(y), i) {case "left":
                                (0 == r && D > 0 || r >= p - 1 && 0 > D) && (D = .4 * D), W(-r * M + D, 0);break;case "leftLoop":
                                W(-(r + 1) * M + D, 0);}null != q && Math.abs(D) > M / 3 && U(D > -0 ? -1 : 1);
                    }
                }
            },
                $ = function $(a) {
                0 != D && (a.preventDefault(), O || (Math.abs(D) > M / 10 && (D > 0 ? r-- : r++), X(!0), u && (y = setInterval(function () {
                    r++, X();
                }, t))), m.removeEventListener(J, Z, !1), m.removeEventListener(K, $, !1));
            };m.addEventListener(I, Y, !1);
        };

        module.exports = TouchSlide;
    }, {}] }, {}, [2]);