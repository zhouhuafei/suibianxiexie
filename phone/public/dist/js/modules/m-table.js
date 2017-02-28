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
        function Fn(json) {
            this.opt = json || {};
            this.init();
        }
        Fn.prototype.init = function () {
            this.render();
        };
        Fn.prototype.render = function () {
            this.parentDom = document.createElement('div');
            this.parentDom.classList.add('m-table');
            this.parentDom.innerHTML = "\n        <div class=\"m-table-row m-table-header\">\n            <div class=\"m-table-col\">0</div>\n            <div class=\"m-table-col\">1</div>\n            <div class=\"m-table-col\">2</div>\n        </div>\n        <div class=\"m-table-row\">\n            <div class=\"m-table-col\">0</div>\n            <div class=\"m-table-col\">1</div>\n            <div class=\"m-table-col\">2</div>\n        </div>\n    ";
        };
        module.exports = Fn;
    }, {}] }, {}, [1]);