"use strict";!function t(e,r,n){function u(i,a){if(!r[i]){if(!e[i]){var s="function"==typeof require&&require;if(!a&&s)return s(i,!0);if(o)return o(i,!0);throw new Error("Cannot find module '"+i+"'")}var f=r[i]={exports:{}};e[i][0].call(f.exports,function(t){var r=e[i][1][t];return u(r?r:t)},f,f.exports,t,e,r,n)}return r[i].exports}for(var o="function"==typeof require&&require,i=0;i<n.length;i++)u(n[i]);return u}({1:[function(t,e,r){function n(t){var e=t||{};e.elementName=e.elementName||"div",e.style=e.style||"",e.custom=e.custom||{},e.attribute=e.attribute||{};var r=document.createElement(e.elementName);e.style&&r.setAttribute("style",e.style);for(var n in e.custom)e.custom.hasOwnProperty(n)&&r.setAttribute("data-"+n,e.custom[n]);for(var u in e.attribute)e.attribute.hasOwnProperty(u)&&(r[u]=e.attribute[u]);return r}e.exports=n},{}]},{},[1]);