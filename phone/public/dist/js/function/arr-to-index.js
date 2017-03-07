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
         * Created by zhouhuafei on 17/1/10.
         */
        function arrToIndex(json) {
            var opt = json || {};
            var arr = opt.arr || [];
            var info = opt.info;
            var index = null;
            arr.forEach(function (v, i) {
                if (v == info) {
                    index = i;
                    return false;
                }
            });
            return index;
        }
        /*
            arr.indexOf这个方法原生的提供的有,你为毛还要重新写一个？智障么？
        */
        module.exports = arrToIndex;
    }, {}] }, {}, [1]);