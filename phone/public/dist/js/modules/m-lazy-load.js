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
        var extend = require('../function/extend.js');
        var offset = require('../function/offset.js');
        function LazyLoad(json) {
            this.opt = extend({
                default: {
                    selector: '.m-lazy-load',
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
            var aDom = [].slice.call(document.querySelectorAll(this.opt.selector));
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
                //排除那些被none掉的元素
                if (v.offsetWidth) {
                    var elementTop = offset({ element: v }).top;
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
    }, { "../function/extend.js": 2, "../function/offset.js": 4 }], 2: [function (require, module, exports) {
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
    }, {}], 3: [function (require, module, exports) {
        //对象的扩展方法
        var extend = require('../function/extend.js');

        //获取一个原生的dom节点,当传入的是dom,或者是选择器的时候
        function getOneDom(json) {
            var opt = extend({
                default: {
                    element: null
                },
                inherit: json
            });
            var dom = null;
            if (opt.element) {
                //如果是字符串
                if (Object.prototype.toString.call(opt.element).slice(8, -1).toLowerCase() == 'string') {
                    dom = document.querySelector(opt.element);
                }
                //如果是dom(元素)节点
                if (opt.element.nodeType && opt.element.nodeType == 1) {
                    dom = opt.element;
                }
            }
            return dom;
        }
        module.exports = getOneDom;
    }, { "../function/extend.js": 2 }], 4: [function (require, module, exports) {
        var extend = require('../function/extend.js');
        var getOneDom = require('../function/get-one-dom.js');

        function offset(json) {
            var opt = extend({
                default: {
                    element: null
                },
                inherit: json
            });
            var top = 0;
            var left = 0;
            var obj = getOneDom({ element: opt.element });
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
    }, { "../function/extend.js": 2, "../function/get-one-dom.js": 3 }] }, {}, [1]);