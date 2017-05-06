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
        //创建元素节点
        function createElement(json) {
            var options = json || {};
            options.elementName = options.elementName || 'div'; //标签名称
            options.style = options.style || ""; //style样式
            options.custom = options.custom || {}; //自定义属性
            options.attribute = options.attribute || {}; //普通属性,checked,selected
            var elementNode = document.createElement(options.elementName); //元素节点
            if (options.style) {
                elementNode.setAttribute('style', options.style);
            }
            for (var attr1 in options.custom) {
                if (options.custom.hasOwnProperty(attr1)) {
                    elementNode.setAttribute('data-' + attr1, options.custom[attr1]);
                }
            }
            for (var attr0 in options.attribute) {
                if (options.attribute.hasOwnProperty(attr0)) {
                    elementNode[attr0] = options.attribute[attr0];
                }
            }
            return elementNode;
        }
        module.exports = createElement;
    }, {}] }, {}, [1]);