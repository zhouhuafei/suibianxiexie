"use strict";!function e(t,r,n){function i(l,a){if(!r[l]){if(!t[l]){var c="function"==typeof require&&require;if(!a&&c)return c(l,!0);if(o)return o(l,!0);throw new Error("Cannot find module '"+l+"'")}var f=r[l]={exports:{}};t[l][0].call(f.exports,function(e){var r=t[l][1][e];return i(r?r:e)},f,f.exports,e,t,r,n)}return r[l].exports}for(var o="function"==typeof require&&require,l=0;l<n.length;l++)i(n[l]);return i}({1:[function(e,t,r){function n(e){for(var t=i({default:{element:null},inherit:e}),r=0,n=0,l=o({element:t.element})[0];l;)r+=l.offsetTop,n+=l.offsetLeft,l=l.offsetParent;return{top:r,left:n}}var i=e("../function/extend.js"),o=e("../function/get-dom-array.js");t.exports=n},{"../function/extend.js":2,"../function/get-dom-array.js":3}],2:[function(e,t,r){function n(e){var t=e||{};t.default=t.default||{},t.inherit=t.inherit||{},t.isDeep=0!=t.isDeep||t.isDeep;var r=Object.prototype.toString.call(t.default).slice(8,-1).toLowerCase(),i=Object.prototype.toString.call(t.inherit).slice(8,-1).toLowerCase();if(r==i&&t.isDeep){for(var o in t.inherit)if(t.inherit.hasOwnProperty(o)){var l=Object.prototype.toString.call(t.default[o]).slice(8,-1).toLowerCase(),a=Object.prototype.toString.call(t.inherit[o]).slice(8,-1).toLowerCase();l==a&&t.isDeep?"object"==l?n({default:t.default[o],inherit:t.inherit[o]}):"array"==l?t.inherit[o].forEach(function(e,r){var i=Object.prototype.toString.call(t.default[o][r]).slice(8,-1).toLowerCase(),l=Object.prototype.toString.call(t.inherit[o][r]).slice(8,-1).toLowerCase();l==i&&t.isDeep&&"object"==i?n({default:t.default[o][r],inherit:t.inherit[o][r]}):t.default[o][r]=t.inherit[o][r]}):t.default[o]=t.inherit[o]:t.default[o]=t.inherit[o]}}else t.default=t.inherit;return t.default}t.exports=n},{}],3:[function(e,t,r){function n(e){var t=i({default:{element:null},inherit:e}),r=null;return t.element&&("string"==Object.prototype.toString.call(t.element).slice(8,-1).toLowerCase()&&(r=[].slice.call(document.querySelectorAll(t.element))),1==t.element.nodeType&&(r=[t.element]),"htmlcollection"!=Object.prototype.toString.call(t.element).slice(8,-1).toLowerCase()&&"nodelist"!=Object.prototype.toString.call(t.element).slice(8,-1).toLowerCase()||(r=[].slice.call(t.element))),r}var i=e("../function/extend.js");t.exports=n},{"../function/extend.js":2}]},{},[1]);