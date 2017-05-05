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
            px2rem: require('../function/px2rem'), //px2rem
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
    }, { "../function/array-remove-repeat": 4, "../function/constructor-inherit": 5, "../function/cookie": 6, "../function/create-element": 7, "../function/extend": 8, "../function/fill-zero": 9, "../function/get-dom-array": 10, "../function/get-parent": 11, "../function/html-to-dom": 12, "../function/obj-remove-quote": 13, "../function/obj-to-array": 14, "../function/offset": 15, "../function/px2rem": 16, "../function/scroll-to": 17, "../function/seconds-to-time": 18, "../function/select": 19, "../function/str-limit": 20, "../function/time-count-down": 21, "../function/user-agent": 22, "../function/when-scroll-bottom": 23, "../function/whether-disable-scroll": 24 }], 2: [function (require, module, exports) {
        window.addEventListener('load', function () {
            setTimeout(function () {

                //slide切换
                (function () {
                    var Slide = require('../modules/m-slide');
                    new Slide({
                        wrap: '.page-slide',
                        data: {
                            items: [{
                                src: 'http://img1.imgtn.bdimg.com/it/u=1056872014,4038868309&fm=23&gp=0.jpg',
                                href: ''
                            }, {
                                src: 'http://img3.imgtn.bdimg.com/it/u=1732308780,3782498029&fm=23&gp=0.jpg',
                                href: ''
                            }, {
                                src: 'http://img3.imgtn.bdimg.com/it/u=4027566086,3099254237&fm=23&gp=0.jpg',
                                href: ''
                            }, {
                                src: 'http://img4.imgtn.bdimg.com/it/u=120609946,455952432&fm=23&gp=0.jpg',
                                href: ''
                            }, {
                                src: 'http://img2.imgtn.bdimg.com/it/u=2763208243,961494673&fm=23&gp=0.jpg',
                                href: ''
                            }]
                        }
                    });
                })();

                //导航
                (function () {
                    var Navigation = require('../modules/m-navigation');
                    new Navigation({ wrap: '.page-navigation' });
                })();

                require('../common/common'); //每个页面都要用到的js(一定要放到最底部)
            }, 0);
        });
    }, { "../common/common": 3, "../modules/m-navigation": 28, "../modules/m-slide": 29 }], 3: [function (require, module, exports) {
        //版权
        (function () {
            if (pageInfo && pageInfo.config && pageInfo.config.isShowCopyright) {
                var Copyright = require('../modules/m-copyright');
                new Copyright();
            }
        })();

        //底部导航
        (function () {
            if (pageInfo && pageInfo.config && pageInfo.config.isShowFooterNav) {
                var Footer = require('../modules/m-footer-nav');
                new Footer();
            }
        })();

        //延迟加载
        (function () {
            var LazyLoad = require('../modules/m-lazy-load');
            new LazyLoad();
        })();
    }, { "../modules/m-copyright": 25, "../modules/m-footer-nav": 26, "../modules/m-lazy-load": 27 }], 4: [function (require, module, exports) {
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
    }, {}], 5: [function (require, module, exports) {
        var extend = require('../function/extend'); //对象的扩展方法
        var objRemoveQuote = require('../function/obj-remove-quote'); //对象移除引用

        //构造函数的继承(拷贝继承)
        function constructorInherit(json) {
            var opt = extend({
                defaults: {
                    superType: null, //继承哪个超类(这个必须传的是一个构造函数,或者不传值)
                    parameter: {} //默认参数(这个必须传的是一个对象,或者不传值)
                },
                inherits: json
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
                 * defaults要防止对象的引用(如果不防止的话,会出现BUG)
                 * 例如 wrap的默认值是'.g-page'
                 * 第一次   var obj1=new Sub({wrap:'body'});   wrap的值是'body'
                 * 第二次   var obj2=new Sub();    这里按理说wrap的值应该是默认值'.g-page'
                 * 但是由于对象引用的原因,这里的值会变成'body'
                 * 因此这里要处理掉对象的引用,所以我使用了JSON的方法进行了阻止
                 * 但是JSON.stringify方法居然会过滤掉对象内部的所有函数,真是日了狗了
                 * 所以我就封装了一个移除对象引用的函数
                 * */
                this.opt = extend({
                    defaults: objRemoveQuote({ obj: parameter }),
                    inherits: json
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
    }, { "../function/extend": 8, "../function/obj-remove-quote": 13 }], 6: [function (require, module, exports) {
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
    }, {}], 7: [function (require, module, exports) {
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
    }, {}], 8: [function (require, module, exports) {
        //对象的扩展方法
        function extend(json) {
            var opt = json || {};
            opt.defaults = opt.defaults || {}; //默认对象
            opt.inherits = opt.inherits || {}; //继承对像
            opt.isDeep = opt.isDeep == false ? opt.isDeep : true; //是否进行深拷贝(默认进行深拷贝)
            var defaultsType = Object.prototype.toString.call(opt.defaults).slice(8, -1).toLowerCase();
            var inheritsType = Object.prototype.toString.call(opt.inherits).slice(8, -1).toLowerCase();
            if (defaultsType == inheritsType && opt.isDeep) {
                if (defaultsType == 'object' || defaultsType == 'array') {
                    //当为对象或者为数组
                    for (var attr in opt.inherits) {
                        if (opt.inherits.hasOwnProperty(attr)) {
                            var attrDefaultsType = Object.prototype.toString.call(opt.defaults[attr]).slice(8, -1).toLowerCase();
                            var attrInheritsType = Object.prototype.toString.call(opt.inherits[attr]).slice(8, -1).toLowerCase();
                            if (attrDefaultsType == attrInheritsType && opt.isDeep) {
                                //类型相同
                                if (attrDefaultsType == 'object' || attrDefaultsType == 'array') {
                                    //当为对象或者为数组
                                    extend({ defaults: opt.defaults[attr], inherits: opt.inherits[attr] });
                                } else {
                                    opt.defaults[attr] = opt.inherits[attr];
                                }
                            } else {
                                //类型不同,直接后面的覆盖前面的
                                opt.defaults[attr] = opt.inherits[attr];
                            }
                        }
                    }
                } else {
                    opt.defaults = opt.inherits;
                }
            } else {
                opt.defaults = opt.inherits;
            }
            return opt.defaults;
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
    }, {}], 9: [function (require, module, exports) {
        //对象的扩展方法
        var extend = require('../function/extend');

        //补零函数
        function fillZero(json) {
            var opt = extend({
                defaults: {
                    num: null
                },
                inherits: json
            });
            var num = opt.num;
            if (num < 10) {
                return '0' + num;
            } else {
                return '' + num;
            }
        }
        module.exports = fillZero;
    }, { "../function/extend": 8 }], 10: [function (require, module, exports) {
        var extend = require('../function/extend'); //对象的扩展方法

        //获取原生的dom节点并转换成数组,传入的参数仅支持:1.原生的dom节点,2.原生的dom集合,3.css选择器
        function getDomArray(json) {
            var opt = extend({
                defaults: {
                    element: null
                },
                inherits: json
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
    }, { "../function/extend": 8 }], 11: [function (require, module, exports) {
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
    }, {}], 12: [function (require, module, exports) {
        //html转成DOM节点
        function htmlToDom(json) {
            var opt = json || {};
            var html = opt.html;
            var div = document.createElement('div');
            div.innerHTML = html;
            return div.children[0];
        }
        module.exports = htmlToDom;
    }, {}], 13: [function (require, module, exports) {
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
    }, {}], 14: [function (require, module, exports) {
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
    }, {}], 15: [function (require, module, exports) {
        var extend = require('../function/extend'); //对象的扩展
        var getDomArray = require('../function/get-dom-array'); //获取一组dom节点

        //获取元素距离文档的left和top
        function offset(json) {
            var opt = extend({
                defaults: {
                    element: null
                },
                inherits: json
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
    }, { "../function/extend": 8, "../function/get-dom-array": 10 }], 16: [function (require, module, exports) {
        //px2rem
        function px2rem(json) {
            var opt = json || opt;
            var base = opt.base || '320';
            var px = opt.px || '0';
            return px / base * 10 + 'rem';
        }
        module.exports = px2rem;
    }, {}], 17: [function (require, module, exports) {
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
    }, {}], 18: [function (require, module, exports) {
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
    }, {}], 19: [function (require, module, exports) {
        //全选,不选,反选
        var extend = require('../function/extend');
        var getDomArray = require('../function/get-dom-array');

        function Select(json) {
            this.opt = extend({
                defaults: {
                    items: null, //所有的被选项
                    callback: {
                        click: function click() {}
                    }
                },
                inherits: json
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
    }, { "../function/extend": 8, "../function/get-dom-array": 10 }], 20: [function (require, module, exports) {
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
    }, {}], 21: [function (require, module, exports) {
        var extend = require('../function/extend');
        var secondsToTime = require('../function/seconds-to-time'); //时间转换

        //倒计时
        function timeCountDown(json) {
            var opt = extend({
                defaults: {
                    seconds: 0,
                    callback: {
                        run: function run() {},
                        over: function over() {}
                    }
                },
                inherits: json
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
    }, { "../function/extend": 8, "../function/seconds-to-time": 18 }], 22: [function (require, module, exports) {
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
    }, {}], 23: [function (require, module, exports) {
        var extend = require('../function/extend');

        //当滚动到了浏览器的底部
        function WhenScrollBottom(json) {
            this.opt = extend({
                defaults: {
                    callback: {
                        success: function success() {},
                        fail: function fail() {}
                    },
                    interval: 80, //函数节流时间(延迟时间)
                    errorHeight: 0 //滚动到底部上面一定高度就算是滚动到底部了(误差高度)
                },
                inherits: json
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
    }, { "../function/extend": 8 }], 24: [function (require, module, exports) {
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
    }, {}], 25: [function (require, module, exports) {
        //底层方法
        var base = require('../base/base');

        //超类型(子类型继承的对象)
        var SuperType = require('../modules/m-super-type');

        //子类型
        var SubType = base.constructorInherit({
            superType: SuperType,
            //默认参数(继承超类型)
            parameter: {
                //回调
                callback: {},
                //配置
                config: {},
                //数据
                data: {}
            }
        });

        //内部模块的创建(覆盖超类型)
        SubType.prototype.moduleDomCreate = function () {
            this.moduleDom = base.createElement({
                style: this.opt.config.moduleDomStyle,
                custom: this.opt.config.moduleDomCustomAttr,
                attribute: {
                    className: "m-copyright",
                    innerHTML: "\n                <div class=\"m-copyright-icon iconfont icon-banquan\"></div>\n                <div class=\"m-copyright-txt\">\u7248\u6743\u4FE1\u606F\u54DF</div>\n            "
                }
            });
        };

        //功能(覆盖超类型)
        SubType.prototype.power = function () {
            //功能重写待续...
        };

        module.exports = SubType;
    }, { "../base/base": 1, "../modules/m-super-type": 30 }], 26: [function (require, module, exports) {
        //底层方法
        var base = require('../base/base');

        //超类型(子类型继承的对象)
        var SuperType = require('../modules/m-super-type');

        //子类型
        var SubType = base.constructorInherit({
            superType: SuperType,
            //默认参数(继承超类型)
            parameter: {
                //回调
                callback: {},
                //配置
                config: {},
                //数据
                data: {}
            }
        });

        SubType.prototype.moduleDomCreate = function () {
            this.moduleDomClass = "m-footer-nav";
            var moduleDomHtml = "\n        <div class=\"m-footer-nav-wrap\">\n            <a class=\"m-footer-nav-body\" href=\"/\">\n                <div class=\"m-footer-nav-body-icon iconfont icon-shouye\"></div>\n                <div class=\"m-footer-nav-body-txt\">\u9996\u9875</div>\n            </a>\n            <a class=\"m-footer-nav-body\" href=\"\">\n                <div class=\"m-footer-nav-body-icon iconfont icon-fenxiao\"></div>\n                <div class=\"m-footer-nav-body-txt\">\u6211\u8981\u5F00\u5E97</div>\n            </a>\n            <a class=\"m-footer-nav-body\" href=\"/cart\">\n                <div class=\"m-footer-nav-body-icon iconfont icon-gouwuche\"></div>\n                <div class=\"m-footer-nav-body-txt\">\u8D2D\u7269\u8F66</div>\n            </a>\n            <a class=\"m-footer-nav-body\" href=\"\">\n                <div class=\"m-footer-nav-body-icon iconfont icon-kefu\"></div>\n                <div class=\"m-footer-nav-body-txt\">\u5BA2\u670D</div>\n            </a>\n            <a class=\"m-footer-nav-body\" href=\"/mine\">\n                <div class=\"m-footer-nav-body-icon iconfont icon-wode\"></div>\n                <div class=\"m-footer-nav-body-txt\">\u6211\u7684</div>\n            </a>\n        </div>\n    ";
            this.moduleDom = base.createElement({
                style: this.opt.config.moduleDomStyle,
                custom: this.opt.config.moduleDomCustomAttr,
                attribute: {
                    className: this.moduleDomClass,
                    innerHTML: moduleDomHtml
                }
            });
        };

        //功能(覆盖超类型)
        SubType.prototype.power = function () {
            //功能重写待续...
        };

        module.exports = SubType;
    }, { "../base/base": 1, "../modules/m-super-type": 30 }], 27: [function (require, module, exports) {
        //底层方法
        var base = require('../base/base');

        //延迟加载
        function LazyLoad(json) {
            this.opt = base.extend({
                defaults: {
                    element: '.m-lazy-load',
                    moreHeight: 0, //多加载一部分高度的图片
                    interval: 80 //函数节流时间(延迟时间)
                },
                inherits: json
            });
            this.clientHeight = document.documentElement.clientHeight;
            this.init();
        }
        LazyLoad.prototype.init = function () {
            this.render();
            this.power();
        };
        LazyLoad.prototype.render = function () {
            var moreHeight = this.opt.moreHeight;
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            var minTop = scrollTop - moreHeight;
            var maxTop = this.clientHeight + minTop + moreHeight;
            var src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUCB1jYAACAAAFAAGNu5vzAAAAAElFTkSuQmCC';
            var aDom = base.getDomArray({ element: this.opt.element });
            aDom.forEach(function (v) {
                if (v.tagName.toLowerCase() == 'img') {
                    if (!v.getAttribute('src')) {
                        v.src = src;
                    }
                    v.setAttribute('height', '100%');
                    v.setAttribute('width', '100%');
                }
            });
            aDom.forEach(function (v) {
                //排除那些被none掉的元素(被none掉的元素,通过offsetWidth和offsetHeight获取到的值是0)
                if (v.offsetWidth) {
                    var elementTop = base.offset({ element: v }).top;
                    var elementBottom = elementTop + v.offsetHeight;
                    //出现在可视区才进行处理
                    if (elementBottom >= minTop && elementTop <= maxTop) {
                        if (v.tagName.toLowerCase() == 'img') {
                            if (v.dataset.src) {
                                v.src = v.dataset.src;
                            }
                            v.removeAttribute('height');
                            v.removeAttribute('width');
                        } else {
                            if (v.dataset.src) {
                                v.style.backgroundImage = 'url(' + v.dataset.src + ')';
                            }
                        }
                        v.classList.remove('m-lazy-load');
                        v.classList.add('m-lazy-load-active');
                    }
                }
            });
        };
        LazyLoad.prototype.power = function () {
            var self = this;
            var timer = null;
            window.addEventListener('scroll', function () {
                clearTimeout(timer);
                timer = setTimeout(function () {
                    self.render();
                }, self.opt.interval);
            });
        };
        module.exports = LazyLoad;
    }, { "../base/base": 1 }], 28: [function (require, module, exports) {
        //底层方法
        var base = require('../base/base');

        //超类型(子类型继承的对象)
        var SuperType = require('../modules/m-super-type');

        //子类型
        var SubType = base.constructorInherit({
            superType: SuperType,
            //默认参数(继承超类型)
            parameter: {
                //回调
                callback: {},
                //配置
                config: {},
                //数据
                data: {
                    items: [{
                        href: '/',
                        icon: 'icon-shouye',
                        txt: '周',
                        mark: ''
                    }, {
                        href: '/mine',
                        icon: 'icon-wode',
                        txt: '华',
                        mark: ''
                    }, {
                        href: '/ui',
                        icon: 'icon-guanzhu',
                        txt: '飞',
                        mark: ''
                    }, {
                        href: '/setting',
                        icon: 'icon-shezhi',
                        txt: '永',
                        mark: ''
                    }, {
                        href: '/cart',
                        icon: 'icon-gouwuche',
                        txt: '远',
                        mark: ''
                    }, {
                        href: '/',
                        icon: 'icon-shoucang',
                        txt: '爱',
                        mark: ''
                    }, {
                        href: '/mine',
                        icon: 'icon-shoucang',
                        txt: '侯',
                        mark: ''
                    }, {
                        href: '/ui',
                        icon: 'icon-shoucang',
                        txt: '丽',
                        mark: ''
                    }, {
                        href: '/setting',
                        icon: 'icon-shoucang',
                        txt: '杰',
                        mark: ''
                    }, {
                        href: '/cart',
                        icon: 'icon-shoucang',
                        txt: '!',
                        mark: ''
                    }]
                }
            }
        });

        //内部模块的创建(覆盖超类型)
        SubType.prototype.moduleDomCreate = function () {
            var data = this.opt.data;
            var items = data.items;
            var html = "";
            items.forEach(function (v) {
                var markHtml = "";
                if (v.mark) {
                    markHtml = "<div class=\"m-navigation-mark\">" + v.mark + "</div>";
                }
                html += "\n            <a href=\"" + v.href + "\" class=\"m-navigation-wrap\">\n                <div class=\"m-navigation-icon iconfont " + v.icon + "\"></div>\n                <div class=\"m-navigation-txt\">" + v.txt + "</div>\n                " + markHtml + "\n            </a>\n        ";
            });
            this.moduleDom = base.createElement({
                style: this.opt.config.moduleDomStyle,
                custom: this.opt.config.moduleDomCustomAttr,
                attribute: {
                    className: "m-navigation",
                    innerHTML: html
                }
            });
        };

        //功能(覆盖超类型)
        SubType.prototype.power = function () {
            //功能重写待续...
        };

        module.exports = SubType;
    }, { "../base/base": 1, "../modules/m-super-type": 30 }], 29: [function (require, module, exports) {
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
                        slideCell: '', //外部容器,这个值会在底部进行覆盖,因为在这里没办法获取this
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
                    html += "<a href=\"" + (v.href || 'javascript:;') + "\" class=\"m-slide-item\" data-src=\"" + v.src + "\"></a>";
                } else {
                    html += "<a class=\"m-slide-item\" data-src=\"" + v.src + "\"></a>";
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
                var allImg = self.moduleDom.querySelectorAll('.m-slide-body .m-slide-item');
                var nowIndex = i + 1;
                if (touchSlide.effect == 'left') {
                    nowIndex = i;
                }
                var nowImg = allImg[nowIndex];
                var prevImg = allImg[nowIndex - 1];
                var nextImg = allImg[nowIndex + 1];
                nowImg.style.backgroundImage = "url(" + nowImg.dataset.src + ")";
                prevImg && (prevImg.style.backgroundImage = "url(" + prevImg.dataset.src + ")");
                nextImg && (nextImg.style.backgroundImage = "url(" + nextImg.dataset.src + ")");
                callback.startFun({ self: self, index: i });
            };
            touchSlide.endFun = function (i) {
                callback.endFun({ self: self, index: i });
            };
            TouchSlide(self.opt.config.touchSlide);
        };

        module.exports = SubType;
    }, { "../base/base": 1, "../modules/m-super-type": 30, "../plugs/touch-slide": 31 }], 30: [function (require, module, exports) {
        //底层方法
        var base = require('../base/base');

        //底层构造函数
        function SuperType(json) {
            //函数外部传来的参数(这个属性在其他模块的内部需要被重写)
            this.opt = base.extend({
                //内部默认参数
                defaults: {
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
    }, { "../base/base": 1 }], 31: [function (require, module, exports) {
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
         * 本项目的作者对此文件进行了稍微改动,还请见谅
         * 1.支持传入class和dom节点
         * 2.样式修改成flex布局
         * 3.把一些不规范的语法警告提示修正
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
                switchLoad: a.switchLoad || null //每次切换效果结束时执行函数，用于处理特殊情况或创建更多效果。用法 endFun:function(i,c){ }； 其中i为当前分页，c为总页数
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
            var sLoad = opts.switchLoad;
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
            var doSwitchLoad = function doSwitchLoad(moving) {
                var curIndex = (effect == "leftLoop" ? index + 1 : index) + moving;
                var changeImg = function changeImg(ind) {
                    var img = conBox.children[ind].getElementsByTagName("img");
                    for (var i = 0; i < img.length; i++) {
                        if (img[i].getAttribute(sLoad)) {
                            img[i].setAttribute("src", img[i].getAttribute(sLoad));
                            img[i].removeAttribute(sLoad);
                        }
                    }
                };
                changeImg(curIndex);
                if (effect == "leftLoop") {
                    switch (curIndex) {
                        case 0:
                            changeImg(conBoxSize);
                            break;
                        case 1:
                            changeImg(conBoxSize + 1);
                            break;
                        case conBoxSize:
                            changeImg(0);
                            break;
                        case conBoxSize + 1:
                            changeImg(1);
                            break;
                    }
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
                        if (sLoad != null) {
                            doSwitchLoad(0);
                        }
                        translate(-index * slideW, delayTime);
                        oldIndex = index;
                        break;
                    case "leftLoop":
                        if (sLoad != null) {
                            doSwitchLoad(0);
                        }
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
                doStartFun();
                endTimeout = setTimeout(function () {
                    doEndFun();
                }, delayTime);
                //设置className
                for (var i = 0; i < navObjSize; i++) {
                    removeClass(navObj[i], opts.titOnClassName);
                    if (i == index) {
                        addClass(navObj[i], opts.titOnClassName);
                    }
                }
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
                    if (sLoad != null && Math.abs(distX) > slideW / 3) {
                        doSwitchLoad(distX > -0 ? -1 : 1);
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
    }, {}] }, {}, [2]);