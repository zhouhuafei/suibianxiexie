"use strict";!function e(t,r,o){function n(l,c){if(!r[l]){if(!t[l]){var u="function"==typeof require&&require;if(!c&&u)return u(l,!0);if(i)return i(l,!0);throw new Error("Cannot find module '"+l+"'")}var s=r[l]={exports:{}};t[l][0].call(s.exports,function(e){var r=t[l][1][e];return n(r?r:e)},s,s.exports,e,t,r,o)}return r[l].exports}for(var i="function"==typeof require&&require,l=0;l<o.length;l++)n(o[l]);return n}({1:[function(e,t,r){function o(e){var t=e||{},r=[],o=!!t.element&&t.element;return o&&("string"==Object.prototype.toString.call(o).slice(8,-1).toLowerCase()&&(r=[].slice.call(document.querySelectorAll(o))),1==o.nodeType&&(r=[o]),"htmlcollection"!=Object.prototype.toString.call(o).slice(8,-1).toLowerCase()&&"nodelist"!=Object.prototype.toString.call(o).slice(8,-1).toLowerCase()||(r=[].slice.call(o))),r}t.exports=o},{}]},{},[1]);