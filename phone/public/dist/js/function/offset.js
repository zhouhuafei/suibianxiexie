"use strict";!function e(t,r,n){function i(l,a){if(!r[l]){if(!t[l]){var c="function"==typeof require&&require;if(!a&&c)return c(l,!0);if(o)return o(l,!0);throw new Error("Cannot find module '"+l+"'")}var f=r[l]={exports:{}};t[l][0].call(f.exports,function(e){var r=t[l][1][e];return i(r?r:e)},f,f.exports,e,t,r,n)}return r[l].exports}for(var o="function"==typeof require&&require,l=0;l<n.length;l++)i(n[l]);return i}({1:[function(e,t,r){function n(e){for(var t=i({default:{element:null},inherit:e}),r=0,n=0,l=o({element:t.element})[0];l;)r+=l.offsetTop,n+=l.offsetLeft,l=l.offsetParent;return{top:r,left:n}}var i=e("../function/extend.js"),o=e("../function/get-dom-array.js");t.exports=n},{"../function/extend.js":2,"../function/get-dom-array.js":3}],2:[function(e,t,r){function n(e){var t=e||{};t.default=t.default||{},t.inherit=t.inherit||{},t.isDeep=0!=t.isDeep||t.isDeep;var r=Object.prototype.toString.call(t.default).slice(8,-1).toLowerCase();if(r==Object.prototype.toString.call(t.inherit).slice(8,-1).toLowerCase()&&t.isDeep)if("object"==r||"array"==r){for(var i in t.inherit)if(t.inherit.hasOwnProperty(i)){var o=Object.prototype.toString.call(t.default[i]).slice(8,-1).toLowerCase(),l=Object.prototype.toString.call(t.inherit[i]).slice(8,-1).toLowerCase();o==l&&t.isDeep?"object"==o?n({default:t.default[i],inherit:t.inherit[i]}):"array"==o?t.inherit[i].forEach(function(e,r){var o=Object.prototype.toString.call(t.default[i][r]).slice(8,-1).toLowerCase();Object.prototype.toString.call(t.inherit[i][r]).slice(8,-1).toLowerCase()==o&&t.isDeep&&"object"==o?n({default:t.default[i][r],inherit:t.inherit[i][r]}):t.default[i][r]=t.inherit[i][r]}):t.default[i]=t.inherit[i]:t.default[i]=t.inherit[i]}}else t.default=t.inherit;else t.default=t.inherit;return t.default}t.exports=n},{}],3:[function(e,t,r){function n(e){var t=i({default:{element:null},inherit:e}),r=[];return t.element&&("string"==Object.prototype.toString.call(t.element).slice(8,-1).toLowerCase()&&(r=[].slice.call(document.querySelectorAll(t.element))),1==t.element.nodeType&&(r=[t.element]),"htmlcollection"!=Object.prototype.toString.call(t.element).slice(8,-1).toLowerCase()&&"nodelist"!=Object.prototype.toString.call(t.element).slice(8,-1).toLowerCase()||(r=[].slice.call(t.element))),r}var i=e("../function/extend.js");t.exports=n},{"../function/extend.js":2}]},{},[1]);