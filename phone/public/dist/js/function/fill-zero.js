"use strict";!function e(t,r,i){function n(a,u){if(!r[a]){if(!t[a]){var l="function"==typeof require&&require;if(!u&&l)return l(a,!0);if(o)return o(a,!0);throw new Error("Cannot find module '"+a+"'")}var f=r[a]={exports:{}};t[a][0].call(f.exports,function(e){var r=t[a][1][e];return n(r?r:e)},f,f.exports,e,t,r,i)}return r[a].exports}for(var o="function"==typeof require&&require,a=0;a<i.length;a++)n(i[a]);return n}({1:[function(e,t,r){function i(e){var t=n({default:{num:null},inherit:e}),r=t.num;return r<10?"0"+r:""+r}var n=e("../function/extend.js");t.exports=i},{"../function/extend.js":2}],2:[function(e,t,r){function i(e){var t=e||{};t.default=t.default||{},t.inherit=t.inherit||{},t.isDeep=0!=t.isDeep||t.isDeep;var r=Object.prototype.toString.call(t.default).slice(8,-1).toLowerCase();if(r==Object.prototype.toString.call(t.inherit).slice(8,-1).toLowerCase()&&t.isDeep)if("object"==r||"array"==r){for(var n in t.inherit)if(t.inherit.hasOwnProperty(n)){var o=Object.prototype.toString.call(t.default[n]).slice(8,-1).toLowerCase(),a=Object.prototype.toString.call(t.inherit[n]).slice(8,-1).toLowerCase();o==a&&t.isDeep?"object"==o?i({default:t.default[n],inherit:t.inherit[n]}):"array"==o?t.inherit[n].forEach(function(e,r){var o=Object.prototype.toString.call(t.default[n][r]).slice(8,-1).toLowerCase();Object.prototype.toString.call(t.inherit[n][r]).slice(8,-1).toLowerCase()==o&&t.isDeep&&"object"==o?i({default:t.default[n][r],inherit:t.inherit[n][r]}):t.default[n][r]=t.inherit[n][r]}):t.default[n]=t.inherit[n]:t.default[n]=t.inherit[n]}}else t.default=t.inherit;else t.default=t.inherit;return t.default}t.exports=i},{}]},{},[1]);