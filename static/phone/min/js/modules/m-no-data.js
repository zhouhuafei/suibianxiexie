"use strict";!function e(t,o,r){function i(s,m){if(!o[s]){if(!t[s]){var l="function"==typeof require&&require;if(!m&&l)return l(s,!0);if(n)return n(s,!0);throw new Error("Cannot find module '"+s+"'")}var u=o[s]={exports:{}};t[s][0].call(u.exports,function(e){var o=t[s][1][e];return i(o||e)},u,u.exports,e,t,o,r)}return o[s].exports}for(var n="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(e,t,o){var r=e("../function/create-element"),i=e("../tools/constructor-inherit"),n=e("../modules/m-super-type"),s=i({superType:n,parameter:{callback:{},config:{btn:{isShowIcon:!1}},data:{icon:"icon-meiyoushuju",txt:"没有数据",btn:{icon:"icon-shouye",txt:"回首页",link:"/phone/"}}}});s.prototype.moduleDomCreate=function(){var e=this.opts.data,t="";this.opts.config.btn.isShowIcon&&(t='<div class="g-btn-icon iconfont '+e.btn.icon+'"></div>'),this.moduleDom=r({style:this.opts.config.moduleStyle,custom:this.opts.config.moduleDomCustomAttr,attribute:{className:"m-no-data",innerHTML:'\n                <div class="m-no-data-icon iconfont '+e.icon+'"></div>\n                <div class="m-no-data-txt">'+e.txt+'</div>\n                <a class="m-no-data-btn g-btn g-btn-confirm" href="'+e.btn.link+'">\n                    '+t+'\n                    <div class="g-btn-txt">'+e.btn.txt+"</div>\n                </a>\n            "}})},s.prototype.power=function(){},t.exports=s},{"../function/create-element":2,"../modules/m-super-type":4,"../tools/constructor-inherit":5}],2:[function(e,t,o){function r(e){var t=e||{};t.elementName=t.elementName||"div",t.style=t.style||"",t.custom=t.custom||{},t.attribute=t.attribute||{};var o=document.createElement(t.elementName);t.style&&o.setAttribute("style",t.style);for(var r in t.custom)t.custom.hasOwnProperty(r)&&o.setAttribute("data-"+r,t.custom[r]);for(var i in t.attribute)t.attribute.hasOwnProperty(i)&&(o[i]=t.attribute[i]);return o}t.exports=r},{}],3:[function(e,t,o){function r(e){var t=e||{},o=[],r=!!t.element&&t.element;return r&&("string"==Object.prototype.toString.call(r).slice(8,-1).toLowerCase()&&(o=[].slice.call(document.querySelectorAll(r))),1==r.nodeType&&(o=[r]),"htmlcollection"!=Object.prototype.toString.call(r).slice(8,-1).toLowerCase()&&"nodelist"!=Object.prototype.toString.call(r).slice(8,-1).toLowerCase()||(o=[].slice.call(r))),o}t.exports=r},{}],4:[function(e,t,o){function r(e){this.opts=i({defaults:{wrap:".g-body",callback:{moduleDomCreateBefore:function(e){},moduleDomCreateAfter:function(e){},moduleDomRenderBefore:function(e){},moduleDomRenderAfter:function(e){},moduleDomRemoveBefore:function(e){},moduleDomRemoveAfter:function(e){},moduleDomShowBefore:function(e){},moduleDomShowAfter:function(e){},moduleDomHideBefore:function(e){},moduleDomHideAfter:function(e){},wrapDomGetBefore:function(e){},wrapDomGetAfter:function(e){},wrapDomRemoveBefore:function(e){},wrapDomRemoveAfter:function(e){}},config:{moduleDomCustomAttr:{},moduleDomRenderMethod:{method:"appendChild",child:null},moduleDomStyle:"",moduleDomIsShow:!0,moduleDomIsClearTimer:!0},data:{}},inherits:e}),this.moduleDom=null,this.wrapDom=null,this.moduleDomTimer={},this.init()}var i=e("../tools/extend"),n=e("../function/create-element"),s=e("../function/get-dom-array");r.prototype.init=function(){this.render(),this.power()},r.prototype.render=function(){this.moduleDomRemove();var e=this.opts.callback;e.moduleDomCreateBefore(this),this.moduleDomCreate(),e.moduleDomCreateAfter(this),this.wrapDomGet(),this.moduleDomRender()},r.prototype.power=function(){},r.prototype.moduleDomCreate=function(){this.moduleDom=n({style:this.opts.config.moduleDomStyle,custom:this.opts.config.moduleDomCustomAttr,attribute:{className:"m-super-type",innerHTML:'\n                <div class="m-super-type-txt">周华飞爱侯丽杰,侯丽杰爱周华飞</div>\n            '}})},r.prototype.moduleDomRender=function(){var e=this.opts.callback,t=this.opts.config;if(t.moduleDomIsShow&&this.wrapDom){e.moduleDomRenderBefore(this);var o=t.moduleDomRenderMethod;if("insertBefore"==o.method){var r=s({element:o.child})[0];r?this.wrapDom.insertBefore(this.moduleDom,r):this.wrapDom.insertBefore(this.moduleDom,this.wrapDom.children[0])}"appendChild"==o.method&&this.wrapDom.appendChild(this.moduleDom),e.moduleDomRenderAfter(this)}},r.prototype.moduleDomRemove=function(){var e=this.opts.callback;this.moduleDom&&this.moduleDom.parentNode&&(e.moduleDomRemoveBefore(this),this.moduleDom.parentNode.removeChild(this.moduleDom),e.moduleDomRemoveAfter(this)),this.moduleDomClearTimer()},r.prototype.moduleDomClearTimer=function(){if(this.opts.config.moduleDomIsClearTimer)for(var e in this.moduleDomTimer)this.moduleDomTimer.hasOwnProperty(e)&&(clearInterval(this.moduleDomTimer[e]),clearTimeout(this.moduleDomTimer[e]))},r.prototype.moduleDomShow=function(){var e=this.opts.callback;e.moduleDomShowBefore(this),this.wrapDom&&(this.opts.config.moduleDomIsShow=!0,this.moduleDomRender()),e.moduleDomShowAfter(this)},r.prototype.moduleDomHide=function(){var e=this.opts.callback;this.moduleDom.parentNode&&(this.opts.config.moduleDomIsShow=!1,e.moduleDomHideBefore(this),this.moduleDom.parentNode.removeChild(this.moduleDom),e.moduleDomHideAfter(this))},r.prototype.wrapDomGet=function(){var e=this.opts.callback;e.wrapDomGetBefore(this),this.wrapDom=s({element:this.opts.wrap})[0],e.wrapDomGetAfter(this)},r.prototype.wrapDomRemove=function(){var e=this.opts.callback;this.moduleDomRemove(),this.wrapDom&&(e.wrapDomRemoveBefore(this),this.wrapDom.parentNode.removeChild(this.wrapDom),e.wrapDomRemoveAfter(this))},r.prototype.getModuleDomHtml=function(){return this.moduleDom.outerHTML},t.exports=r},{"../function/create-element":2,"../function/get-dom-array":3,"../tools/extend":6}],5:[function(e,t,o){function r(e){function t(e){this.opts=i({defaults:n({obj:s}),inherits:e}),o.superType.call(this,this.opts)}var o=i({defaults:{superType:null,parameter:{}},inherits:e}),r=o.superType,s=o.parameter;if("function"!=Object.prototype.toString.call(r).toLowerCase().slice(8,-1))return console.log("no find SuperType or SuperType error"),!1;for(var m in r.prototype)r.prototype.hasOwnProperty(m)&&(t.prototype[m]=r.prototype[m]);return t}var i=e("../tools/extend"),n=e("../tools/obj-remove-quote");t.exports=r},{"../tools/extend":6,"../tools/obj-remove-quote":7}],6:[function(e,t,o){function r(e){var t=e||{};t.defaults=t.defaults||{},t.inherits=t.inherits||{},t.isDeep=0!=t.isDeep||t.isDeep;var o=Object.prototype.toString.call(t.defaults).slice(8,-1).toLowerCase();if(o==Object.prototype.toString.call(t.inherits).slice(8,-1).toLowerCase()&&t.isDeep)if("object"==o||"array"==o){for(var i in t.inherits)if(t.inherits.hasOwnProperty(i)){var n=Object.prototype.toString.call(t.defaults[i]).slice(8,-1).toLowerCase(),s=Object.prototype.toString.call(t.inherits[i]).slice(8,-1).toLowerCase();n!=s||!t.isDeep||"object"!=n&&"array"!=n?t.defaults[i]=t.inherits[i]:r({defaults:t.defaults[i],inherits:t.inherits[i]})}}else t.defaults=t.inherits;else t.defaults=t.inherits;return t.defaults}t.exports=r},{}],7:[function(e,t,o){function r(e){var t=e||{},o=t.obj,i=Object.prototype.toString.call(o).slice(8,-1).toLowerCase();if("object"!=i&&"array"!=i)return o;var n={};"array"==i&&(n=[]);for(var s in o)o.hasOwnProperty(s)&&(n[s]=r({obj:o[s]}));return n}t.exports=r},{}]},{},[1]);