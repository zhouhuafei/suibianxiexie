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
    }, { "../function/validate": 2 }], 2: [function (require, module, exports) {
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
    }, {}] }, {}, [1]);