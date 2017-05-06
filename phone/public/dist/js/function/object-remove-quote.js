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
        //移除对象引用
        function objectRemoveQuote(json) {
            var opt = json || {};
            var object = opt.object;
            var objectType = Object.prototype.toString.call(object).slice(8, -1).toLowerCase();

            if (objectType != 'object' && objectType != 'array') {
                return object;
            }
            var newObject = {};
            if (objectType == 'array') {
                newObject = [];
            }
            for (var attr in object) {
                if (object.hasOwnProperty(attr)) {
                    newObject[attr] = objectRemoveQuote({ object: object[attr] });
                }
            }
            return newObject;
        }
        module.exports = objectRemoveQuote;
    }, {}] }, {}, [1]);