"use strict";!function e(o,t,r){function i(m,s){if(!t[m]){if(!o[m]){var l="function"==typeof require&&require;if(!s&&l)return l(m,!0);if(n)return n(m,!0);throw new Error("Cannot find module '"+m+"'")}var u=t[m]={exports:{}};o[m][0].call(u.exports,function(e){var t=o[m][1][e];return i(t?t:e)},u,u.exports,e,o,t,r)}return t[m].exports}for(var n="function"==typeof require&&require,m=0;m<r.length;m++)i(r[m]);return i}({1:[function(e,o,t){var r=e("../function/create-element"),i=e("../tools/constructor-inherit"),n=e("../modules/m-super-type"),m=i({superType:n,parameter:{callback:{},config:{},data:{}}});m.prototype.moduleDomCreate=function(){this.moduleDom=r({style:this.opts.config.moduleDomStyle,custom:this.opts.config.moduleDomCustomAttr,attribute:{className:"m-sub-type",innerHTML:'\n                <div class="m-sub-type-txt">周华飞爱侯丽杰,侯丽杰爱周华飞</div>\n            '}})},m.prototype.power=function(){},o.exports=m},{"../function/create-element":2,"../modules/m-super-type":4,"../tools/constructor-inherit":5}],2:[function(e,o,t){function r(e){var o=e||{};o.elementName=o.elementName||"div",o.style=o.style||"",o.custom=o.custom||{},o.attribute=o.attribute||{};var t=document.createElement(o.elementName);o.style&&t.setAttribute("style",o.style);for(var r in o.custom)o.custom.hasOwnProperty(r)&&t.setAttribute("data-"+r,o.custom[r]);for(var i in o.attribute)o.attribute.hasOwnProperty(i)&&(t[i]=o.attribute[i]);return t}o.exports=r},{}],3:[function(e,o,t){function r(e){var o=e||{},t=[],r=!!o.element&&o.element;return r&&("string"==Object.prototype.toString.call(r).slice(8,-1).toLowerCase()&&(t=[].slice.call(document.querySelectorAll(r))),1==r.nodeType&&(t=[r]),"htmlcollection"!=Object.prototype.toString.call(r).slice(8,-1).toLowerCase()&&"nodelist"!=Object.prototype.toString.call(r).slice(8,-1).toLowerCase()||(t=[].slice.call(r))),t}o.exports=r},{}],4:[function(e,o,t){function r(e){this.opts=i({defaults:{wrap:".g-wrap",callback:{moduleDomCreateBefore:function(e){},moduleDomCreateAfter:function(e){},moduleDomRenderBefore:function(e){},moduleDomRenderAfter:function(e){},moduleDomRemoveBefore:function(e){},moduleDomRemoveAfter:function(e){},moduleDomShowBefore:function(e){},moduleDomShowAfter:function(e){},moduleDomHideBefore:function(e){},moduleDomHideAfter:function(e){},wrapDomCreateBefore:function(e){},wrapDomCreateAfter:function(e){},wrapDomRenderBefore:function(e){},wrapDomRenderAfter:function(e){},wrapDomRemoveBefore:function(e){},wrapDomRemoveAfter:function(e){}},config:{moduleDomCustomAttr:{},moduleDomRenderMethod:{method:"appendChild",child:null},moduleDomStyle:"",moduleDomIsShow:!0,moduleDomIsClearTimer:!0},data:{}},inherits:e}),this.moduleDom=null,this.wrapDom=null,this.moduleDomTimer={},this.init()}var i=e("../tools/extend"),n=e("../function/create-element"),m=e("../function/get-dom-array");r.prototype.init=function(){this.render(),this.power()},r.prototype.render=function(){this.moduleDomRender(),this.wrapDomRender()},r.prototype.power=function(){},r.prototype.moduleDomCreate=function(){this.moduleDom=n({style:this.opts.config.moduleDomStyle,custom:this.opts.config.moduleDomCustomAttr,attribute:{className:"m-super-type",innerHTML:'\n                <div class="m-super-type-txt">周华飞爱侯丽杰,侯丽杰爱周华飞</div>\n            '}})},r.prototype.moduleDomRender=function(){this.moduleDomRemove();var e=this.opts.callback;e.moduleDomCreateBefore(this),this.moduleDomCreate(),e.moduleDomCreateAfter(this)},r.prototype.moduleDomRemove=function(){var e=this.opts.callback;e.moduleDomRemoveBefore(this),this.moduleDom&&this.moduleDom.parentNode&&this.moduleDom.parentNode.removeChild(this.moduleDom),this.moduleDomClearTimer(),e.moduleDomRemoveAfter(this)},r.prototype.moduleDomClearTimer=function(){if(this.opts.config.moduleDomIsClearTimer)for(var e in this.moduleDomTimer)this.moduleDomTimer.hasOwnProperty(e)&&(clearInterval(this.moduleDomTimer[e]),clearTimeout(this.moduleDomTimer[e]))},r.prototype.moduleDomShow=function(){var e=this.opts.callback;e.moduleDomShowBefore(this),this.wrapDom&&(this.opts.config.moduleDomIsShow=!0,this.wrapDomRenderMethod()),e.moduleDomShowAfter(this)},r.prototype.moduleDomHide=function(){var e=this.opts.callback;e.moduleDomHideBefore(this),this.moduleDom.parentNode&&(this.moduleDom.parentNode.removeChild(this.moduleDom),this.opts.config.moduleDomIsShow=!1),e.moduleDomHideAfter(this)},r.prototype.wrapDomCreate=function(){this.wrapDom=m({element:this.opts.wrap})[0]},r.prototype.wrapDomRender=function(){var e=this.opts.callback;e.wrapDomCreateBefore(this),this.wrapDomCreate(),e.wrapDomCreateAfter(this),this.wrapDom&&(e.moduleDomRenderBefore(this),e.wrapDomRenderBefore(this),this.wrapDomRenderMethod(),e.wrapDomRenderAfter(this),e.moduleDomRenderAfter(this))},r.prototype.wrapDomRenderMethod=function(){var e=this.opts.config;if(e.moduleDomIsShow){var o=e.moduleDomRenderMethod;if("insertBefore"==o.method){var t=m({element:o.child})[0];t?this.wrapDom.insertBefore(this.moduleDom,t):this.wrapDom.insertBefore(this.moduleDom,this.wrapDom.children[0])}"appendChild"==o.method&&this.wrapDom.appendChild(this.moduleDom)}},r.prototype.wrapDomRemove=function(){var e=this.opts.callback;e.wrapDomRemoveBefore(this),this.moduleDomRemove(),this.wrapDom&&this.wrapDom.parentNode.removeChild(this.wrapDom),e.wrapDomRemoveAfter(this)},r.prototype.getModuleDomHtml=function(){return this.moduleDom.outerHTML},o.exports=r},{"../function/create-element":2,"../function/get-dom-array":3,"../tools/extend":6}],5:[function(e,o,t){function r(e){function o(e){this.opts=i({defaults:n({obj:m}),inherits:e}),t.superType.call(this,this.opts)}var t=i({defaults:{superType:null,parameter:{}},inherits:e}),r=t.superType,m=t.parameter;if("function"!=Object.prototype.toString.call(r).toLowerCase().slice(8,-1))return console.log("no find SuperType or SuperType error"),!1;for(var s in r.prototype)r.prototype.hasOwnProperty(s)&&(o.prototype[s]=r.prototype[s]);return o}var i=e("../tools/extend"),n=e("../tools/obj-remove-quote");o.exports=r},{"../tools/extend":6,"../tools/obj-remove-quote":7}],6:[function(e,o,t){function r(e){var o=e||{};o.defaults=o.defaults||{},o.inherits=o.inherits||{},o.isDeep=0!=o.isDeep||o.isDeep;var t=Object.prototype.toString.call(o.defaults).slice(8,-1).toLowerCase(),i=Object.prototype.toString.call(o.inherits).slice(8,-1).toLowerCase();if(t==i&&o.isDeep)if("object"==t||"array"==t){for(var n in o.inherits)if(o.inherits.hasOwnProperty(n)){var m=Object.prototype.toString.call(o.defaults[n]).slice(8,-1).toLowerCase(),s=Object.prototype.toString.call(o.inherits[n]).slice(8,-1).toLowerCase();m==s&&o.isDeep&&("object"==m||"array"==m)?r({defaults:o.defaults[n],inherits:o.inherits[n]}):o.defaults[n]=o.inherits[n]}}else o.defaults=o.inherits;else o.defaults=o.inherits;return o.defaults}o.exports=r},{}],7:[function(e,o,t){function r(e){var o=e||{},t=o.obj,i=Object.prototype.toString.call(t).slice(8,-1).toLowerCase();if("object"!=i&&"array"!=i)return t;var n={};"array"==i&&(n=[]);for(var m in t)t.hasOwnProperty(m)&&(n[m]=r({obj:t[m]}));return n}o.exports=r},{}]},{},[1]);