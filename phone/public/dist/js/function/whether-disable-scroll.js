"use strict";!function e(t,n,r){function o(i,f){if(!n[i]){if(!t[i]){var a="function"==typeof require&&require;if(!f&&a)return a(i,!0);if(u)return u(i,!0);throw new Error("Cannot find module '"+i+"'")}var c=n[i]={exports:{}};t[i][0].call(c.exports,function(e){var n=t[i][1][e];return o(n?n:e)},c,c.exports,e,t,n,r)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(e,t,n){function r(){var e=document;return{stopPropagation:function(e){e.stopPropagation()},preventDefault:function(e){e.preventDefault()},returnFalse:function(e){e.preventDefault(),e.stopPropagation()},noScroll:function(){e.addEventListener("touchmove",this.preventDefault,!1),e.documentElement.style.overflow="hidden"},yesScroll:function(){e.removeEventListener("touchmove",this.preventDefault,!1),e.documentElement.style.overflow="auto"}}}t.exports=r},{}]},{},[1]);