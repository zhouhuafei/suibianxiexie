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
        function Fn(json) {
            this.opt = json || {};
            //如果没有选择文件的input,则不继续往下执行
            if (!this.opt.input) {
                console.log('no find input');
                return;
            }
            //一次上传限制几张图片
            this.opt.limitNum = this.opt.limitNum || '5';
            //选择图片的回调
            this.opt.changeCallback = this.opt.changeCallback || function () {
                console.log('no find changeCallback');
            };
            //把图片读取成base64编码的回调
            this.opt.base64Callback = this.opt.base64Callback || function () {
                console.log('no find base64Callback');
            };
            //初始化
            this.init();
        }
        Fn.prototype.init = function () {
            //渲染结构
            this.render();
            //渲染功能
            this.power();
        };
        Fn.prototype.render = function () {};
        Fn.prototype.power = function () {
            //事件相关
            this.events();
        };
        Fn.prototype.events = function () {
            this.eventsInputChange();
        };
        Fn.prototype.eventsInputChange = function () {
            var self = this;
            var limitNum = this.opt.limitNum;
            this.opt.input.addEventListener('change', function () {
                var imagesNum = 0;
                //图片的相关信息
                self.imgData = [];
                var files = this.files;
                var len = files.length;
                for (var i = 0; i < len; i++) {
                    var f = files[i];
                    var isImages = /image/ig.test(f.type);
                    //不是图片
                    if (!isImages) {
                        continue;
                    }
                    //是图片
                    if (isImages) {
                        if (imagesNum < limitNum) {
                            //小于限制几张图片的数量
                            self.imgData.push(f);
                            imagesNum++;
                        } else {//大于限制几张图片的数量

                        }
                    }
                }
                self.opt.changeCallback({ imgData: self.imgData });
                //把图片读成base64编码
                self.fileReadAsDataURL();
            });
        };
        Fn.prototype.fileReadAsDataURL = function () {
            var self = this;
            this.imgData.forEach(function (v, i) {
                var fileRender = new FileReader();
                fileRender.readAsDataURL(v);
                fileRender.addEventListener('load', function () {
                    self.opt.base64Callback({ base64: this.result, index: i });
                });
            });
        };
    }, {}] }, {}, [1]);