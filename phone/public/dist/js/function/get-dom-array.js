"use strict";!function e(t,r,i){function n(l,c){if(!r[l]){if(!t[l]){var a="function"==typeof require&&require;if(!c&&a)return a(l,!0);if(o)return o(l,!0);throw new Error("Cannot find module '"+l+"'")}var u=r[l]={exports:{}};t[l][0].call(u.exports,function(e){var r=t[l][1][e];return n(r?r:e)},u,u.exports,e,t,r,i)}return r[l].exports}for(var o="function"==typeof require&&require,l=0;l<i.length;l++)n(i[l]);return n}({1:[function(e,t,r){function i(e){var t=n({default:{element:null},inherit:e}),r=null;return t.element&&("string"==Object.prototype.toString.call(t.element).slice(8,-1).toLowerCase()&&(r=[].slice.call(document.querySelectorAll(t.element))),1==t.element.nodeType&&(r=[t.element]),"htmlcollection"!=Object.prototype.toString.call(t.element).slice(8,-1).toLowerCase()&&"nodelist"!=Object.prototype.toString.call(t.element).slice(8,-1).toLowerCase()||(r=[].slice.call(t.element))),r}var n=e("../function/extend.js");t.exports=i},{"../function/extend.js":2}],2:[function(e,t,r){function i(e){var t=e||{};if(t.default=t.default||{},t.inherit=t.inherit||{},t.isDeep=0!=t.isDeep||t.isDeep,Object.prototype.toString.call(t.default).slice(8,-1).toLowerCase()==Object.prototype.toString.call(t.inherit).slice(8,-1).toLowerCase()&&t.isDeep){for(var r in t.inherit)if(t.inherit.hasOwnProperty(r)){var n=Object.prototype.toString.call(t.default[r]).slice(8,-1).toLowerCase(),o=Object.prototype.toString.call(t.inherit[r]).slice(8,-1).toLowerCase();n==o&&t.isDeep?"object"==n?i({default:t.default[r],inherit:t.inherit[r]}):"array"==n?t.inherit[r].forEach(function(e,n){var o=Object.prototype.toString.call(t.default[r][n]).slice(8,-1).toLowerCase();Object.prototype.toString.call(t.inherit[r][n]).slice(8,-1).toLowerCase()==o&&t.isDeep&&"object"==o?i({default:t.default[r][n],inherit:t.inherit[r][n]}):t.default[r][n]=t.inherit[r][n]}):t.default[r]=t.inherit[r]:t.default[r]=t.inherit[r]}}else t.default=t.inherit;return t.default}t.exports=i},{}]},{},[1]);