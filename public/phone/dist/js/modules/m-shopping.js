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
        //我的记录里的商品
        function Shopping(opt) {
            this.opt = opt || {};
            this.configData = this.opt.configData || {}; //配置信息
            this.ajaxData = this.opt.ajaxData || {}; //商品信息
            this.configData = {
                isShowImgSrc: this.configData.isShowImgSrc == true ? this.configData.isShowImgSrc : false, //是否直接显示图片(默认不直接显示)
                isShowRadio: this.configData.isShowRadio == true ? this.configData.isShowRadio : false, //是否直接显示多选框(默认不直接显示)
                isShowInfoTxt: this.configData.isShowInfoTxt == false ? this.configData.isShowInfoTxt : true, //是否直接显示文字区域(默认直接显示)
                isShowInfoOption: this.configData.isShowInfoOption == true ? this.configData.isShowInfoOption : false, //是否直接显示操作区域(默认不直接显示)
                isShowTouchDelete: this.configData.isShowTouchDelete == true ? this.configData.isShowTouchDelete : false };
            this.ajaxData = {
                goodsName: this.ajaxData.goodsName, //商品名称
                goodsStandard: this.ajaxData.goodsStandard || '默认规格', //商品规格
                goodsBuyNum: this.ajaxData.goodsBuyNum, //商品购买数量
                goodsStore: this.ajaxData.goodsStore, //商品的库存
                gid: this.ajaxData.gid, //商品的id
                marketPrice: this.ajaxData.marketPrice || 'undefined.undefined', //市场价格
                nowPrice: this.ajaxData.nowPrice || 'undefined.undefined', //现在的价格
                vipPrice: this.ajaxData.vipPrice || 'undefined.undefined', //会员价格
                likeNum: this.ajaxData.likeNum, //多少人喜欢
                imgSrc: this.ajaxData.imgSrc, //图片的地址
                aHref: this.ajaxData.aHref || 'javascript:;' };
        }
        //以下是渲染结构
        Shopping.prototype.renderParent = function () {
            //渲染父级容器
            var div = document.createElement('div');
            div.classList.add("m-shopping");
            this.parentDom = div;
            this.parentDom.innerHTML = "            \n            <div class=\"m-shopping-wrap\">\n                <div class=\"m-shopping-content\">\n                    " + this.renderRadio() + " \n                    " + this.renderImg() + "        \n                    " + this.renderInfo() + "\n                </div>\n            </div>\n            " + this.renderDelete() + "            \n        ";
            this.parentDomImg = this.parentDom.querySelector('.m-shopping-img a');
            this.parentDomInfo = this.parentDom.querySelector('.m-shopping-info');
        };
        Shopping.prototype.renderRadio = function () {
            //渲染多选框容器
            if (this.configData.isShowRadio) {
                return "\n                <div class=\"m-shopping-radio\">\n                    <input type=\"checkbox\" class=\"g-input-circle\">\n                </div>\n            ";
            } else {
                return "";
            }
        };
        Shopping.prototype.renderRadioAdd = function () {
            var parent = this.parentDom.querySelector('.m-shopping-content');
            var before = this.parentDom.querySelector('.m-shopping-content .m-shopping-img');
            var obj = this.parentDom.querySelector('.m-shopping-content .m-shopping-radio');
            this.configData.isShowRadio = true;
            var dom = this.htmlToDom({ html: this.renderRadio() });
            if (!obj) {
                parent.insertBefore(dom, before);
            }
        };
        Shopping.prototype.renderRadioRemove = function () {
            var parent = this.parentDom.querySelector('.m-shopping-content');
            var obj = this.parentDom.querySelector('.m-shopping-content .m-shopping-radio');
            if (obj) {
                parent.removeChild(obj);
            }
        };
        Shopping.prototype.renderDelete = function () {
            //删除区域
            return "<div class=\"m-shopping-delete\"><span class=\"icons icons-delete\"></span></div>";
        };
        Shopping.prototype.renderImg = function () {
            //渲染图片区域
            var imgHTML = "";
            if (this.configData.isShowImgSrc) {
                imgHTML = "<img src=\"" + this.ajaxData.imgSrc + "\" alt=\"\">";
            } else {
                imgHTML = "<img class=\"lazy-load\" data-src=\"" + this.ajaxData.imgSrc + "\" src=\"\" alt=\"\">";
            }
            return "\n            <div class=\"m-shopping-img\">\n                <a href=\"" + this.ajaxData.aHref + "\">\n                    " + imgHTML + "\n                </a>\n            </div>\n        ";
        };
        Shopping.prototype.renderInfo = function () {
            //信息容器
            return "\n            <div class=\"m-shopping-info\">            \n                " + this.renderTxt() + "\n                " + this.renderOption() + "\n            </div>\n        ";
        };
        Shopping.prototype.renderTxt = function () {
            //文字区域
            if (this.configData.isShowInfoTxt) {
                return "\n                <div class=\"m-shopping-info-txt\">\n                    " + this.renderGoodsName() + "\n                    " + this.renderGoodsStandard() + "\n                    " + this.renderGoodsPrice() + "\n                    " + this.renderGoodsBuyNum() + "\n                </div>\n            ";
            } else {
                return "";
            }
        };
        Shopping.prototype.renderGoodsName = function () {
            //渲染商品名称
            return "<div class=\"m-shopping-info-txt-name\">" + this.ajaxData.goodsName + "</div>";
        };
        Shopping.prototype.renderGoodsStandard = function () {
            //渲染商品规格
            return "<div class=\"m-shopping-info-txt-standard\">\n                    <span>\u89C4\u683C:</span>\n                    <span class=\"m-shopping-info-txt-standard-txt\">" + this.ajaxData.goodsStandard + "</span>\n                </div>\n        ";
        };
        Shopping.prototype.renderGoodsPrice = function () {
            //渲染商品价格
            var p = this.ajaxData.nowPrice.split('.');
            var b = p[0];
            var s = p[1];
            return "\n            <div class=\"m-shopping-info-txt-price\">\n                <span>\uFFE5</span>\n                <span class=\"m-shopping-info-txt-price-big\">" + b + "</span>\n                <span>.</span>\n                <span>" + s + "</span>                \n            </div>\n        ";
        };
        Shopping.prototype.renderGoodsBuyNum = function () {
            //渲染商品数量
            return "\n            <div class=\"m-shopping-info-txt-num\">\n                <span class=\"m-shopping-info-txt-num-des\">\xD7</span>\n                <span class=\"m-shopping-info-txt-num-txt\">" + this.ajaxData.goodsBuyNum + "</span>\n            </div>\n        ";
        };
        Shopping.prototype.renderOption = function () {
            //操作区域
            if (this.configData.isShowInfoOption) {
                return "\n                <div class=\"m-shopping-info-option\">\n                    " + this.renderCompute() + "\n                    " + this.renderGoodsPrice() + "\n                </div>\n            ";
            } else {
                return "";
            }
        };
        Shopping.prototype.renderCompute = function () {
            //渲染加减商品的计算结构
            var classSubstract = '';
            var classAdd = '';
            if (this.ajaxData.goodsBuyNum <= 1) {
                classSubstract = 'm-shopping-inactive';
            }
            if (this.ajaxData.goodsBuyNum >= this.ajaxData.goodsStore) {
                classAdd = 'm-shopping-inactive';
            }
            return "\n            <div class=\"m-shopping-info-option-compute\">\n                    <div class=\"m-shopping-info-option-substract " + classSubstract + "\">-</div>\n                    <div class=\"m-shopping-info-option-input\"><input type=\"text\" value=\"" + this.ajaxData.goodsBuyNum + "\"></div>\n                    <div class=\"m-shopping-info-option-add " + classAdd + "\">+</div>\n            </div>\n        ";
        };
        Shopping.prototype.render = function (fn) {
            //渲染整个DOM
            this.renderParent();
            this.init();
            fn && fn(this.parentDom);
        };
        //以下渲染功能
        Shopping.prototype.init = function () {
            this.base();
            this.power();
            this.touchDelete();
        };
        Shopping.prototype.base = function () {
            //用到的一些base里的方法
            this.addSubtract = base.addSubtract;
            this.htmlToDom = base.htmlToDom;
        };
        Shopping.prototype.power = function () {
            //加减计算功能
            var add = this.parentDom.querySelector('.m-shopping-info-option-add');
            var input = this.parentDom.querySelector('.m-shopping-info-option-input input');
            var substract = this.parentDom.querySelector('.m-shopping-info-option-substract');
            if (add) {
                var self = this;
                self.addSubtract({
                    add: add,
                    addCallback: function addCallback() {
                        console.log('+');
                    },
                    substract: substract,
                    substractCallback: function substractCallback() {
                        console.log('-');
                    },
                    input: input,
                    blurCallback: function blurCallback() {
                        console.log('blur');
                    },
                    inventoryNum: this.ajaxData.goodsStore
                });
            }
        };
        Shopping.prototype.touchDelete = function () {
            //滑动删除功能
            if (this.configData.isShowTouchDelete) {
                console.log('开启滑动删除功能');
            }
        };
        module.exports = Shopping;
    }, {}] }, {}, [1]);