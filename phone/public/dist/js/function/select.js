"use strict";!function e(t,i,o){function n(c,l){if(!i[c]){if(!t[c]){var a="function"==typeof require&&require;if(!l&&a)return a(c,!0);if(r)return r(c,!0);throw new Error("Cannot find module '"+c+"'")}var s=i[c]={exports:{}};t[c][0].call(s.exports,function(e){var i=t[c][1][e];return n(i?i:e)},s,s.exports,e,t,i,o)}return i[c].exports}for(var r="function"==typeof require&&require,c=0;c<o.length;c++)n(o[c]);return n}({1:[function(e,t,i){function o(e){this.opt=n({default:{items:null,callback:{itemsClick:function(){}}},inherit:e}),this.itemsDom=r({element:this.opt.items}),this.init()}var n=e("../function/extend.js"),r=e("../function/get-dom-array.js");o.prototype.init=function(){this.power()},o.prototype.selectNothing=function(){this.itemsDom.forEach(function(e){e.checked=!1})},o.prototype.selectAll=function(){this.itemsDom.forEach(function(e){e.checked=!0})},o.prototype.selectReverse=function(){this.itemsDom.forEach(function(e){e.checked=!e.checked})},o.prototype.power=function(){var e=this;this.itemsDom.forEach(function(t){t.addEventListener("click",function(){var t=!0;e.itemsDom.forEach(function(e){0==e.checked&&(t=!1)}),e.opt.callback.itemsClick({isCheckedAll:t})})})},t.exports=o},{"../function/extend.js":2,"../function/get-dom-array.js":3}],2:[function(e,t,i){function o(e){var t=e||{};t.default=t.default||{},t.inherit=t.inherit||{},t.isDeep=0!=t.isDeep||t.isDeep;var i=Object.prototype.toString.call(t.default).slice(8,-1).toLowerCase();if(i==Object.prototype.toString.call(t.inherit).slice(8,-1).toLowerCase()&&t.isDeep)if("object"==i||"array"==i){for(var n in t.inherit)if(t.inherit.hasOwnProperty(n)){var r=Object.prototype.toString.call(t.default[n]).slice(8,-1).toLowerCase(),c=Object.prototype.toString.call(t.inherit[n]).slice(8,-1).toLowerCase();r==c&&t.isDeep?"object"==r?o({default:t.default[n],inherit:t.inherit[n]}):"array"==r?t.inherit[n].forEach(function(e,i){var r=Object.prototype.toString.call(t.default[n][i]).slice(8,-1).toLowerCase();Object.prototype.toString.call(t.inherit[n][i]).slice(8,-1).toLowerCase()==r&&t.isDeep&&"object"==r?o({default:t.default[n][i],inherit:t.inherit[n][i]}):t.default[n][i]=t.inherit[n][i]}):t.default[n]=t.inherit[n]:t.default[n]=t.inherit[n]}}else t.default=t.inherit;else t.default=t.inherit;return t.default}t.exports=o},{}],3:[function(e,t,i){function o(e){var t=n({default:{element:null},inherit:e}),i=[];return t.element&&("string"==Object.prototype.toString.call(t.element).slice(8,-1).toLowerCase()&&(i=[].slice.call(document.querySelectorAll(t.element))),1==t.element.nodeType&&(i=[t.element]),"htmlcollection"!=Object.prototype.toString.call(t.element).slice(8,-1).toLowerCase()&&"nodelist"!=Object.prototype.toString.call(t.element).slice(8,-1).toLowerCase()||(i=[].slice.call(t.element))),i}var n=e("../function/extend.js");t.exports=o},{"../function/extend.js":2}]},{},[1]);