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
        //全选,不选,反选
        var extend = require('../function/extend');
        var getDomArray = require('../function/get-dom-array');

        function Select(json) {
            this.opt = extend({
                defaults: {
                    items: null, //所有的被选项
                    callback: {
                        click: function click() {}
                    }
                },
                inherits: json
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
                    self.opt.callback.click({ element: this, isCheckedAll: isCheckedAll });
                });
            });
        };

        module.exports = Select;
    }, { "../function/extend": 2, "../function/get-dom-array": 3 }], 2: [function (require, module, exports) {
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
    }, {}], 3: [function (require, module, exports) {
        var extend = require('../function/extend'); //对象的扩展方法

        //获取原生的dom节点并转换成数组,传入的参数仅支持:1.原生的dom节点,2.原生的dom集合,3.css选择器
        function getDomArray(json) {
            var opt = extend({
                defaults: {
                    element: null
                },
                inherits: json
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
    }, { "../function/extend": 2 }] }, {}, [1]);