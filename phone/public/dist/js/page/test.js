"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
            userAgent: require('../function/user-agent'), //用户代理(判断是否是安卓,苹果,微信,电脑)
            arrayRemoveRepeat: require('../function/array-remove-repeat.js'), //数组去重
            objRemoveQuote: require('../function/obj-remove-quote.js'), //移除对象引用
            Select: require('../function/select.js'), //全选,不选,反选
            offset: require('../function/offset.js'), //获取元素距离文档的left和top
            constructorInherit: require('../function/constructor-inherit.js'), //构造函数继承
            cookie: require('../function/cookie.js'), //cookie操作
            fillZero: require('../function/fill-zero.js'), //补零
            getParent: require('../function/get-parent.js'), //获取父级
            scrollTo: require('../function/scroll-to.js'), //滚动到
            htmlToDom: require('../function/html-to-dom.js'), //html转成dom节点
            whetherDisableScroll: require('../function/whether-disable-scroll.js'), //是否禁止浏览器滚动
            WhenScrollBottom: require('../function/when-scroll-bottom.js'), //当滚动到底部
            objToArray: require('../function/obj-to-array.js'), //把json格式的对象转成数组
            secondsToTime: require('../function/seconds-to-time.js'), //秒转时间
            timeCountDown: require('../function/time-count-down.js'), //倒计时
            strLimit: require('../function/str-limit.js'), //字符串限制
            getDomArray: require('../function/get-dom-array.js'), //获取一组dom节点
            createElement: require('../function/create-element.js'), //创建元素节点
            extend: require('../function/extend.js') //对象扩展
        };
        module.exports = base;
    }, { "../function/array-remove-repeat.js": 4, "../function/constructor-inherit.js": 5, "../function/cookie.js": 6, "../function/create-element.js": 7, "../function/extend.js": 8, "../function/fill-zero.js": 9, "../function/get-dom-array.js": 10, "../function/get-parent.js": 11, "../function/html-to-dom.js": 12, "../function/obj-remove-quote.js": 13, "../function/obj-to-array.js": 14, "../function/offset.js": 15, "../function/scroll-to.js": 16, "../function/seconds-to-time.js": 17, "../function/select.js": 18, "../function/str-limit.js": 19, "../function/time-count-down.js": 20, "../function/user-agent": 21, "../function/when-scroll-bottom.js": 23, "../function/whether-disable-scroll.js": 24 }], 2: [function (require, module, exports) {
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
    }, { "../modules/m-copyright.js": 25, "../modules/m-footer-nav.js": 26, "../modules/m-lazy-load.js": 28 }], 3: [function (require, module, exports) {
        //base函数测试
        (function () {
            var base = require('../base/base.js');
            //测试滚动到底部loading
            new base.WhenScrollBottom({
                callback: {
                    success: function success() {
                        var Loading = require('../modules/m-loading.js');
                        var loading = new Loading({
                            wrap: '.page-wrap',
                            config: {
                                moduleDomStatus: 'loading'
                            }
                        });
                        loading.moduleDomShow();
                    }
                }
            });
            //测试全选
            new base.Select({
                items: '.g-checkbox-checkbox',
                callback: {
                    itemsClick: function itemsClick(obj) {
                        console.log(obj);
                    }
                }
            });
        })();
        //加载中
        (function () {
            var Loading = require('../modules/m-loading.js');
            var loading = new Loading({
                config: {
                    moduleDomStatus: 'loading'
                }
            });
            loading.moduleDomShow();
            var over = new Loading({
                config: {
                    moduleDomStatus: 'over'
                }
            });
            over.moduleDomShow();
        })();
        //超类型模块测试
        (function () {
            var SuperType = require('../modules/m-super-type.js');
            new SuperType({ wrap: ".page-super-type" });
            var SuperTypeEs6 = require('../modules/m-super-type-es6.js');
            new SuperTypeEs6({ wrap: ".page-super-type" });
            var SubTypeEs6 = require('../modules/m-sub-type-es6.js');
            new SubTypeEs6({ wrap: ".page-super-type" });
        })();
        //返回顶部
        (function () {
            var GoTop = require('../modules/m-go-top.js');
            new GoTop();
        })();
        //遮罩
        (function () {
            var Mask = require('../modules/m-mask.js');
            var mask = new Mask({
                callback: {
                    moduleDomClick: function moduleDomClick() {
                        mask1.moduleDomHide();
                    }
                }
            });
            //mask.moduleDomShow();
        })();
        //单选开关
        (function () {
            var Radio = require('../modules/m-radio-switch.js');
            var page = document.querySelector('.page-radio-switch');
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
            page.appendChild(radio.parentDom);
        })();
        //表格
        (function () {
            var Table = require('../modules/m-table.js');
            var table = new Table({
                wrap: ".page-table",
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
                wrap: ".page-star",
                callback: {
                    moduleDomClick: function moduleDomClick(json) {
                        console.log(json);
                    }
                }
            });
        })();
        //每个页面都要用到的js
        require('../common/common.js');
    }, { "../base/base.js": 1, "../common/common.js": 2, "../modules/m-go-top.js": 27, "../modules/m-loading.js": 29, "../modules/m-mask.js": 30, "../modules/m-radio-switch.js": 31, "../modules/m-star.js": 32, "../modules/m-sub-type-es6.js": 33, "../modules/m-super-type-es6.js": 34, "../modules/m-super-type.js": 35, "../modules/m-table.js": 36, "../modules/m-validate-input.js": 37 }], 4: [function (require, module, exports) {
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
        var extend = require('../function/extend.js'); //对象的扩展方法
        var objRemoveQuote = require('../function/obj-remove-quote.js'); //对象移除引用

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
    }, { "../function/extend.js": 8, "../function/obj-remove-quote.js": 13 }], 6: [function (require, module, exports) {
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
    }, {}], 9: [function (require, module, exports) {
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
    }, { "../function/extend.js": 8 }], 10: [function (require, module, exports) {
        var extend = require('../function/extend.js'); //对象的扩展方法

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
    }, { "../function/extend.js": 8 }], 11: [function (require, module, exports) {
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
        var extend = require('../function/extend.js'); //对象的扩展
        var getDomArray = require('../function/get-dom-array.js'); //获取一组dom节点

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
    }, { "../function/extend.js": 8, "../function/get-dom-array.js": 10 }], 16: [function (require, module, exports) {
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
    }, {}], 17: [function (require, module, exports) {
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
    }, {}], 18: [function (require, module, exports) {
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
    }, { "../function/extend.js": 8, "../function/get-dom-array.js": 10 }], 19: [function (require, module, exports) {
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
    }, {}], 20: [function (require, module, exports) {
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
    }, { "../function/extend.js": 8, "../function/seconds-to-time.js": 17 }], 21: [function (require, module, exports) {
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
    }, {}], 22: [function (require, module, exports) {
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
    }, {}], 23: [function (require, module, exports) {
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
    }, { "../function/extend.js": 8 }], 24: [function (require, module, exports) {
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
                style: this.opt.config.moduleDomStyle,
                custom: this.opt.config.moduleDomCustomAttr,
                attribute: {
                    className: "m-copyright",
                    innerHTML: "\n                <div class=\"m-copyright-icon iconfont icon-banquan\"></div>\n                <div class=\"m-copyright-txt\">\u7248\u6743\u4FE1\u606F\u54DF</div>\n            "
                }
            });
        };

        module.exports = SubType;
    }, { "../base/base.js": 1, "../modules/m-super-type.js": 35 }], 26: [function (require, module, exports) {
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
                    moduleDomClick: function moduleDomClick() {
                        //内部模块的点击回调待续...
                    }
                }
            }
        });

        SubType.prototype.moduleDomCreate = function () {
            this.moduleDomClass = "m-footer-nav";
            var moduleDomHtml = "\n        <div class=\"m-footer-nav-wrap\">\n            <a class=\"m-footer-nav-body\" href=\"\">\n                <div class=\"m-footer-nav-body-icon iconfont icon-shouye\"></div>\n                <div class=\"m-footer-nav-body-txt\">\u9996\u9875</div>\n            </a>\n            <a class=\"m-footer-nav-body\" href=\"\">\n                <div class=\"m-footer-nav-body-icon iconfont icon-fenxiao\"></div>\n                <div class=\"m-footer-nav-body-txt\">\u6211\u8981\u5F00\u5E97</div>\n            </a>\n            <a class=\"m-footer-nav-body\" href=\"\">\n                <div class=\"m-footer-nav-body-icon iconfont icon-gouwuche\"></div>\n                <div class=\"m-footer-nav-body-txt\">\u8D2D\u7269\u8F66</div>\n            </a>\n            <a class=\"m-footer-nav-body\" href=\"\">\n                <div class=\"m-footer-nav-body-icon iconfont icon-kefu\"></div>\n                <div class=\"m-footer-nav-body-txt\">\u5BA2\u670D</div>\n            </a>\n            <a class=\"m-footer-nav-body\" href=\"\">\n                <div class=\"m-footer-nav-body-icon iconfont icon-wode\"></div>\n                <div class=\"m-footer-nav-body-txt\">\u6211\u7684</div>\n            </a>\n        </div>\n    ";
            this.moduleDom = base.createElement({
                style: this.opt.config.moduleDomStyle,
                custom: this.opt.config.moduleDomCustomAttr,
                attribute: {
                    className: this.moduleDomClass,
                    innerHTML: moduleDomHtml
                }
            });
        };

        module.exports = SubType;
    }, { "../base/base.js": 1, "../modules/m-super-type.js": 35 }], 27: [function (require, module, exports) {
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
                style: this.opt.config.moduleDomStyle,
                custom: this.opt.config.moduleDomCustomAttr,
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
    }, { "../base/base.js": 1, "../modules/m-super-type.js": 35 }], 28: [function (require, module, exports) {
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
    }, { "../base/base.js": 1 }], 29: [function (require, module, exports) {
        //底层方法
        var base = require('../base/base.js');

        //超类型(子类型继承的对象)
        var SuperType = require('../modules/m-super-type.js');
        var Mask = require('../modules/m-mask.js');

        //子类型
        var SubType = base.constructorInherit({
            superType: SuperType,
            parameter: {
                //回调
                callback: {
                    moduleDomRenderBefore: function moduleDomRenderBefore(self) {
                        if (self.opt.config.moduleDomMaskIsShow) {
                            new Mask({
                                wrap: self.moduleDom.querySelector('.m-loading-wrap'),
                                config: {
                                    moduleDomIsShow: true,
                                    moduleDomRenderMethod: { method: 'insertBefore' }
                                }
                            });
                        }
                        if (self.wrapDom && getComputedStyle(self.wrapDom).position == 'static') {
                            self.wrapDom.style.position = 'relative';
                        }
                    }
                },
                //配置
                config: {
                    moduleDomMaskIsShow: false, //是否显示遮罩(默认不显示)
                    moduleDomIsShow: false, //内部模块是否显示(默认不显示)
                    moduleDomStatus: 'loading', //加载状态 loading(加载中) over(加载完毕)
                    moduleDomPosition: 'relative' //模块的位置 'fixed'(相对文档居中) 'absolute'(相对容器居中) 'relative'(直接填入容器)
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
                moduleDomClass = "m-loading-loading ";
                //相对文档居中
                if (moduleDomPosition == 'fixed') {
                    moduleDomClass += "m-loading-fixed";
                }
                //相对容器居中
                if (moduleDomPosition == 'absolute') {
                    moduleDomClass += "m-loading-absolute";
                }
                //直接填入容器(不进行居中处理)
                if (moduleDomPosition == 'relative') {
                    moduleDomClass += "m-loading-relative";
                }
                moduleDomHtml = "\n            <div class=\"m-loading-wrap\">\n                <div class=\"m-loading-loading-icon iconfont icon-jiazaizhong\"></div>\n            </div>\n        ";
            }
            //加载完毕
            if (moduleDomStatus == 'over') {
                moduleDomClass = "m-loading-over ";
                //相对文档居中
                if (moduleDomPosition == 'fixed') {
                    moduleDomClass += "m-loading-fixed";
                }
                //相对容器居中
                if (moduleDomPosition == 'absolute') {
                    moduleDomClass += "m-loading-absolute";
                }
                //直接填入容器(不进行居中处理)
                if (moduleDomPosition == 'relative') {
                    moduleDomClass += "m-loading-relative";
                }
                moduleDomHtml = "\n            <div class=\"m-loading-wrap\">\n                <div class=\"m-loading-over-icon iconfont icon-meiyoushuju\"></div>\n                <div class=\"m-loading-over-txt\">\u6CA1\u6709\u6570\u636E\u4E86</div>\n            </div>\n        ";
            }
            //模块创建
            this.moduleDom = base.createElement({
                style: this.opt.config.moduleDomStyle,
                custom: this.opt.config.moduleDomCustomAttr,
                attribute: {
                    className: "m-loading " + moduleDomClass,
                    innerHTML: moduleDomHtml
                }
            });
        };

        module.exports = SubType;
    }, { "../base/base.js": 1, "../modules/m-mask.js": 30, "../modules/m-super-type.js": 35 }], 30: [function (require, module, exports) {
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
                        if (self.wrapDom && getComputedStyle(self.wrapDom).position == 'static') {
                            self.wrapDom.style.position = 'relative';
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
                custom: this.opt.config.moduleDomCustomAttr,
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
    }, { "../base/base.js": 1, "../modules/m-super-type.js": 35 }], 31: [function (require, module, exports) {
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
    }, {}], 32: [function (require, module, exports) {
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
                style: this.opt.config.moduleDomStyle,
                custom: this.opt.config.moduleDomCustomAttr,
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
    }, { "../base/base.js": 1, "../modules/m-super-type.js": 35 }], 33: [function (require, module, exports) {
        //底层方法
        var base = require('../base/base.js');

        //超类型(子类型继承的对象)
        var SuperType = require('../modules/m-super-type-es6.js');

        //子类型

        var SubType = function (_SuperType) {
            _inherits(SubType, _SuperType);

            function SubType(json) {
                _classCallCheck(this, SubType);

                //制定内部的默认值
                var _this = _possibleConstructorReturn(this, (SubType.__proto__ || Object.getPrototypeOf(SubType)).call(this, json));
                /*
                 * 继承超类型的属性和方法
                 * 就算使用Super.call继承属性,也会先执行内部的init函数,这个和es6的比较
                 * 我封装的es5继承函数constructor-inherit是先处理的参数this.opt,再进行的继承
                 * 这里的es6继承,是先进行的继承,再处理的参数,因为继承之前,子类无this属性
                 * 不管是es5的继承,还是es6的继承,都会执行函数内部的一切,例如
                 * 我封装的constructor-inherit继承属性时Super.call(this,this.opt),函数内部的init方法被执行了
                 * 执行前我处理了参数this.opt,所有一切还算稳定,我喜欢这个写法
                 * es6继承属性和方法用super(json),继承时函数内部的init方法也被执行了,执行后才处理的参数this.opt
                 * 后处理参数的话,即使我更新了默认的参数配置,覆盖了超类的方法,也获取不到最新参数上的数据,导致默认参数无效
                 * 因为函数执行super(json)的时候,init已经被调用了,数据是后更新的,所以不能获取到,因此
                 * 我需要清除内部模块,并进行重新调用,这点我很不喜欢,所以我现在的场景还是更适合es5的面向对象
                 * 注:init方法是我封装的超类型里的初始化方法,this.opt是超类型里的参数,参数我喜欢用对象的形式
                 * */


                _this.opt = base.extend({
                    default: _this.opt,
                    //inherit里放默认参数
                    inherit: {
                        callback: {},
                        config: {},
                        data: {}
                    }
                });
                //接收外部的参数
                _this.opt = base.extend({
                    default: _this.opt,
                    inherit: json
                });
                /*
                 * 因为es6的继承是:子类型继承超类之后,才拥有this属性的原因,我要先移除一次,再重新生成
                 * 否则的话,上面的默认值不会生效
                 * */
                _this.moduleDomRemove();
                _this.init();
                return _this;
            }

            //内部模块的创建(覆盖超类型)


            _createClass(SubType, [{
                key: "moduleDomCreate",
                value: function moduleDomCreate() {
                    this.moduleDom = base.createElement({
                        style: this.opt.config.moduleDomStyle,
                        custom: this.opt.config.moduleDomCustomAttr,
                        attribute: {
                            className: "m-sub-type-es6",
                            innerHTML: "\n                    <div class=\"m-sub-type-es6-txt\">\u5468\u534E\u98DE\u7231\u4FAF\u4E3D\u6770,\u4FAF\u4E3D\u6770\u7231\u5468\u534E\u98DE</div>\n                "
                        }
                    });
                }

                //功能重写(覆盖超类型)

            }, {
                key: "power",
                value: function power() {
                    //功能重写待续...
                }
            }]);

            return SubType;
        }(SuperType);

        module.exports = SubType;
    }, { "../base/base.js": 1, "../modules/m-super-type-es6.js": 34 }], 34: [function (require, module, exports) {
        //底层方法
        var base = require('../base/base.js');

        //底层构造函数

        var SuperType = function () {
            function SuperType(json) {
                _classCallCheck(this, SuperType);

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


            _createClass(SuperType, [{
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
                //功能待续...


                //内部模块的创建(这个方法在其他模块的内部需要被重写)

            }, {
                key: "moduleDomCreate",
                value: function moduleDomCreate() {
                    this.moduleDom = base.createElement({
                        style: this.opt.config.moduleDomStyle,
                        custom: this.opt.config.moduleDomCustomAttr,
                        attribute: {
                            className: "m-super-type-es6",
                            innerHTML: "\n                    <div class=\"m-super-type-es6-txt\">\u5468\u534E\u98DE\u7231\u4FAF\u4E3D\u6770,\u4FAF\u4E3D\u6770\u7231\u5468\u534E\u98DE</div>\n                "
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
                        this.opt.config.moduleDomIsShow = true;
                        this.wrapDomRenderMethod();
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
                        this.opt.config.moduleDomIsShow = false;
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
                        this.wrapDomRenderMethod();
                        callback.wrapDomRenderAfter(this);
                        callback.moduleDomRenderAfter(this);
                    }
                }

                //外部容器的渲染方式

            }, {
                key: "wrapDomRenderMethod",
                value: function wrapDomRenderMethod() {
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

                //获取内部模块的整体html结构

            }, {
                key: "getModuleDomHtml",
                value: function getModuleDomHtml() {
                    return this.moduleDom.outerHTML;
                }
            }]);

            return SuperType;
        }();

        module.exports = SuperType;
    }, { "../base/base.js": 1 }], 35: [function (require, module, exports) {
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
    }, { "../base/base.js": 1 }], 36: [function (require, module, exports) {
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
                style: this.opt.config.moduleDomStyle,
                custom: this.opt.config.moduleDomCustomAttr,
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
    }, { "../base/base.js": 1, "../modules/m-super-type.js": 35 }], 37: [function (require, module, exports) {
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
    }, { "../base/base.js": 1, "../function/validate": 22 }] }, {}, [3]);