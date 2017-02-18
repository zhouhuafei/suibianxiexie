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
            //opt对象上请绑定外部可以传进来的那些数据的键值作为属性
            this.opt = json || {};
            this.opt.logoHref = this.opt.logoHref || 'javascript:;';
            this.opt.logoSrc = this.opt.logoSrc || '';
            this.opt.logoInfo = this.opt.logoInfo || '没有数据';
            this.opt.btnHref = this.opt.btnHref || 'javascript:;';
            this.opt.btnInfo = this.opt.btnInfo || '进店逛逛';
            //不是外部传进来的值可以直接绑定到this上

            //初始化
            this.init();
        }
        Fn.prototype.init = function () {
            //渲染结构
            this.render();
            //渲染功能
            this.power();
        };
        Fn.prototype.render = function () {
            this.parentDom = document.createElement('div');
            this.parentDom.classList.add('m-no-data');
            this.parentDom.innerHTML = "\n        <div class=\"m-no-data-img\">\n            <a href=\"" + this.opt.logoHref + "\"><img src=\"" + this.opt.logoSrc + "\" alt=\"\"></a>\n        </div>\n        <div class=\"m-no-data-txt\">" + this.opt.logoInfo + "</div>\n        <div class=\"m-no-data-btn\"><a href=\"" + this.opt.btnHref + "\">" + this.opt.btnInfo + "</a></div>\n    ";
        };
        Fn.prototype.power = function () {
            //事件相关
            this.events();
        };
        Fn.prototype.events = function () {};
        //其他功能写在下面吧,尽量保持格式统一
        module.exports = Fn;
    }, {}] }, {}, [1]);