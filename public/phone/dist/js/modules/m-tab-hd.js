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
        //我的记录里的商品
        function Fn(json) {
            this.opt = json || {};
            this.info = this.opt.info || ['没有', '数据'];
            var arr = [];
            this.info.forEach(function () {
                arr.push('javascript:;');
            });
            this.link = this.opt.link || arr;
            this.index = this.opt.index || '0';
            this.render();
        }
        Fn.prototype.renderParent = function () {
            this.parentDom = document.createElement('div');
            this.parentDom.classList.add('m-record-tab');
            this.parentDom.innerHTML = "\n            " + this.renderData() + "\n        ";
        };
        Fn.prototype.renderData = function () {
            var self = this;
            var str = "";
            self.info.forEach(function (v, i) {
                var className = "";
                var link = self.link[i];
                if (i == self.index) {
                    className = "m-record-tab-btn-on";
                }
                str += "<div class=\"m-record-tab-btn " + className + "\"><a href=\"" + link + "\">" + v + "</a></div>";
            });
            return str;
        };
        Fn.prototype.render = function () {
            this.renderParent();
        };
        module.exports = Fn;
    }, {}] }, {}, [1]);