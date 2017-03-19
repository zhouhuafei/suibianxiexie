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
         * Created by zhouhuafei on 17/3/19.
         */
        function createElement(json) {
            var opt = json || {};
            opt.tagName = opt.tagName || 'div'; //普通属性
            opt.attribute = opt.attribute || {}; //自定义属性,checked,selected
            opt.custom = opt.custom || {};
            var tag = document.createElement("" + opt.tagName);
            for (var attr0 in opt.attribute) {
                if (opt.attribute.hasOwnProperty(attr0)) {
                    tag[attr0] = opt.attribute[attr0];
                }
            }
            for (var attr1 in opt.custom) {
                if (opt.custom.hasOwnProperty(attr1)) {
                    tag.setAttribute('data-' + attr1, opt.custom[attr1]);
                }
            }
            return tag;
        }
        module.exports = createElement;
    }, {}] }, {}, [1]);