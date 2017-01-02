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
        //手机极简星级评论
        function Star(json) {
            var opt = json || {};
            this.allStar = opt.allStar || '5'; //总共几颗星(默认五颗星)
            this.nowStar = opt.nowStar || '0'; //现在几颗星(默认零颗星)
            this.isEvent = opt.isEvent == false ? opt.isEvent : true; //是否具备事件(默认具备)
            this.eventCallback = opt.eventCallback || function () {
                console.log('no find callback');
            }; //事件回调
        }
        Star.prototype.init = function () {
            this.event();
        };
        Star.prototype.event = function () {
            this.starClick();
        };
        Star.prototype.starClick = function () {
            var self = this;
            if (this.isEvent) {
                this.parentDom.addEventListener('click', function (ev) {
                    var index = ev.target.dataset.index;
                    for (var j = 0; j < self.allStar; j++) {
                        if (j <= index) {
                            self.star[j].classList.add('m-star-active');
                        } else {
                            self.star[j].classList.remove('m-star-active');
                        }
                    }
                    self.eventCallback({ index: index });
                });
            }
        };
        Star.prototype.renderParent = function () {
            this.parentDom = document.createElement('div');
            this.parentDom.classList.add('m-star-main');
            this.renderStar();
        };
        Star.prototype.renderStar = function () {
            var html = "";
            for (var i = 0; i < this.allStar; i++) {
                var className = '';
                if (i < this.nowStar) {
                    className = 'm-star-active';
                }
                html += "<div data-index=\"" + i + "\" class=\"iconfont icon-pingxing m-star " + className + "\"></div>";
            }
            this.parentDom.innerHTML = html;
            this.star = this.parentDom.children;
        };
        Star.prototype.render = function (json) {
            var opt = json || {};
            var callback = opt.callback || function () {
                console.log('no find callback');
            };
            this.renderParent();
            this.init();
            callback(this.parentDom);
        };
        module.exports = Star;
    }, {}] }, {}, [1]);