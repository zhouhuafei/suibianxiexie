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
        //字符数量限制
        function stringLimit(json) {
            var options = json || {};
            var max = options.max;
            var string = options.string;
            if (!string) {
                return '';
            }
            var length = string.length;
            if (length > max) {
                string = string.substring(0, max);
            }
            return string;
        }
        module.exports = stringLimit;
    }, {}] }, {}, [1]);