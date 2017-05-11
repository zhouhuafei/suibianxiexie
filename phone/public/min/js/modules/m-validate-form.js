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
        var validate = require('../function/validate'); //表单验证
        var getDomArray = require('../function/get-dom-array'); //获取原生的dom节点并转换成数组

        function ValidateForm(json) {
            this.opts = json || {};
            this.element = getDomArray({ element: this.opts.element })[0];
            this.hintClass = this.opts.hintClass || 'm-validate-form-hint';
            this.eventsType = this.opts.eventsType || 'blur';
            this.validateType = this.element.dataset.validate || 'undefined';
            this.validateHintTxt = this.element.dataset.hint || 'undefined';
            this.init();
        }
        ValidateForm.prototype.init = function () {
            this.render();
            this.validateEvents();
        };
        ValidateForm.prototype.render = function () {
            this.renderWrap();
            this.renderHint();
        };
        ValidateForm.prototype.renderWrap = function () {
            this.wrapDom = this.element.parentNode;
            if (this.wrapDom && getComputedStyle(this.wrapDom).position == 'static') {
                this.wrapDom.style.position = 'relative';
            }
        };
        ValidateForm.prototype.renderHint = function () {
            this.hintDom = document.createElement('span');
            this.hintDom.classList.add(this.hintClass);
        };
        ValidateForm.prototype.renderHintAdd = function (json) {
            //只有没被隐藏的才进行验证
            if (this.element.offsetWidth) {
                var opts = json || {};
                this.hintDom.innerHTML = opts.txt || '本项必填';
                this.wrapDom.appendChild(this.hintDom);
            }
        };
        ValidateForm.prototype.renderHintRemove = function () {
            var isHaveHintDom = this.wrapDom.querySelector("." + this.hintClass);
            if (isHaveHintDom) {
                this.wrapDom.removeChild(this.hintDom);
            }
        };
        ValidateForm.prototype.validateSave = function () {
            var self = this;
            var type = self.validateType.split(' ');
            var hintTxt = self.validateHintTxt.split(' ');
            var value = this.element.value;
            this.isValidateSuccess = true; //是否验证成功了
            type.forEach(function (v, i) {
                if (v == 'no-space' && self.isValidateSuccess) {
                    //设置了非空验证
                    validate.isSpace({
                        value: value,
                        success: function success() {
                            //空
                            self.renderHintAdd({ txt: hintTxt[i] });
                            self.isValidateSuccess = false;
                        },
                        fail: function fail() {
                            //非空
                            self.renderHintRemove();
                            self.isValidateSuccess = true;
                        }
                    });
                }
                if (v == 'no-zero' && self.isValidateSuccess) {
                    //设置了非零验证
                    validate.isZero({
                        value: value,
                        success: function success() {
                            //零
                            self.renderHintAdd({ txt: hintTxt[i] });
                            self.isValidateSuccess = false;
                        },
                        fail: function fail() {
                            //非零
                            self.renderHintRemove();
                            self.isValidateSuccess = true;
                        }
                    });
                }
                if (v == 'yes-integer' && self.isValidateSuccess) {
                    //设置了整数验证
                    validate.isInteger({
                        value: value,
                        success: function success() {
                            //整数
                            self.renderHintRemove();
                            self.isValidateSuccess = true;
                        },
                        fail: function fail() {
                            //非整数
                            self.renderHintAdd({ txt: hintTxt[i] });
                            self.isValidateSuccess = false;
                        }
                    });
                }
            });
        };
        ValidateForm.prototype.validateEvents = function () {
            var self = this;
            if (self.element) {
                self.element.addEventListener(self.eventsType, function () {
                    self.validateSave();
                });
            }
        };

        module.exports = ValidateForm;
    }, { "../function/get-dom-array": 2, "../function/validate": 3 }], 2: [function (require, module, exports) {
        //获取原生的dom节点并转换成数组,传入的参数支持:1.原生的dom节点,2.原生的dom集合,3.css选择器
        function getDomArray(json) {
            var opts = json || {};
            var dom = [];
            var element = opts.element ? opts.element : false;
            if (element) {
                //如果是字符串
                if (Object.prototype.toString.call(element).slice(8, -1).toLowerCase() == 'string') {
                    dom = [].slice.call(document.querySelectorAll(element));
                }
                //如果是dom节点(一个元素)    原生的
                if (element.nodeType == 1) {
                    dom = [element];
                }
                /*
                 * 如果是dom集合(一组元素)    HtmlCollection(通过getElementsBy系列获取到的)
                 * 如果是dom集合(一组元素)    NodeList(通过querySelectorAll获取到的)
                 * */
                if (Object.prototype.toString.call(element).slice(8, -1).toLowerCase() == 'htmlcollection' || Object.prototype.toString.call(element).slice(8, -1).toLowerCase() == 'nodelist') {
                    dom = [].slice.call(element);
                }
            }
            return dom;
        }

        module.exports = getDomArray;
    }, {}], 3: [function (require, module, exports) {
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