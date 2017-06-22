"use strict";function _classCallCheck(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,o){for(var t=0;t<o.length;t++){var r=o[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(o,t,r){return t&&e(o.prototype,t),r&&e(o,r),o}}();!function e(o,t,r){function i(m,l){if(!t[m]){if(!o[m]){var s="function"==typeof require&&require;if(!l&&s)return s(m,!0);if(n)return n(m,!0);throw new Error("Cannot find module '"+m+"'")}var u=t[m]={exports:{}};o[m][0].call(u.exports,function(e){var t=o[m][1][e];return i(t||e)},u,u.exports,e,o,t,r)}return t[m].exports}for(var n="function"==typeof require&&require,m=0;m<r.length;m++)i(r[m]);return i}({1:[function(e,o,t){var r=e("../tools/extend"),i=e("../function/create-element"),n=e("../function/get-dom-array"),m=function(){function e(o){_classCallCheck(this,e),this.opts=r({defaults:{wrap:".g-body",callback:{moduleDomCreateBefore:function(e){},moduleDomCreateAfter:function(e){},moduleDomRenderBefore:function(e){},moduleDomRenderAfter:function(e){},moduleDomRemoveBefore:function(e){},moduleDomRemoveAfter:function(e){},moduleDomShowBefore:function(e){},moduleDomShowAfter:function(e){},moduleDomHideBefore:function(e){},moduleDomHideAfter:function(e){},wrapDomGetBefore:function(e){},wrapDomGetAfter:function(e){},wrapDomRemoveBefore:function(e){},wrapDomRemoveAfter:function(e){}},config:{moduleDomCustomAttr:{},moduleDomRenderMethod:{method:"appendChild",child:null},moduleDomStyle:"",moduleDomIsShow:!0,moduleDomIsClearTimer:!0},data:{}},inherits:o}),this.moduleDom=null,this.wrapDom=null,this.moduleDomTimer={}}return _createClass(e,[{key:"init",value:function(){this.render(),this.power()}},{key:"render",value:function(){this.moduleDomRemove();var e=this.opts.callback;e.moduleDomCreateBefore(this),this.moduleDomCreate(),e.moduleDomCreateAfter(this),this.wrapDomGet(),this.moduleDomRender()}},{key:"power",value:function(){}},{key:"moduleDomCreate",value:function(){this.moduleDom=i({style:this.opts.config.moduleDomStyle,custom:this.opts.config.moduleDomCustomAttr,attribute:{className:"m-super-type-es6",innerHTML:'\n                    <div class="m-super-type-es6-txt">周华飞爱侯丽杰,侯丽杰爱周华飞</div>\n                '}})}},{key:"moduleDomRender",value:function(){var e=this.opts.callback,o=this.opts.config;if(o.moduleDomIsShow&&this.wrapDom){e.moduleDomRenderBefore(this);var t=o.moduleDomRenderMethod;if("insertBefore"==t.method){var r=n({element:t.child})[0];r?this.wrapDom.insertBefore(this.moduleDom,r):this.wrapDom.insertBefore(this.moduleDom,this.wrapDom.children[0])}"appendChild"==t.method&&this.wrapDom.appendChild(this.moduleDom),e.moduleDomRenderAfter(this)}}},{key:"moduleDomRemove",value:function(){var e=this.opts.callback;this.moduleDom&&this.moduleDom.parentNode&&(e.moduleDomRemoveBefore(this),this.moduleDom.parentNode.removeChild(this.moduleDom),e.moduleDomRemoveAfter(this)),this.moduleDomClearTimer()}},{key:"moduleDomClearTimer",value:function(){if(this.opts.config.moduleDomIsClearTimer)for(var e in this.moduleDomTimer)this.moduleDomTimer.hasOwnProperty(e)&&(clearInterval(this.moduleDomTimer[e]),clearTimeout(this.moduleDomTimer[e]))}},{key:"moduleDomShow",value:function(){var e=this.opts.callback;e.moduleDomShowBefore(this),this.wrapDom&&(this.opts.config.moduleDomIsShow=!0,this.moduleDomRender()),e.moduleDomShowAfter(this)}},{key:"moduleDomHide",value:function(){var e=this.opts.callback;this.moduleDom.parentNode&&(this.opts.config.moduleDomIsShow=!1,e.moduleDomHideBefore(this),this.moduleDom.parentNode.removeChild(this.moduleDom),e.moduleDomHideAfter(this))}},{key:"wrapDomGet",value:function(){var e=this.opts.callback;e.wrapDomGetBefore(this),this.wrapDom=n({element:this.opts.wrap})[0],e.wrapDomGetAfter(this)}},{key:"wrapDomRemove",value:function(){var e=this.opts.callback;this.moduleDomRemove(),this.wrapDom&&(e.wrapDomRemoveBefore(this),this.wrapDom.parentNode.removeChild(this.wrapDom),e.wrapDomRemoveAfter(this))}},{key:"getModuleDomHtml",value:function(){return this.moduleDom.outerHTML}}]),e}();o.exports=m},{"../function/create-element":2,"../function/get-dom-array":3,"../tools/extend":4}],2:[function(e,o,t){function r(e){var o=e||{};o.elementName=o.elementName||"div",o.style=o.style||"",o.custom=o.custom||{},o.attribute=o.attribute||{};var t=document.createElement(o.elementName);o.style&&t.setAttribute("style",o.style);for(var r in o.custom)o.custom.hasOwnProperty(r)&&t.setAttribute("data-"+r,o.custom[r]);for(var i in o.attribute)o.attribute.hasOwnProperty(i)&&(t[i]=o.attribute[i]);return t}o.exports=r},{}],3:[function(e,o,t){function r(e){var o=e||{},t=[],r=!!o.element&&o.element;return r&&("string"==Object.prototype.toString.call(r).slice(8,-1).toLowerCase()&&(t=[].slice.call(document.querySelectorAll(r))),1==r.nodeType&&(t=[r]),"htmlcollection"!=Object.prototype.toString.call(r).slice(8,-1).toLowerCase()&&"nodelist"!=Object.prototype.toString.call(r).slice(8,-1).toLowerCase()||(t=[].slice.call(r))),t}o.exports=r},{}],4:[function(e,o,t){function r(e){var o=e||{};o.defaults=o.defaults||{},o.inherits=o.inherits||{},o.isDeep=0!=o.isDeep||o.isDeep;var t=Object.prototype.toString.call(o.defaults).slice(8,-1).toLowerCase();if(t==Object.prototype.toString.call(o.inherits).slice(8,-1).toLowerCase()&&o.isDeep)if("object"==t||"array"==t){for(var i in o.inherits)if(o.inherits.hasOwnProperty(i)){var n=Object.prototype.toString.call(o.defaults[i]).slice(8,-1).toLowerCase(),m=Object.prototype.toString.call(o.inherits[i]).slice(8,-1).toLowerCase();n!=m||!o.isDeep||"object"!=n&&"array"!=n?o.defaults[i]=o.inherits[i]:r({defaults:o.defaults[i],inherits:o.inherits[i]})}}else o.defaults=o.inherits;else o.defaults=o.inherits;return o.defaults}o.exports=r},{}]},{},[1]);