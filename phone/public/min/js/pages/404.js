"use strict";!function t(e,o,r){function i(s,m){if(!o[s]){if(!e[s]){var a="function"==typeof require&&require;if(!m&&a)return a(s,!0);if(n)return n(s,!0);throw new Error("Cannot find module '"+s+"'")}var l=o[s]={exports:{}};e[s][0].call(l.exports,function(t){var o=e[s][1][t];return i(o?o:t)},l,l.exports,t,e,o,r)}return o[s].exports}for(var n="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(t,e,o){window.addEventListener("load",function(){setTimeout(function(){!function(){var e=t("../modules/m-no-data");new e({data:{txt:"404 - Not Find"}})}(),t("../commons/common")},0)})},{"../commons/common":2,"../modules/m-no-data":9}],2:[function(t,e,o){!function(){if(pageInfo&&pageInfo.config&&pageInfo.config.isShowCopyright){var e=t("../modules/m-copyright");new e}}(),function(){if(pageInfo&&pageInfo.config&&pageInfo.config.isShowFooterNav){var e=t("../modules/m-footer-nav");new e}}(),function(){var e=t("../modules/m-lazy-load");new e}()},{"../modules/m-copyright":6,"../modules/m-footer-nav":7,"../modules/m-lazy-load":8}],3:[function(t,e,o){function r(t){var e=t||{};e.elementName=e.elementName||"div",e.style=e.style||"",e.custom=e.custom||{},e.attribute=e.attribute||{};var o=document.createElement(e.elementName);e.style&&o.setAttribute("style",e.style);for(var r in e.custom)e.custom.hasOwnProperty(r)&&o.setAttribute("data-"+r,e.custom[r]);for(var i in e.attribute)e.attribute.hasOwnProperty(i)&&(o[i]=e.attribute[i]);return o}e.exports=r},{}],4:[function(t,e,o){function r(t){var e=t||{},o=[],r=!!e.element&&e.element;return r&&("string"==Object.prototype.toString.call(r).slice(8,-1).toLowerCase()&&(o=[].slice.call(document.querySelectorAll(r))),1==r.nodeType&&(o=[r]),"htmlcollection"!=Object.prototype.toString.call(r).slice(8,-1).toLowerCase()&&"nodelist"!=Object.prototype.toString.call(r).slice(8,-1).toLowerCase()||(o=[].slice.call(r))),o}e.exports=r},{}],5:[function(t,e,o){function r(t){for(var e=i({defaults:{element:null},inherits:t}),o=0,r=0,s=n({element:e.element})[0];s;)o+=s.offsetTop,r+=s.offsetLeft,s=s.offsetParent;return{top:o,left:r}}var i=t("../tools/extend"),n=t("../function/get-dom-array");e.exports=r},{"../function/get-dom-array":4,"../tools/extend":12}],6:[function(t,e,o){var r=t("../function/create-element"),i=t("../tools/constructor-inherit"),n=t("../modules/m-super-type"),s=i({superType:n,parameter:{callback:{},config:{},data:{}}});s.prototype.moduleDomCreate=function(){this.moduleDom=r({style:this.opts.config.moduleDomStyle,custom:this.opts.config.moduleDomCustomAttr,attribute:{className:"m-copyright",innerHTML:'\n                <div class="m-copyright-icon iconfont icon-banquan"></div>\n                <div class="m-copyright-txt">版权信息哟</div>\n            '}})},s.prototype.power=function(){},e.exports=s},{"../function/create-element":3,"../modules/m-super-type":10,"../tools/constructor-inherit":11}],7:[function(t,e,o){var r=t("../function/create-element"),i=t("../tools/constructor-inherit"),n=t("../modules/m-super-type"),s=i({superType:n,parameter:{callback:{},config:{},data:{items:[{link:"/",icon:"icon-shouye",txt:"首页",isHighlight:!1,isShowMark:!1},{link:"/dev-global",icon:"icon-kaifa",txt:"g-global",isHighlight:!1,isShowMark:!1},{link:"/dev-module",icon:"icon-kaifa",txt:"m-module",isHighlight:!0,isShowMark:!0},{link:"/dev-word",icon:"icon-kaifa",txt:"标准词汇",isHighlight:!1,isShowMark:!1},{link:"/mine",icon:"icon-wode",txt:"我的",isHighlight:!1,isShowMark:!1}]}}});s.prototype.moduleDomCreate=function(){this.moduleDomClass="m-footer-nav";var t="";this.opts.data.items.forEach(function(e){var o="";e.isHighlight&&(o="m-footer-nav-body-active");var r="";e.isShowMark&&(r='<div class="m-footer-nav-body-mark"></div>'),t+='\n            <a class="m-footer-nav-body '+o+'" href="'+e.link+'">\n                <div class="m-footer-nav-body-icon iconfont '+e.icon+'"></div>\n                <div class="m-footer-nav-body-txt">'+e.txt+"</div>\n                "+r+"\n            </a>\n        "}),this.moduleDom=r({style:this.opts.config.moduleDomStyle,custom:this.opts.config.moduleDomCustomAttr,attribute:{className:this.moduleDomClass,innerHTML:'<div class="m-footer-nav-wrap">'+t+"</div>"}})},s.prototype.power=function(){},e.exports=s},{"../function/create-element":3,"../modules/m-super-type":10,"../tools/constructor-inherit":11}],8:[function(t,e,o){function r(t){this.opts=i({defaults:{element:".m-lazy-load",srcAttr:"data-src",moreHeight:0,interval:80},inherits:t}),this.clientHeight=document.documentElement.clientHeight,this.init()}var i=t("../tools/extend"),n=t("../function/offset"),s=t("../function/get-dom-array");r.prototype.init=function(){this.render(),this.power()},r.prototype.render=function(){var t=this,e=this.opts.moreHeight,o=document.documentElement.scrollTop||document.body.scrollTop,r=o-e,i=this.clientHeight+r+e,m="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUCB1jYAACAAAFAAGNu5vzAAAAAElFTkSuQmCC",a=s({element:this.opts.element});a.forEach(function(t){"img"==t.tagName.toLowerCase()&&(t.getAttribute("src")||(t.src=m),t.setAttribute("height","100%"),t.setAttribute("width","100%"))}),a.forEach(function(e){if(e.offsetWidth){var o=n({element:e}).top,s=o+e.offsetHeight;s>=r&&o<=i&&("img"==e.tagName.toLowerCase()?(e.getAttribute(t.opts.srcAttr)&&(e.src=e.getAttribute(t.opts.srcAttr)),e.removeAttribute("height"),e.removeAttribute("width")):e.getAttribute(t.opts.srcAttr)&&(e.style.backgroundImage="url("+e.getAttribute(t.opts.srcAttr)+")"),e.classList.remove("m-lazy-load"),e.classList.add("m-lazy-load-active"))}})},r.prototype.power=function(){var t=this,e=null;window.addEventListener("scroll",function(){clearTimeout(e),e=setTimeout(function(){t.render()},t.opts.interval)})},e.exports=r},{"../function/get-dom-array":4,"../function/offset":5,"../tools/extend":12}],9:[function(t,e,o){var r=t("../function/create-element"),i=t("../tools/constructor-inherit"),n=t("../modules/m-super-type"),s=i({superType:n,parameter:{callback:{},config:{btn:{isShowIcon:!1}},data:{icon:"icon-meiyoushuju",txt:"没有数据",btn:{icon:"icon-shouye",txt:"回首页",link:"/"}}}});s.prototype.moduleDomCreate=function(){var t=this.opts.data,e="";this.opts.config.btn.isShowIcon&&(e='<div class="g-btn-icon iconfont '+t.btn.icon+'"></div>'),this.moduleDom=r({style:this.opts.config.moduleStyle,custom:this.opts.config.moduleDomCustomAttr,attribute:{className:"m-no-data",innerHTML:'\n                <div class="m-no-data-icon iconfont '+t.icon+'"></div>\n                <div class="m-no-data-txt">'+t.txt+'</div>\n                <a class="m-no-data-btn g-btn g-btn-confirm" href="'+t.btn.link+'">\n                    '+e+'\n                    <div class="g-btn-txt">'+t.btn.txt+"</div>\n                </a>\n            "}})},s.prototype.power=function(){},e.exports=s},{"../function/create-element":3,"../modules/m-super-type":10,"../tools/constructor-inherit":11}],10:[function(t,e,o){function r(t){this.opts=i({defaults:{wrap:".g-wrap",callback:{moduleDomCreateBefore:function(t){},moduleDomCreateAfter:function(t){},moduleDomRenderBefore:function(t){},moduleDomRenderAfter:function(t){},moduleDomRemoveBefore:function(t){},moduleDomRemoveAfter:function(t){},moduleDomShowBefore:function(t){},moduleDomShowAfter:function(t){},moduleDomHideBefore:function(t){},moduleDomHideAfter:function(t){},wrapDomCreateBefore:function(t){},wrapDomCreateAfter:function(t){},wrapDomRenderBefore:function(t){},wrapDomRenderAfter:function(t){},wrapDomRemoveBefore:function(t){},wrapDomRemoveAfter:function(t){}},config:{moduleDomCustomAttr:{},moduleDomRenderMethod:{method:"appendChild",child:null},moduleDomStyle:"",moduleDomIsShow:!0,moduleDomIsClearTimer:!0},data:{}},inherits:t}),this.moduleDom=null,this.wrapDom=null,this.moduleDomTimer={},this.init()}var i=t("../tools/extend"),n=t("../function/create-element"),s=t("../function/get-dom-array");r.prototype.init=function(){this.render(),this.power()},r.prototype.render=function(){this.moduleDomRender(),this.wrapDomRender()},r.prototype.power=function(){},r.prototype.moduleDomCreate=function(){this.moduleDom=n({style:this.opts.config.moduleDomStyle,custom:this.opts.config.moduleDomCustomAttr,attribute:{className:"m-super-type",innerHTML:'\n                <div class="m-super-type-txt">周华飞爱侯丽杰,侯丽杰爱周华飞</div>\n            '}})},r.prototype.moduleDomRender=function(){this.moduleDomRemove();var t=this.opts.callback;t.moduleDomCreateBefore(this),this.moduleDomCreate(),t.moduleDomCreateAfter(this)},r.prototype.moduleDomRemove=function(){var t=this.opts.callback;t.moduleDomRemoveBefore(this),this.moduleDom&&this.moduleDom.parentNode&&this.moduleDom.parentNode.removeChild(this.moduleDom),this.moduleDomClearTimer(),t.moduleDomRemoveAfter(this)},r.prototype.moduleDomClearTimer=function(){if(this.opts.config.moduleDomIsClearTimer)for(var t in this.moduleDomTimer)this.moduleDomTimer.hasOwnProperty(t)&&(clearInterval(this.moduleDomTimer[t]),clearTimeout(this.moduleDomTimer[t]))},r.prototype.moduleDomShow=function(){var t=this.opts.callback;t.moduleDomShowBefore(this),this.wrapDom&&(this.opts.config.moduleDomIsShow=!0,this.wrapDomRenderMethod()),t.moduleDomShowAfter(this)},r.prototype.moduleDomHide=function(){var t=this.opts.callback;t.moduleDomHideBefore(this),this.moduleDom.parentNode&&(this.moduleDom.parentNode.removeChild(this.moduleDom),this.opts.config.moduleDomIsShow=!1),t.moduleDomHideAfter(this)},r.prototype.wrapDomCreate=function(){this.wrapDom=s({element:this.opts.wrap})[0]},r.prototype.wrapDomRender=function(){var t=this.opts.callback;t.wrapDomCreateBefore(this),this.wrapDomCreate(),t.wrapDomCreateAfter(this),this.wrapDom&&(t.moduleDomRenderBefore(this),t.wrapDomRenderBefore(this),this.wrapDomRenderMethod(),t.wrapDomRenderAfter(this),t.moduleDomRenderAfter(this))},r.prototype.wrapDomRenderMethod=function(){var t=this.opts.config;if(t.moduleDomIsShow){var e=t.moduleDomRenderMethod;if("insertBefore"==e.method){var o=s({element:e.child})[0];o?this.wrapDom.insertBefore(this.moduleDom,o):this.wrapDom.insertBefore(this.moduleDom,this.wrapDom.children[0])}"appendChild"==e.method&&this.wrapDom.appendChild(this.moduleDom)}},r.prototype.wrapDomRemove=function(){var t=this.opts.callback;t.wrapDomRemoveBefore(this),this.moduleDomRemove(),this.wrapDom&&this.wrapDom.parentNode.removeChild(this.wrapDom),t.wrapDomRemoveAfter(this)},r.prototype.getModuleDomHtml=function(){return this.moduleDom.outerHTML},e.exports=r},{"../function/create-element":3,"../function/get-dom-array":4,"../tools/extend":12}],11:[function(t,e,o){function r(t){function e(t){this.opts=i({defaults:n({obj:s}),inherits:t}),o.superType.call(this,this.opts)}var o=i({defaults:{superType:null,parameter:{}},inherits:t}),r=o.superType,s=o.parameter;if("function"!=Object.prototype.toString.call(r).toLowerCase().slice(8,-1))return console.log("no find SuperType or SuperType error"),!1;for(var m in r.prototype)r.prototype.hasOwnProperty(m)&&(e.prototype[m]=r.prototype[m]);return e}var i=t("../tools/extend"),n=t("../tools/obj-remove-quote");e.exports=r},{"../tools/extend":12,"../tools/obj-remove-quote":13}],12:[function(t,e,o){function r(t){var e=t||{};e.defaults=e.defaults||{},e.inherits=e.inherits||{},e.isDeep=0!=e.isDeep||e.isDeep;var o=Object.prototype.toString.call(e.defaults).slice(8,-1).toLowerCase(),i=Object.prototype.toString.call(e.inherits).slice(8,-1).toLowerCase();if(o==i&&e.isDeep)if("object"==o||"array"==o){for(var n in e.inherits)if(e.inherits.hasOwnProperty(n)){var s=Object.prototype.toString.call(e.defaults[n]).slice(8,-1).toLowerCase(),m=Object.prototype.toString.call(e.inherits[n]).slice(8,-1).toLowerCase();s==m&&e.isDeep&&("object"==s||"array"==s)?r({defaults:e.defaults[n],inherits:e.inherits[n]}):e.defaults[n]=e.inherits[n]}}else e.defaults=e.inherits;else e.defaults=e.inherits;return e.defaults}e.exports=r},{}],13:[function(t,e,o){function r(t){var e=t||{},o=e.obj,i=Object.prototype.toString.call(o).slice(8,-1).toLowerCase();if("object"!=i&&"array"!=i)return o;var n={};"array"==i&&(n=[]);for(var s in o)o.hasOwnProperty(s)&&(n[s]=r({obj:o[s]}));return n}e.exports=r},{}]},{},[1]);