"use strict";!function e(t,o,r){function i(n,m){if(!o[n]){if(!t[n]){var a="function"==typeof require&&require;if(!m&&a)return a(n,!0);if(s)return s(n,!0);throw new Error("Cannot find module '"+n+"'")}var l=o[n]={exports:{}};t[n][0].call(l.exports,function(e){var o=t[n][1][e];return i(o?o:e)},l,l.exports,e,t,o,r)}return o[n].exports}for(var s="function"==typeof require&&require,n=0;n<r.length;n++)i(r[n]);return i}({1:[function(e,t,o){var r=e("../function/create-element"),i=e("../tools/constructor-inherit"),s=e("../modules/m-super-type"),n=i({superType:s,parameter:{callback:{click:function(){}},config:{isHand:!1,status:"on",txt:{on:"已开启",off:"已关闭"}},data:{}}});n.prototype.moduleDomCreate=function(){var e=this.opts.config;this.moduleDomActiveClass="m-radio-switch-active";var t="";"on"==e.status&&(t=this.moduleDomActiveClass),this.moduleDom=r({style:e.moduleStyle,custom:e.moduleDomCustomAttr,attribute:{className:"m-radio-switch "+t,innerHTML:'\n                <div class="m-radio-switch-wrap">\n                    <div class="m-radio-switch-round"></div>\n                </div>\n                <div class="m-radio-switch-txt">'+e.txt[e.status]+"</div>\n            "}})},n.prototype.power=function(){var e=this,t=this.opts.config;this.moduleDom.addEventListener("click",function(){t.isHand||(e.isOn()?e.off():e.on()),e.opts.callback.click({status:t.status})})},n.prototype.isOn=function(){return this.moduleDom.classList.contains(this.moduleDomActiveClass)},n.prototype.on=function(){var e=this.opts.config;this.isOn()||(this.moduleDom.classList.add(this.moduleDomActiveClass),e.status="on",this.moduleDom.querySelector(".m-radio-switch-txt").innerHTML=""+e.txt[e.status])},n.prototype.off=function(){var e=this.opts.config;this.isOn()&&(this.moduleDom.classList.remove(this.moduleDomActiveClass),e.status="off",this.moduleDom.querySelector(".m-radio-switch-txt").innerHTML=""+e.txt[e.status])},t.exports=n},{"../function/create-element":2,"../modules/m-super-type":4,"../tools/constructor-inherit":5}],2:[function(e,t,o){function r(e){var t=e||{};t.elementName=t.elementName||"div",t.style=t.style||"",t.custom=t.custom||{},t.attribute=t.attribute||{};var o=document.createElement(t.elementName);t.style&&o.setAttribute("style",t.style);for(var r in t.custom)t.custom.hasOwnProperty(r)&&o.setAttribute("data-"+r,t.custom[r]);for(var i in t.attribute)t.attribute.hasOwnProperty(i)&&(o[i]=t.attribute[i]);return o}t.exports=r},{}],3:[function(e,t,o){function r(e){var t=e||{},o=[],r=!!t.element&&t.element;return r&&("string"==Object.prototype.toString.call(r).slice(8,-1).toLowerCase()&&(o=[].slice.call(document.querySelectorAll(r))),1==r.nodeType&&(o=[r]),"htmlcollection"!=Object.prototype.toString.call(r).slice(8,-1).toLowerCase()&&"nodelist"!=Object.prototype.toString.call(r).slice(8,-1).toLowerCase()||(o=[].slice.call(r))),o}t.exports=r},{}],4:[function(e,t,o){function r(e){this.opts=i({defaults:{wrap:".g-wrap",callback:{moduleDomCreateBefore:function(e){},moduleDomCreateAfter:function(e){},moduleDomRenderBefore:function(e){},moduleDomRenderAfter:function(e){},moduleDomRemoveBefore:function(e){},moduleDomRemoveAfter:function(e){},moduleDomShowBefore:function(e){},moduleDomShowAfter:function(e){},moduleDomHideBefore:function(e){},moduleDomHideAfter:function(e){},wrapDomCreateBefore:function(e){},wrapDomCreateAfter:function(e){},wrapDomRenderBefore:function(e){},wrapDomRenderAfter:function(e){},wrapDomRemoveBefore:function(e){},wrapDomRemoveAfter:function(e){}},config:{moduleDomCustomAttr:{},moduleDomRenderMethod:{method:"appendChild",child:null},moduleDomStyle:"",moduleDomIsShow:!0,moduleDomIsClearTimer:!0},data:{}},inherits:e}),this.moduleDom=null,this.wrapDom=null,this.moduleDomTimer={},this.init()}var i=e("../tools/extend"),s=e("../function/create-element"),n=e("../function/get-dom-array");r.prototype.init=function(){this.render(),this.power()},r.prototype.render=function(){this.moduleDomRender(),this.wrapDomRender()},r.prototype.power=function(){},r.prototype.moduleDomCreate=function(){this.moduleDom=s({style:this.opts.config.moduleDomStyle,custom:this.opts.config.moduleDomCustomAttr,attribute:{className:"m-super-type",innerHTML:'\n                <div class="m-super-type-txt">周华飞爱侯丽杰,侯丽杰爱周华飞</div>\n            '}})},r.prototype.moduleDomRender=function(){this.moduleDomRemove();var e=this.opts.callback;e.moduleDomCreateBefore(this),this.moduleDomCreate(),e.moduleDomCreateAfter(this)},r.prototype.moduleDomRemove=function(){var e=this.opts.callback;e.moduleDomRemoveBefore(this),this.moduleDom&&this.moduleDom.parentNode&&this.moduleDom.parentNode.removeChild(this.moduleDom),this.moduleDomClearTimer(),e.moduleDomRemoveAfter(this)},r.prototype.moduleDomClearTimer=function(){if(this.opts.config.moduleDomIsClearTimer)for(var e in this.moduleDomTimer)this.moduleDomTimer.hasOwnProperty(e)&&(clearInterval(this.moduleDomTimer[e]),clearTimeout(this.moduleDomTimer[e]))},r.prototype.moduleDomShow=function(){var e=this.opts.callback;e.moduleDomShowBefore(this),this.wrapDom&&(this.opts.config.moduleDomIsShow=!0,this.wrapDomRenderMethod()),e.moduleDomShowAfter(this)},r.prototype.moduleDomHide=function(){var e=this.opts.callback;e.moduleDomHideBefore(this),this.moduleDom.parentNode&&(this.moduleDom.parentNode.removeChild(this.moduleDom),this.opts.config.moduleDomIsShow=!1),e.moduleDomHideAfter(this)},r.prototype.wrapDomCreate=function(){this.wrapDom=n({element:this.opts.wrap})[0]},r.prototype.wrapDomRender=function(){var e=this.opts.callback;e.wrapDomCreateBefore(this),this.wrapDomCreate(),e.wrapDomCreateAfter(this),this.wrapDom&&(e.moduleDomRenderBefore(this),e.wrapDomRenderBefore(this),this.wrapDomRenderMethod(),e.wrapDomRenderAfter(this),e.moduleDomRenderAfter(this))},r.prototype.wrapDomRenderMethod=function(){var e=this.opts.config;if(e.moduleDomIsShow){var t=e.moduleDomRenderMethod;if("insertBefore"==t.method){var o=n({element:t.child})[0];o?this.wrapDom.insertBefore(this.moduleDom,o):this.wrapDom.insertBefore(this.moduleDom,this.wrapDom.children[0])}"appendChild"==t.method&&this.wrapDom.appendChild(this.moduleDom)}},r.prototype.wrapDomRemove=function(){var e=this.opts.callback;e.wrapDomRemoveBefore(this),this.moduleDomRemove(),this.wrapDom&&this.wrapDom.parentNode.removeChild(this.wrapDom),e.wrapDomRemoveAfter(this)},r.prototype.getModuleDomHtml=function(){return this.moduleDom.outerHTML},t.exports=r},{"../function/create-element":2,"../function/get-dom-array":3,"../tools/extend":6}],5:[function(e,t,o){function r(e){function t(e){this.opts=i({defaults:s({obj:n}),inherits:e}),o.superType.call(this,this.opts)}var o=i({defaults:{superType:null,parameter:{}},inherits:e}),r=o.superType,n=o.parameter;if("function"!=Object.prototype.toString.call(r).toLowerCase().slice(8,-1))return console.log("no find SuperType or SuperType error"),!1;for(var m in r.prototype)r.prototype.hasOwnProperty(m)&&(t.prototype[m]=r.prototype[m]);return t}var i=e("../tools/extend"),s=e("../tools/obj-remove-quote");t.exports=r},{"../tools/extend":6,"../tools/obj-remove-quote":7}],6:[function(e,t,o){function r(e){var t=e||{};t.defaults=t.defaults||{},t.inherits=t.inherits||{},t.isDeep=0!=t.isDeep||t.isDeep;var o=Object.prototype.toString.call(t.defaults).slice(8,-1).toLowerCase(),i=Object.prototype.toString.call(t.inherits).slice(8,-1).toLowerCase();if(o==i&&t.isDeep)if("object"==o||"array"==o){for(var s in t.inherits)if(t.inherits.hasOwnProperty(s)){var n=Object.prototype.toString.call(t.defaults[s]).slice(8,-1).toLowerCase(),m=Object.prototype.toString.call(t.inherits[s]).slice(8,-1).toLowerCase();n==m&&t.isDeep&&("object"==n||"array"==n)?r({defaults:t.defaults[s],inherits:t.inherits[s]}):t.defaults[s]=t.inherits[s]}}else t.defaults=t.inherits;else t.defaults=t.inherits;return t.defaults}t.exports=r},{}],7:[function(e,t,o){function r(e){var t=e||{},o=t.obj,i=Object.prototype.toString.call(o).slice(8,-1).toLowerCase();if("object"!=i&&"array"!=i)return o;var s={};"array"==i&&(s=[]);for(var n in o)o.hasOwnProperty(n)&&(s[n]=r({obj:o[n]}));return s}t.exports=r},{}]},{},[1]);