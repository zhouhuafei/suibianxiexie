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
        //是否滚动到了浏览器的底部(需要你自己在外部加事件)
        isScrollNavigatorBottom.isBottom = true; //假设到达了底部
        function isScrollNavigatorBottom(callback) {
            var fn = callback || function () {
                console.log('no find callback');
            };
            var doc = document;
            var re = function re() {
                var allH = doc.body.offsetHeight;
                var scrollTop = doc.documentElement.scrollTop || doc.body.scrollTop;
                var clientHeight = doc.documentElement.clientHeight;
                if (scrollTop + clientHeight >= allH - 100 && isScrollNavigatorBottom.isBottom) {
                    isScrollNavigatorBottom.isBottom = false;
                    fn();
                    //假设1000毫秒之后数据加载完毕
                    setTimeout(function () {
                        isScrollNavigatorBottom.isBottom = true;
                    }, 1000);
                }
            };
            re();
        }
        module.exports = isScrollNavigatorBottom;
    }, {}] }, {}, [1]);