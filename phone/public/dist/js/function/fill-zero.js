"use strict";!function e(t,r,i){function n(a,u){if(!r[a]){if(!t[a]){var l="function"==typeof require&&require;if(!u&&l)return l(a,!0);if(o)return o(a,!0);throw new Error("Cannot find module '"+a+"'")}var f=r[a]={exports:{}};t[a][0].call(f.exports,function(e){var r=t[a][1][e];return n(r?r:e)},f,f.exports,e,t,r,i)}return r[a].exports}for(var o="function"==typeof require&&require,a=0;a<i.length;a++)n(i[a]);return n}({1:[function(e,t,r){function i(e){var t=n({default:{num:null},inherit:e}),r=t.num;return r<10?"0"+r:""+r}var n=e("../function/extend.js");t.exports=i},{"../function/extend.js":2}],2:[function(e,t,r){function i(e){var t=e||{};t.default=t.default||{},t.inherit=t.inherit||{},t.isDeep=0!=t.isDeep||t.isDeep;var r=Object.prototype.toString.call(t.default).slice(8,-1).toLowerCase(),n=Object.prototype.toString.call(t.inherit).slice(8,-1).toLowerCase();if(r==n&&t.isDeep){for(var o in t.inherit)if(t.inherit.hasOwnProperty(o)){var a=Object.prototype.toString.call(t.default[o]).slice(8,-1).toLowerCase(),u=Object.prototype.toString.call(t.inherit[o]).slice(8,-1).toLowerCase();a==u&&t.isDeep?"object"==a?i({default:t.default[o],inherit:t.inherit[o]}):"array"==a?t.inherit[o].forEach(function(e,r){var n=Object.prototype.toString.call(t.default[o][r]).slice(8,-1).toLowerCase(),a=Object.prototype.toString.call(t.inherit[o][r]).slice(8,-1).toLowerCase();a==n&&t.isDeep&&"object"==n?i({default:t.default[o][r],inherit:t.inherit[o][r]}):t.default[o][r]=t.inherit[o][r]}):t.default[o]=t.inherit[o]:t.default[o]=t.inherit[o]}}else t.default=t.inherit;return t.default}t.exports=i},{}]},{},[1]);