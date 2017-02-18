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
        //遮罩
        function mask(json) {
            var opt = json || {};
            var status = opt.status;
            var bg = 'rgba(0,0,0,0.4)';
            var zIndex = 500;
            var className = 'g-mask';
            if (status == 'transparent') {
                //如果是透明遮罩
                bg = 'rgba(0,0,0,0)';
                zIndex = 1000;
                className = 'g-mask-transparent';
            }
            var doc = document;
            var body = doc.body;
            var mask = doc.createElement('div');
            mask.className = className;
            mask.setAttribute('style', "background-color:" + bg + ";position:fixed;left:0;top:0;width:100%;height:100%;z-index:" + zIndex + ";");
            return {
                show: function show() {
                    body.appendChild(mask);
                },
                hide: function hide() {
                    body.removeChild(mask);
                }
            };
        }
        module.exports = mask;
    }, {}] }, {}, [1]);