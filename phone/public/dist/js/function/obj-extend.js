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
        function extend(json) {
            var opt = json || {};
            var defaults = opt.default || {};
            var inherits = opt.inherits || {};
            for (var attr in inherits) {
                if (inherits.hasOwnProperty(attr)) {
                    defaults[attr] = JSON.parse(JSON.stringify(inherits[attr]));
                }
            }
            return defaults;
        }
        module.exports = extend;
        //有BUG,例如extend({default:{a:0,b:{b1:1}},inherits:{a:0,b:{b2:2}}});
        //得到的结果{a:0,b:{b2:2}},b1的数据就没了,正确的结果应该保留{a:0,b:{b1:1,b2:2}}
    }, {}] }, {}, [1]);