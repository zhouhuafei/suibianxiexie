"use strict";!function r(e,n,o){function t(s,u){if(!n[s]){if(!e[s]){var a="function"==typeof require&&require;if(!u&&a)return a(s,!0);if(f)return f(s,!0);throw new Error("Cannot find module '"+s+"'")}var c=n[s]={exports:{}};e[s][0].call(c.exports,function(r){var n=e[s][1][r];return t(n?n:r)},c,c.exports,r,e,n,o)}return n[s].exports}for(var f="function"==typeof require&&require,s=0;s<o.length;s++)t(o[s]);return t}({1:[function(r,e,n){function o(r){var e=r||{},n=e.seconds,o=e.runCallback,t=e.overCallback,f=function(r){var e=r.seconds,n=Math.floor(e/3600/24),o=Math.floor(e/3600%24),t=Math.floor(e%3600/60),f=Math.floor(e%60);return{d:n,h:o,m:t,s:f,a:e}};if(n<=0)n=0,o&&o(f({seconds:n})),t&&t();else{o&&o(f({seconds:n}));var s=setInterval(function(){n--,o&&o(f({seconds:n})),n<0&&(n=0,clearInterval(s),o&&o(f({seconds:n})),t&&t())},1e3)}}e.exports=o},{}]},{},[1]);