"use strict";!function t(r,n,i){function e(a,s){if(!n[a]){if(!r[a]){var p="function"==typeof require&&require;if(!s&&p)return p(a,!0);if(o)return o(a,!0);throw new Error("Cannot find module '"+a+"'")}var c=n[a]={exports:{}};r[a][0].call(c.exports,function(t){var n=r[a][1][t];return e(n?n:t)},c,c.exports,t,r,n,i)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<i.length;a++)e(i[a]);return e}({1:[function(t,r,n){function i(t){this.opt=t||{},this.opt.allStar=this.opt.allStar||"5",this.opt.nowStar=this.opt.nowStar||"5",this.opt.isEvent=0!=this.opt.isEvent||this.opt.isEvent,this.opt.eventCallback=this.opt.eventCallback||function(){console.log("no find callback")},this.render()}i.prototype.init=function(){this.event()},i.prototype.event=function(){this.starClick()},i.prototype.starClick=function(){var t=this;this.opt.isEvent&&this.parentDom.addEventListener("click",function(r){var n=r.target;if(n.classList.contains("m-star")){for(var i=n.dataset.index,e=0;e<t.opt.allStar;e++)e<=i?t.opt.star[e].classList.add("m-star-active"):t.opt.star[e].classList.remove("m-star-active");t.opt.eventCallback({index:i})}})},i.prototype.renderParent=function(){this.parentDom=document.createElement("div"),this.parentDom.classList.add("m-star-main"),this.renderStar()},i.prototype.renderStar=function(){for(var t="",r=0;r<this.opt.allStar;r++){var n="";r<this.opt.nowStar&&(n="m-star-active"),t+='<div data-index="'+r+'" class="iconfont icon-xingping m-star '+n+'"></div>'}this.parentDom.innerHTML=t,this.opt.star=this.parentDom.children},i.prototype.render=function(){this.renderParent(),this.init()},r.exports=i},{}]},{},[1]);