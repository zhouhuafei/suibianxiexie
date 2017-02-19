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
        (function () {
            var ValidateInput = require('../modules/m-validate-input');
            var aInput = [].slice.call(document.querySelectorAll('.m-validate-input'));
            aInput.forEach(function (v) {
                var validate = new ValidateInput({ input: v });
                validate.validateEventBlur();
            });
        })();
        //星评
        (function () {
            var Star = require('../modules/m-star');
            var main = document.querySelector('.main-star');
            var star = new Star({
                eventCallback: function eventCallback(json) {
                    console.log("\u6709\u70B9\u610F\u601D" + json.index);
                }
            });
            main.appendChild(star.parentDom);
        })();

        require('../function/lazyload')(); //延迟加载
    }, { "../function/lazyload": 2, "../modules/m-star": 4, "../modules/m-validate-input": 5 }], 2: [function (require, module, exports) {
        /**
         * Created by zhouhuafei on 16/12/17.
         */
        function lazyload(json) {
            var opt = json || {};
            var height = opt.height || 0; //多加载一部分高度的图片
            var interval = opt.interval || 80; //延迟时间
            var doc = document;
            var fn = function fn() {
                var aImg = [].slice.call(doc.getElementsByClassName('m-lazy-load')); //所有的img元素节点
                var iLen = aImg.length;
                if (!iLen) {
                    return false;
                }
                //获取top
                var offsetTop = function offsetTop(obj) {
                    var top = 0;
                    while (obj) {
                        top += obj.offsetTop;
                        obj = obj.offsetParent;
                    }
                    return top;
                };
                var src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUCB1jYAACAAAFAAGNu5vzAAAAAElFTkSuQmCC';
                aImg.forEach(function (v) {
                    if (v.getAttribute('src') != v.dataset.src && v.tagName.toLowerCase() == 'img') {
                        v.src = src;
                        v.setAttribute('height', '100%');
                        v.setAttribute('width', '100%');
                        v.style.opacity = '0';
                        v.style.transition = 'opacity 0.4s';
                    }
                });
                var iClientH = doc.documentElement.clientHeight;
                var iScrollTop = doc.documentElement.scrollTop || doc.body.scrollTop;
                var iResultTop = iClientH + iScrollTop + height;
                aImg.forEach(function (v) {
                    var iObjTop = offsetTop(v) - height;
                    var iObjBottom = offsetTop(v) + v.offsetHeight;
                    //height
                    if (iResultTop >= iObjTop && iObjTop >= iScrollTop || iObjBottom > iScrollTop && iObjBottom < iResultTop) {
                        if (v.tagName.toLowerCase() == 'img') {
                            if (v.getAttribute('src') != v.dataset.src) {
                                v.src = v.dataset.src;
                                v.removeAttribute('height');
                                v.removeAttribute('width');
                            }
                        } else {
                            v.style.backgroundImage = 'url(' + v.dataset.src + ')';
                            v.style.backgroundPosition = 'center center';
                            v.style.backgroundRepeat = 'no-repeat';
                        }
                        v.style.opacity = '1';
                        v.classList.add('m-lazy-load-show');
                    }
                });
            };
            fn();
            var timer = null;
            var fnScroll = function fnScroll() {
                clearTimeout(timer);
                timer = setTimeout(function () {
                    fn();
                }, interval);
            };
            window.addEventListener('scroll', function () {
                fnScroll();
            });
        }
        module.exports = lazyload;
    }, {}], 3: [function (require, module, exports) {
        /**
         * Created by zhouhuafei on 16/12/4.
         */
        //验证
        var validate = {
            //是不是空
            isSpace: function isSpace(json) {
                var opt = json || {};
                var success = opt.success || function () {
                    console.log('no find success callback');
                };
                var fail = opt.fail || function () {
                    console.log('no find fail callback');
                };
                var value = opt.value || " ";
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
                var opt = json || {};
                var success = opt.success || function () {
                    console.log('no find success callback');
                };
                var fail = opt.fail || function () {
                    console.log('no find fail callback');
                };
                var value = opt.value || " ";
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
                var opt = json || {};
                var success = opt.success || function () {
                    console.log('no find success callback');
                };
                var fail = opt.fail || function () {
                    console.log('no find fail callback');
                };
                var value = opt.value || " ";
                var valueTrim = value.trim();
                var re = /^\d+$/;
                var b = false;
                if (re.test(valueTrim)) {
                    b = true;
                    success();
                } else {
                    fail();
                }
                return b;
            },
            //是不是保留了num位小数点
            isReservedDecimal: function isReservedDecimal(json) {
                var opt = json || {};
                var success = opt.success || function () {
                    console.log('no find success callback');
                };
                var fail = opt.fail || function () {
                    console.log('no find fail callback');
                };
                var num = opt.num || 2;
                var value = opt.value || " ";
                var valueTrim = value.trim();
                var re = new RegExp("^\\d+\\.\\d{" + num + "}$");
                var b = false;
                if (re.test(valueTrim)) {
                    b = true;
                    success();
                } else {
                    fail();
                }
                return b;
            }
        };
        module.exports = validate;
    }, {}], 4: [function (require, module, exports) {
        //手机极简星级评论
        function Fn(json) {
            this.opt = json || {};
            this.opt.allStar = this.opt.allStar || '5'; //总共几颗星(默认五颗星)
            this.opt.nowStar = this.opt.nowStar || '5'; //现在几颗星(默认五颗星)
            this.opt.isEvent = this.opt.isEvent == false ? this.opt.isEvent : true; //是否具备事件(默认具备)
            this.opt.eventCallback = this.opt.eventCallback || function () {
                console.log('no find callback');
            }; //事件回调
            this.render();
        }
        Fn.prototype.init = function () {
            this.event();
        };
        Fn.prototype.event = function () {
            this.starClick();
        };
        Fn.prototype.starClick = function () {
            var self = this;
            if (this.opt.isEvent) {
                this.parentDom.addEventListener('click', function (ev) {
                    var target = ev.target;
                    if (target.classList.contains('m-star')) {
                        var index = target.dataset.index;
                        for (var j = 0; j < self.opt.allStar; j++) {
                            if (j <= index) {
                                self.opt.star[j].classList.add('m-star-active');
                            } else {
                                self.opt.star[j].classList.remove('m-star-active');
                            }
                        }
                        self.opt.eventCallback({ index: index });
                    }
                });
            }
        };
        Fn.prototype.renderParent = function () {
            this.parentDom = document.createElement('div');
            this.parentDom.classList.add('m-star-main');
            this.renderStar();
        };
        Fn.prototype.renderStar = function () {
            var html = "";
            for (var i = 0; i < this.opt.allStar; i++) {
                var className = '';
                if (i < this.opt.nowStar) {
                    className = 'm-star-active';
                }
                html += "<div data-index=\"" + i + "\" class=\"iconfont icon-pingxing m-star " + className + "\"></div>";
            }
            this.parentDom.innerHTML = html;
            this.opt.star = this.parentDom.children;
        };
        Fn.prototype.render = function () {
            this.renderParent();
            this.init();
        };
        module.exports = Fn;
    }, {}], 5: [function (require, module, exports) {
        /**
         * Created by zhouhuafei on 17/1/2.
         */
        function ValidateInput(json) {
            this.opt = json || {};
            this.input = this.opt.input;
            this.parentClass = this.opt.parentClass || 'm-validate-input-parent';
            this.hintClass = this.opt.hintClass || 'm-validate-input-hint';
            this.errorClass = this.opt.errorClass || 'm-validate-input-error';
            this.validateType = this.input.dataset.validate || [];
            this.validateHintTxt = this.input.dataset.hint || [];
            this.init();
        }
        ValidateInput.prototype.init = function () {
            this.require();
            this.render();
        };
        ValidateInput.prototype.require = function () {
            this.validate = require('../function/validate');
        };
        ValidateInput.prototype.render = function () {
            this.renderParent();
            this.renderHint();
        };
        ValidateInput.prototype.renderParent = function () {
            this.parentDom = this.input.parentNode;
            this.parentDom.classList.add(this.parentClass);
        };
        ValidateInput.prototype.renderHint = function () {
            this.hintDom = document.createElement('em');
            this.hintDom.classList.add(this.hintClass);
        };
        ValidateInput.prototype.renderHintAdd = function (json) {
            var opt = json || {};
            this.hintDom.innerHTML = opt.txt || '本项必填';
            this.parentDom.appendChild(this.hintDom);
            this.input.classList.add(this.errorClass);
        };
        ValidateInput.prototype.renderHintRemove = function () {
            var isHaveHintDom = this.parentDom.querySelector("." + this.hintClass);
            if (isHaveHintDom) {
                this.parentDom.removeChild(this.hintDom);
            }
            this.input.classList.remove(this.errorClass);
        };
        ValidateInput.prototype.validateSave = function () {
            var self = this;
            var type = self.validateType.split(' ');
            var hintTxt = self.validateHintTxt.split(' ');
            var value = this.input.value;
            var isTrue = true;
            type.forEach(function (v, i) {
                if (v == 'no-space' && isTrue) {
                    //设置了非空验证
                    self.validate.isSpace({
                        value: value,
                        success: function success() {
                            //空
                            self.renderHintAdd({ txt: hintTxt[i] });
                            isTrue = false;
                        },
                        fail: function fail() {
                            //非空
                            self.renderHintRemove();
                            isTrue = true;
                        }
                    });
                }
                if (v == 'no-zero' && isTrue) {
                    //设置了非零验证
                    self.validate.isZero({
                        value: value,
                        success: function success() {
                            //零
                            self.renderHintAdd({ txt: hintTxt[i] });
                            isTrue = false;
                        },
                        fail: function fail() {
                            //非零
                            self.renderHintRemove();
                            isTrue = true;
                        }
                    });
                }
                if (v == 'yes-integer' && isTrue) {
                    //设置了整数验证
                    self.validate.isInteger({
                        value: value,
                        success: function success() {
                            //整数
                            self.renderHintRemove();
                            isTrue = true;
                        },
                        fail: function fail() {
                            //非整数
                            self.renderHintAdd({ txt: hintTxt[i] });
                            isTrue = false;
                        }
                    });
                }
            });
        };
        ValidateInput.prototype.validateEventBlur = function () {
            var self = this;
            if (self.input) {
                self.input.addEventListener('blur', function () {
                    self.validateSave();
                });
            }
        };

        module.exports = ValidateInput;
    }, { "../function/validate": 3 }] }, {}, [1]);