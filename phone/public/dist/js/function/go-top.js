"use strict";!function r(e,n,t){function o(u,c){if(!n[u]){if(!e[u]){var a="function"==typeof require&&require;if(!c&&a)return a(u,!0);if(i)return i(u,!0);throw new Error("Cannot find module '"+u+"'")}var l=n[u]={exports:{}};e[u][0].call(l.exports,function(r){var n=e[u][1][r];return o(n?n:r)},l,l.exports,r,e,n,t)}return n[u].exports}for(var i="function"==typeof require&&require,u=0;u<t.length;u++)o(t[u]);return o}({1:[function(r,e,n){function t(r){var e=r||{},n=e.obj;if(!n)return console.log("parameter error"),!1;var t=document,o=t.documentElement.scrollTop||t.body.scrollTop,i=0,u=null,c=function r(){i=Math.ceil(o/6),o-=i,window.scrollTo(0,o),u=requestAnimationFrame(r),0==o&&cancelAnimationFrame(u)};n.addEventListener("click",function(r){r.stopPropagation(),r.preventDefault(),o=t.documentElement.scrollTop||t.body.scrollTop,requestAnimationFrame(c)}),t.addEventListener("touchstart",function(){cancelAnimationFrame(u)})}e.exports=t},{}]},{},[1]);