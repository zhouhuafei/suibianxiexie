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
    }, { "../function/extend": 2 }], 2: [function (require, module, exports) {
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
                    for (var attr in opt.inherits) {
                        if (opt.inherits.hasOwnProperty(attr)) {
                            var attrDefaultsType = Object.prototype.toString.call(opt.defaults[attr]).slice(8, -1).toLowerCase();
                            var attrInheritsType = Object.prototype.toString.call(opt.inherits[attr]).slice(8, -1).toLowerCase();
                            if (attrDefaultsType == attrInheritsType && opt.isDeep) {
                                //类型相同
                                if (attrDefaultsType == 'object') {
                                    //当为对象
                                    extend({ defaults: opt.defaults[attr], inherits: opt.inherits[attr] });
                                } else if (attrDefaultsType == 'array') {
                                    //当为数组时
                                    opt.inherits[attr].forEach(function (v, i) {
                                        var vDefaultsType = Object.prototype.toString.call(opt.defaults[attr][i]).slice(8, -1).toLowerCase();
                                        var vInheritsType = Object.prototype.toString.call(opt.inherits[attr][i]).slice(8, -1).toLowerCase();
                                        if (vInheritsType == vDefaultsType && opt.isDeep) {
                                            if (vDefaultsType == 'object') {
                                                extend({ defaults: opt.defaults[attr][i], inherits: opt.inherits[attr][i] });
                                            } else {
                                                opt.defaults[attr][i] = opt.inherits[attr][i];
                                            }
                                        } else {
                                            opt.defaults[attr][i] = opt.inherits[attr][i];
                                        }
                                    });
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
        // console.log(obj1);//{ a: 0, b: { b1: 'b1', b2: 1, b3: { c1: 'c1', c2: 2 } } }
        // var obj2 = extend({
        //     defaults: {
        //         b: [
        //             {a1: 'a1'},
        //             {a2: 'a2'}
        //         ]
        //     },
        //     inherits: {
        //         b: [
        //             'what?',
        //             {b1: 'b1'},
        //             {b2: 'b2'}
        //         ]
        //     }
        // });
        // console.log(obj2);//{ b: [ 'what?', { a2: 'a2', b1: 'b1' }, { b2: 'b2' } ] }
        module.exports = extend;
    }, {}] }, {}, [1]);