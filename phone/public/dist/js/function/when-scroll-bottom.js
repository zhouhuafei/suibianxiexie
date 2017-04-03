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
                条件:当你拿到请求的数据之后
                可能性:1.如果你的数据加载完毕了,你需要手动把isLoadOver开关变成true
                可能性:2.如果你的数据尚未加载完毕,你需要手动把isLoadOver开关变成false
                */
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
    }, { "../function/extend.js": 2 }], 2: [function (require, module, exports) {
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
    }, {}] }, {}, [1]);