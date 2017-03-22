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
        function extend(json) {
            var opt = json || {};
            opt.defaults = opt.defaults || {};
            opt.inherits = opt.inherits || {};
            opt.isDeep = opt.isDeep == false ? opt.isDeep : true; //默认进行深拷贝
            for (var attr in opt.inherits) {
                if (opt.inherits.hasOwnProperty(attr)) {
                    var defaultsType = Object.prototype.toString.call(opt.defaults[attr]).slice(8, -1).toLowerCase();
                    var inheritsType = Object.prototype.toString.call(opt.inherits[attr]).slice(8, -1).toLowerCase();
                    if (defaultsType == inheritsType && opt.isDeep) {
                        //类型相同
                        if (defaultsType == 'object') {
                            //当为对象
                            extend({ defaults: opt.defaults[attr], inherits: opt.inherits[attr] });
                        } else if (defaultsType == 'array') {
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
            return opt.defaults;
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
    }, {}] }, {}, [1]);