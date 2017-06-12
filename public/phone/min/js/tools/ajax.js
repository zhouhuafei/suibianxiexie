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
        var extend = require('../tools/extend'); //对象的扩展方法

        //ajax封装
        function Ajax(json) {
            this.opts = extend({
                defaults: {
                    //回调
                    callback: {
                        //上传期间持续不断地触发
                        uploadProgress: function uploadProgress() {},
                        //上传完成时触发
                        uploadLoad: function uploadLoad() {},
                        //在接收到响应数据的第一个字节时触发
                        loadStart: function loadStart() {},
                        //在接收响应期间持续不断地触发
                        progress: function progress() {},
                        //在请求发生错误时触发
                        error: function error() {},
                        //在因为调用abort()方法而终止请求时触发
                        abort: function abort() {},
                        //在接收到完整的响应数据时触发
                        load: function load() {},
                        //接收到完整的响应且响应状态为200
                        success: function success() {},
                        //接收到完整的响应且响应状态不为200
                        fail: function fail() {},
                        //在通信完成或者触发error、abort或load事件后触发
                        loadEnd: function loadEnd() {},
                        //等同于loadEnd
                        complete: function complete() {},
                        //请求超时
                        timeout: function timeout() {}
                    },
                    //配置
                    config: {
                        //ajax的配置
                        type: 'post', //请求类型(默认post)
                        url: '', //url
                        dataType: 'json', //数据类型(默认json)
                        async: true, //默认异步
                        timeout: 5000, //超时时间(默认3秒)
                        mark: '#' //当请求类型为get时,url后面的数据用什么符号开头url:'index.php',1.?ctl=seller&act=setting,2.#ctl=seller&act=setting
                    },
                    //数据
                    data: {}
                },
                inherits: json
            });
            this.xhr = new XMLHttpRequest(); //xhr
            this.xhr.timeout = this.opts.config.timeout; //超时设置
            this.init();
        }
        Ajax.prototype.init = function () {
            this.events();
            this.open();
            this.send();
        };
        Ajax.prototype.open = function () {
            var opts = this.opts;
            if (opts.config.type.toLowerCase() == 'get') {
                //get
                var search = "";
                var num = 0;
                var data = opts.data;
                if (data) {
                    for (var attr in data) {
                        if (data.hasOwnProperty(attr)) {
                            if (num == 0) {
                                search += attr + "=" + data[attr];
                            } else {
                                search += "&" + attr + "=" + data[attr];
                            }
                            num++;
                        }
                    }
                }
                var url = opts.config.url + opts.config.mark + search;
                this.xhr.open(opts.config.type, url);
            } else if (opts.config.type.toLowerCase() == 'post') {
                //post
                this.xhr.open(opts.config.type, opts.config.url);
            } else {
                console.log('仅支持get和post请求');
                return false;
            }
        };
        Ajax.prototype.send = function () {
            var opts = this.opts;
            var data = opts.data;
            if (opts.config.type.toLowerCase() == 'get') {
                //get
                this.xhr.send(null);
            } else if (opts.config.type.toLowerCase() == 'post') {
                //post
                if (data) {
                    if (Object.prototype.toString.call(data).slice(8, -1).toLocaleLowerCase() == 'formdata') {
                        this.xhr.send(data);
                    } else {
                        var formData = new FormData();
                        for (var attr in data) {
                            if (data.hasOwnProperty(attr)) {
                                formData.append(attr, data[attr]);
                            }
                        }
                        this.xhr.send(formData);
                    }
                } else {
                    this.xhr.send(null);
                }
            } else {
                console.log('仅支持get和post请求');
                return false;
            }
        };
        Ajax.prototype.events = function () {
            var self = this;
            //上传期间持续不断地触发
            this.xhr.upload.addEventListener('progress', function (ProgressEvent) {
                self.uploadProgress();
                console.log(ProgressEvent, 'uploadProgress');
            });
            //上传完成时触发
            this.xhr.upload.addEventListener('load', function (ProgressEvent) {
                self.uploadLoad();
                console.log(ProgressEvent, 'uploadLoad');
            });
            //在接收到响应数据的第一个字节时触发
            this.xhr.addEventListener('loadstart', function (ProgressEvent) {
                self.loadStart();
                console.log(ProgressEvent, 'loadStart');
            });
            //在接收响应期间持续不断地触发
            this.xhr.addEventListener('progress', function (ProgressEvent) {
                self.progress();
                console.log(ProgressEvent, 'progress');
            });
            //在请求发生错误时触发
            this.xhr.addEventListener('error', function (ProgressEvent) {
                self.error();
                console.log(ProgressEvent, 'error');
            });
            //在因为调用abort()方法而终止请求时触发
            this.xhr.addEventListener('abort', function (ProgressEvent) {
                self.abort();
                console.log(ProgressEvent, 'abort');
            });
            //在接收到完整的响应数据时触发
            this.xhr.addEventListener('load', function (ProgressEvent) {
                self.load(ProgressEvent);
                console.log(ProgressEvent, 'load', 999);
            });
            //在通信完成或者触发error、abort或load事件后触发
            this.xhr.addEventListener('loadend', function (ProgressEvent) {
                self.loadEnd();
                console.log(ProgressEvent, 'loadend');
            });
            //请求超时
            this.xhr.addEventListener('timeout', function (ProgressEvent) {
                self.timeout();
                console.log(ProgressEvent, 'timeout');
            });
        };
        //上传期间持续不断地触发
        Ajax.prototype.uploadProgress = function () {
            this.opts.callback.uploadProgress();
        };
        //上传完成时触发
        Ajax.prototype.uploadLoad = function () {
            this.opts.callback.uploadLoad();
        };
        //在接收到响应数据的第一个字节时触发
        Ajax.prototype.loadStart = function () {
            this.opts.callback.loadStart();
        };
        //在接收响应期间持续不断地触发
        Ajax.prototype.progress = function () {
            this.opts.callback.progress();
        };
        //在请求发生错误时触发
        Ajax.prototype.error = function () {
            this.opts.callback.error();
        };
        //在因为调用abort()方法而终止请求时触发
        Ajax.prototype.abort = function () {
            this.opts.callback.abort();
        };
        //在接收到完整的响应数据时触发
        Ajax.prototype.load = function () {
            this.opts.callback.load();
        };
        //接收到完整的响应且响应状态为200
        Ajax.prototype.success = function () {
            this.opts.callback.success();
        };
        //接收到完整的响应且响应状态不为200
        Ajax.prototype.fail = function () {
            this.opts.callback.fail();
        };
        //在通信完成或者触发error、abort或load事件后触发
        Ajax.prototype.loadEnd = function () {
            this.opts.callback.loadEnd();
            this.complete();
        };
        //等同于loadEnd
        Ajax.prototype.complete = function () {
            this.opts.callback.complete();
        };
        //请求超时
        Ajax.prototype.timeout = function () {
            this.opts.callback.timeout();
        };
        //手动触发取消请求
        Ajax.prototype.triggerAbort = function () {
            if (this.xhr.abort) {
                this.xhr.abort();
            } else {
                console.log('浏览器不支持xhr2的abort');
            }
        };

        module.exports = Ajax;
    }, { "../tools/extend": 2 }], 2: [function (require, module, exports) {
        //对象的扩展方法
        function extend(json) {
            var opts = json || {};
            opts.defaults = opts.defaults || {}; //默认对象
            opts.inherits = opts.inherits || {}; //继承对像
            opts.isDeep = opts.isDeep == false ? opts.isDeep : true; //是否进行深拷贝(默认进行深拷贝)
            var defaultsType = Object.prototype.toString.call(opts.defaults).slice(8, -1).toLowerCase();
            var inheritsType = Object.prototype.toString.call(opts.inherits).slice(8, -1).toLowerCase();
            if (defaultsType == inheritsType && opts.isDeep) {
                if (defaultsType == 'object' || defaultsType == 'array') {
                    //当为对象或者为数组
                    for (var attr in opts.inherits) {
                        if (opts.inherits.hasOwnProperty(attr)) {
                            var attrDefaultsType = Object.prototype.toString.call(opts.defaults[attr]).slice(8, -1).toLowerCase();
                            var attrInheritsType = Object.prototype.toString.call(opts.inherits[attr]).slice(8, -1).toLowerCase();
                            if (attrDefaultsType == attrInheritsType && opts.isDeep) {
                                //类型相同
                                if (attrDefaultsType == 'object' || attrDefaultsType == 'array') {
                                    //当为对象或者为数组
                                    extend({ defaults: opts.defaults[attr], inherits: opts.inherits[attr] });
                                } else {
                                    opts.defaults[attr] = opts.inherits[attr];
                                }
                            } else {
                                //类型不同,直接后面的覆盖前面的
                                opts.defaults[attr] = opts.inherits[attr];
                            }
                        }
                    }
                } else {
                    opts.defaults = opts.inherits;
                }
            } else {
                opts.defaults = opts.inherits;
            }
            return opts.defaults;
        }
        // var obj1 = extend({
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
        // console.log(obj1);//{a: 0, b: {b1: 'b1', b2: 1, b3: {c1: 'c1', c2: 2}}}
        // var obj2 = extend({
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
        // console.log(obj2);//{a: [1, [3, 1, 7],{arr: [8, 8, 8, [6, 8, 10], {good: 'good'}]}], b: ['what?', {a2: 'a2', b1: 'b1'}, {b2: 'b2'}]}

        module.exports = extend;
    }, {}] }, {}, [1]);