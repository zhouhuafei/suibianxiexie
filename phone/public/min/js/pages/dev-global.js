"use strict";!function e(t,o,i){function n(s,a){if(!o[s]){if(!t[s]){var l="function"==typeof require&&require;if(!a&&l)return l(s,!0);if(r)return r(s,!0);throw new Error("Cannot find module '"+s+"'")}var c=o[s]={exports:{}};t[s][0].call(c.exports,function(e){var o=t[s][1][e];return n(o?o:e)},c,c.exports,e,t,o,i)}return o[s].exports}for(var r="function"==typeof require&&require,s=0;s<i.length;s++)n(i[s]);return n}({1:[function(e,t,o){window.addEventListener("load",function(){setTimeout(function(){!function(){var t=e("../function/select");new t({items:".g-checkbox-checkbox",callback:{click:function(e){console.log(e)}}})}(),function(){var t=e("../modules/m-validate-form"),o=[].slice.call(document.querySelectorAll(".m-validate-form"));o.forEach(function(e){new t({element:e})})}(),e("../commons/common")},0)})},{"../commons/common":2,"../function/select":6,"../modules/m-validate-form":11}],2:[function(e,t,o){!function(){if(pageInfo&&pageInfo.config&&pageInfo.config.isShowCopyright){var t=e("../modules/m-copyright");new t}}(),function(){if(pageInfo&&pageInfo.config&&pageInfo.config.isShowFooterNav){var t=e("../modules/m-footer-nav");new t}}(),function(){var t=e("../modules/m-lazy-load");new t}()},{"../modules/m-copyright":7,"../modules/m-footer-nav":8,"../modules/m-lazy-load":9}],3:[function(e,t,o){function i(e){var t=e||{};t.elementName=t.elementName||"div",t.style=t.style||"",t.custom=t.custom||{},t.attribute=t.attribute||{};var o=document.createElement(t.elementName);t.style&&o.setAttribute("style",t.style);for(var i in t.custom)t.custom.hasOwnProperty(i)&&o.setAttribute("data-"+i,t.custom[i]);for(var n in t.attribute)t.attribute.hasOwnProperty(n)&&(o[n]=t.attribute[n]);return o}t.exports=i},{}],4:[function(e,t,o){function i(e){var t=e||{},o=[],i=!!t.element&&t.element;return i&&("string"==Object.prototype.toString.call(i).slice(8,-1).toLowerCase()&&(o=[].slice.call(document.querySelectorAll(i))),1==i.nodeType&&(o=[i]),"htmlcollection"!=Object.prototype.toString.call(i).slice(8,-1).toLowerCase()&&"nodelist"!=Object.prototype.toString.call(i).slice(8,-1).toLowerCase()||(o=[].slice.call(i))),o}t.exports=i},{}],5:[function(e,t,o){function i(e){for(var t=n({defaults:{element:null},inherits:e}),o=0,i=0,s=r({element:t.element})[0];s;)o+=s.offsetTop,i+=s.offsetLeft,s=s.offsetParent;return{top:o,left:i}}var n=e("../tools/extend"),r=e("../function/get-dom-array");t.exports=i},{"../function/get-dom-array":4,"../tools/extend":13}],6:[function(e,t,o){function i(e){this.opts=n({defaults:{items:null,callback:{click:function(){}}},inherits:e}),this.itemsDom=r({element:this.opts.items}),this.init()}var n=e("../tools/extend"),r=e("../function/get-dom-array");i.prototype.init=function(){this.power()},i.prototype.selectNothing=function(){this.itemsDom.forEach(function(e){e.checked=!1})},i.prototype.selectAll=function(){this.itemsDom.forEach(function(e){e.checked=!0})},i.prototype.selectReverse=function(){this.itemsDom.forEach(function(e){e.checked=!e.checked})},i.prototype.power=function(){var e=this;this.itemsDom.forEach(function(t){t.addEventListener("click",function(){var t=!0;e.itemsDom.forEach(function(e){0==e.checked&&(t=!1)}),e.opts.callback.click({element:this,isCheckedAll:t})})})},t.exports=i},{"../function/get-dom-array":4,"../tools/extend":13}],7:[function(e,t,o){var i=e("../function/create-element"),n=e("../tools/constructor-inherit"),r=e("../modules/m-super-type"),s=n({superType:r,parameter:{callback:{},config:{},data:{}}});s.prototype.moduleDomCreate=function(){this.moduleDom=i({style:this.opts.config.moduleDomStyle,custom:this.opts.config.moduleDomCustomAttr,attribute:{className:"m-copyright",innerHTML:'\n                <div class="m-copyright-icon iconfont icon-banquan"></div>\n                <div class="m-copyright-txt">版权信息哟</div>\n            '}})},s.prototype.power=function(){},t.exports=s},{"../function/create-element":3,"../modules/m-super-type":10,"../tools/constructor-inherit":12}],8:[function(e,t,o){var i=e("../function/create-element"),n=e("../tools/constructor-inherit"),r=e("../modules/m-super-type"),s=n({superType:r,parameter:{callback:{},config:{},data:{items:[{link:"/",icon:"icon-shouye",txt:"首页",isHighlight:!1,isShowMark:!1},{link:"/dev-global",icon:"icon-kaifa",txt:"g-global",isHighlight:!1,isShowMark:!1},{link:"/dev-module",icon:"icon-kaifa",txt:"m-module",isHighlight:!0,isShowMark:!0},{link:"/dev-word",icon:"icon-kaifa",txt:"标准词汇",isHighlight:!1,isShowMark:!1},{link:"/mine",icon:"icon-wode",txt:"我的",isHighlight:!1,isShowMark:!1}]}}});s.prototype.moduleDomCreate=function(){this.moduleDomClass="m-footer-nav";var e="";this.opts.data.items.forEach(function(t){var o="";t.isHighlight&&(o="m-footer-nav-body-active");var i="";t.isShowMark&&(i='<div class="m-footer-nav-body-mark"></div>'),e+='\n            <a class="m-footer-nav-body '+o+'" href="'+t.link+'">\n                <div class="m-footer-nav-body-icon iconfont '+t.icon+'"></div>\n                <div class="m-footer-nav-body-txt">'+t.txt+"</div>\n                "+i+"\n            </a>\n        "}),this.moduleDom=i({style:this.opts.config.moduleDomStyle,custom:this.opts.config.moduleDomCustomAttr,attribute:{className:this.moduleDomClass,innerHTML:'<div class="m-footer-nav-wrap">'+e+"</div>"}})},s.prototype.power=function(){},t.exports=s},{"../function/create-element":3,"../modules/m-super-type":10,"../tools/constructor-inherit":12}],9:[function(e,t,o){function i(e){this.opts=n({defaults:{element:".m-lazy-load",srcAttr:"data-src",moreHeight:0,interval:80},inherits:e}),this.clientHeight=document.documentElement.clientHeight,this.init()}var n=e("../tools/extend"),r=e("../function/offset"),s=e("../function/get-dom-array");i.prototype.init=function(){this.render(),this.power()},i.prototype.render=function(){var e=this,t=this.opts.moreHeight,o=document.documentElement.scrollTop||document.body.scrollTop,i=o-t,n=this.clientHeight+i+t,a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUCB1jYAACAAAFAAGNu5vzAAAAAElFTkSuQmCC",l=s({element:this.opts.element});l.forEach(function(e){"img"==e.tagName.toLowerCase()&&(e.getAttribute("src")||(e.src=a),e.setAttribute("height","100%"),e.setAttribute("width","100%"))}),l.forEach(function(t){if(t.offsetWidth){var o=r({element:t}).top,s=o+t.offsetHeight;s>=i&&o<=n&&("img"==t.tagName.toLowerCase()?(t.getAttribute(e.opts.srcAttr)&&(t.src=t.getAttribute(e.opts.srcAttr)),t.removeAttribute("height"),t.removeAttribute("width")):t.getAttribute(e.opts.srcAttr)&&(t.style.backgroundImage="url("+t.getAttribute(e.opts.srcAttr)+")"),t.classList.remove("m-lazy-load"),t.classList.add("m-lazy-load-active"))}})},i.prototype.power=function(){var e=this,t=null;window.addEventListener("scroll",function(){clearTimeout(t),t=setTimeout(function(){e.render()},e.opts.interval)})},t.exports=i},{"../function/get-dom-array":4,"../function/offset":5,"../tools/extend":13}],10:[function(e,t,o){function i(e){this.opts=n({defaults:{wrap:".g-wrap",callback:{moduleDomCreateBefore:function(e){},moduleDomCreateAfter:function(e){},moduleDomRenderBefore:function(e){},moduleDomRenderAfter:function(e){},moduleDomRemoveBefore:function(e){},moduleDomRemoveAfter:function(e){},moduleDomShowBefore:function(e){},moduleDomShowAfter:function(e){},moduleDomHideBefore:function(e){},moduleDomHideAfter:function(e){},wrapDomCreateBefore:function(e){},wrapDomCreateAfter:function(e){},wrapDomRenderBefore:function(e){},wrapDomRenderAfter:function(e){},wrapDomRemoveBefore:function(e){},wrapDomRemoveAfter:function(e){}},config:{moduleDomCustomAttr:{},moduleDomRenderMethod:{method:"appendChild",child:null},moduleDomStyle:"",moduleDomIsShow:!0,moduleDomIsClearTimer:!0},data:{}},inherits:e}),this.moduleDom=null,this.wrapDom=null,this.moduleDomTimer={},this.init()}var n=e("../tools/extend"),r=e("../function/create-element"),s=e("../function/get-dom-array");i.prototype.init=function(){this.render(),this.power()},i.prototype.render=function(){this.moduleDomRender(),this.wrapDomRender()},i.prototype.power=function(){},i.prototype.moduleDomCreate=function(){this.moduleDom=r({style:this.opts.config.moduleDomStyle,custom:this.opts.config.moduleDomCustomAttr,attribute:{className:"m-super-type",innerHTML:'\n                <div class="m-super-type-txt">周华飞爱侯丽杰,侯丽杰爱周华飞</div>\n            '}})},i.prototype.moduleDomRender=function(){this.moduleDomRemove();var e=this.opts.callback;e.moduleDomCreateBefore(this),this.moduleDomCreate(),e.moduleDomCreateAfter(this)},i.prototype.moduleDomRemove=function(){var e=this.opts.callback;e.moduleDomRemoveBefore(this),this.moduleDom&&this.moduleDom.parentNode&&this.moduleDom.parentNode.removeChild(this.moduleDom),this.moduleDomClearTimer(),e.moduleDomRemoveAfter(this)},i.prototype.moduleDomClearTimer=function(){if(this.opts.config.moduleDomIsClearTimer)for(var e in this.moduleDomTimer)this.moduleDomTimer.hasOwnProperty(e)&&(clearInterval(this.moduleDomTimer[e]),clearTimeout(this.moduleDomTimer[e]))},i.prototype.moduleDomShow=function(){var e=this.opts.callback;e.moduleDomShowBefore(this),this.wrapDom&&(this.opts.config.moduleDomIsShow=!0,this.wrapDomRenderMethod()),e.moduleDomShowAfter(this)},i.prototype.moduleDomHide=function(){var e=this.opts.callback;e.moduleDomHideBefore(this),this.moduleDom.parentNode&&(this.moduleDom.parentNode.removeChild(this.moduleDom),this.opts.config.moduleDomIsShow=!1),e.moduleDomHideAfter(this)},i.prototype.wrapDomCreate=function(){this.wrapDom=s({element:this.opts.wrap})[0]},i.prototype.wrapDomRender=function(){var e=this.opts.callback;e.wrapDomCreateBefore(this),this.wrapDomCreate(),e.wrapDomCreateAfter(this),this.wrapDom&&(e.moduleDomRenderBefore(this),e.wrapDomRenderBefore(this),this.wrapDomRenderMethod(),e.wrapDomRenderAfter(this),e.moduleDomRenderAfter(this))},i.prototype.wrapDomRenderMethod=function(){var e=this.opts.config;if(e.moduleDomIsShow){var t=e.moduleDomRenderMethod;if("insertBefore"==t.method){var o=s({element:t.child})[0];o?this.wrapDom.insertBefore(this.moduleDom,o):this.wrapDom.insertBefore(this.moduleDom,this.wrapDom.children[0])}"appendChild"==t.method&&this.wrapDom.appendChild(this.moduleDom)}},i.prototype.wrapDomRemove=function(){var e=this.opts.callback;e.wrapDomRemoveBefore(this),this.moduleDomRemove(),this.wrapDom&&this.wrapDom.parentNode.removeChild(this.wrapDom),e.wrapDomRemoveAfter(this)},i.prototype.getModuleDomHtml=function(){return this.moduleDom.outerHTML},t.exports=i},{"../function/create-element":3,"../function/get-dom-array":4,"../tools/extend":13}],11:[function(e,t,o){function i(e){this.opts=e||{},this.element=r({element:this.opts.element})[0],this.hintClass=this.opts.hintClass||"m-validate-form-hint",this.eventsType=this.opts.eventsType||"blur",this.validateType=this.element.dataset.validate||"undefined",this.validateHintTxt=this.element.dataset.hint||"undefined",this.init()}var n=e("../tools/validate"),r=e("../function/get-dom-array");i.prototype.init=function(){this.render(),this.validateEvents()},i.prototype.render=function(){this.renderWrap(),this.renderHint()},i.prototype.renderWrap=function(){this.wrapDom=this.element.parentNode,this.wrapDom&&"static"==getComputedStyle(this.wrapDom).position&&(this.wrapDom.style.position="relative")},i.prototype.renderHint=function(){this.hintDom=document.createElement("span"),this.hintDom.classList.add(this.hintClass)},i.prototype.renderHintAdd=function(e){if(this.element.offsetWidth){var t=e||{};this.hintDom.innerHTML=t.txt||"本项必填",this.wrapDom.appendChild(this.hintDom)}},i.prototype.renderHintRemove=function(){var e=this.wrapDom.querySelector("."+this.hintClass);e&&this.wrapDom.removeChild(this.hintDom)},i.prototype.validateSave=function(){var e=this,t=e.validateType.split(" "),o=e.validateHintTxt.split(" "),i=this.element.value;this.isValidateSuccess=!0,t.forEach(function(t,r){"no-space"==t&&e.isValidateSuccess&&n.isSpace({value:i,success:function(){e.renderHintAdd({txt:o[r]}),e.isValidateSuccess=!1},fail:function(){e.renderHintRemove(),e.isValidateSuccess=!0}}),"no-zero"==t&&e.isValidateSuccess&&n.isZero({value:i,success:function(){e.renderHintAdd({txt:o[r]}),e.isValidateSuccess=!1},fail:function(){e.renderHintRemove(),e.isValidateSuccess=!0}}),"yes-integer"==t&&e.isValidateSuccess&&n.isInteger({value:i,success:function(){e.renderHintRemove(),e.isValidateSuccess=!0},fail:function(){e.renderHintAdd({txt:o[r]}),e.isValidateSuccess=!1}})})},i.prototype.validateEvents=function(){var e=this;e.element&&e.element.addEventListener(e.eventsType,function(){e.validateSave()})},t.exports=i},{"../function/get-dom-array":4,"../tools/validate":15}],12:[function(e,t,o){function i(e){function t(e){this.opts=n({defaults:r({obj:s}),inherits:e}),o.superType.call(this,this.opts)}var o=n({defaults:{superType:null,parameter:{}},inherits:e}),i=o.superType,s=o.parameter;if("function"!=Object.prototype.toString.call(i).toLowerCase().slice(8,-1))return console.log("no find SuperType or SuperType error"),!1;for(var a in i.prototype)i.prototype.hasOwnProperty(a)&&(t.prototype[a]=i.prototype[a]);return t}var n=e("../tools/extend"),r=e("../tools/obj-remove-quote");t.exports=i},{"../tools/extend":13,"../tools/obj-remove-quote":14}],13:[function(e,t,o){function i(e){var t=e||{};t.defaults=t.defaults||{},t.inherits=t.inherits||{},t.isDeep=0!=t.isDeep||t.isDeep;var o=Object.prototype.toString.call(t.defaults).slice(8,-1).toLowerCase(),n=Object.prototype.toString.call(t.inherits).slice(8,-1).toLowerCase();if(o==n&&t.isDeep)if("object"==o||"array"==o){for(var r in t.inherits)if(t.inherits.hasOwnProperty(r)){var s=Object.prototype.toString.call(t.defaults[r]).slice(8,-1).toLowerCase(),a=Object.prototype.toString.call(t.inherits[r]).slice(8,-1).toLowerCase();s==a&&t.isDeep&&("object"==s||"array"==s)?i({defaults:t.defaults[r],inherits:t.inherits[r]}):t.defaults[r]=t.inherits[r]}}else t.defaults=t.inherits;else t.defaults=t.inherits;return t.defaults}t.exports=i},{}],14:[function(e,t,o){function i(e){var t=e||{},o=t.obj,n=Object.prototype.toString.call(o).slice(8,-1).toLowerCase();if("object"!=n&&"array"!=n)return o;var r={};"array"==n&&(r=[]);for(var s in o)o.hasOwnProperty(s)&&(r[s]=i({obj:o[s]}));return r}t.exports=i},{}],15:[function(e,t,o){var i={isSpace:function(e){var t=e||{},o=t.success||function(){console.log("no find success callback")},i=t.fail||function(){console.log("no find fail callback")},n=t.value||" ",r=n.trim(),s=!1;return""==r?(s=!0,o()):i(),s},isZero:function(e){var t=e||{},o=t.success||function(){console.log("no find success callback")},i=t.fail||function(){console.log("no find fail callback")},n=t.value||" ",r=n.trim(),s=!1;return 0==r?(s=!0,o()):i(),s},isInteger:function(e){var t=e||{},o=t.success||function(){console.log("no find success callback")},i=t.fail||function(){console.log("no find fail callback")},n=t.value||" ",r=n.trim(),s=/^\d+$/,a=!1;return s.test(r)?(a=!0,o()):i(),a},isReservedDecimal:function(e){var t=e||{},o=t.success||function(){console.log("no find success callback")},i=t.fail||function(){console.log("no find fail callback")},n=t.num||2,r=t.value||" ",s=r.trim(),a=new RegExp("^\\d+\\.\\d{"+n+"}$"),l=!1;return a.test(s)?(l=!0,o()):i(),l}};t.exports=i},{}]},{},[1]);