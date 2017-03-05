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
            this.opt.header = this.opt.header || [];
            this.opt.body = this.opt.body || [];
            this.opt.footer = this.opt.footer || "";
            this.opt.parentSelector = this.opt.parentSelector || "";
            this.init();
        }
        Fn.prototype.init = function () {
            this.render();
        };
        Fn.prototype.render = function () {
            this.parentDom = document.createElement('div');
            this.parentDom.classList.add('m-table');
            this.parentDom.innerHTML = "\n        <div class=\"m-table-header\">\n            <div class=\"m-table-row\">\n                " + this.renderHeader() + "\n            </div>\n        </div>\n        <div class=\"m-table-body\">\n            " + this.renderBody() + "\n        </div>\n        <div class=\"m-table-footer\">\n            " + this.renderFooter() + "\n        </div>\n    ";
            if (this.opt.parentSelector) {
                this.parentSelectorDom = document.querySelector(this.opt.parentSelector);
            }
            if (this.parentSelectorDom) {
                this.parentSelectorDom.appendChild(this.parentDom);
            }
        };
        Fn.prototype.renderHeader = function () {
            var html = "";
            this.opt.header.forEach(function (v) {
                html += "\n            <div class=\"m-table-col\">\n                <div class=\"m-table-col-wrap\">\n                    " + v.html + "\n                </div>\n            </div>\n        ";
            });
            return html;
        };
        Fn.prototype.renderBody = function () {
            var html = "";
            this.opt.body.forEach(function (v0) {
                var row = "";
                v0.forEach(function (v1) {
                    row += "\n                <div class=\"m-table-col\">\n                    <div class=\"m-table-col-wrap\">\n                        " + v1.html + "\n                    </div>\n                </div>\n            ";
                });
                html += "<div class=\"m-table-row\">" + row + "</div>";
            });
            return html;
        };
        Fn.prototype.renderFooter = function () {
            return this.opt.footer;
        };
        module.exports = Fn;
    }, {}] }, {}, [1]);