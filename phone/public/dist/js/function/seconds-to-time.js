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
        //秒转时间
        function secondsToTime(json) {
            var options = json || {};
            var seconds = options.seconds;
            //天
            var day = Math.floor(seconds / 3600 / 24);
            //时
            var hour = Math.floor(seconds / 3600 % 24);
            //分
            var minute = Math.floor(seconds % 3600 / 60);
            //秒
            var second = Math.floor(seconds % 60);
            return { day: day, hour: hour, minute: minute, second: second, seconds: seconds };
        }
        module.exports = secondsToTime;
    }, {}] }, {}, [1]);