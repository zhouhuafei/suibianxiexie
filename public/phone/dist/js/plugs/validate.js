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
         * Created by zhouhuafei on 16/12/4.
         */
        //验证
        var validate = {};
        //是不是空
        validate.isSpace = function (opt) {
            var obj = opt || {};
            var value = obj.value || " ";
            var valueTrim = value.trim();
            var b = false;
            if (valueTrim == '') {
                b = true;
            }
            return b;
        };
        //是不是0
        validate.isZero = function (opt) {
            var obj = opt || {};
            var value = obj.value || " ";
            var valueTrim = value.trim();
            var b = false;
            if (valueTrim == 0) {
                b = true;
            }
            return b;
        };
        //是不是正整数
        validate.isPositiveInteger = function (opt) {
            var obj = opt || {};
            var value = obj.value || " ";
            var valueTrim = value.trim();
            var re = /^\d+$/;
            var b = false;
            if (re.test(valueTrim)) {
                b = true;
            }
            return b;
        };
        //是不是保留了num位小数
        validate.isReservedDecimal = function (opt) {
            var obj = opt || {};
            var num = obj.num || 2;
            var value = obj.value || " ";
            var valueTrim = value.trim();
            var re = new RegExp("^\\d+\\.\\d{" + num + "}$");
            var b = false;
            if (re.test(valueTrim)) {
                b = true;
            }
            return b;
        };
        module.exports = validate;
    }, {}] }, {}, [1]);