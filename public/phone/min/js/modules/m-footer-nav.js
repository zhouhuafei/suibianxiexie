"use strict";!function e(o,t,r){function i(s,m){if(!t[s]){if(!o[s]){var l="function"==typeof require&&require;if(!m&&l)return l(s,!0);if(n)return n(s,!0);throw new Error("Cannot find module '"+s+"'")}var a=t[s]={exports:{}};o[s][0].call(a.exports,function(e){var t=o[s][1][e];return i(t||e)},a,a.exports,e,o,t,r)}return t[s].exports}for(var n="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(e,o,t){var r=e("../function/create-element"),i=e("../tools/constructor-inherit"),n=e("../modules/m-super-type"),s=e("../tools/json-to-array"),m=i({superType:n,parameter:{callback:{},config:{},data:{}}});m.prototype.moduleDomCreate=function(){this.moduleDomClass="m-footer-nav";var e="";s({json:this.opts.data}).forEach(function(o){var t=o.value,r="";t.isHighlight&&(r="m-footer-nav-body-active");var i="";t.isShowMark&&(i='<div class="m-footer-nav-body-mark"></div>'),e+='\n            <a class="m-footer-nav-body '+r+'" href="'+t.link+'">\n                <div class="m-footer-nav-body-icon iconfont '+t.icon+'"></div>\n                <div class="m-footer-nav-body-txt">'+t.txt+"</div>\n                "+i+"\n            </a>\n        "}),this.moduleDom=r({style:this.opts.config.moduleDomStyle,custom:this.opts.config.moduleDomCustomAttr,attribute:{className:this.moduleDomClass,innerHTML:'<div class="m-footer-nav-wrap">'+e+"</div>"}})},m.prototype.power=function(){},o.exports=m},{"../function/create-element":2,"../modules/m-super-type":4,"../tools/constructor-inherit":5,"../tools/json-to-array":7}],2:[function(e,o,t){function r(e){var o=e||{};o.elementName=o.elementName||"div",o.style=o.style||"",o.custom=o.custom||{},o.attribute=o.attribute||{};var t=document.createElement(o.elementName);o.style&&t.setAttribute("style",o.style);for(var r in o.custom)o.custom.hasOwnProperty(r)&&t.setAttribute("data-"+r,o.custom[r]);for(var i in o.attribute)o.attribute.hasOwnProperty(i)&&(t[i]=o.attribute[i]);return t}o.exports=r},{}],3:[function(e,o,t){function r(e){var o=e||{},t=[],r=!!o.element&&o.element;return r&&("string"==Object.prototype.toString.call(r).slice(8,-1).toLowerCase()&&(t=[].slice.call(document.querySelectorAll(r))),1==r.nodeType&&(t=[r]),"htmlcollection"!=Object.prototype.toString.call(r).slice(8,-1).toLowerCase()&&"nodelist"!=Object.prototype.toString.call(r).slice(8,-1).toLowerCase()||(t=[].slice.call(r))),t}o.exports=r},{}],4:[function(e,o,t){function r(e){this.opts=i({defaults:{wrap:".g-wrap",callback:{moduleDomCreateBefore:function(e){},moduleDomCreateAfter:function(e){},moduleDomRenderBefore:function(e){},moduleDomRenderAfter:function(e){},moduleDomRemoveBefore:function(e){},moduleDomRemoveAfter:function(e){},moduleDomShowBefore:function(e){},moduleDomShowAfter:function(e){},moduleDomHideBefore:function(e){},moduleDomHideAfter:function(e){},wrapDomGetBefore:function(e){},wrapDomGetAfter:function(e){},wrapDomRemoveBefore:function(e){},wrapDomRemoveAfter:function(e){}},config:{moduleDomCustomAttr:{},moduleDomRenderMethod:{method:"appendChild",child:null},moduleDomStyle:"",moduleDomIsShow:!0,moduleDomIsClearTimer:!0},data:{}},inherits:e}),this.moduleDom=null,this.wrapDom=null,this.moduleDomTimer={},this.init()}var i=e("../tools/extend"),n=e("../function/create-element"),s=e("../function/get-dom-array");r.prototype.init=function(){this.render(),this.power()},r.prototype.render=function(){this.moduleDomRemove();var e=this.opts.callback;e.moduleDomCreateBefore(this),this.moduleDomCreate(),e.moduleDomCreateAfter(this),this.wrapDomGet(),this.moduleDomRender()},r.prototype.power=function(){},r.prototype.moduleDomCreate=function(){this.moduleDom=n({style:this.opts.config.moduleDomStyle,custom:this.opts.config.moduleDomCustomAttr,attribute:{className:"m-super-type",innerHTML:'\n                <div class="m-super-type-txt">周华飞爱侯丽杰,侯丽杰爱周华飞</div>\n            '}})},r.prototype.moduleDomRender=function(){var e=this.opts.callback,o=this.opts.config;if(o.moduleDomIsShow&&this.wrapDom){e.moduleDomRenderBefore(this);var t=o.moduleDomRenderMethod;if("insertBefore"==t.method){var r=s({element:t.child})[0];r?this.wrapDom.insertBefore(this.moduleDom,r):this.wrapDom.insertBefore(this.moduleDom,this.wrapDom.children[0])}"appendChild"==t.method&&this.wrapDom.appendChild(this.moduleDom),e.moduleDomRenderAfter(this)}},r.prototype.moduleDomRemove=function(){var e=this.opts.callback;this.moduleDom&&this.moduleDom.parentNode&&(e.moduleDomRemoveBefore(this),this.moduleDom.parentNode.removeChild(this.moduleDom),e.moduleDomRemoveAfter(this)),this.moduleDomClearTimer()},r.prototype.moduleDomClearTimer=function(){if(this.opts.config.moduleDomIsClearTimer)for(var e in this.moduleDomTimer)this.moduleDomTimer.hasOwnProperty(e)&&(clearInterval(this.moduleDomTimer[e]),clearTimeout(this.moduleDomTimer[e]))},r.prototype.moduleDomShow=function(){var e=this.opts.callback;e.moduleDomShowBefore(this),this.wrapDom&&(this.opts.config.moduleDomIsShow=!0,this.moduleDomRender()),e.moduleDomShowAfter(this)},r.prototype.moduleDomHide=function(){var e=this.opts.callback;this.moduleDom.parentNode&&(this.opts.config.moduleDomIsShow=!1,e.moduleDomHideBefore(this),this.moduleDom.parentNode.removeChild(this.moduleDom),e.moduleDomHideAfter(this))},r.prototype.wrapDomGet=function(){var e=this.opts.callback;e.wrapDomGetBefore(this),this.wrapDom=s({element:this.opts.wrap})[0],e.wrapDomGetAfter(this)},r.prototype.wrapDomRemove=function(){var e=this.opts.callback;this.moduleDomRemove(),this.wrapDom&&(e.wrapDomRemoveBefore(this),this.wrapDom.parentNode.removeChild(this.wrapDom),e.wrapDomRemoveAfter(this))},r.prototype.getModuleDomHtml=function(){return this.moduleDom.outerHTML},o.exports=r},{"../function/create-element":2,"../function/get-dom-array":3,"../tools/extend":6}],5:[function(e,o,t){function r(e){function o(e){this.opts=i({defaults:n({obj:s}),inherits:e}),t.superType.call(this,this.opts)}var t=i({defaults:{superType:null,parameter:{}},inherits:e}),r=t.superType,s=t.parameter;if("function"!=Object.prototype.toString.call(r).toLowerCase().slice(8,-1))return console.log("no find SuperType or SuperType error"),!1;for(var m in r.prototype)r.prototype.hasOwnProperty(m)&&(o.prototype[m]=r.prototype[m]);return o}var i=e("../tools/extend"),n=e("../tools/obj-remove-quote");o.exports=r},{"../tools/extend":6,"../tools/obj-remove-quote":8}],6:[function(e,o,t){function r(e){var o=e||{};o.defaults=o.defaults||{},o.inherits=o.inherits||{},o.isDeep=0!=o.isDeep||o.isDeep;var t=Object.prototype.toString.call(o.defaults).slice(8,-1).toLowerCase();if(t==Object.prototype.toString.call(o.inherits).slice(8,-1).toLowerCase()&&o.isDeep)if("object"==t||"array"==t){for(var i in o.inherits)if(o.inherits.hasOwnProperty(i)){var n=Object.prototype.toString.call(o.defaults[i]).slice(8,-1).toLowerCase(),s=Object.prototype.toString.call(o.inherits[i]).slice(8,-1).toLowerCase();n!=s||!o.isDeep||"object"!=n&&"array"!=n?o.defaults[i]=o.inherits[i]:r({defaults:o.defaults[i],inherits:o.inherits[i]})}}else o.defaults=o.inherits;else o.defaults=o.inherits;return o.defaults}o.exports=r},{}],7:[function(e,o,t){function r(e){var o=e||{},t=o.json||{},r=[];if(t instanceof Array)t.forEach(function(e,o){r.push([o,e])});else for(var i in t)t.hasOwnProperty(i)&&r.push({key:i,value:t[i]});return r}o.exports=r},{}],8:[function(e,o,t){function r(e){var o=e||{},t=o.obj,i=Object.prototype.toString.call(t).slice(8,-1).toLowerCase();if("object"!=i&&"array"!=i)return t;var n={};"array"==i&&(n=[]);for(var s in t)t.hasOwnProperty(s)&&(n[s]=r({obj:t[s]}));return n}o.exports=r},{}]},{},[1]);