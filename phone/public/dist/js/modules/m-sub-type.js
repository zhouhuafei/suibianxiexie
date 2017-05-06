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
            objectRemoveQuote: require('../function/object-remove-quote'), //移除对象引用
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
            objectToArray: require('../function/object-to-array'), //把json格式的对象转成数组
            secondsToTime: require('../function/seconds-to-time'), //秒转时间
            timeCountDown: require('../function/time-count-down'), //倒计时
            stringLimit: require('../function/string-limit'), //字符串限制
            getDomArray: require('../function/get-dom-array'), //获取一组dom节点
            createElement: require('../function/create-element'), //创建元素节点
            extend: require('../function/extend') //对象扩展
        };
        module.exports = base;
    }, { "../function/array-remove-repeat": 3, "../function/constructor-inherit": 4, "../function/cookie": 5, "../function/create-element": 6, "../function/extend": 7, "../function/fill-zero": 8, "../function/get-dom-array": 9, "../function/get-parent": 10, "../function/html-to-dom": 11, "../function/object-remove-quote": 12, "../function/object-to-array": 13, "../function/offset": 14, "../function/px2rem": 15, "../function/scroll-to": 16, "../function/seconds-to-time": 17, "../function/select": 18, "../function/string-limit": 19, "../function/time-count-down": 20, "../function/user-agent": 21, "../function/when-scroll-bottom": 22, "../function/whether-disable-scroll": 23 }], 2: [function (require, module, exports) {
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
                style: this.options.config.moduleDomStyle,
                custom: this.options.config.moduleDomCustomAttr,
                attribute: {
                    className: "m-sub-type",
                    innerHTML: "\n                <div class=\"m-sub-type-text\">\u5468\u534E\u98DE\u7231\u4FAF\u4E3D\u6770,\u4FAF\u4E3D\u6770\u7231\u5468\u534E\u98DE</div>\n            "
                }
            });
        };

        //功能(覆盖超类型)
        SubType.prototype.power = function () {
            //功能重写待续...
        };

        module.exports = SubType;
    }, { "../base/base": 1, "../modules/m-super-type": 24 }], 3: [function (require, module, exports) {
        //数组去重
        function arrayRemoveRepeat(json) {
            var options = json || {};
            var array = options.array || [];
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
        var objectRemoveQuote = require('../function/object-remove-quote'); //对象移除引用

        //构造函数的继承(拷贝继承)
        function constructorInherit(json) {
            var options = extend({
                defaults: {
                    superType: null, //继承哪个超类(这个必须传的是一个构造函数,或者不传值)
                    parameter: {} //默认参数(这个必须传的是一个对象,或者不传值)
                },
                inherits: json
            });
            //超类型(需要是个构造函数)
            var SuperType = options.superType;
            //子类型的默认参数(需要是个对象)
            var parameter = options.parameter;
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
                 * 第一次   var object1=new Sub({wrap:'body'});   wrap的值是'body'
                 * 第二次   var object2=new Sub();    这里按理说wrap的值应该是默认值'.g-wrap'
                 * 但是由于对象引用的原因,这里的值会变成'body'
                 * 因此这里要处理掉对象的引用,所以我使用了JSON的方法进行了阻止
                 * 但是JSON.stringify方法居然会过滤掉对象内部的所有函数,真是日了狗了
                 * 所以我就封装了一个移除对象引用的函数
                 * */
                this.options = extend({
                    defaults: objectRemoveQuote({ object: parameter }),
                    inherits: json
                });
                //子类型继承超类型的属性
                options.superType.call(this, this.options);
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
    }, { "../function/extend": 7, "../function/object-remove-quote": 12 }], 5: [function (require, module, exports) {
        //设置cookie
        function setCookie(json) {
            var options = json || {};
            var name = options.name;
            var value = options.value;
            var expires = options.expires;
            var myDate = new Date();
            var myTime = myDate.getTime();
            myDate.setTime(myTime + expires * 24 * 60 * 60 * 1000);
            document.cookie = name + '=' + value + '; expires=' + myDate;
        }
        //获取cookie
        function getCookie(json) {
            var options = json || {};
            var name = options.name;
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
            var options = json || {};
            var name = options.name;
            setCookie(name, '', -1);
        }
        var object = {
            setCookie: setCookie,
            getCookie: getCookie,
            removeCookie: removeCookie
        };
        module.exports = object;
    }, {}], 6: [function (require, module, exports) {
        //创建元素节点
        function createElement(json) {
            var options = json || {};
            options.elementName = options.elementName || 'div'; //标签名称
            options.style = options.style || ""; //style样式
            options.custom = options.custom || {}; //自定义属性
            options.attribute = options.attribute || {}; //普通属性,checked,selected
            var elementNode = document.createElement(options.elementName); //元素节点
            if (options.style) {
                elementNode.setAttribute('style', options.style);
            }
            for (var attr1 in options.custom) {
                if (options.custom.hasOwnProperty(attr1)) {
                    elementNode.setAttribute('data-' + attr1, options.custom[attr1]);
                }
            }
            for (var attr0 in options.attribute) {
                if (options.attribute.hasOwnProperty(attr0)) {
                    elementNode[attr0] = options.attribute[attr0];
                }
            }
            return elementNode;
        }
        module.exports = createElement;
    }, {}], 7: [function (require, module, exports) {
        //对象的扩展方法
        function extend(json) {
            var options = json || {};
            options.defaults = options.defaults || {}; //默认对象
            options.inherits = options.inherits || {}; //继承对像
            options.isDeep = options.isDeep == false ? options.isDeep : true; //是否进行深拷贝(默认进行深拷贝)
            var defaultsType = Object.prototype.toString.call(options.defaults).slice(8, -1).toLowerCase();
            var inheritsType = Object.prototype.toString.call(options.inherits).slice(8, -1).toLowerCase();
            if (defaultsType == inheritsType && options.isDeep) {
                if (defaultsType == 'object' || defaultsType == 'array') {
                    //当为对象或者为数组
                    for (var attr in options.inherits) {
                        if (options.inherits.hasOwnProperty(attr)) {
                            var attrDefaultsType = Object.prototype.toString.call(options.defaults[attr]).slice(8, -1).toLowerCase();
                            var attrInheritsType = Object.prototype.toString.call(options.inherits[attr]).slice(8, -1).toLowerCase();
                            if (attrDefaultsType == attrInheritsType && options.isDeep) {
                                //类型相同
                                if (attrDefaultsType == 'object' || attrDefaultsType == 'array') {
                                    //当为对象或者为数组
                                    extend({ defaults: options.defaults[attr], inherits: options.inherits[attr] });
                                } else {
                                    options.defaults[attr] = options.inherits[attr];
                                }
                            } else {
                                //类型不同,直接后面的覆盖前面的
                                options.defaults[attr] = options.inherits[attr];
                            }
                        }
                    }
                } else {
                    options.defaults = options.inherits;
                }
            } else {
                options.defaults = options.inherits;
            }
            return options.defaults;
        }
        // var object1 = extend({
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
        // console.log(object1);//{a: 0, b: {b1: 'b1', b2: 1, b3: {c1: 'c1', c2: 2}}}
        // var object2 = extend({
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
        // console.log(object2);//{a: [1, [3, 1, 7],{arr: [8, 8, 8, [6, 8, 10], {good: 'good'}]}], b: ['what?', {a2: 'a2', b1: 'b1'}, {b2: 'b2'}]}
        module.exports = extend;
    }, {}], 8: [function (require, module, exports) {
        //对象的扩展方法
        var extend = require('../function/extend');

        //补零函数
        function fillZero(json) {
            var options = extend({
                defaults: {
                    number: 0
                },
                inherits: json
            });
            var number = options.number;
            if (number < 10) {
                return '0' + number;
            } else {
                return '' + number;
            }
        }
        module.exports = fillZero;
    }, { "../function/extend": 7 }], 9: [function (require, module, exports) {
        var extend = require('../function/extend'); //对象的扩展方法

        //获取原生的dom节点并转换成数组,传入的参数仅支持:1.原生的dom节点,2.原生的dom集合,3.css选择器
        function getDomArray(json) {
            var options = extend({
                defaults: {
                    element: null
                },
                inherits: json
            });
            var dom = [];
            if (options.element) {
                //如果是字符串
                if (Object.prototype.toString.call(options.element).slice(8, -1).toLowerCase() == 'string') {
                    dom = [].slice.call(document.querySelectorAll(options.element));
                }
                //如果是dom节点(一个元素)    原生的
                if (options.element.nodeType == 1) {
                    dom = [options.element];
                }
                /*
                 * 如果是dom集合(一组元素)    HtmlCollection(通过getElementsBy系列获取到的)
                 * 如果是dom集合(一组元素)    NodeList(通过querySelectorAll获取到的)
                 * */
                if (Object.prototype.toString.call(options.element).slice(8, -1).toLowerCase() == 'htmlcollection' || Object.prototype.toString.call(options.element).slice(8, -1).toLowerCase() == 'nodelist') {
                    dom = [].slice.call(options.element);
                }
            }
            return dom;
        }
        module.exports = getDomArray;
    }, { "../function/extend": 7 }], 10: [function (require, module, exports) {
        //获取指定父级
        function getParent(json) {
            var options = json || {};
            var object = options.object;
            var selector = options.selector;
            if (!object) {
                //第一参数不符合规范
                console.log('参数错误,第一参数需要一个元素节点对象');
                return null;
            }
            if (!selector) {
                //没有第二参数默认选取直接父级
                return object.parentNode;
            } else if (typeof selector == 'string') {
                object = object.parentNode;
                switch (selector.charAt(0)) {
                    case '.':
                        //通过class获取父级
                        while (object) {
                            if (!object.classList) {
                                console.log('no find class');
                                return null;
                            }
                            if (object.classList.contains(selector.substring(1))) {
                                return object;
                            } else {
                                object = object.parentNode;
                            }
                        }
                        break;
                    case '#':
                        //通过id获取父级
                        while (object) {
                            if (object == document) {
                                console.log('no find id');
                                return null;
                            }
                            if (object.id == selector.substring(1)) {
                                return object;
                            } else {
                                object = object.parentNode;
                            }
                        }
                        break;
                    default:
                        //通过标签名获取父级
                        while (object) {
                            if (object == document) {
                                console.log('no find tagName');
                                return null;
                            }
                            if (object.tagName.toLowerCase() == selector) {
                                return object;
                            } else {
                                object = object.parentNode;
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
            var options = json || {};
            var html = options.html;
            var div = document.createElement('div');
            div.innerHTML = html;
            return div.children[0];
        }
        module.exports = htmlToDom;
    }, {}], 12: [function (require, module, exports) {
        //移除对象引用
        function objectRemoveQuote(json) {
            var options = json || {};
            var object = options.object;
            var objectType = Object.prototype.toString.call(object).slice(8, -1).toLowerCase();

            if (objectType != 'object' && objectType != 'array') {
                return object;
            }
            var newObject = {};
            if (objectType == 'array') {
                newObject = [];
            }
            for (var attr in object) {
                if (object.hasOwnProperty(attr)) {
                    newObject[attr] = objectRemoveQuote({ object: object[attr] });
                }
            }
            return newObject;
        }
        module.exports = objectRemoveQuote;
    }, {}], 13: [function (require, module, exports) {
        //把json格式的对象转成数组
        function objectToArray(json) {
            var options = json || {};
            var object = options.object;
            var arr = [];
            if (object instanceof Array) {
                object.forEach(function (v, i) {
                    arr.push([i, v]);
                });
            } else {
                for (var attr in object) {
                    if (object.hasOwnProperty(attr)) {
                        arr.push({ key: attr, value: object[attr] });
                    }
                }
            }
            return arr;
        }
        module.exports = objectToArray;
    }, {}], 14: [function (require, module, exports) {
        var extend = require('../function/extend'); //对象的扩展
        var getDomArray = require('../function/get-dom-array'); //获取一组dom节点

        //获取元素距离文档的left和top
        function offset(json) {
            var options = extend({
                defaults: {
                    element: null
                },
                inherits: json
            });
            var top = 0;
            var left = 0;
            var object = getDomArray({ element: options.element })[0];
            while (object) {
                top += object.offsetTop;
                left += object.offsetLeft;
                object = object.offsetParent;
            }
            return {
                top: top,
                left: left
            };
        }
        module.exports = offset;
    }, { "../function/extend": 7, "../function/get-dom-array": 9 }], 15: [function (require, module, exports) {
        //px2rem
        function px2rem(json) {
            var options = json || options;
            var base = options.base || '320';
            var px = options.px || '0';
            return px / base * 10 + 'rem';
        }
        module.exports = px2rem;
    }, {}], 16: [function (require, module, exports) {
        //滚动到指定位置
        function scrollTo(json) {
            var options = json || {};
            var to = options.to || '0';
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
            var options = json || {};
            var seconds = options.seconds;
            //天
            var day = Math.floor(seconds / 3600 / 24);
            //时
            var hour = Math.floor(seconds / 3600 % 24);
            //分
            var minute = Math.floor(seconds % 3600 / 60);
            //秒
            var second = Math.floor(seconds % 60);
            return { day: day, hour: hour, minute: minute, second: second, seconds: seconds };
        }
        module.exports = secondsToTime;
    }, {}], 18: [function (require, module, exports) {
        //全选,不选,反选
        var extend = require('../function/extend');
        var getDomArray = require('../function/get-dom-array');

        function Select(json) {
            this.options = extend({
                defaults: {
                    items: null, //所有的被选项
                    callback: {
                        click: function click() {}
                    }
                },
                inherits: json
            });
            this.itemsDom = getDomArray({ element: this.options.items });
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
                    self.options.callback.click({ element: this, isCheckedAll: isCheckedAll });
                });
            });
        };

        module.exports = Select;
    }, { "../function/extend": 7, "../function/get-dom-array": 9 }], 19: [function (require, module, exports) {
        //字符数量限制
        function stringLimit(json) {
            var options = json || {};
            var max = options.max;
            var string = options.string;
            if (!string) {
                return '';
            }
            var length = string.length;
            if (length > max) {
                string = string.substring(0, max);
            }
            return string;
        }
        module.exports = stringLimit;
    }, {}], 20: [function (require, module, exports) {
        var extend = require('../function/extend');
        var secondsToTime = require('../function/seconds-to-time'); //时间转换

        //倒计时
        function timeCountDown(json) {
            var options = extend({
                defaults: {
                    seconds: 0,
                    callback: {
                        run: function run() {},
                        over: function over() {}
                    }
                },
                inherits: json
            });
            var seconds = options.seconds; //秒数
            var run = options.callback.run; //运行的回调
            var over = options.callback.over; //结束的回调
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
    }, { "../function/extend": 7, "../function/seconds-to-time": 17 }], 21: [function (require, module, exports) {
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
        var extend = require('../function/extend');

        //当滚动到了浏览器的底部
        function WhenScrollBottom(json) {
            this.options = extend({
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
            var callback = this.options.callback;
            var allH = document.body.scrollHeight;
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            var clientHeight = document.documentElement.clientHeight;
            if (scrollTop + clientHeight >= allH - this.options.errorHeight && !this.isLoadOver) {
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
                }, self.options.interval);
            });
        };
        module.exports = WhenScrollBottom;
    }, { "../function/extend": 7 }], 23: [function (require, module, exports) {
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
    }, {}], 24: [function (require, module, exports) {
        //底层方法
        var base = require('../base/base');

        //底层构造函数
        function SuperType(json) {
            //函数外部传来的参数(这个属性在其他模块的内部需要被重写)
            this.options = base.extend({
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
                style: this.options.config.moduleDomStyle,
                custom: this.options.config.moduleDomCustomAttr,
                attribute: {
                    className: "m-super-type",
                    innerHTML: "\n                <div class=\"m-super-type-text\">\u5468\u534E\u98DE\u7231\u4FAF\u4E3D\u6770,\u4FAF\u4E3D\u6770\u7231\u5468\u534E\u98DE</div>\n            "
                }
            });
        };

        //内部模块的渲染
        SuperType.prototype.moduleDomRender = function () {
            this.moduleDomRemove();
            var callback = this.options.callback;
            callback.moduleDomCreateBefore(this);
            this.moduleDomCreate();
            callback.moduleDomCreateAfter(this);
        };

        //内部模块的移除
        SuperType.prototype.moduleDomRemove = function () {
            var callback = this.options.callback;
            callback.moduleDomRemoveBefore(this);
            if (this.moduleDom && this.moduleDom.parentNode) {
                this.moduleDom.parentNode.removeChild(this.moduleDom);
            }
            this.moduleDomClearTimer();
            callback.moduleDomRemoveAfter(this);
        };

        //内部模块的定时器清除(假设内部模块有定时器)
        SuperType.prototype.moduleDomClearTimer = function () {
            if (this.options.config.moduleDomIsClearTimer) {
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
            var callback = this.options.callback;
            callback.moduleDomShowBefore(this);
            if (this.wrapDom) {
                this.options.config.moduleDomIsShow = true;
                this.wrapDomRenderMethod();
            }
            callback.moduleDomShowAfter(this);
        };

        //内部模块的隐藏(显示隐藏和是否清除定时器无关)
        SuperType.prototype.moduleDomHide = function () {
            var callback = this.options.callback;
            callback.moduleDomHideBefore(this);
            if (this.moduleDom.parentNode) {
                this.moduleDom.parentNode.removeChild(this.moduleDom);
                this.options.config.moduleDomIsShow = false;
            }
            callback.moduleDomHideAfter(this);
        };

        //外部容器的创建
        SuperType.prototype.wrapDomCreate = function () {
            this.wrapDom = base.getDomArray({ element: this.options.wrap })[0];
        };

        //外部容器的渲染
        SuperType.prototype.wrapDomRender = function () {
            var callback = this.options.callback;
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
            var config = this.options.config;
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
            var callback = this.options.callback;
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
    }, { "../base/base": 1 }] }, {}, [2]);