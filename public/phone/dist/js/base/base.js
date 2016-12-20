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
        var base = {};
        base.fillZero = function (opt) {
            //补零函数
            var num = opt.num;
            if (num < 10) {
                return '0' + num;
            } else {
                return '' + num;
            }
        };
        base.secondsToTime = function (opt) {
            //秒转时间
            var seconds = opt.seconds;
            var d = Math.floor(seconds / 3600 / 24); //天
            var h = Math.floor(seconds / 3600 % 24); //小时
            var m = Math.floor(seconds % 3600 / 60); //分钟
            var s = Math.floor(seconds % 60); //秒数
            return { d: d, h: h, m: m, s: s, a: seconds };
        };
        base.timeCountDown = function (opt) {
            //倒计时
            var seconds = opt.seconds;
            var runCallback = opt.runCallback; //运行的回调
            var overCallback = opt.overCallback; //结束的回调
            var timeTransform = base.secondsToTime; //时间转换
            if (seconds <= 0) {
                //时间小于0秒
                seconds = 0;
                runCallback && runCallback(timeTransform({ seconds: seconds })); //运行时的回调
                overCallback && overCallback(); //结束时的回调
            } else {
                //时间大于0秒
                runCallback && runCallback(timeTransform({ seconds: seconds })); //运行时的回调
                //倒计时走你
                var timer = setInterval(function () {
                    seconds--;
                    runCallback && runCallback(timeTransform({ seconds: seconds })); //运行时的回调
                    if (seconds <= 0) {
                        clearInterval(timer);
                        overCallback && overCallback(); //结束时的回调
                    }
                }, 1000);
            }
        };
        base.htmlToDom = function (opt) {
            //html转成DOM节点
            var html = opt.html;
            var div = document.createElement('div');
            div.innerHTML = html;
            return div.children[0];
        };
        module.exports = base;
    }, {}] }, {}, [1]);