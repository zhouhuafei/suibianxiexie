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
         * Created by zhouhuafei on 16/12/17.
         */
        var Product = require('../modules/m-product');
        var product = new Product({ configData: { isShowGoodsName: true } });
        console.log(product);
    }, { "../modules/m-product": 2 }], 2: [function (require, module, exports) {
        /**
         * Created by zhouhuafei on 16/12/17.
         */
        function ProductList(opt) {
            this.opt = opt || {};
            this.configData = this.opt.configData || {}; //配置信息
            this.goodsData = this.opt.goodsData || {}; //商品信息
            this.configData = {
                isShowLong: this.configData.isShowLong == true ? this.configData.isShowLong : false, //是否显示为长方形(默认不显示)
                isShowCart: this.configData.isShowCart == true ? this.configData.isShowCart : false, //是否显示购物车(默认不显示)
                isShowGoodsName: this.configData.isShowGoodsName == true ? this.configData.isShowGoodsName : false, //是否显示商品名称(默认不显示)
                isShowPrice: this.configData.isShowPrice == true ? this.configData.isShowPrice : false, //是否显示商品价格(默认不显示)
                isShowLikeNum: this.configData.isShowLikeNum == true ? this.configData.isShowLikeNum : false //是否显示多少人想买(默认不显示)
            };
        }
        ProductList.prototype.init = function () {};
        ProductList.prototype.render = function (callback) {
            var dom = '<div>render待续...</div>';

            callback && callback(dom);
        };
        module.exports = ProductList;
    }, {}] }, {}, [1]);