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
        /**
         * Created by zhouhuafei on 16/12/4.
         */
        //一些小方法
        var base = {
            constructorInherit: require('../function/constructor-inherit.js'),
            isPc: require('../function/is-pc.js'),
            cookie: require('../function/cookie.js'),
            fillZero: require('../function/fill-zero.js'),
            getParent: require('../function/get-parent.js'),
            goTop: require('../function/go-top.js'),
            htmlToDom: require('../function/html-to-dom.js'),
            whetherDisableScroll: require('../function/whether-disable-scroll.js'),
            whenScrollBottom: require('../function/when-scroll-bottom.js'),
            jsonToArray: require('../function/json-to-array.js'),
            secondsToTime: require('../function/seconds-to-time.js'),
            timeCountDown: require('../function/time-count-down.js'),
            strLimit: require('../function/str-limit.js'),
            getOneDom: require('../function/get-one-dom.js'),
            createElement: require('../function/create-element.js'),
            extend: require('../function/extend.js')
        };
        module.exports = base;
    }, { "../function/constructor-inherit.js": 3, "../function/cookie.js": 4, "../function/create-element.js": 5, "../function/extend.js": 6, "../function/fill-zero.js": 7, "../function/get-one-dom.js": 8, "../function/get-parent.js": 9, "../function/go-top.js": 10, "../function/html-to-dom.js": 11, "../function/is-pc.js": 12, "../function/json-to-array.js": 13, "../function/seconds-to-time.js": 15, "../function/str-limit.js": 16, "../function/time-count-down.js": 17, "../function/when-scroll-bottom.js": 19, "../function/whether-disable-scroll.js": 20 }], 2: [function (require, module, exports) {
        /**
         * Created by zhouhuafei on 16/12/4.
         */
        //测试
        (function () {
            var Test = require('../modules/m-super-type.js');
            var test = new Test({
                parent: document.querySelector(".main-test"),
                config: {
                    moduleDomIsClearTimer: true
                }
            });
        })();
        //底部
        (function () {
            var Footer = require('../modules/m-footer.js');
            new Footer();
        })();
        //遮罩
        (function () {
            var Mask = require('../modules/m-mask.js');
            var mask = new Mask({
                callback: {
                    moduleDomClick: function moduleDomClick() {
                        console.log('m-mask click callback');
                        mask.moduleDomHide();
                    }
                }
            });
            mask.moduleDomShow();
        })();
        //单选开关
        (function () {
            var Radio = require('../modules/m-radio-switch.js');
            var main = document.querySelector('.main-radio-switch');
            var radio = new Radio({
                checkTxt: {
                    on: '开',
                    off: '关'
                },
                status: 'off',
                isHand: false,
                clickCallback: function clickCallback(result) {
                    console.log(result);
                }
            });
            main.appendChild(radio.parentDom);
        })();
        //表格
        (function () {
            var Table = require('../modules/m-table.js');
            var table = new Table({
                parent: ".main-table",
                data: {
                    header: [{
                        html: "<div>header0</div>"
                    }, {
                        html: "<div>header1</div>"
                    }, {
                        html: "<div>header2</div>"
                    }],
                    body: [[{
                        html: "<div>body0-0</div>"
                    }, {
                        html: "<div>body1-0</div>"
                    }, {
                        html: "<div>body2-0</div>"
                    }], [{
                        html: "<div>body0-1</div>"
                    }, {
                        html: "<div>body1-1</div>"
                    }, {
                        html: "<div>body2-1</div>"
                    }], [{
                        html: "<div>body0-2</div>"
                    }, {
                        html: "<div>body1-2</div>"
                    }, {
                        html: "<div>body2-2</div>"
                    }]],
                    footer: ""
                }
            });
        })();
        //验证
        (function () {
            var ValidateInput = require('../modules/m-validate-input.js');
            var aInput = [].slice.call(document.querySelectorAll('.m-validate-input'));
            aInput.forEach(function (v) {
                var validate = new ValidateInput({ input: v });
                validate.validateEventBlur();
            });
        })();
        //星评
        (function () {
            var Star = require('../modules/m-star.js');
            var star = new Star({
                parent: ".main-star",
                callback: {
                    moduleDomClick: function moduleDomClick(json) {
                        console.log(json);
                    }
                }
            });
        })();
        //延迟加载
        require('../function/lazyload.js')();
    }, { "../function/lazyload.js": 14, "../modules/m-footer.js": 21, "../modules/m-mask.js": 22, "../modules/m-radio-switch.js": 23, "../modules/m-star.js": 24, "../modules/m-super-type.js": 25, "../modules/m-table.js": 26, "../modules/m-validate-input.js": 27 }], 3: [function (require, module, exports) {
        //对象的扩展方法
        var extend = require('../function/extend.js');

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
            //子类型的参数(需要是个对象)
            var parameter = opt.parameter;
            //如果超类型不存在
            if (Object.prototype.toString.call(SuperType).toLowerCase().slice(8, -1) != 'function') {
                console.log('no find SuperType or SuperType error');
                return false;
            }
            //子类型
            function SupType(json) {
                this.opt = extend({
                    default: parameter,
                    inherit: json
                });
                //子类型继承超类型的属性
                opt.superType.call(this, this.opt);
            }
            //子类型继承超类型的方法
            for (var attr in SuperType.prototype) {
                if (SuperType.prototype.hasOwnProperty(attr)) {
                    SupType.prototype[attr] = SuperType.prototype[attr];
                }
            }
            return SupType;
        }
        module.exports = constructorInherit;
    }, { "../function/extend.js": 6 }], 4: [function (require, module, exports) {
        /**
         * Created by zhouhuafei on 17/1/1.
         */
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
    }, {}], 5: [function (require, module, exports) {
        /**
         * Created by zhouhuafei on 17/3/19.
         */
        function createElement(json) {
            var opt = json || {};
            opt.elementName = opt.elementName || 'div'; //标签名称
            opt.attribute = opt.attribute || {}; //普通属性,checked,selected
            opt.custom = opt.custom || {}; //自定义属性
            opt.style = opt.style || ""; //style样式
            var elementNode = document.createElement("" + opt.elementName); //元素节点
            for (var attr0 in opt.attribute) {
                if (opt.attribute.hasOwnProperty(attr0)) {
                    elementNode[attr0] = opt.attribute[attr0];
                }
            }
            for (var attr1 in opt.custom) {
                if (opt.custom.hasOwnProperty(attr1)) {
                    elementNode.setAttribute('data-' + attr1, opt.custom[attr1]);
                }
            }
            if (opt.style) {
                elementNode.setAttribute('style', opt.style);
            }
            return elementNode;
        }
        module.exports = createElement;
    }, {}], 6: [function (require, module, exports) {
        //对象的扩展方法
        function extend(json) {
            var opt = json || {};
            opt.default = opt.default || {}; //默认对象
            opt.inherit = opt.inherit || {}; //继承对像
            opt.isDeep = opt.isDeep == false ? opt.isDeep : true; //是否进行深拷贝(默认进行深拷贝)
            var defaultType = Object.prototype.toString.call(opt.default).slice(8, -1).toLowerCase();
            var inheritType = Object.prototype.toString.call(opt.inherit).slice(8, -1).toLowerCase();
            if (defaultType == inheritType && opt.isDeep) {
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
            return opt.default;
        }
        /*
        var obj1 = extend({
            default: {
                a: 'a',
                b: {
                    b1: 'b1',
                    b2: 'b2',
                    b3: {
                        c1: 'c1'
                    }
                }
            },
            inherit: {
                a: 0,
                b: {
                    b2: 1,
                    b3: {
                        c2: 2
                    }
                }
            }
        });
        console.log(obj1);//{ a: 0, b: { b1: 'b1', b2: 1, b3: { c1: 'c1', c2: 2 } } }
        var obj2 = extend({
            default: {
                b: [
                    {a1: 'a1'},
                    {a2: 'a2'}
                ]
            },
            inherit: {
                b: [
                    'what?',
                    {b1: 'b1'},
                    {b2: 'b2'}
                ]
            }
        });
        console.log(obj2);//{ b: [ 'what?', { a2: 'a2', b1: 'b1' }, { b2: 'b2' } ] }
        */
        module.exports = extend;
    }, {}], 7: [function (require, module, exports) {
        //对象的扩展方法
        var extend = require('../function/extend.js');

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
    }, { "../function/extend.js": 6 }], 8: [function (require, module, exports) {
        //对象的扩展方法
        var extend = require('../function/extend.js');

        //获取一个原生的dom节点,当传入的是dom,或者是选择器的时候
        function getOneDom(json) {
            var opt = extend({
                default: {
                    dom: null
                },
                inherit: json
            });
            var resultDom = null;
            if (opt.dom) {
                //如果是字符串
                if (Object.prototype.toString.call(opt.dom).slice(8, -1).toLowerCase() == 'string') {
                    resultDom = document.querySelector(opt.dom);
                }
                //如果是dom节点
                if (opt.dom.nodeType && opt.dom.nodeType == 1) {
                    resultDom = opt.dom;
                }
            }
            return resultDom;
        }
        module.exports = getOneDom;
    }, { "../function/extend.js": 6 }], 9: [function (require, module, exports) {
        /**
         * Created by zhouhuafei on 17/1/1.
         */
        "use strict";
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
    }, {}], 10: [function (require, module, exports) {
        /**
         * Created by zhouhuafei on 17/1/1.
         */
        //返回顶部
        function goTop(json) {
            var opt = json || {};
            var obj = opt.obj;
            var to = opt.to || '0';
            if (!obj) {
                console.log('parameter error');
                return false;
            }
            var doc = document;
            var scale = 6;
            var scrollT = doc.documentElement.scrollTop || doc.body.scrollTop;
            var speed = 0;
            var timer = null;
            var fn = function fn() {
                speed = Math.ceil(scrollT - to / scale);
                scrollT -= speed;
                window.scrollTo(0, scrollT);
                timer = requestAnimationFrame(fn);
                if (scrollT <= to * 1) {
                    cancelAnimationFrame(timer);
                }
            };
            obj.addEventListener('click', function (ev) {
                ev.stopPropagation();
                ev.preventDefault();
                scrollT = doc.documentElement.scrollTop || doc.body.scrollTop;
                requestAnimationFrame(fn);
            });
            doc.addEventListener('touchstart', function () {
                cancelAnimationFrame(timer);
            });
        }
        module.exports = goTop;
    }, {}], 11: [function (require, module, exports) {
        /**
         * Created by zhouhuafei on 17/1/1.
         */
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
        module.exports = isPc;
    }, {}], 13: [function (require, module, exports) {
        /**
         * Created by zhouhuafei on 17/1/1.
         */
        //对象转数组
        function jsonToArray(json) {
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
                        arr.push([attr, obj[attr]]);
                    }
                }
            }
            return arr;
        }
        module.exports = jsonToArray;
    }, {}], 14: [function (require, module, exports) {
        /**
         * Created by zhouhuafei on 16/12/17.
         */
        function lazyload(json) {
            var opt = json || {};
            var height = opt.height || 0; //多加载一部分高度的图片
            var interval = opt.interval || 80; //延迟时间
            var doc = document;
            var fn = function fn() {
                var aImg = [].slice.call(doc.getElementsByClassName('m-lazy-load')); //所有的img元素节点
                var iLen = aImg.length;
                if (!iLen) {
                    return false;
                }
                //获取top
                var offsetTop = function offsetTop(obj) {
                    var top = 0;
                    while (obj) {
                        top += obj.offsetTop;
                        obj = obj.offsetParent;
                    }
                    return top;
                };
                var src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUCB1jYAACAAAFAAGNu5vzAAAAAElFTkSuQmCC';
                aImg.forEach(function (v) {
                    if (v.getAttribute('src') != v.dataset.src && v.tagName.toLowerCase() == 'img') {
                        v.src = src;
                        v.setAttribute('height', '100%');
                        v.setAttribute('width', '100%');
                        v.style.opacity = '0';
                        v.style.transition = 'opacity 0.4s';
                    }
                });
                var iClientH = doc.documentElement.clientHeight;
                var iScrollTop = doc.documentElement.scrollTop || doc.body.scrollTop;
                var iResultTop = iClientH + iScrollTop + height;
                aImg.forEach(function (v) {
                    var iObjTop = offsetTop(v) - height;
                    var iObjBottom = offsetTop(v) + v.offsetHeight;
                    //height
                    if (iResultTop >= iObjTop && iObjTop >= iScrollTop || iObjBottom > iScrollTop && iObjBottom < iResultTop) {
                        if (v.tagName.toLowerCase() == 'img') {
                            if (v.getAttribute('src') != v.dataset.src) {
                                v.src = v.dataset.src;
                                v.removeAttribute('height');
                                v.removeAttribute('width');
                            }
                        } else {
                            v.style.backgroundImage = 'url(' + v.dataset.src + ')';
                            v.style.backgroundPosition = 'center center';
                            v.style.backgroundRepeat = 'no-repeat';
                        }
                        v.style.opacity = '1';
                        v.classList.add('m-lazy-load-show');
                    }
                });
            };
            fn();
            var timer = null;
            var fnScroll = function fnScroll() {
                clearTimeout(timer);
                timer = setTimeout(function () {
                    fn();
                }, interval);
            };
            window.addEventListener('scroll', function () {
                fnScroll();
            });
        }
        module.exports = lazyload;
    }, {}], 15: [function (require, module, exports) {
        /**
         * Created by zhouhuafei on 17/1/1.
         */
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
    }, {}], 16: [function (require, module, exports) {
        /**
         * Created by zhouhuafei on 17/1/1.
         */
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
    }, {}], 17: [function (require, module, exports) {
        /**
         * Created by zhouhuafei on 17/1/1.
         */
        //倒计时
        function timeCountDown(json) {
            var opt = json || {};
            var seconds = opt.seconds;
            //运行的回调
            var runCallback = opt.runCallback;
            //结束的回调
            var overCallback = opt.overCallback;
            //时间转换
            var timeTransform = function timeTransform(opt) {
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
            };
            if (seconds <= 0) {
                //时间小于等于0秒
                seconds = 0;
                runCallback && runCallback(timeTransform({ seconds: seconds })); //运行时的回调
                overCallback && overCallback(); //结束时的回调
            } else {
                //时间大于0秒
                runCallback && runCallback(timeTransform({ seconds: seconds })); //运行时的回调
                //倒计时走你
                var timer = setInterval(function () {
                    seconds--;
                    runCallback && runCallback(timeTransform({ seconds: seconds })); //运行时的回调
                    if (seconds < 0) {
                        seconds = 0;
                        clearInterval(timer);
                        runCallback && runCallback(timeTransform({ seconds: seconds })); //运行时的回调
                        overCallback && overCallback(); //结束时的回调
                    }
                }, 1000);
            }
        }
        module.exports = timeCountDown;
    }, {}], 18: [function (require, module, exports) {
        /**
         * Created by zhouhuafei on 16/12/4.
         */
        //验证
        var validate = {
            //是不是空
            isSpace: function isSpace(json) {
                var opt = json || {};
                var success = opt.success || function () {
                    console.log('no find success callback');
                };
                var fail = opt.fail || function () {
                    console.log('no find fail callback');
                };
                var value = opt.value || " ";
                var valueTrim = value.trim();
                var b = false;
                if (valueTrim == '') {
                    b = true;
                    success();
                } else {
                    fail();
                }
                return b;
            },
            //是不是0
            isZero: function isZero(json) {
                var opt = json || {};
                var success = opt.success || function () {
                    console.log('no find success callback');
                };
                var fail = opt.fail || function () {
                    console.log('no find fail callback');
                };
                var value = opt.value || " ";
                var valueTrim = value.trim();
                var b = false;
                if (valueTrim == 0) {
                    b = true;
                    success();
                } else {
                    fail();
                }
                return b;
            },
            //是不是整数(包含0)
            isInteger: function isInteger(json) {
                var opt = json || {};
                var success = opt.success || function () {
                    console.log('no find success callback');
                };
                var fail = opt.fail || function () {
                    console.log('no find fail callback');
                };
                var value = opt.value || " ";
                var valueTrim = value.trim();
                var re = /^\d+$/;
                var b = false;
                if (re.test(valueTrim)) {
                    b = true;
                    success();
                } else {
                    fail();
                }
                return b;
            },
            //是不是保留了num位小数点
            isReservedDecimal: function isReservedDecimal(json) {
                var opt = json || {};
                var success = opt.success || function () {
                    console.log('no find success callback');
                };
                var fail = opt.fail || function () {
                    console.log('no find fail callback');
                };
                var num = opt.num || 2;
                var value = opt.value || " ";
                var valueTrim = value.trim();
                var re = new RegExp("^\\d+\\.\\d{" + num + "}$");
                var b = false;
                if (re.test(valueTrim)) {
                    b = true;
                    success();
                } else {
                    fail();
                }
                return b;
            }
        };
        module.exports = validate;
    }, {}], 19: [function (require, module, exports) {
        /**
         * Created by zhouhuafei on 17/1/1.
         */
        //当滚动到了浏览器的底部
        function whenScrollBottom(json) {
            var opt = json || {};
            var success = opt.success || function () {};
            var fail = opt.fail || function () {};
            var doc = document;
            var interval = opt.interval || 80; //延迟时间
            var isBottom = true; //假设到达了底部
            var fn = function fn() {
                var allH = doc.body.offsetHeight;
                var scrollTop = doc.documentElement.scrollTop || doc.body.scrollTop;
                var clientHeight = doc.documentElement.clientHeight;
                if (scrollTop + clientHeight >= allH - 100 && isBottom) {
                    isBottom = false;
                    success();
                    //假设1000毫秒之后数据加载完毕
                    setTimeout(function () {
                        isBottom = true;
                    }, 1000);
                } else {
                    fail();
                }
            };
            fn();
            var timer = null;
            var fnScroll = function fnScroll() {
                clearTimeout(timer);
                timer = setTimeout(function () {
                    fn();
                }, interval);
            };
            window.addEventListener('scroll', function () {
                fnScroll();
            });
        }
        module.exports = whenScrollBottom;
    }, {}], 20: [function (require, module, exports) {
        /**
         * Created by zhouhuafei on 17/1/1.
         */
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
    }, {}], 21: [function (require, module, exports) {
        //底层方法
        var base = require('../base/base.js');

        //超类型(子类型继承的对象)
        var SuperType = require('../modules/m-super-type.js');

        //子类型
        var SubType = base.constructorInherit({
            superType: SuperType,
            parameter: {
                //回调
                callback: {
                    moduleDomClick: function moduleDomClick() {}
                },
                //配置
                config: {
                    moduleDomType: 0 //三种类型 0,1,2
                }
            }
        });

        SubType.prototype.moduleDomCreate = function () {
            this.moduleDomClass = "m-footer";
            var moduleDomHtml = "\n        " + this.moduleDomType0() + "\n        " + this.moduleDomType1() + "\n        " + this.moduleDomType2() + "\n    ";
            this.moduleDom = base.createElement({
                attribute: {
                    className: this.moduleDomClass,
                    innerHTML: moduleDomHtml
                }
            });
        };

        SubType.prototype.moduleDomType0 = function () {
            if (this.opt.config.moduleDomType == 0) {
                this.moduleDomClass = "m-footer m-footer-type0";
                return "\n            <div class=\"m-footer-wrap\">\n                <div class=\"m-footer-header\">\n                    0\n                </div>\n                <div class=\"m-footer-body\">\n                    body\n                </div>\n                <div class=\"m-footer-body\">\n                    body\n                </div>\n            </div>\n        ";
            } else {
                return "";
            }
        };

        SubType.prototype.moduleDomType1 = function () {
            if (this.opt.config.moduleDomType == 1) {
                this.moduleDomClass = "m-footer m-footer-type1";
            } else {
                return "";
            }
        };

        SubType.prototype.moduleDomType2 = function () {
            if (this.opt.config.moduleDomType == 2) {
                this.moduleDomClass = "m-footer m-footer-type2";
            } else {
                return "";
            }
        };

        module.exports = SubType;
    }, { "../base/base.js": 1, "../modules/m-super-type.js": 25 }], 22: [function (require, module, exports) {
        //底层方法
        var base = require('../base/base.js');

        //超类型(子类型继承的对象)
        var SuperType = require('../modules/m-super-type.js');

        //子类型
        var SubType = base.constructorInherit({
            superType: SuperType,
            parameter: {
                //回调
                callback: {
                    moduleDomClick: function moduleDomClick() {},
                    moduleDomRenderBefore: function moduleDomRenderBefore(self) {
                        if (getComputedStyle(self.parentDom).position == 'static') {
                            self.parentDom.style.position = 'relative';
                        }
                    }
                },
                //配置
                config: {
                    moduleDomIsTransparent: false, //内部模块是不是透明的(默认不透明)
                    moduleDomIsShow: false //内部模块是否显示(默认不显示)
                }
            }
        });

        //内部模块的创建
        SubType.prototype.moduleDomCreate = function () {
            var isTransparent = '';
            if (this.opt.config.isTransparent) {
                isTransparent = 'm-mask-transparent';
            }
            this.moduleDom = base.createElement({
                style: this.opt.config.moduleStyle,
                attribute: {
                    className: "m-mask " + isTransparent,
                    innerHTML: ""
                }
            });
        };

        //功能
        SubType.prototype.power = function () {
            var self = this;
            this.moduleDom.addEventListener('click', function (ev) {
                self.opt.callback.moduleDomClick();
                ev.stopPropagation();
            });
        };

        module.exports = SubType;
    }, { "../base/base.js": 1, "../modules/m-super-type.js": 25 }], 23: [function (require, module, exports) {
        function Fn(json) {
            this.opt = json || {};
            this.opt.checkTxt = this.opt.checkTxt || { on: '已开启', off: '已关闭' };
            this.opt.status = this.opt.status || 'off';
            this.opt.isHand = this.opt.isHand ? true : false;
            this.opt.clickCallback = this.opt.clickCallback || function () {
                console.log('点击的回调');
            };
            this.onClass = 'm-radio-switch-active'; //打开时对应状态的class
            this.init();
        }
        Fn.prototype.init = function () {
            this.render();
            this.events();
        };
        Fn.prototype.render = function () {
            var className = "";
            var status = this.opt.status;
            if (status == 'on') {
                className = this.onClass;
            }
            this.parentDom = document.createElement('div');
            this.parentDom.classList.add("m-radio-switch");
            if (className) {
                this.parentDom.classList.add(className);
            }
            this.parentDom.innerHTML = "            \n        <div class=\"m-radio-switch-box\">\n            <div class=\"m-radio-switch-run\"></div>\n        </div>\n        <div class=\"m-radio-switch-txt\">" + this.opt.checkTxt[status] + "</div>            \n    ";
        };
        Fn.prototype.on = function () {
            //开
            this.parentDom.classList.add(this.onClass);
            this.opt.status = 'on';
            this.changeTxt();
        };
        Fn.prototype.off = function () {
            //关
            this.parentDom.classList.remove(this.onClass);
            this.opt.status = 'off';
            this.changeTxt();
        };
        Fn.prototype.changeTxt = function () {
            this.parentDom.querySelector('.m-radio-switch-txt').innerHTML = this.opt.checkTxt[this.opt.status];
        };
        Fn.prototype.clickFn = function () {
            var self = this;
            if (!self.opt.isHand) {
                if (self.opt.status == 'off') {
                    self.on();
                } else {
                    self.off();
                }
            }
            self.opt.clickCallback({
                parentDom: this.parentDom,
                status: self.opt.status
            });
        };
        Fn.prototype.events = function () {
            var self = this;
            this.parentDom.addEventListener('click', function () {
                self.clickFn();
            });
        };
        Fn.prototype.remove = function () {
            this.parentDom.parentNode.removeChild(this.parentDom);
        };
        module.exports = Fn;
    }, {}], 24: [function (require, module, exports) {
        //底层方法
        var base = require('../base/base.js');

        //超类型(子类型继承的对象)
        var SuperType = require('../modules/m-super-type.js');

        //子类型
        var SubType = base.constructorInherit({
            superType: SuperType,
            parameter: {
                //回调
                callback: {
                    moduleDomClick: function moduleDomClick() {}
                },
                //配置
                config: {
                    moduleDomIsHaveEvent: true //内部模块是否具备事件(默认具备)
                },
                //数据
                data: {
                    allStarNum: 5,
                    nowStarNum: 4
                }
            }
        });

        SubType.prototype.moduleDomCreate = function () {
            var html = "";
            for (var i = 0; i < this.opt.data.allStarNum; i++) {
                var className = '';
                if (i < this.opt.data.nowStarNum) {
                    className = 'm-star-item-active';
                }
                html += "<div data-index=\"" + i + "\" class=\"iconfont icon-xingping m-star-item " + className + "\"></div>";
            }
            this.moduleDom = base.createElement({
                attribute: {
                    className: "m-star",
                    innerHTML: html
                }
            });
            this.opt.star = this.moduleDom.children;
        };

        SubType.prototype.power = function () {
            var self = this;
            if (this.opt.config.moduleDomIsHaveEvent) {
                this.moduleDom.addEventListener('click', function (ev) {
                    var target = ev.target;
                    if (target.classList.contains('m-star-item')) {
                        var index = target.dataset.index;
                        for (var j = 0; j < self.opt.data.allStarNum; j++) {
                            if (j <= index) {
                                self.opt.star[j].classList.add('m-star-item-active');
                            } else {
                                self.opt.star[j].classList.remove('m-star-item-active');
                            }
                        }
                        self.opt.callback.moduleDomClick({ obj: this, index: index });
                    }
                });
            }
        };

        module.exports = SubType;
    }, { "../base/base.js": 1, "../modules/m-super-type.js": 25 }], 25: [function (require, module, exports) {
        //底层方法
        var base = require('../base/base.js');

        //底层构造函数
        function SuperType(json) {
            //函数外部传来的参数(这个属性在其他模块的内部需要被重写)
            this.opt = base.extend({
                default: {
                    //父级
                    parent: ".g-page", //这个仅支持传入选择器和原生dom节点
                    //回调
                    callback: {
                        moduleDomCreateBefore: function moduleDomCreateBefore() {},
                        moduleDomCreateAfter: function moduleDomCreateAfter() {},
                        moduleDomRenderBefore: function moduleDomRenderBefore() {},
                        moduleDomRenderAfter: function moduleDomRenderAfter() {},
                        parentDomCreateBefore: function parentDomCreateBefore() {},
                        parentDomCreateAfter: function parentDomCreateAfter() {}
                    },
                    //配置
                    config: {
                        moduleDomStyle: "", //内部模块的样式(写法和css相同)
                        moduleDomIsShow: true, //内部模块是否显示(默认显示)
                        moduleDomIsClearTimer: true //内部模块是否清除所有定时器(默认清除)
                    },
                    //数据
                    data: {}
                },
                inherit: json
            });
            //函数内部自带的属性
            this.moduleDom = null; //内部的模块
            this.parentDom = null; //内部模块的外部承载容器,如果没有也没关系,不过不往里面append罢了
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
            this.parentDomRender();
        };

        //功能(这个方法在其他模块的内部需要被重写)
        SuperType.prototype.power = function () {};

        //内部模块的创建(这个方法在其他模块的内部需要被重写)
        SuperType.prototype.moduleDomCreate = function () {
            this.moduleDom = base.createElement({
                style: this.opt.config.moduleDomStyle,
                attribute: {
                    className: "m-test",
                    innerHTML: "\n                <div class=\"m-test-txt\">\u5468\u534E\u98DE\u7231\u4FAF\u4E3D\u6770,\u4FAF\u4E3D\u6770\u7231\u5468\u534E\u98DE</div>\n            "
                }
            });
        };

        //内部模块的渲染
        SuperType.prototype.moduleDomRender = function () {
            var callback = this.opt.callback;
            callback.moduleDomCreateBefore(this);
            this.moduleDomCreate();
            callback.moduleDomCreateAfter(this);
        };

        //内部模块的移除
        SuperType.prototype.moduleDomRemove = function () {
            if (this.moduleDom.parentNode) {
                this.moduleDom.parentNode.removeChild(this.moduleDom);
            }
            this.moduleDomClearTimer();
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
            if (this.parentDom) {
                this.parentDom.appendChild(this.moduleDom);
            }
        };

        //内部模块的隐藏(显示隐藏和是否清除定时器无关)
        SuperType.prototype.moduleDomHide = function () {
            if (this.moduleDom.parentNode) {
                this.moduleDom.parentNode.removeChild(this.moduleDom);
            }
        };

        //外部容器的创建
        SuperType.prototype.parentDomCreate = function () {
            this.parentDom = base.getOneDom({ dom: this.opt.parent });
        };

        //外部容器的渲染
        SuperType.prototype.parentDomRender = function () {
            var callback = this.opt.callback;
            callback.parentDomCreateBefore(this);
            this.parentDomCreate();
            callback.parentDomCreateAfter(this);
            if (!this.parentDom) {
                return false;
            }
            if (this.parentDom) {
                callback.moduleDomRenderBefore(this);
                if (this.opt.config.moduleDomIsShow) {
                    this.parentDom.appendChild(this.moduleDom);
                }
                callback.moduleDomRenderAfter(this);
            }
        };

        //外部容器的移除
        SuperType.prototype.parentDomRemove = function () {
            //先移除内部的模块
            this.moduleDomRemove();
            //再移除外部的容器
            if (this.parentDom) {
                this.parentDom.parentNode.removeChild(this.parentDom);
            }
        };

        module.exports = SuperType;
    }, { "../base/base.js": 1 }], 26: [function (require, module, exports) {
        //底层方法
        var base = require('../base/base.js');

        //超类型(子类型继承的对象)
        var SuperType = require('../modules/m-super-type.js');

        //子类型
        var SubType = base.constructorInherit({
            superType: SuperType,
            parameter: {
                data: {
                    header: [{ html: 'undefined-header0' }, { html: 'undefined-header1' }, { html: 'undefined-header2' }],
                    body: [[{ html: 'undefined-body0-0' }, { html: 'undefined-body0-1' }, { html: 'undefined-body0-2' }], [{ html: 'undefined-body1-0' }, { html: 'undefined-body1-1' }, { html: 'undefined-body1-2' }]],
                    footer: ''
                }
            }
        });

        //内部模块的创建
        SubType.prototype.moduleDomCreate = function () {
            this.moduleDom = base.createElement({
                attribute: {
                    className: "m-table",
                    innerHTML: "\n                <div class=\"m-table-header\">\n                    <div class=\"m-table-row\">\n                        " + this.moduleDomCreateHeader() + "\n                    </div>\n                </div>\n                <div class=\"m-table-body\">\n                    " + this.moduleDomCreateBody() + "\n                </div>\n                <div class=\"m-table-footer\">\n                    " + this.moduleDomCreateFooter() + "\n                </div>\n            "
                }
            });
        };

        SubType.prototype.moduleDomCreateHeader = function () {
            var html = "";
            this.opt.data.header.forEach(function (v) {
                html += "\n            <div class=\"m-table-col\">\n                <div class=\"m-table-col-wrap\">\n                    " + v.html + "\n                </div>\n            </div>\n        ";
            });
            return html;
        };

        SubType.prototype.moduleDomCreateBody = function () {
            var html = "";
            this.opt.data.body.forEach(function (v0) {
                var row = "";
                v0.forEach(function (v1) {
                    row += "\n                <div class=\"m-table-col\">\n                    <div class=\"m-table-col-wrap\">\n                        " + v1.html + "\n                    </div>\n                </div>\n            ";
                });
                html += "<div class=\"m-table-row\">" + row + "</div>";
            });
            return html;
        };

        SubType.prototype.moduleDomCreateFooter = function () {
            return this.opt.data.footer;
        };

        module.exports = SubType;
    }, { "../base/base.js": 1, "../modules/m-super-type.js": 25 }], 27: [function (require, module, exports) {
        /**
         * Created by zhouhuafei on 17/1/2.
         */
        var base = require('../base/base.js');

        function ValidateInput(json) {
            this.opt = json || {};
            this.input = this.opt.input;
            this.parentClass = this.opt.parentClass || 'm-validate-input-parent';
            this.hintClass = this.opt.hintClass || 'm-validate-input-hint';
            this.errorClass = this.opt.errorClass || 'm-validate-input-error';
            this.validateType = this.input.dataset.validate || [];
            this.validateHintTxt = this.input.dataset.hint || [];
            this.init();
        }
        ValidateInput.prototype.init = function () {
            this.require();
            this.render();
        };
        ValidateInput.prototype.require = function () {
            this.validate = require('../function/validate');
        };
        ValidateInput.prototype.render = function () {
            this.renderParent();
            this.renderHint();
        };
        ValidateInput.prototype.renderParent = function () {
            this.parentDom = this.input.parentNode;
            this.parentDom.classList.add(this.parentClass);
        };
        ValidateInput.prototype.renderHint = function () {
            this.hintDom = document.createElement('em');
            this.hintDom.classList.add(this.hintClass);
        };
        ValidateInput.prototype.renderHintAdd = function (json) {
            var opt = json || {};
            this.hintDom.innerHTML = opt.txt || '本项必填';
            this.parentDom.appendChild(this.hintDom);
            this.input.classList.add(this.errorClass);
        };
        ValidateInput.prototype.renderHintRemove = function () {
            var isHaveHintDom = this.parentDom.querySelector("." + this.hintClass);
            if (isHaveHintDom) {
                this.parentDom.removeChild(this.hintDom);
            }
            this.input.classList.remove(this.errorClass);
        };
        ValidateInput.prototype.validateSave = function () {
            var self = this;
            var type = self.validateType.split(' ');
            var hintTxt = self.validateHintTxt.split(' ');
            var value = this.input.value;
            var isTrue = true;
            type.forEach(function (v, i) {
                if (v == 'no-space' && isTrue) {
                    //设置了非空验证
                    self.validate.isSpace({
                        value: value,
                        success: function success() {
                            //空
                            self.renderHintAdd({ txt: hintTxt[i] });
                            isTrue = false;
                        },
                        fail: function fail() {
                            //非空
                            self.renderHintRemove();
                            isTrue = true;
                        }
                    });
                }
                if (v == 'no-zero' && isTrue) {
                    //设置了非零验证
                    self.validate.isZero({
                        value: value,
                        success: function success() {
                            //零
                            self.renderHintAdd({ txt: hintTxt[i] });
                            isTrue = false;
                        },
                        fail: function fail() {
                            //非零
                            self.renderHintRemove();
                            isTrue = true;
                        }
                    });
                }
                if (v == 'yes-integer' && isTrue) {
                    //设置了整数验证
                    self.validate.isInteger({
                        value: value,
                        success: function success() {
                            //整数
                            self.renderHintRemove();
                            isTrue = true;
                        },
                        fail: function fail() {
                            //非整数
                            self.renderHintAdd({ txt: hintTxt[i] });
                            isTrue = false;
                        }
                    });
                }
            });
        };
        ValidateInput.prototype.validateEventBlur = function () {
            var self = this;
            if (self.input) {
                self.input.addEventListener('blur', function () {
                    self.validateSave();
                });
            }
        };

        module.exports = ValidateInput;
    }, { "../base/base.js": 1, "../function/validate": 18 }] }, {}, [2]);