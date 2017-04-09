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
    // //底层方法
    // var base = require('../base/base.js');
    //
    // //超类型(子类型继承的对象)
    // var Super = require('../modules/m-super-type.js');
    //
    // //子类型
    // class Sub extends Super {
    //     constructor(json) {
    //         super(json);
    //
    //         this.opt = base.extend({
    //             default: this.opt,
    //             inherit: json
    //         });
    //         this.opt = base.extend({
    //             default: {
    //                 data: '6789'
    //             },
    //             inherit: this.opt
    //         });
    //         //console.log(this.opt, 888);
    //     }
    // }
    //
    // module.exports = Sub;

  }, {}] }, {}, [1]);