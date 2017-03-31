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