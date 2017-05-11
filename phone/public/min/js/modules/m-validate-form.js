"use strict";!function e(t,i,n){function s(a,r){if(!i[a]){if(!t[a]){var c="function"==typeof require&&require;if(!r&&c)return c(a,!0);if(o)return o(a,!0);throw new Error("Cannot find module '"+a+"'")}var l=i[a]={exports:{}};t[a][0].call(l.exports,function(e){var i=t[a][1][e];return s(i?i:e)},l,l.exports,e,t,i,n)}return i[a].exports}for(var o="function"==typeof require&&require,a=0;a<n.length;a++)s(n[a]);return s}({1:[function(e,t,i){function n(e){this.opts=e||{},this.element=o({element:this.opts.element})[0],this.hintClass=this.opts.hintClass||"m-validate-form-hint",this.eventsType=this.opts.eventsType||"blur",this.validateType=this.element.dataset.validate||"undefined",this.validateHintTxt=this.element.dataset.hint||"undefined",this.init()}var s=e("../tools/validate"),o=e("../function/get-dom-array");n.prototype.init=function(){this.render(),this.validateEvents()},n.prototype.render=function(){this.renderWrap(),this.renderHint()},n.prototype.renderWrap=function(){this.wrapDom=this.element.parentNode,this.wrapDom&&"static"==getComputedStyle(this.wrapDom).position&&(this.wrapDom.style.position="relative")},n.prototype.renderHint=function(){this.hintDom=document.createElement("span"),this.hintDom.classList.add(this.hintClass)},n.prototype.renderHintAdd=function(e){if(this.element.offsetWidth){var t=e||{};this.hintDom.innerHTML=t.txt||"本项必填",this.wrapDom.appendChild(this.hintDom)}},n.prototype.renderHintRemove=function(){var e=this.wrapDom.querySelector("."+this.hintClass);e&&this.wrapDom.removeChild(this.hintDom)},n.prototype.validateSave=function(){var e=this,t=e.validateType.split(" "),i=e.validateHintTxt.split(" "),n=this.element.value;this.isValidateSuccess=!0,t.forEach(function(t,o){"no-space"==t&&e.isValidateSuccess&&s.isSpace({value:n,success:function(){e.renderHintAdd({txt:i[o]}),e.isValidateSuccess=!1},fail:function(){e.renderHintRemove(),e.isValidateSuccess=!0}}),"no-zero"==t&&e.isValidateSuccess&&s.isZero({value:n,success:function(){e.renderHintAdd({txt:i[o]}),e.isValidateSuccess=!1},fail:function(){e.renderHintRemove(),e.isValidateSuccess=!0}}),"yes-integer"==t&&e.isValidateSuccess&&s.isInteger({value:n,success:function(){e.renderHintRemove(),e.isValidateSuccess=!0},fail:function(){e.renderHintAdd({txt:i[o]}),e.isValidateSuccess=!1}})})},n.prototype.validateEvents=function(){var e=this;e.element&&e.element.addEventListener(e.eventsType,function(){e.validateSave()})},t.exports=n},{"../function/get-dom-array":2,"../tools/validate":3}],2:[function(e,t,i){function n(e){var t=e||{},i=[],n=!!t.element&&t.element;return n&&("string"==Object.prototype.toString.call(n).slice(8,-1).toLowerCase()&&(i=[].slice.call(document.querySelectorAll(n))),1==n.nodeType&&(i=[n]),"htmlcollection"!=Object.prototype.toString.call(n).slice(8,-1).toLowerCase()&&"nodelist"!=Object.prototype.toString.call(n).slice(8,-1).toLowerCase()||(i=[].slice.call(n))),i}t.exports=n},{}],3:[function(e,t,i){var n={isSpace:function(e){var t=e||{},i=t.success||function(){console.log("no find success callback")},n=t.fail||function(){console.log("no find fail callback")},s=t.value||" ",o=s.trim(),a=!1;return""==o?(a=!0,i()):n(),a},isZero:function(e){var t=e||{},i=t.success||function(){console.log("no find success callback")},n=t.fail||function(){console.log("no find fail callback")},s=t.value||" ",o=s.trim(),a=!1;return 0==o?(a=!0,i()):n(),a},isInteger:function(e){var t=e||{},i=t.success||function(){console.log("no find success callback")},n=t.fail||function(){console.log("no find fail callback")},s=t.value||" ",o=s.trim(),a=/^\d+$/,r=!1;return a.test(o)?(r=!0,i()):n(),r},isReservedDecimal:function(e){var t=e||{},i=t.success||function(){console.log("no find success callback")},n=t.fail||function(){console.log("no find fail callback")},s=t.num||2,o=t.value||" ",a=o.trim(),r=new RegExp("^\\d+\\.\\d{"+s+"}$"),c=!1;return r.test(a)?(c=!0,i()):n(),c}};t.exports=n},{}]},{},[1]);