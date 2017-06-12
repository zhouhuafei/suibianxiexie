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
        //获取指定父级
        function getParent(json) {
            var opts = json || {};
            var element = opts.element;
            var wrap = opts.wrap;
            if (!element) {
                //第一参数不符合规范
                console.log('参数错误,第一参数需要一个元素节点对象');
                return null;
            }
            if (!wrap) {
                //没有第二参数默认选取直接父级
                return element.parentNode;
            } else if (typeof wrap == 'string') {
                element = element.parentNode;
                switch (wrap.charAt(0)) {
                    case '.':
                        //通过class获取父级
                        while (element) {
                            if (!element.classList) {
                                console.log('no find class');
                                return null;
                            }
                            if (element.classList.contains(wrap.substring(1))) {
                                return element;
                            } else {
                                element = element.parentNode;
                            }
                        }
                        break;
                    case '#':
                        //通过id获取父级
                        while (element) {
                            if (element == document) {
                                console.log('no find id');
                                return null;
                            }
                            if (element.id == wrap.substring(1)) {
                                return element;
                            } else {
                                element = element.parentNode;
                            }
                        }
                        break;
                    default:
                        //通过标签名获取父级
                        while (element) {
                            if (element == document) {
                                console.log('no find tagName');
                                return null;
                            }
                            if (element.tagName.toLowerCase() == wrap) {
                                return element;
                            } else {
                                element = element.parentNode;
                            }
                        }
                        break;
                }
            }
        }

        module.exports = getParent;
    }, {}] }, {}, [1]);