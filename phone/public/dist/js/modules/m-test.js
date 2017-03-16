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
    }, { "../function/cookie": 3, "../function/extend": 4, "../function/fill-zero": 5, "../function/get-one-dom": 6, "../function/get-parent": 7, "../function/go-top": 8, "../function/html-to-dom": 9, "../function/json-to-array": 10, "../function/mask": 11, "../function/seconds-to-time": 12, "../function/str-limit": 13, "../function/time-count-down": 14, "../function/when-scroll-bottom": 15, "../function/whether-disable-scroll": 16 }], 2: [function (require, module, exports) {
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
                console.log(interval.innerHTML);
            }, 1000);
            // 3.选人父级的那段判断是不是dom的代码是否可以封装成一个函数
            // 4.mask函数重新制作,变成模块
            // 5.function文件夹里的arrFindIndex删除
            // 6.function文件夹里能制作成模块的东西,进行模块制作,例如懒加载
            // 7.有些函数名字太长,需要进行重新命名,有些没必要的模块文件进行删除或者重写
            // 8.清零样式修改scss修改
        };

        module.exports = Fn;
    }, { "../base/base": 1 }], 3: [function (require, module, exports) {
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
    }, {}], 12: [function (require, module, exports) {
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
    }, {}], 13: [function (require, module, exports) {
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
    }, {}], 14: [function (require, module, exports) {
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
    }, {}], 15: [function (require, module, exports) {
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
    }, {}], 16: [function (require, module, exports) {
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
    }, {}] }, {}, [2]);