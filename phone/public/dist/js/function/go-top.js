"use strict";!function r(e,n,t){function o(u,c){if(!n[u]){if(!e[u]){var a="function"==typeof require&&require;if(!c&&a)return a(u,!0);if(i)return i(u,!0);throw new Error("Cannot find module '"+u+"'")}var l=n[u]={exports:{}};e[u][0].call(l.exports,function(r){var n=e[u][1][r];return o(n?n:r)},l,l.exports,r,e,n,t)}return n[u].exports}for(var i="function"==typeof require&&require,u=0;u<t.length;u++)o(t[u]);return o}({1:[function(r,e,n){function t(r){var e=r||{},n=e.obj;if(!n)return console.log("parameter error"),!1;var t=document,o=6,i=t.documentElement.scrollTop||t.body.scrollTop,u=0,c=null,a=function r(){u=Math.ceil(i/o),i-=u,window.scrollTo(0,i),c=requestAnimationFrame(r),0==i&&cancelAnimationFrame(c)};n.addEventListener("click",function(r){r.stopPropagation(),r.preventDefault(),i=t.documentElement.scrollTop||t.body.scrollTop,requestAnimationFrame(a)}),t.addEventListener("touchstart",function(){cancelAnimationFrame(c)})}e.exports=t},{}]},{},[1]);