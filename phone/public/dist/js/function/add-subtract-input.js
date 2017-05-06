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
        //加减操作
        function addSubtractInput(json) {
            //购物加减商品系列
            if (!json) {
                console.log('no find parameter');
                return false;
            }
            var noActiveClass = json.noActiveClass || 'on'; //不能点的时候的class
            var minNumber = json.minNumber || 1; //最小数量
            var add = json.add; //加的按钮
            var addCallback = json.addCallback; //加的回调
            var substract = json.substract; //减少的按钮
            var substractCallback = json.substractCallback; //减少的回调
            var input = json.input; //输入框的按钮
            var blurCallback = json.blurCallback; //失去焦点的回调
            var inventoryNumber = parseInt(json.inventoryNumber); //商品库存
            var space = function space() {
                if (input["value"].trim() == '') {
                    input["value"] = minNumber;
                }
            };
            //增加
            add.onclick = function () {
                space();
                var number = parseInt(input.value);
                number++;
                input["value"] = number;
                if (number >= inventoryNumber) {
                    if (inventoryNumber == 0) {
                        input["value"] = minNumber;
                    } else {
                        input["value"] = inventoryNumber;
                    }
                    add.classList.add(noActiveClass);
                }
                substract.classList.remove(noActiveClass);
                addCallback && addCallback();
            };
            //减少
            substract.onclick = function () {
                space();
                var number = parseInt(input.value);
                number--;
                input["value"] = number;
                if (number <= minNumber) {
                    input["value"] = minNumber;
                    substract.classList.add(noActiveClass);
                }
                add.classList.remove(noActiveClass);
                substractCallback && substractCallback();
            };
            //获取焦点
            input["onfocus"] = function () {
                input.select();
            };
            //失去焦点
            input["onblur"] = function () {
                space();
                var number = parseInt(input.value);
                if (isNaN(number)) {
                    number = minNumber;
                }
                substract.classList.remove(noActiveClass);
                add.classList.remove(noActiveClass);
                if (number >= inventoryNumber) {
                    input["value"] = inventoryNumber;
                    add.classList.add(noActiveClass);
                }
                if (number <= minNumber) {
                    input["value"] = minNumber;
                    substract.classList.add(noActiveClass);
                }
                blurCallback && blurCallback();
            };
        }
        module.exports = addSubtractInput;
    }, {}] }, {}, [1]);