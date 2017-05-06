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
        var extend = require('../function/extend');
        var secondsToTime = require('../function/seconds-to-time'); //时间转换

        //倒计时
        function timeCountDown(json) {
            var options = extend({
                defaults: {
                    seconds: 0,
                    callback: {
                        run: function run() {},
                        over: function over() {}
                    }
                },
                inherits: json
            });
            var seconds = options.seconds; //秒数
            var run = options.callback.run; //运行的回调
            var over = options.callback.over; //结束的回调
            //时间大于等于0秒
            if (seconds >= 0) {
                run(secondsToTime({ seconds: seconds })); //运行时的回调
                //倒计时走你
                var timer = setInterval(function () {
                    seconds--;
                    if (seconds >= 0) {
                        run(secondsToTime({ seconds: seconds })); //运行时的回调
                    } else {
                        over(); //结束时的回调
                        clearInterval(timer);
                    }
                }, 1000);
            }
            //时间小于0秒
            if (seconds < 0) {
                console.log('倒计时的秒数不能小于0');
            }
        }
        module.exports = timeCountDown;
    }, { "../function/extend": 2, "../function/seconds-to-time": 3 }], 2: [function (require, module, exports) {
        //对象的扩展方法
        function extend(json) {
            var options = json || {};
            options.defaults = options.defaults || {}; //默认对象
            options.inherits = options.inherits || {}; //继承对像
            options.isDeep = options.isDeep == false ? options.isDeep : true; //是否进行深拷贝(默认进行深拷贝)
            var defaultsType = Object.prototype.toString.call(options.defaults).slice(8, -1).toLowerCase();
            var inheritsType = Object.prototype.toString.call(options.inherits).slice(8, -1).toLowerCase();
            if (defaultsType == inheritsType && options.isDeep) {
                if (defaultsType == 'object' || defaultsType == 'array') {
                    //当为对象或者为数组
                    for (var attr in options.inherits) {
                        if (options.inherits.hasOwnProperty(attr)) {
                            var attrDefaultsType = Object.prototype.toString.call(options.defaults[attr]).slice(8, -1).toLowerCase();
                            var attrInheritsType = Object.prototype.toString.call(options.inherits[attr]).slice(8, -1).toLowerCase();
                            if (attrDefaultsType == attrInheritsType && options.isDeep) {
                                //类型相同
                                if (attrDefaultsType == 'object' || attrDefaultsType == 'array') {
                                    //当为对象或者为数组
                                    extend({ defaults: options.defaults[attr], inherits: options.inherits[attr] });
                                } else {
                                    options.defaults[attr] = options.inherits[attr];
                                }
                            } else {
                                //类型不同,直接后面的覆盖前面的
                                options.defaults[attr] = options.inherits[attr];
                            }
                        }
                    }
                } else {
                    options.defaults = options.inherits;
                }
            } else {
                options.defaults = options.inherits;
            }
            return options.defaults;
        }
        // var object1 = extend({
        //     defaults: {
        //         a: 'a',
        //         b: {
        //             b1: 'b1',
        //             b2: 'b2',
        //             b3: {
        //                 c1: 'c1'
        //             }
        //         }
        //     },
        //     inherits: {
        //         a: 0,
        //         b: {
        //             b2: 1,
        //             b3: {
        //                 c2: 2
        //             }
        //         }
        //     }
        // });
        // console.log(object1);//{a: 0, b: {b1: 'b1', b2: 1, b3: {c1: 'c1', c2: 2}}}
        // var object2 = extend({
        //     defaults: {
        //         a: [
        //             0,
        //             [9, 8, 7],
        //             {
        //                 arr: [
        //                     1,
        //                     2,
        //                     3,
        //                     [7, 9, 10],
        //                     {good: 'good'}
        //                 ]
        //             }
        //         ],
        //         b: [
        //             {a1: 'a1'},
        //             {a2: 'a2'}
        //         ]
        //     },
        //     inherits: {
        //         a: [
        //             1,
        //             [3, 1],
        //             {
        //                 arr: [
        //                     8,
        //                     8,
        //                     8,
        //                     [6, 8]
        //                 ]
        //             }
        //         ],
        //         b: [
        //             'what?',
        //             {b1: 'b1'},
        //             {b2: 'b2'}
        //         ]
        //     }
        // });
        // console.log(object2);//{a: [1, [3, 1, 7],{arr: [8, 8, 8, [6, 8, 10], {good: 'good'}]}], b: ['what?', {a2: 'a2', b1: 'b1'}, {b2: 'b2'}]}
        module.exports = extend;
    }, {}], 3: [function (require, module, exports) {
        //秒转时间
        function secondsToTime(json) {
            var options = json || {};
            var seconds = options.seconds;
            //天
            var day = Math.floor(seconds / 3600 / 24);
            //时
            var hour = Math.floor(seconds / 3600 % 24);
            //分
            var minute = Math.floor(seconds % 3600 / 60);
            //秒
            var second = Math.floor(seconds % 60);
            return { day: day, hour: hour, minute: minute, second: second, seconds: seconds };
        }
        module.exports = secondsToTime;
    }, {}] }, {}, [1]);