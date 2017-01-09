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
            this.opt.logoHref = this.opt.logoHref || 'javascript:;';
            this.opt.logoSrc = this.opt.logoSrc || '';
            this.opt.logoInfo = this.opt.logoInfo || '没有数据';
            this.opt.btnHref = this.opt.btnHref || 'javascript:;';
            this.opt.btnInfo = this.opt.btnInfo || '进店逛逛';
            this.render();
        }
        Fn.prototype.renderParent = function () {
            this.parentDom = document.createElement('div');
            this.parentDom.classList.add('m-no-data');
            this.parentDom.innerHTML = "\n        <div class=\"m-no-data-img\">\n            <a href=\"" + this.opt.logoHref + "\"><img src=\"" + this.opt.logoSrc + "\" alt=\"\"></a>\n        </div>\n        <div class=\"m-no-data-txt\">" + this.opt.logoInfo + "</div>\n        <div class=\"m-no-data-btn\"><a href=\"" + this.opt.btnHref + "\">" + this.opt.btnInfo + "</a></div>\n    ";
        };
        Fn.prototype.render = function () {
            this.renderParent();
        };
        module.exports = Fn;
    }, {}] }, {}, [1]);