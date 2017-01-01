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
         * Created by zhouhuafei on 16/12/17.
         */
        //加载更多的底部加载中
        function LoadingBottom() {
            this.render();
        }
        LoadingBottom.prototype.render = function () {
            this.parentDOM = document.createElement('div');
            this.parentDOM.classList.add('m-loading-bottom');
            document.body.appendChild(this.parentDOM);
        };
        LoadingBottom.prototype.show = function () {
            this.parentDOM.innerHTML = '';
            this.parentDOM.innerHTML = "\n        <div class=\"m-loading-bottom-show\">\u52A0\u8F7D\u4E2D</div>\n    ";
            this.parentDOM.classList.add('show');
        };
        LoadingBottom.prototype.hide = function () {
            this.parentDOM.classList.remove('show');
        };
        LoadingBottom.prototype.over = function () {
            this.parentDOM.innerHTML = '';
            this.parentDOM.innerHTML = "\n        <div class=\"m-loading-bottom-over\">\u6CA1\u6709\u66F4\u591A\u6570\u636E</div>\n    ";
            this.parentDOM.classList.add('show');
        };
        module.exports = LoadingBottom;
    }, {}] }, {}, [1]);