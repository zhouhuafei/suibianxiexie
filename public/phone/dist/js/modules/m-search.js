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
        function Search() {}
        Search.prototype.init = function () {
            $(this.parentDOM).on('click', '.m-search-cancel,.m-search-return', function () {
                history.go(-1);
            });
        };
        Search.prototype.render = function (callback) {
            this.parentDOM = document.createElement('div');
            this.parentDOM.classList.add('m-search');
            this.parentDOM.innerHTML = "<form action=\"index.php\" method=\"post\"><span class=\"m-search-return\"></span><label><input type=\"text\" name=\"search_keywords\" value=\"\"  ><em><button type=\"submit\"><span class=\"icon-search\"></span></button></em></label><span class=\"m-search-cancel\">\u53D6\u6D88</span></form>";
            this.init();
            callback && callback(this.parentDOM);
        };
        module.exports = Search;
    }, {}] }, {}, [1]);