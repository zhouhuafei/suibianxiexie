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
         * Created by zhouhuafei on 17/1/1.
         */
        //是否滚动到了浏览器的底部
        function isScrollNavigatorBottom(json) {
            var opt = json || {};
            var success = opt.success || function () {};
            var fail = opt.fail || function () {};
            var doc = document;
            var interval = opt.interval || 80; //延迟时间
            var isBottom = true; //假设到达了底部
            var fn = function fn() {
                var allH = doc.body.offsetHeight;
                var scrollTop = doc.documentElement.scrollTop || doc.body.scrollTop;
                var clientHeight = doc.documentElement.clientHeight;
                if (scrollTop + clientHeight >= allH - 100 && isBottom) {
                    isBottom = false;
                    success();
                    //假设1000毫秒之后数据加载完毕
                    setTimeout(function () {
                        isBottom = true;
                    }, 1000);
                } else {
                    fail();
                }
            };
            fn();
            var timer = null;
            var fnScroll = function fnScroll() {
                clearTimeout(timer);
                timer = setTimeout(function () {
                    fn();
                }, interval);
            };
            window.addEventListener('scroll', function () {
                fnScroll();
            });
        }
        module.exports = isScrollNavigatorBottom;
    }, {}] }, {}, [1]);