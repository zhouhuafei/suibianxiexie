"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
            objRemoveQuote: require('../function/obj-remove-quote.js'),
            Select: require('../function/select.js'),
            offset: require('../function/offset.js'),
            constructorInherit: require('../function/constructor-inherit.js'),
            isIPhone: require('../function/is-iphone.js'),
            isAndroid: require('../function/is-android.js'),
            isPc: require('../function/is-pc.js'),
            cookie: require('../function/cookie.js'),
            fillZero: require('../function/fill-zero.js'),
            getParent: require('../function/get-parent.js'),
            scrollTo: require('../function/scroll-to.js'),
            htmlToDom: require('../function/html-to-dom.js'),
            whetherDisableScroll: require('../function/whether-disable-scroll.js'),
            WhenScrollBottom: require('../function/when-scroll-bottom.js'),
            jsonToArray: require('../function/json-to-array.js'),
            secondsToTime: require('../function/seconds-to-time.js'),
            timeCountDown: require('../function/time-count-down.js'),
            strLimit: require('../function/str-limit.js'),
            getDomArray: require('../function/get-dom-array.js'),
            createElement: require('../function/create-element.js'),
            extend: require('../function/extend.js')
        };
        module.exports = base;
    }, { "../function/constructor-inherit.js": 4, "../function/cookie.js": 5, "../function/create-element.js": 6, "../function/extend.js": 7, "../function/fill-zero.js": 8, "../function/get-dom-array.js": 9, "../function/get-parent.js": 10, "../function/html-to-dom.js": 11, "../function/is-android.js": 12, "../function/is-iphone.js": 13, "../function/is-pc.js": 14, "../function/json-to-array.js": 15, "../function/obj-remove-quote.js": 16, "../function/offset.js": 17, "../function/scroll-to.js": 18, "../function/seconds-to-time.js": 19, "../function/select.js": 20, "../function/str-limit.js": 21, "../function/time-count-down.js": 22, "../function/when-scroll-bottom.js": 24, "../function/whether-disable-scroll.js": 25 }], 2: [function (require, module, exports) {
        //版权
        (function () {
            var Copyright = require('../modules/m-copyright.js');
            new Copyright();
        })();

        //底部导航
        (function () {
            var Footer = require('../modules/m-footer-nav.js');
            new Footer();
        })();

        //延迟加载
        (function () {
            var LazyLoad = require('../modules/m-lazy-load.js');
            new LazyLoad();
        })();
    }, { "../modules/m-copyright.js": 26, "../modules/m-footer-nav.js": 27, "../modules/m-lazy-load.js": 29 }], 3: [function (require, module, exports) {
        //base函数测试
        (function () {
            var base = require('../base/base');
            new base.Select({
                items: '.g-checkbox-checkbox',
                callback: {
                    itemsClick: function itemsClick(obj) {
                        console.log(obj);
                    }
                }
            });
            var obj = { obj: { c1: 'c1', d: { d1: 'd1' } }, array: ['d1', ['c1', { a: 1 }]] };
            var obj2 = base.objRemoveQuote(obj);
            obj2.obj.d.d2 = 'zzz';
            obj2.array[1][1].b = 2;
            console.log(obj, obj2);
        })();
        //es6
        (function () {
            var Super = require('../modules/m-super-es6');
            var oSuper = new Super({ wrap: '.main-es6' });
            var Sub = require('../modules/m-sub-es6');
            var oSub = new Sub({ wrap: '.main-es6' });
            console.log(oSuper, oSub);
        })();
        //加载中
        (function () {
            var Loading = require('../modules/m-loading');
            var loading = new Loading({
                config: {
                    moduleDomStatus: 'loading',
                    moduleDomPosition: 'bottom'
                }
            });
            loading.moduleDomShow();
            var over = new Loading({
                config: {
                    moduleDomMaskIsShow: true,
                    moduleDomStatus: 'over'
                }
            });
            over.moduleDomShow();
        })();
        //超类模块测试
        (function () {
            var Test = require('../modules/m-super-type.js');
            var test = new Test({
                wrap: ".main-test"
            });
        })();
        //返回顶部
        (function () {
            var GoTop = require('../modules/m-go-top.js');
            new GoTop();
        })();
        //遮罩
        (function () {
            var Mask1 = require('../modules/m-mask.js');
            var mask1 = new Mask1({
                callback: {
                    moduleDomClick: function moduleDomClick() {
                        console.log('m-mask click callback');
                        mask1.moduleDomHide();
                    }
                },
                config: {
                    moduleDomIsClearTimer: 1,
                    moduleDomIsShow: true
                },
                data: {
                    a: 1
                }
            });
            var Mask2 = require('../modules/m-mask.js');
            var mask2 = new Mask2();
            console.log(mask1);
            console.log(mask2);
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
                wrap: ".main-table",
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
                wrap: ".main-star",
                callback: {
                    moduleDomClick: function moduleDomClick(json) {
                        console.log(json);
                    }
                }
            });
        })();
        //每个页面都要用到的js
        require('../common/common.js');
    }, { "../base/base": 1, "../common/common.js": 2, "../modules/m-go-top.js": 28, "../modules/m-loading": 30, "../modules/m-mask.js": 31, "../modules/m-radio-switch.js": 32, "../modules/m-star.js": 33, "../modules/m-sub-es6": 34, "../modules/m-super-es6": 35, "../modules/m-super-type.js": 36, "../modules/m-table.js": 37, "../modules/m-validate-input.js": 38 }], 4: [function (require, module, exports) {
        //对象的扩展方法
        var extend = require('../function/extend.js');

        //构造函数的继承(拷贝继承)
        function constructorInherit(json) {
            var opt = extend({
                default: {
                    superType: 123, //继承哪个超类(这个必须传的是一个构造函数,或者不传值)
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
                 * 所有我只能通过循环遍历一个新的对象进行阻止了
                 * */
                var obj = {};
                for (var attr in parameter) {
                    if (parameter.hasOwnProperty(attr)) {
                        obj[attr] = parameter[attr];
                    }
                }
                this.opt = extend({
                    default: obj,
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
    }, { "../function/extend.js": 7 }], 5: [function (require, module, exports) {
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
    }, {}], 8: [function (require, module, exports) {
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
    }, { "../function/extend.js": 7 }], 9: [function (require, module, exports) {
        //对象的扩展方法
        var extend = require('../function/extend.js');

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
    }, { "../function/extend.js": 7 }], 10: [function (require, module, exports) {
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
        function isAndroid() {
            return window.navigator.appVersion.match(/android/gi);
        }
        module.exports = isAndroid;
    }, {}], 13: [function (require, module, exports) {
        function isIphone() {
            return window.navigator.appVersion.match(/iphone/gi);
        }
        module.exports = isIphone;
    }, {}], 14: [function (require, module, exports) {
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
    }, {}], 15: [function (require, module, exports) {
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
    }, {}], 16: [function (require, module, exports) {
        //移除对象引用
        function objRemoveQuote(obj) {
            if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) !== "object") {
                return obj;
            }
            var objType = Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
            var newObj = {};
            if (objType == 'array') {
                newObj = [];
            }
            for (var attr in obj) {
                if (obj.hasOwnProperty(attr)) {
                    newObj[attr] = objRemoveQuote(obj[attr]);
                }
            }
            return newObj;
        }
        module.exports = objRemoveQuote;
    }, {}], 17: [function (require, module, exports) {
        var extend = require('../function/extend.js');
        var getDomArray = require('../function/get-dom-array.js');

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
    }, { "../function/extend.js": 7, "../function/get-dom-array.js": 9 }], 18: [function (require, module, exports) {
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
    }, {}], 19: [function (require, module, exports) {
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
    }, {}], 20: [function (require, module, exports) {
        //全选,不选,反选
        var extend = require('../function/extend.js');
        var getDomArray = require('../function/get-dom-array.js');

        function Select(json) {
            this.opt = extend({
                default: {
                    items: null, //所有的被选项
                    callback: {
                        itemsClick: function itemsClick() {}
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
                    self.opt.callback.itemsClick({ isCheckedAll: isCheckedAll });
                });
            });
        };

        module.exports = Select;
    }, { "../function/extend.js": 7, "../function/get-dom-array.js": 9 }], 21: [function (require, module, exports) {
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
    }, {}], 22: [function (require, module, exports) {
        var extend = require('../function/extend.js');
        var secondsToTime = require('../function/seconds-to-time.js'); //时间转换

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
    }, { "../function/extend.js": 7, "../function/seconds-to-time.js": 19 }], 23: [function (require, module, exports) {
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
    }, {}], 24: [function (require, module, exports) {
        var extend = require('../function/extend.js');

        //当滚动到了浏览器的底部
        function WhenScrollBottom(json) {
            this.opt = extend({
                default: {
                    callback: {
                        success: function success() {},
                        fail: function fail() {}
                    },
                    interval: 80, //函数节流时间(延迟时间)
                    errorHeight: 100 //滚动到底部上面一定高度就算是滚动到底部了(误差高度)
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
    }, { "../function/extend.js": 7 }], 25: [function (require, module, exports) {
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
    }, {}], 26: [function (require, module, exports) {
        //底层方法
        var base = require('../base/base.js');

        //超类型(子类型继承的对象)
        var SuperType = require('../modules/m-super-type.js');

        //子类型
        var SubType = base.constructorInherit({
            superType: SuperType,
            parameter: {
                //数据
                data: {}
            }
        });

        //内部模块的创建
        SubType.prototype.moduleDomCreate = function () {
            this.moduleDom = base.createElement({
                attribute: {
                    className: "m-copyright",
                    innerHTML: "\n                <div class=\"m-copyright-icon iconfont icon-banquan\"></div>\n                <div class=\"m-copyright-txt\">\u7248\u6743\u4FE1\u606F\u54DF</div>\n            "
                }
            });
        };

        module.exports = SubType;
    }, { "../base/base.js": 1, "../modules/m-super-type.js": 36 }], 27: [function (require, module, exports) {
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
                }
            }
        });

        SubType.prototype.moduleDomCreate = function () {
            this.moduleDomClass = "m-footer-nav";
            var moduleDomHtml = "\n        <div class=\"m-footer-nav-wrap\">\n            <a class=\"m-footer-nav-body\" href=\"\">\n                <div class=\"m-footer-nav-body-icon iconfont icon-shouye\"></div>\n                <div class=\"m-footer-nav-body-txt\">\u9996\u9875</div>\n            </a>\n            <a class=\"m-footer-nav-body\" href=\"\">\n                <div class=\"m-footer-nav-body-icon iconfont icon-fenxiao\"></div>\n                <div class=\"m-footer-nav-body-txt\">\u6211\u8981\u5F00\u5E97</div>\n            </a>\n            <a class=\"m-footer-nav-body\" href=\"\">\n                <div class=\"m-footer-nav-body-icon iconfont icon-gouwuche\"></div>\n                <div class=\"m-footer-nav-body-txt\">\u8D2D\u7269\u8F66</div>\n            </a>\n            <a class=\"m-footer-nav-body\" href=\"\">\n                <div class=\"m-footer-nav-body-icon iconfont icon-kefu\"></div>\n                <div class=\"m-footer-nav-body-txt\">\u5BA2\u670D</div>\n            </a>\n            <a class=\"m-footer-nav-body\" href=\"\">\n                <div class=\"m-footer-nav-body-icon iconfont icon-wode\"></div>\n                <div class=\"m-footer-nav-body-txt\">\u6211\u7684</div>\n            </a>\n        </div>\n    ";
            this.moduleDom = base.createElement({
                attribute: {
                    className: this.moduleDomClass,
                    innerHTML: moduleDomHtml
                }
            });
        };

        module.exports = SubType;
    }, { "../base/base.js": 1, "../modules/m-super-type.js": 36 }], 28: [function (require, module, exports) {
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
                config: {
                    showHeight: 200
                }
            }
        });

        SubType.prototype.moduleDomCreate = function () {
            this.moduleDom = base.createElement({
                attribute: {
                    className: "m-go-top",
                    innerHTML: "<div class=\"m-go-top-icon iconfont icon-shangjiantou\"></div>"
                }
            });
        };

        SubType.prototype.power = function () {
            var self = this;
            this.moduleDom.addEventListener('click', function () {
                base.scrollTo({ to: '0' });
            });
            window.addEventListener('scroll', function () {
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                if (scrollTop >= self.opt.config.showHeight) {
                    self.moduleDom.classList.add('m-go-top-active');
                } else {
                    self.moduleDom.classList.remove('m-go-top-active');
                }
            });
        };
        module.exports = SubType;
    }, { "../base/base.js": 1, "../modules/m-super-type.js": 36 }], 29: [function (require, module, exports) {
        //底层方法
        var base = require('../base/base.js');

        //延迟加载
        function LazyLoad(json) {
            this.opt = base.extend({
                default: {
                    element: '.m-lazy-load',
                    moreHeight: 0, //多加载一部分高度的图片
                    interval: 80 //函数节流时间(延迟时间)
                },
                inherit: json
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
    }, { "../base/base.js": 1 }], 30: [function (require, module, exports) {
        //底层方法
        var base = require('../base/base.js');

        //超类型(子类型继承的对象)
        var SuperType = require('../modules/m-super-type.js');

        //子类型
        var SubType = base.constructorInherit({
            superType: SuperType,
            parameter: {
                //配置
                config: {
                    moduleDomIsShow: false, //内部模块是否显示(默认不显示)
                    moduleDomStatus: 'loading', //加载状态  loading(加载中)    over(加载完毕)
                    moduleDomPosition: 'center' //模块当位置  'center'(居中)    'bottom'(居底)
                }
            }
        });

        SubType.prototype.moduleDomCreate = function () {
            var config = this.opt.config;
            var moduleDomHtml = "";
            var moduleDomClass = "";
            var moduleDomStatus = config.moduleDomStatus;
            var moduleDomPosition = config.moduleDomPosition;
            //加载中
            if (moduleDomStatus == 'loading') {
                //居中
                if (moduleDomPosition == 'center') {
                    moduleDomClass = "m-loading-loading m-loading-center";
                }
                //居底
                if (moduleDomPosition == 'bottom') {
                    moduleDomClass = "m-loading-loading m-loading-bottom";
                }
            }
            //加载完毕
            if (moduleDomStatus == 'over') {
                //居中
                if (moduleDomPosition == 'center') {
                    moduleDomClass = "m-loading-over m-loading-center";
                }
                //居底
                if (moduleDomPosition == 'bottom') {
                    moduleDomClass = "m-loading-over m-loading-bottom";
                }
            }

            //加载中
            if (moduleDomStatus == 'loading') {
                moduleDomHtml = "\n            <div class=\"m-loading-wrap\">\n                <div class=\"m-loading-loading-icon iconfont icon-jiazaizhong\"></div>\n            </div>\n        ";
            }
            //加载完毕
            if (moduleDomStatus == 'over') {
                moduleDomHtml = "\n            <div class=\"m-loading-wrap\">\n                <div class=\"m-loading-over-icon iconfont icon-meiyoushuju\"></div>\n                <div class=\"m-loading-over-txt\">\u6CA1\u6709\u6570\u636E\u4E86</div>\n            </div>\n        ";
            }
            //模块创建
            this.moduleDom = base.createElement({
                attribute: {
                    className: "m-loading " + moduleDomClass,
                    innerHTML: moduleDomHtml
                }
            });
        };

        module.exports = SubType;
    }, { "../base/base.js": 1, "../modules/m-super-type.js": 36 }], 31: [function (require, module, exports) {
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
                        if (getComputedStyle(self.wrapDom).position == 'static') {
                            self.wrapDom.style.position = 'relative';
                        }
                    }
                },
                data: { a: 999 },
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
    }, { "../base/base.js": 1, "../modules/m-super-type.js": 36 }], 32: [function (require, module, exports) {
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
    }, {}], 33: [function (require, module, exports) {
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
                    moduleDomClick: function moduleDomClick(obj) {}
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
    }, { "../base/base.js": 1, "../modules/m-super-type.js": 36 }], 34: [function (require, module, exports) {
        //底层方法
        var base = require('../base/base.js');

        //超类型(子类型继承的对象)
        var Super = require('../modules/m-super-type.js');

        //子类型

        var Sub = function (_Super) {
            _inherits(Sub, _Super);

            function Sub(json) {
                _classCallCheck(this, Sub);

                var _this = _possibleConstructorReturn(this, (Sub.__proto__ || Object.getPrototypeOf(Sub)).call(this, json));

                _this.opt = base.extend({
                    default: _this.opt,
                    inherit: json
                });
                _this.opt = base.extend({
                    default: {
                        data: '6789'
                    },
                    inherit: _this.opt
                });
                //console.log(this.opt, 888);
                return _this;
            }

            return Sub;
        }(Super);

        module.exports = Sub;
    }, { "../base/base.js": 1, "../modules/m-super-type.js": 36 }], 35: [function (require, module, exports) {
        //底层方法
        var base = require('../base/base.js');

        //底层构造函数

        var Super = function () {
            function Super(json) {
                _classCallCheck(this, Super);

                //函数外部传来的参数(这个属性在其他模块的内部需要被重写)
                this.opt = base.extend({
                    //内部默认参数
                    default: {
                        //父级
                        wrap: ".g-page", //这个仅支持传入选择器和原生dom节点
                        //回调
                        callback: {
                            //内部模块创建之前
                            moduleDomCreateBefore: function moduleDomCreateBefore() {},
                            //内部模块创建之后
                            moduleDomCreateAfter: function moduleDomCreateAfter() {},
                            //内部模块渲染之前
                            moduleDomRenderBefore: function moduleDomRenderBefore() {},
                            //内部模块渲染之后
                            moduleDomRenderAfter: function moduleDomRenderAfter() {},
                            //内部模块移除之前
                            moduleDomRemoveBefore: function moduleDomRemoveBefore() {},
                            //内部模块移除之后
                            moduleDomRemoveAfter: function moduleDomRemoveAfter() {},
                            //内部模块显示之前
                            moduleDomShowBefore: function moduleDomShowBefore() {},
                            //内部模块显示之后
                            moduleDomShowAfter: function moduleDomShowAfter() {},
                            //内部模块隐藏之前
                            moduleDomHideBefore: function moduleDomHideBefore() {},
                            //内部模块隐藏之后
                            moduleDomHideAfter: function moduleDomHideAfter() {},
                            //外部容器创建之前
                            wrapDomCreateBefore: function wrapDomCreateBefore() {},
                            //外部容器创建之后
                            wrapDomCreateAfter: function wrapDomCreateAfter() {},
                            //外部容器渲染之前
                            wrapDomRenderBefore: function wrapDomRenderBefore() {},
                            //外部容器渲染之后
                            wrapDomRenderAfter: function wrapDomRenderAfter() {},
                            //外部容器移除之前
                            wrapDomRemoveBefore: function wrapDomRemoveBefore() {},
                            //外部容器移除之后
                            wrapDomRemoveAfter: function wrapDomRemoveAfter() {}
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


            _createClass(Super, [{
                key: "init",
                value: function init() {
                    this.render();
                    this.power();
                }

                //渲染

            }, {
                key: "render",
                value: function render() {
                    this.moduleDomRender();
                    this.wrapDomRender();
                }

                //功能(这个方法在其他模块的内部需要被重写)

            }, {
                key: "power",
                value: function power() {}

                //内部模块的创建(这个方法在其他模块的内部需要被重写)

            }, {
                key: "moduleDomCreate",
                value: function moduleDomCreate() {
                    this.moduleDom = base.createElement({
                        style: this.opt.config.moduleDomStyle,
                        attribute: {
                            className: "m-test",
                            innerHTML: "\n                <div class=\"m-test-txt\">\u5468\u534E\u98DE\u7231\u4FAF\u4E3D\u6770,\u4FAF\u4E3D\u6770\u7231\u5468\u534E\u98DE</div>\n            "
                        }
                    });
                }

                //内部模块的渲染

            }, {
                key: "moduleDomRender",
                value: function moduleDomRender() {
                    var callback = this.opt.callback;
                    callback.moduleDomCreateBefore(this);
                    this.moduleDomCreate();
                    callback.moduleDomCreateAfter(this);
                }

                //内部模块的移除

            }, {
                key: "moduleDomRemove",
                value: function moduleDomRemove() {
                    var callback = this.opt.callback;
                    callback.moduleDomRemoveBefore(this);
                    if (this.moduleDom.parentNode) {
                        this.moduleDom.parentNode.removeChild(this.moduleDom);
                    }
                    this.moduleDomClearTimer();
                    callback.moduleDomRemoveAfter(this);
                }

                //内部模块的定时器清除(假设内部模块有定时器)

            }, {
                key: "moduleDomClearTimer",
                value: function moduleDomClearTimer() {
                    if (this.opt.config.moduleDomIsClearTimer) {
                        for (var attr in this.moduleDomTimer) {
                            if (this.moduleDomTimer.hasOwnProperty(attr)) {
                                clearInterval(this.moduleDomTimer[attr]);
                                clearTimeout(this.moduleDomTimer[attr]);
                            }
                        }
                    }
                }

                //内部模块的显示(显示隐藏和是否清除定时器无关)

            }, {
                key: "moduleDomShow",
                value: function moduleDomShow() {
                    var callback = this.opt.callback;
                    callback.moduleDomShowBefore(this);
                    if (this.wrapDom) {
                        this.wrapDom.appendChild(this.moduleDom);
                    }
                    callback.moduleDomShowAfter(this);
                }

                //内部模块的隐藏(显示隐藏和是否清除定时器无关)

            }, {
                key: "moduleDomHide",
                value: function moduleDomHide() {
                    var callback = this.opt.callback;
                    callback.moduleDomHideBefore(this);
                    if (this.moduleDom.parentNode) {
                        this.moduleDom.parentNode.removeChild(this.moduleDom);
                    }
                    callback.moduleDomHideAfter(this);
                }

                //外部容器的创建

            }, {
                key: "wrapDomCreate",
                value: function wrapDomCreate() {
                    this.wrapDom = base.getDomArray({ element: this.opt.wrap })[0];
                }

                //外部容器的渲染

            }, {
                key: "wrapDomRender",
                value: function wrapDomRender() {
                    var callback = this.opt.callback;
                    callback.wrapDomCreateBefore(this);
                    this.wrapDomCreate();
                    callback.wrapDomCreateAfter(this);
                    if (this.wrapDom) {
                        callback.moduleDomRenderBefore(this);
                        callback.wrapDomRenderBefore(this);
                        if (this.opt.config.moduleDomIsShow) {
                            this.wrapDom.appendChild(this.moduleDom);
                        }
                        callback.wrapDomRenderAfter(this);
                        callback.moduleDomRenderAfter(this);
                    }
                }

                //外部容器的移除

            }, {
                key: "wrapDomRemove",
                value: function wrapDomRemove() {
                    var callback = this.opt.callback;
                    callback.wrapDomRemoveBefore(this);
                    //先移除内部的模块
                    this.moduleDomRemove();
                    //再移除外部的容器
                    if (this.wrapDom) {
                        this.wrapDom.parentNode.removeChild(this.wrapDom);
                    }
                    callback.wrapDomRemoveAfter(this);
                }
            }]);

            return Super;
        }();

        module.exports = Super;
    }, { "../base/base.js": 1 }], 36: [function (require, module, exports) {
        //底层方法
        var base = require('../base/base.js');

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
                        moduleDomCreateBefore: function moduleDomCreateBefore(self) {},
                        //内部模块创建之后
                        moduleDomCreateAfter: function moduleDomCreateAfter(self) {},
                        //内部模块渲染之前
                        moduleDomRenderBefore: function moduleDomRenderBefore(self) {},
                        //内部模块渲染之后
                        moduleDomRenderAfter: function moduleDomRenderAfter(self) {},
                        //内部模块移除之前
                        moduleDomRemoveBefore: function moduleDomRemoveBefore(self) {},
                        //内部模块移除之后
                        moduleDomRemoveAfter: function moduleDomRemoveAfter(self) {},
                        //内部模块显示之前
                        moduleDomShowBefore: function moduleDomShowBefore(self) {},
                        //内部模块显示之后
                        moduleDomShowAfter: function moduleDomShowAfter(self) {},
                        //内部模块隐藏之前
                        moduleDomHideBefore: function moduleDomHideBefore(self) {},
                        //内部模块隐藏之后
                        moduleDomHideAfter: function moduleDomHideAfter(self) {},
                        //外部容器创建之前
                        wrapDomCreateBefore: function wrapDomCreateBefore(self) {},
                        //外部容器创建之后
                        wrapDomCreateAfter: function wrapDomCreateAfter(self) {},
                        //外部容器渲染之前
                        wrapDomRenderBefore: function wrapDomRenderBefore(self) {},
                        //外部容器渲染之后
                        wrapDomRenderAfter: function wrapDomRenderAfter(self) {},
                        //外部容器移除之前
                        wrapDomRemoveBefore: function wrapDomRemoveBefore(self) {},
                        //外部容器移除之后
                        wrapDomRemoveAfter: function wrapDomRemoveAfter(self) {}
                    },
                    //配置
                    config: {
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
            var callback = this.opt.callback;
            callback.moduleDomRemoveBefore(this);
            if (this.moduleDom.parentNode) {
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
    }, { "../base/base.js": 1 }], 37: [function (require, module, exports) {
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
    }, { "../base/base.js": 1, "../modules/m-super-type.js": 36 }], 38: [function (require, module, exports) {
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
    }, { "../base/base.js": 1, "../function/validate": 23 }] }, {}, [3]);