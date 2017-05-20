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
        //验证
        var validate = {
            //是不是空
            isSpace: function isSpace(json) {
                var opts = json || {};
                var success = opts.success || function () {
                    console.log('no find success callback');
                };
                var fail = opts.fail || function () {
                    console.log('no find fail callback');
                };
                var value = opts.value || " ";
                var valueTrim = value.trim();
                var b = false;
                if (valueTrim == '') {
                    b = true;
                    success();
                } else {
                    fail();
                }
                return b;
            },
            //是不是0
            isZero: function isZero(json) {
                var opts = json || {};
                var success = opts.success || function () {
                    console.log('no find success callback');
                };
                var fail = opts.fail || function () {
                    console.log('no find fail callback');
                };
                var value = opts.value || " ";
                var valueTrim = value.trim();
                var b = false;
                if (valueTrim == 0) {
                    b = true;
                    success();
                } else {
                    fail();
                }
                return b;
            },
            //是不是整数(包含0)
            isInteger: function isInteger(json) {
                var opts = json || {};
                var success = opts.success || function () {
                    console.log('no find success callback');
                };
                var fail = opts.fail || function () {
                    console.log('no find fail callback');
                };
                var value = opts.value || " ";
                var valueTrim = value.trim();
                var reg = /^\d+$/;
                var b = false;
                if (reg.test(valueTrim)) {
                    b = true;
                    success();
                } else {
                    fail();
                }
                return b;
            },
            //是不是保留了num位小数点
            isReservedDecimal: function isReservedDecimal(json) {
                var opts = json || {};
                var success = opts.success || function () {
                    console.log('no find success callback');
                };
                var fail = opts.fail || function () {
                    console.log('no find fail callback');
                };
                var num = opts.num || 2;
                var value = opts.value || " ";
                var valueTrim = value.trim();
                var reg = new RegExp("^\\d+\\.\\d{" + num + "}$");
                var b = false;
                if (reg.test(valueTrim)) {
                    b = true;
                    success();
                } else {
                    fail();
                }
                return b;
            }
        };

        module.exports = validate;
    }, {}] }, {}, [1]);