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
            cookie: require('../function/cookie'),
            fillZero: require('../function/fill-zero'),
            getParent: require('../function/get-parent'),
            goTop: require('../function/go-top'),
            htmlToDom: require('../function/html-to-dom'),
            whetherDisableScroll: require('../function/whether-disable-scroll'),
            whenScrollBottom: require('../function/when-scroll-bottom'),
            jsonToArray: require('../function/json-to-array'),
            mask: require('../function/mask'),
            secondsToTime: require('../function/seconds-to-time'),
            timeCountDown: require('../function/time-count-down'),
            strLimit: require('../function/str-limit'),
            getOneDom: require('../function/get-one-dom'),
            extend: require('../function/extend')
        };
        module.exports = base;
    }, { "../function/cookie": 3, "../function/extend": 4, "../function/fill-zero": 5, "../function/get-one-dom": 6, "../function/get-parent": 7, "../function/go-top": 8, "../function/html-to-dom": 9, "../function/json-to-array": 10, "../function/mask": 12, "../function/seconds-to-time": 13, "../function/str-limit": 14, "../function/time-count-down": 15, "../function/when-scroll-bottom": 17, "../function/whether-disable-scroll": 18 }], 2: [function (require, module, exports) {
        /**
         * Created by zhouhuafei on 16/12/4.
         */
        //测试
        (function () {
            var Test = require('../modules/m-test');
            var test = new Test({
                parent: document.querySelector(".main-test"),
                dataConfig: {
                    isClearTimer: true
                },
                dataAjax: {
                    info: "\u5468\u534E\u98DE\u7231\u4FAF\u4E3D\u6770"
                }
            });

            setTimeout(function () {
                test.opt.dataAjax.info = "\u4FAF\u4E3D\u6770\u7231\u5468\u534E\u98DE";
                test.init();
            }, 5000);
        })();
        //单选开关
        (function () {
            var Radio = require('../modules/m-radio-switch');
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
            var Table = require('../modules/m-table');
            var table = new Table({
                parentSelector: ".main-table",
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
            });
        })();
        //验证
        (function () {
            var ValidateInput = require('../modules/m-validate-input');
            var aInput = [].slice.call(document.querySelectorAll('.m-validate-input'));
            aInput.forEach(function (v) {
                var validate = new ValidateInput({ input: v });
                validate.validateEventBlur();
            });
        })();
        //星评
        (function () {
            var Star = require('../modules/m-star');
            var main = document.querySelector('.main-star');
            var star = new Star({
                eventCallback: function eventCallback(json) {
                    console.log("\u6709\u70B9\u610F\u601D" + json.index);
                }
            });
            main.appendChild(star.parentDom);
        })();
        //列表
        (function () {
            var Product = require('../modules/m-product');
            var main = document.querySelector('.main-product');
            var product = new Product({
                configData: {
                    isShowGoodsName: true,
                    isShowPrice: true,
                    isVipCustom: true,
                    isShowLikeNum: true,
                    //isShowCart:true,
                    isShowSeckillMark: true,
                    isShowSeckillLogo: true,
                    //isShowSeckillWillBeginBtn:true,
                    //isShowSeckillWillBeginTime:true,
                    //isShowSeckillHintBtn:true,
                    //isShowSeckillHintBtnSetOk:true,
                    isShowSeckillNowGetBtn: true,
                    isShowSeckillWillEndTime: true
                },
                ajaxData: {
                    goodsName: '商品名称商品名称商品名称商品名称商品名称商品名称',
                    marketPrice: '200.00',
                    nowPrice: '100.00',
                    vipPrice: '10.00',
                    seckillPrice: '1.00',
                    likeNum: '300',
                    imgSrc: '../../images/modules/desktop.png',
                    aHref: 'http://www.baidu.com',
                    seckillWillBeginTime: '6',
                    seckillWillBeginBtnShowTime: '3',
                    seckillWillEndTime: '300'
                }
            });
            main.appendChild(product.parentDom);
        })();
        require('../function/lazyload')(); //延迟加载
    }, { "../function/lazyload": 11, "../modules/m-product": 19, "../modules/m-radio-switch": 20, "../modules/m-star": 21, "../modules/m-table": 22, "../modules/m-test": 23, "../modules/m-validate-input": 24 }], 3: [function (require, module, exports) {
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
    }, {}], 4: [function (require, module, exports) {
        function extend(json) {
            var opt = json || {};
            var defaults = opt.defaults || {};
            var inherits = opt.inherits || {};
            var isDeep = true; //默认进行深拷贝
            for (var attr in inherits) {
                if (inherits.hasOwnProperty(attr)) {
                    var defaultsType = Object.prototype.toString.call(defaults[attr]).slice(8, -1).toLowerCase();
                    var inheritsType = Object.prototype.toString.call(inherits[attr]).slice(8, -1).toLowerCase();
                    if (defaultsType == inheritsType && isDeep) {
                        //类型相同
                        if (defaultsType == 'object') {
                            //当为对象
                            extend({ defaults: defaults[attr], inherits: inherits[attr] });
                        } else if (defaultsType == 'array') {
                            //当为数组时
                            inherits[attr].forEach(function (v, i) {
                                var vDefaultsType = Object.prototype.toString.call(defaults[attr][i]).slice(8, -1).toLowerCase();
                                var vInheritsType = Object.prototype.toString.call(inherits[attr][i]).slice(8, -1).toLowerCase();
                                if (vInheritsType == vDefaultsType && isDeep) {
                                    if (vDefaultsType == 'object') {
                                        extend({ defaults: defaults[attr][i], inherits: inherits[attr][i] });
                                    } else {
                                        defaults[attr][i] = inherits[attr][i];
                                    }
                                } else {
                                    defaults[attr][i] = inherits[attr][i];
                                }
                            });
                        } else {
                            defaults[attr] = inherits[attr];
                        }
                    } else {
                        //类型不同,直接后面的覆盖前面的
                        defaults[attr] = inherits[attr];
                    }
                }
            }
            return defaults;
        }
        /*
        var obj1 = extend({
            defaults: {
                a: 'a',
                b: {
                    b1: 'b1',
                    b2: 'b2',
                    b3: {
                        c1: 'c1'
                    }
                }
            },
            inherits: {
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
            defaults: {
                b: [
                    {a1: 'a1'},
                    {a2: 'a2'}
                ]
            },
            inherits: {
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
    }, {}], 5: [function (require, module, exports) {
        /**
         * Created by zhouhuafei on 17/1/1.
         */
        //补零函数
        function fillZero(json) {
            var opt = json || {};
            var num = opt.num;
            if (num < 10) {
                return '0' + num;
            } else {
                return '' + num;
            }
        }
        module.exports = fillZero;
    }, {}], 6: [function (require, module, exports) {
        //获取一个原生的dom节点,当传入的是dom,或者是选择器的时候
        function getOneDom(json) {
            var opt = json || {};
            opt.dom = opt.dom || ""; //这个仅支持传入选择器和原生dom节点
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
    }, {}], 7: [function (require, module, exports) {
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
    }, {}], 8: [function (require, module, exports) {
        /**
         * Created by zhouhuafei on 17/1/1.
         */
        //返回顶部
        function goTop(json) {
            var opt = json || {};
            var obj = opt.obj;
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
                speed = Math.ceil(scrollT / scale);
                scrollT -= speed;
                window.scrollTo(0, scrollT);
                timer = requestAnimationFrame(fn);
                if (scrollT == 0) {
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
    }, {}], 9: [function (require, module, exports) {
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
    }, {}], 10: [function (require, module, exports) {
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
    }, {}], 11: [function (require, module, exports) {
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
    }, {}], 12: [function (require, module, exports) {
        /**
         * Created by zhouhuafei on 17/1/1.
         */
        //遮罩
        function mask(json) {
            var opt = json || {};
            var status = opt.status;
            var bg = 'rgba(0,0,0,0.4)';
            var zIndex = 500;
            var className = 'g-mask';
            if (status == 'transparent') {
                //如果是透明遮罩
                bg = 'rgba(0,0,0,0)';
                zIndex = 1000;
                className = 'g-mask-transparent';
            }
            var doc = document;
            var body = doc.body;
            var mask = doc.createElement('div');
            mask.className = className;
            mask.setAttribute('style', "background-color:" + bg + ";position:fixed;left:0;top:0;width:100%;height:100%;z-index:" + zIndex + ";");
            return {
                show: function show() {
                    body.appendChild(mask);
                },
                hide: function hide() {
                    body.removeChild(mask);
                }
            };
        }
        module.exports = mask;
    }, {}], 13: [function (require, module, exports) {
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
    }, {}], 14: [function (require, module, exports) {
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
    }, {}], 15: [function (require, module, exports) {
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
    }, {}], 16: [function (require, module, exports) {
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
    }, {}], 17: [function (require, module, exports) {
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
    }, {}], 18: [function (require, module, exports) {
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
    }, {}], 19: [function (require, module, exports) {
        /**
         * Created by zhouhuafei on 16/12/17.
         */
        //商品列表
        function ProductList(json) {
            this.opt = json || {};
            this.configData = this.opt.configData || {}; //配置信息
            this.ajaxData = this.opt.ajaxData || {}; //商品信息
            this.configData = {
                showType: this.configData.showType || 'm-product-list', //默认的展现形式(默认为列表式:'m-product-list',橱窗式:'m-product-window',海报式:'m-product-placard')
                isShowImgSrc: this.configData.isShowImgSrc == true ? this.configData.isShowImgSrc : false, //是否直接显示图片(默认不直接显示)
                isShowLong: this.configData.isShowLong == true ? this.configData.isShowLong : false, //是否显示为长方形(默认不显示)
                isShowCart: this.configData.isShowCart == true ? this.configData.isShowCart : false, //是否显示购物车(默认不显示)
                isShowGoodsName: this.configData.isShowGoodsName == true ? this.configData.isShowGoodsName : false, //是否显示商品名称(默认不显示)
                isShowPrice: this.configData.isShowPrice == true ? this.configData.isShowPrice : false, //是否显示商品价格(默认不显示)
                isVipCustom: this.configData.isVipCustom == true ? this.configData.isVipCustom : false, //是否是VIP客户(默认不显示)
                isShowLikeNum: this.configData.isShowLikeNum == true ? this.configData.isShowLikeNum : false, //是否显示多少人想买(默认不显示)
                isShowSeckillMark: this.configData.isShowSeckillMark == true ? this.configData.isShowSeckillMark : false, //是否显示秒杀标识(默认不显示)
                isShowSeckillLogo: this.configData.isShowSeckillLogo == true ? this.configData.isShowSeckillLogo : false, //是否显示秒杀logo(默认不显示)
                isShowSeckillWillBeginBtn: this.configData.isShowSeckillWillBeginBtn == true ? this.configData.isShowSeckillWillBeginBtn : false, //是否显示秒杀即将开始按钮(默认不显示)
                isShowSeckillWillBeginTime: this.configData.isShowSeckillWillBeginTime == true ? this.configData.isShowSeckillWillBeginTime : false, //是否显示秒杀即将开始的时间(默认不显示)
                isShowSeckillHintBtn: this.configData.isShowSeckillHintBtn == true ? this.configData.isShowSeckillHintBtn : false, //是否显示秒杀提醒按钮(默认不显示)
                isShowSeckillHintBtnSetOk: this.configData.isShowSeckillHintBtnSetOk == true ? this.configData.isShowSeckillHintBtnSetOk : false, //是否显示已设置秒杀提醒按钮(默认不显示)
                isShowSeckillNowGetBtn: this.configData.isShowSeckillNowGetBtn == true ? this.configData.isShowSeckillNowGetBtn : false, //是否显示秒杀马上抢按钮(默认不显示)
                isShowSeckillWillEndTime: this.configData.isShowSeckillWillEndTime == true ? this.configData.isShowSeckillWillEndTime : false //是否显示秒杀即将结束的倒计时(默认不显示)
            };
            this.ajaxData = {
                goodsName: this.ajaxData.goodsName || '商品名称', //商品名称
                gid: this.ajaxData.gid, //商品的id
                marketPrice: this.ajaxData.marketPrice || 'undefined.undefined', //市场价格
                nowPrice: this.ajaxData.nowPrice || 'undefined.undefined', //现在的价格
                vipPrice: this.ajaxData.vipPrice || 'undefined.undefined', //会员价格
                seckillPrice: this.ajaxData.seckillPrice || 'undefined.undefined', //秒杀价格
                likeNum: this.ajaxData.likeNum, //多少人喜欢
                imgSrc: this.ajaxData.imgSrc || '', //图片的地址
                aHref: this.ajaxData.aHref || 'javascript:;', //商品详情的链接
                seckillWillBeginTime: this.ajaxData.seckillWillBeginTime || '6', //秒杀即将开始的时间
                seckillWillBeginBtnShowTime: this.ajaxData.seckillWillBeginBtnShowTime || '60', //秒杀即将开始按钮出现的时间(剩余最后60秒的时候出现)
                seckillWillEndTime: this.ajaxData.seckillWillEndTime || '6' //秒杀即将结束的时间
            };
            this.render();
        }
        //以下是渲染结构
        ProductList.prototype.renderParent = function () {
            //渲染父级容器
            var div = document.createElement('div');
            div.classList.add("m-product");
            div.classList.add("" + this.configData.showType);
            this.parentDom = div;
            this.parentDom.innerHTML = "            \n        " + this.renderImg() + "        \n        " + this.renderTxt() + "\n    ";
            this.parentDomImg = this.parentDom.querySelector('.m-product-img a');
            this.parentDomTxt = this.parentDom.querySelector('.m-product-txt');
        };
        ProductList.prototype.renderImg = function () {
            //渲染图片区域
            var imgHTML = "";
            if (this.configData.isShowImgSrc) {
                imgHTML = "<img src=\"" + this.ajaxData.imgSrc + "\" alt=\"\">";
            } else {
                imgHTML = "<img class=\"m-lazy-load\" data-src=\"" + this.ajaxData.imgSrc + "\" src=\"\" alt=\"\">";
            }
            return "\n        <div class=\"m-product-img\">\n            <a href=\"" + this.ajaxData.aHref + "\">\n                " + imgHTML + "\n                " + this.renderSeckillLogo() + "\n            </a>\n        </div>\n    ";
        };
        ProductList.prototype.renderTxt = function () {
            //渲染文字区域
            return "\n        <div class=\"m-product-txt\">\n            " + this.renderGoodsName() + "\n            " + this.renderPrice() + "\n            " + this.renderLikeNum() + "\n            " + this.renderCart() + "\n            " + this.renderSeckillMark() + "\n            " + this.renderSeckillWillBeginBtn() + "\n            " + this.renderSeckillWillBeginTime() + "\n            " + this.renderSeckillHintBtn() + "\n            " + this.renderSeckillNowGetBtn() + "\n            " + this.renderSeckillWillEndTime() + "\n            " + this.renderSeckillHintBtnSetOk() + "\n        </div>\n    ";
        };
        ProductList.prototype.renderGoodsName = function () {
            //渲染商品名称
            if (this.configData.isShowGoodsName) {
                return "<div class=\"m-product-goods-name\">" + this.ajaxData.goodsName + "</div>";
            } else {
                return "";
            }
        };
        ProductList.prototype.renderGoodsNameAdd = function (opts) {
            var opt = opts || {};
            this.domAdd({
                isRepeat: opt.isRepeat,
                isShowName: 'isShowGoodsName',
                renderName: 'renderGoodsName',
                className: '.m-product-goods-name'
            });
        };
        ProductList.prototype.renderGoodsNameRemove = function () {
            this.domRemove({
                className: '.m-product-goods-name'
            });
        };
        ProductList.prototype.renderPrice = function () {
            //渲染商品价格
            if (this.configData.isShowPrice) {
                var isVip = this.configData.isVipCustom;
                var ajaxData = this.ajaxData;
                var nowPrice = ajaxData.nowPrice;
                if (isVip) {
                    nowPrice = ajaxData.vipPrice;
                }
                var nowPrice0 = nowPrice.split('.')[0];
                var nowPrice1 = nowPrice.split('.')[1];
                var marketPrice = ajaxData.marketPrice;
                var VipHtml = "";
                if (isVip) {
                    VipHtml = "<span class=\"m-product-price-vip-money\">\u4F1A\u5458\u4EF7</span>";
                }
                return "\n            <div class=\"m-product-price\">\n                " + VipHtml + "\n                <span class=\"m-product-price-now-money-symbol\">\uFFE5</span>\n                <span class=\"m-product-price-now-money-big\">" + nowPrice0 + "</span>\n                <span class=\"m-product-price-now-money-point\">.</span>\n                <span class=\"m-product-price-now-money-small\">" + nowPrice1 + "</span>\n                <span class=\"m-product-price-market-money-symbol\">\uFFE5</span>\n                <span class=\"m-product-price-market-money-small\">" + marketPrice + "</span>\n            </div>\n        ";
            } else {
                return "";
            }
        };
        ProductList.prototype.renderPriceAdd = function (opts) {
            var opt = opts || {};
            this.domAdd({
                isRepeat: opt.isRepeat,
                isShowName: 'isShowPrice',
                renderName: 'renderPrice',
                className: '.m-product-price'
            });
        };
        ProductList.prototype.renderPriceRemove = function () {
            this.domRemove({
                className: '.m-product-price'
            });
        };
        ProductList.prototype.renderLikeNum = function () {
            //渲染多少人喜欢
            if (this.configData.isShowLikeNum) {
                return "\n            <div class=\"m-product-price-like-num\">\n                <span class=\"m-product-price-like-num-people\">" + this.ajaxData.likeNum + "</span>\n                <span>\u4EBA\u60F3\u4E70</span>\n            </div>\n        ";
            } else {
                return "";
            }
        };
        ProductList.prototype.renderLikeNumAdd = function (opts) {
            var opt = opts || {};
            this.domAdd({
                isRepeat: opt.isRepeat,
                isShowName: 'isShowLikeNum',
                renderName: 'renderLikeNum',
                className: '.m-product-price-like-num'
            });
        };
        ProductList.prototype.renderLikeNumRemove = function () {
            this.domRemove({
                className: '.m-product-price-like-num'
            });
        };
        ProductList.prototype.renderCart = function () {
            //渲染购物车
            if (this.configData.isShowCart) {
                return "<div class=\"m-product-cart\"><span class=\"iconfont icon-gouwuche\"></span></div>";
            } else {
                return "";
            }
        };
        ProductList.prototype.renderCartAdd = function (opts) {
            var opt = opts || {};
            this.domAdd({
                isRepeat: opt.isRepeat,
                isShowName: 'isShowCart',
                renderName: 'renderCart',
                className: '.m-product-cart'
            });
        };
        ProductList.prototype.renderCartRemove = function () {
            this.domRemove({
                className: '.m-product-cart'
            });
        };
        ProductList.prototype.renderSeckillLogo = function () {
            //渲染秒杀Logo
            if (this.configData.isShowSeckillLogo) {
                return "\n            <div class=\"m-product-seckill-logo\">\n                <div class=\"m-product-seckill-img\"></div>\n                <div class=\"m-product-seckill-price\">\n                    <span class=\"m-product-seckill-price-money-symbol\">\uFFE5</span>\n                    <span class=\"m-product-seckill-price-money-big\">66</span>\n                    <span class=\"m-product-seckill-price-money-point\">.</span>\n                    <span class=\"m-product-seckill-price-money-small\">66</span>\n                </div>\n            </div>\n        ";
            } else {
                return "";
            }
        };
        ProductList.prototype.renderSeckillLogoAdd = function (opts) {
            var opt = opts || {};
            this.domAdd({
                isRepeat: opt.isRepeat,
                isShowName: 'isShowSeckillLogo',
                renderName: 'renderSeckillLogo',
                className: '.m-product-seckill-logo',
                parent: this.parentDomImg
            });
        };
        ProductList.prototype.renderSeckillLogoRemove = function () {
            this.domRemove({
                className: '.m-product-seckill-logo',
                parent: this.parentDomImg
            });
        };
        ProductList.prototype.renderSeckillMark = function () {
            //渲染秒杀标识
            if (this.configData.isShowSeckillMark) {
                this.parentDom.classList.add('m-product-seckill');
                return "\n            <div class=\"m-product-seckill-mark\">\n                <span class=\"iconfont icon-naozhong\"></span>\n                <span>\u79D2\u6740</span>\n            </div>\n        ";
            } else {
                return "";
            }
        };
        ProductList.prototype.renderSeckillMarkAdd = function (opts) {
            var opt = opts || {};
            this.domAdd({
                isRepeat: opt.isRepeat,
                isShowName: 'isShowSeckillMark',
                renderName: 'renderSeckillMark',
                className: '.m-product-seckill-mark'
            });
        };
        ProductList.prototype.renderSeckillMarkRemove = function () {
            this.domRemove({
                className: '.m-product-seckill-mark'
            });
            this.parentDom.classList.remove('m-product-seckill');
        };
        ProductList.prototype.renderSeckillWillBeginBtn = function () {
            //渲染秒杀即将开始的按钮
            if (this.configData.isShowSeckillWillBeginBtn) {
                return "\n            <div class=\"m-product-seckill-will-begin-btn\">\n                <div>\u79D2\u6740</div>\n                <div>\u5373\u5C06\u5F00\u59CB</div>\n            </div>\n        ";
            } else {
                return "";
            }
        };
        ProductList.prototype.renderSeckillWillBeginBtnAdd = function (opts) {
            var opt = opts || {};
            this.domAdd({
                isRepeat: opt.isRepeat,
                isShowName: 'isShowSeckillWillBeginBtn',
                renderName: 'renderSeckillWillBeginBtn',
                className: '.m-product-seckill-will-begin-btn'
            });
        };
        ProductList.prototype.renderSeckillWillBeginBtnRemove = function () {
            this.domRemove({
                className: '.m-product-seckill-will-begin-btn'
            });
        };
        ProductList.prototype.renderSeckillWillBeginTime = function () {
            //渲染秒杀即将开始的时间
            if (this.configData.isShowSeckillWillBeginTime) {
                var seconds = this.ajaxData.seckillWillBeginTime;
                var o = this.secondsToTime({ seconds: seconds });
                var d = o.d;
                var h = o.h;
                var m = o.m;
                var s = o.s;
                return "\n            <div class=\"m-product-seckill-will-begin-time\">\n                <span class=\"m-product-seckill-will-begin-time-des\">\u8DDD\u5F00\u59CB</span>\n                <span class=\"m-product-seckill-will-begin-time-num\">" + d + "</span>\n                <span class=\"m-product-seckill-will-begin-time-txt\">\u5929</span>\n                <span class=\"m-product-seckill-will-begin-time-num\">" + h + "</span>\n                <span class=\"m-product-seckill-will-begin-time-txt\">\u65F6</span>\n                <span class=\"m-product-seckill-will-begin-time-num\">" + m + "</span>\n                <span class=\"m-product-seckill-will-begin-time-txt\">\u5206</span>\n                <span class=\"m-product-seckill-will-begin-time-num\">" + s + "</span>\n                <span class=\"m-product-seckill-will-begin-time-txt\">\u79D2</span>\n            </div>\n        ";
            } else {
                return "";
            }
        };
        ProductList.prototype.renderSeckillWillBeginTimeAdd = function (opts) {
            var opt = opts || {};
            this.domAdd({
                isRepeat: opt.isRepeat,
                isShowName: 'isShowSeckillWillBeginTime',
                renderName: 'renderSeckillWillBeginTime',
                className: '.m-product-seckill-will-begin-time'
            });
        };
        ProductList.prototype.renderSeckillWillBeginTimeRemove = function () {
            this.domRemove({
                className: '.m-product-seckill-will-begin-time'
            });
        };
        ProductList.prototype.renderSeckillHintBtn = function () {
            //渲染秒杀提醒按钮
            if (this.configData.isShowSeckillHintBtn) {
                return "<div class=\"m-product-seckill-hint-btn\">\u63D0\u9192\u6211</div>";
            } else {
                return "";
            }
        };
        ProductList.prototype.renderSeckillHintBtnAdd = function (opts) {
            var opt = opts || {};
            this.domAdd({
                isRepeat: opt.isRepeat,
                isShowName: 'isShowSeckillHintBtn',
                renderName: 'renderSeckillHintBtn',
                className: '.m-product-seckill-hint-btn'
            });
        };
        ProductList.prototype.renderSeckillHintBtnRemove = function () {
            this.domRemove({
                className: '.m-product-seckill-hint-btn'
            });
        };
        ProductList.prototype.renderSeckillHintBtnSetOk = function () {
            //渲染已设置秒杀提醒按钮
            if (this.configData.isShowSeckillHintBtnSetOk) {
                return "\n            <div class=\"m-product-seckill-hint-btn-set-ok\">\n                <div>\u5DF2\u8BBE\u7F6E</div>\n                <div>\u63D0\u9192</div>\n            </div>\n        ";
            } else {
                return "";
            }
        };
        ProductList.prototype.renderSeckillHintBtnSetOkAdd = function (opts) {
            var opt = opts || {};
            this.domAdd({
                isRepeat: opt.isRepeat,
                isShowName: 'isShowSeckillHintBtnSetOk',
                renderName: 'renderSeckillHintBtnSetOk',
                className: '.m-product-seckill-hint-btn-set-ok'
            });
        };
        ProductList.prototype.renderSeckillHintBtnSetOkRemove = function () {
            this.domRemove({
                className: '.m-product-seckill-hint-btn-set-ok'
            });
        };
        ProductList.prototype.renderSeckillNowGetBtn = function () {
            //渲染秒杀马上抢按钮
            if (this.configData.isShowSeckillNowGetBtn) {
                return "<div class=\"m-product-seckill-now-get-btn\"><a href=\"javascript:;\">\u9A6C\u4E0A\u62A2</a></div>";
            } else {
                return "";
            }
        };
        ProductList.prototype.renderSeckillNowGetBtnAdd = function (opts) {
            var opt = opts || {};
            this.domAdd({
                isRepeat: opt.isRepeat,
                isShowName: 'isShowSeckillNowGetBtn',
                renderName: 'renderSeckillNowGetBtn',
                className: '.m-product-seckill-now-get-btn'
            });
        };
        ProductList.prototype.renderSeckillNowGetBtnRemove = function () {
            this.domRemove({
                className: '.m-product-seckill-now-get-btn'
            });
        };
        ProductList.prototype.renderSeckillWillEndTime = function () {
            //渲染秒杀结束倒计时
            if (this.configData.isShowSeckillWillEndTime) {
                var seconds = this.ajaxData.seckillWillEndTime;
                var o = this.secondsToTime({ seconds: seconds });
                var d = o.d;
                var h = o.h;
                var m = o.m;
                var s = o.s;
                return "\n            <div class=\"m-product-seckill-will-end-time\">\n                <span class=\"m-product-seckill-will-end-time-des\">\u8DDD\u7ED3\u675F</span>\n                <span class=\"m-product-seckill-will-end-time-num\">" + d + "</span>\n                <span class=\"m-product-seckill-will-end-time-txt\">\u5929</span>\n                <span class=\"m-product-seckill-will-end-time-num\">" + h + "</span>\n                <span class=\"m-product-seckill-will-end-time-txt\">\u65F6</span>\n                <span class=\"m-product-seckill-will-end-time-num\">" + m + "</span>\n                <span class=\"m-product-seckill-will-end-time-txt\">\u5206</span>\n                <span class=\"m-product-seckill-will-end-time-num\">" + s + "</span>\n                <span class=\"m-product-seckill-will-end-time-txt\">\u79D2</span>\n            </div>\n        ";
            } else {
                return "";
            }
        };
        ProductList.prototype.renderSeckillWillEndTimeAdd = function (opts) {
            var opt = opts || {};
            this.domAdd({
                isRepeat: opt.isRepeat,
                isShowName: 'isShowSeckillWillEndTime',
                renderName: 'renderSeckillWillEndTime',
                className: '.m-product-seckill-will-end-time'
            });
        };
        ProductList.prototype.renderSeckillWillEndTimeRemove = function () {
            this.domRemove({
                className: '.m-product-seckill-will-end-time'
            });
        };
        ProductList.prototype.domAdd = function (opt) {
            //添加结构
            if (!opt) {
                console.log('no find param');
                return false;
            }
            var isRepeat = opt.isRepeat == true ? opt.isRepeat : false;
            var parent = opt.parent || this.parentDomTxt;
            var className = opt.className;
            this.configData[opt.isShowName] = true;
            var dom = this.htmlToDom({ html: this[opt.renderName]() });
            if (isRepeat) {
                parent.appendChild(dom);
            } else {
                if (!parent.querySelector(className)) {
                    parent.appendChild(dom);
                }
            }
        };
        ProductList.prototype.domRemove = function (opt) {
            //移除结构
            if (!opt) {
                console.log('no find param');
                return false;
            }
            var parent = opt.parent || this.parentDomTxt;
            var dom = parent.querySelector(opt.className);
            if (dom) {
                parent.removeChild(dom);
            }
        };
        ProductList.prototype.render = function () {
            //渲染整个结构
            this.requireBase();
            this.renderParent();
            this.init();
        };
        //以下是渲染功能
        ProductList.prototype.init = function () {
            //初始化
            this.events();
            this.seckillWillBeginTime();
            this.seckillWillEndTime();
        };
        ProductList.prototype.requireBase = function () {
            //需要用到的小功能函数
            this.base = require("../base/base.js"); //base小功能
            this.timeCountDown = this.base.timeCountDown; //倒计时
            this.htmlToDom = this.base.htmlToDom; //html转成DOM
            this.secondsToTime = this.base.secondsToTime; //秒转时间
        };
        ProductList.prototype.events = function () {
            //事件集合
            this.cartClick();
            this.seckillHintClick();
        };
        ProductList.prototype.cartClick = function () {
            //购物车的点击
            var self = this;
            self.parentDom.addEventListener('click', function (ev) {
                var target = ev.target;
                if (target.classList.contains('m-product-cart')) {
                    self.cartFn();
                }
            });
        };
        ProductList.prototype.cartFn = function () {
            //购物车的功能
            var self = this;
            console.log(123, self);
        };
        ProductList.prototype.seckillHintClick = function () {
            //秒杀提醒我的点击
            var self = this;
            self.parentDom.addEventListener('click', function (ev) {
                var target = ev.target;
                if (target.classList.contains('m-product-seckill-hint-btn')) {
                    self.seckillHintFn();
                }
            });
        };
        ProductList.prototype.seckillHintFn = function () {
            //秒杀提醒我的功能
            var self = this;
            self.renderSeckillHintBtnRemove();
            self.renderSeckillHintBtnSetOkAdd();
        };
        ProductList.prototype.seckillWillBeginTime = function () {
            //秒杀即将开始的倒计时功能
            if (this.configData.isShowSeckillWillBeginTime) {
                var self = this;
                var aSpan = [].slice.call(self.parentDom.querySelectorAll('.m-product-seckill-will-begin-time-num'));
                var ajaxData = self.ajaxData;
                var seconds = ajaxData.seckillWillBeginTime;
                var hintTime = ajaxData.seckillWillBeginBtnShowTime;
                self.configData.isShowSeckillWillBeginBtn = true;
                self.timeCountDown({
                    seconds: seconds,
                    runCallback: function runCallback(obj) {
                        aSpan[0].innerHTML = obj.d;
                        aSpan[1].innerHTML = obj.h;
                        aSpan[2].innerHTML = obj.m;
                        aSpan[3].innerHTML = obj.s;
                        if (hintTime >= obj.a) {
                            self.renderCartRemove(); //移除购物车按钮
                            self.renderSeckillHintBtnSetOkRemove(); //移除已设置按钮
                            self.renderSeckillHintBtnRemove(); //移除提醒我按钮
                            self.renderSeckillWillBeginBtnAdd(); //添加即将开始按钮
                        }
                    },
                    overCallback: function overCallback() {
                        self.renderSeckillWillBeginTimeRemove();
                        self.renderSeckillWillBeginBtnRemove();
                        self.renderSeckillNowGetBtnAdd();
                        self.renderSeckillWillEndTimeAdd();
                        self.seckillWillEndTime();
                    }
                });
            }
        };
        ProductList.prototype.seckillWillEndTime = function () {
            //秒杀即将结束的倒计时功能
            if (this.configData.isShowSeckillWillEndTime) {
                var self = this;
                var aSpan = [].slice.call(self.parentDom.querySelectorAll('.m-product-seckill-will-end-time-num'));
                var seconds = self.ajaxData.seckillWillEndTime;
                self.timeCountDown({
                    seconds: seconds,
                    runCallback: function runCallback(obj) {
                        aSpan[0].innerHTML = obj.d;
                        aSpan[1].innerHTML = obj.h;
                        aSpan[2].innerHTML = obj.m;
                        aSpan[3].innerHTML = obj.s;
                    },
                    overCallback: function overCallback() {
                        self.renderSeckillMarkRemove();
                        self.renderSeckillWillEndTimeRemove();
                        self.renderSeckillLogoRemove();
                        self.renderSeckillNowGetBtnRemove();
                        self.renderCartAdd();
                    }
                });
            }
        };
        module.exports = ProductList;
    }, { "../base/base.js": 1 }], 20: [function (require, module, exports) {
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
    }, {}], 21: [function (require, module, exports) {
        //手机极简星级评论
        function Fn(json) {
            this.opt = json || {};
            this.opt.allStar = this.opt.allStar || '5'; //总共几颗星(默认五颗星)
            this.opt.nowStar = this.opt.nowStar || '5'; //现在几颗星(默认五颗星)
            this.opt.isEvent = this.opt.isEvent == false ? this.opt.isEvent : true; //是否具备事件(默认具备)
            this.opt.eventCallback = this.opt.eventCallback || function () {
                console.log('no find callback');
            }; //事件回调
            this.render();
        }
        Fn.prototype.init = function () {
            this.event();
        };
        Fn.prototype.event = function () {
            this.starClick();
        };
        Fn.prototype.starClick = function () {
            var self = this;
            if (this.opt.isEvent) {
                this.parentDom.addEventListener('click', function (ev) {
                    var target = ev.target;
                    if (target.classList.contains('m-star')) {
                        var index = target.dataset.index;
                        for (var j = 0; j < self.opt.allStar; j++) {
                            if (j <= index) {
                                self.opt.star[j].classList.add('m-star-active');
                            } else {
                                self.opt.star[j].classList.remove('m-star-active');
                            }
                        }
                        self.opt.eventCallback({ index: index });
                    }
                });
            }
        };
        Fn.prototype.renderParent = function () {
            this.parentDom = document.createElement('div');
            this.parentDom.classList.add('m-star-main');
            this.renderStar();
        };
        Fn.prototype.renderStar = function () {
            var html = "";
            for (var i = 0; i < this.opt.allStar; i++) {
                var className = '';
                if (i < this.opt.nowStar) {
                    className = 'm-star-active';
                }
                html += "<div data-index=\"" + i + "\" class=\"iconfont icon-xingping m-star " + className + "\"></div>";
            }
            this.parentDom.innerHTML = html;
            this.opt.star = this.parentDom.children;
        };
        Fn.prototype.render = function () {
            this.renderParent();
            this.init();
        };
        module.exports = Fn;
    }, {}], 22: [function (require, module, exports) {
        function Fn(json) {
            this.opt = json || {};
            this.opt.header = this.opt.header || [];
            this.opt.body = this.opt.body || [];
            this.opt.footer = this.opt.footer || "";
            this.opt.parentSelector = this.opt.parentSelector || "";
            this.init();
        }
        Fn.prototype.init = function () {
            this.render();
        };
        Fn.prototype.render = function () {
            this.parentDom = document.createElement('div');
            this.parentDom.classList.add('m-table');
            this.parentDom.innerHTML = "\n        <div class=\"m-table-header\">\n            <div class=\"m-table-row\">\n                " + this.renderHeader() + "\n            </div>\n        </div>\n        <div class=\"m-table-body\">\n            " + this.renderBody() + "\n        </div>\n        <div class=\"m-table-footer\">\n            " + this.renderFooter() + "\n        </div>\n    ";
            if (this.opt.parentSelector) {
                this.parentSelectorDom = document.querySelector(this.opt.parentSelector);
            }
            if (this.parentSelectorDom) {
                this.parentSelectorDom.appendChild(this.parentDom);
            }
        };
        Fn.prototype.removeParentDom = function () {
            this.parentDom.parentNode.removeChild(this.parentDom);
        };
        Fn.prototype.refreshRender = function () {
            this.removeParentDom();
            this.render();
            if (this.parentSelectorDom) {
                this.parentSelectorDom.appendChild(this.parentDom);
            }
        };
        Fn.prototype.renderHeader = function () {
            var html = "";
            this.opt.header.forEach(function (v) {
                html += "\n            <div class=\"m-table-col\">\n                <div class=\"m-table-col-wrap\">\n                    " + v.html + "\n                </div>\n            </div>\n        ";
            });
            return html;
        };
        Fn.prototype.renderBody = function () {
            var html = "";
            this.opt.body.forEach(function (v0) {
                var row = "";
                v0.forEach(function (v1) {
                    row += "\n                <div class=\"m-table-col\">\n                    <div class=\"m-table-col-wrap\">\n                        " + v1.html + "\n                    </div>\n                </div>\n            ";
                });
                html += "<div class=\"m-table-row\">" + row + "</div>";
            });
            return html;
        };
        Fn.prototype.renderFooter = function () {
            return this.opt.footer;
        };
        module.exports = Fn;
    }, {}], 23: [function (require, module, exports) {
        //底层方法
        var base = require('../base/base');

        //构造函数
        function Fn(json) {
            //外部传进来的参数
            this.opt = base.extend({
                defaults: {
                    parent: "", //这个仅支持传入选择器和原生dom节点
                    dataConfig: {
                        isClearTimer: true //默认清除所有定时器
                    },
                    dataAjax: {
                        info: "\u5468\u534E\u98DE\u6D4B\u8BD5"
                    }
                },
                inherits: json
            });
            //内部的一些属性
            this.moduleDom = null; //内部的模块
            this.parentDom = null; //内部模块的外部承载容器,如果没有也没关系,不过不往里面append罢了
            this.timer = {}; //假设内部有定时器
            this.init(); //初始化
        }

        //初始化
        Fn.prototype.init = function () {
            this.render();
            this.power();
        };

        //渲染
        Fn.prototype.render = function () {
            this.renderModuleDom();
            this.renderParentDom();
        };

        //内部的模块
        Fn.prototype.renderModuleDom = function () {
            this.moduleDom = document.createElement('div');
            this.moduleDom.className = "m-test";
            this.moduleDom.innerHTML = "\n        <div class=\"m-test-timer\">0</div>\n        <div class=\"m-test-info\">" + this.opt.dataAjax.info + "</div>\n    ";
        };

        //外部的容器
        Fn.prototype.renderParentDom = function () {
            this.parentDom = base.getOneDom({ dom: this.opt.parent });
            //先清空
            this.clearParentDom();
            //再填充
            if (this.parentDom) {
                this.parentDom.appendChild(this.moduleDom);
            }
        };

        //清空外部的容器
        Fn.prototype.clearParentDom = function () {
            if (this.parentDom) {
                this.parentDom.innerHTML = "";
            }
            //继续清除一些其他东西,例如定时器(假设有定时器需要被清除)
            if (this.opt.dataConfig.isClearTimer) {
                for (var attr in this.timer) {
                    if (this.timer.hasOwnProperty(attr)) {
                        clearInterval(this.timer[attr]);
                        clearTimeout(this.timer[attr]);
                    }
                }
            }
        };

        //移除外部的容器
        Fn.prototype.removeParentDom = function () {
            //先清空外部的容器
            this.clearParentDom();
            //再移除外部的容器
            if (this.parentDom) {
                this.parentDom.parentNode.removeChild(this.parentDom);
            }
        };

        //功能
        Fn.prototype.power = function () {
            var interval = this.moduleDom.querySelector('.m-test-timer');
            this.timer.timer1 = setInterval(function () {
                interval.innerHTML = interval.innerHTML * 1 + 1;
            }, 2000);
        };

        module.exports = Fn;
    }, { "../base/base": 1 }], 24: [function (require, module, exports) {
        /**
         * Created by zhouhuafei on 17/1/2.
         */
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
    }, { "../function/validate": 16 }] }, {}, [2]);