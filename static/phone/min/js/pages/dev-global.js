"use strict";!function t(e,o,i){function n(s,a){if(!o[s]){if(!e[s]){var l="function"==typeof require&&require;if(!a&&l)return l(s,!0);if(r)return r(s,!0);throw new Error("Cannot find module '"+s+"'")}var c=o[s]={exports:{}};e[s][0].call(c.exports,function(t){var o=e[s][1][t];return n(o||t)},c,c.exports,t,e,o,i)}return o[s].exports}for(var r="function"==typeof require&&require,s=0;s<i.length;s++)n(i[s]);return n}({1:[function(t,e,o){window.addEventListener("load",function(){setTimeout(function(){!function(){new(t("../function/select"))({items:".g-checkbox-checkbox",callback:{click:function(t){console.log(t)}}})}(),function(){var e=t("../modules/m-validate-form");[].slice.call(document.querySelectorAll(".m-validate-form")).forEach(function(t){new e({element:t})})}(),t("../commons/common")},0)})},{"../commons/common":2,"../function/select":6,"../modules/m-validate-form":11}],2:[function(t,e,o){!function(){if(pageInfo&&pageInfo.config&&pageInfo.config.isShowCopyright){new(t("../modules/m-copyright"))}}(),function(){if(pageInfo&&pageInfo.config&&pageInfo.config.isShowFooterNav){new(t("../modules/m-footer-nav"))(pageInfo.data.footerNav)}}(),function(){new(t("../modules/m-lazy-load"))}()},{"../modules/m-copyright":7,"../modules/m-footer-nav":8,"../modules/m-lazy-load":9}],3:[function(t,e,o){function i(t){var e=t||{};e.elementName=e.elementName||"div",e.style=e.style||"",e.custom=e.custom||{},e.attribute=e.attribute||{};var o=document.createElement(e.elementName);e.style&&o.setAttribute("style",e.style);for(var i in e.custom)e.custom.hasOwnProperty(i)&&o.setAttribute("data-"+i,e.custom[i]);for(var n in e.attribute)e.attribute.hasOwnProperty(n)&&(o[n]=e.attribute[n]);return o}e.exports=i},{}],4:[function(t,e,o){function i(t){var e=t||{},o=[],i=!!e.element&&e.element;return i&&("string"==Object.prototype.toString.call(i).slice(8,-1).toLowerCase()&&(o=[].slice.call(document.querySelectorAll(i))),1==i.nodeType&&(o=[i]),"htmlcollection"!=Object.prototype.toString.call(i).slice(8,-1).toLowerCase()&&"nodelist"!=Object.prototype.toString.call(i).slice(8,-1).toLowerCase()||(o=[].slice.call(i))),o}e.exports=i},{}],5:[function(t,e,o){function i(t){for(var e=n({defaults:{element:null},inherits:t}),o=0,i=0,s=r({element:e.element})[0];s;)o+=s.offsetTop,i+=s.offsetLeft,s=s.offsetParent;return{top:o,left:i}}var n=t("../tools/extend"),r=t("../function/get-dom-array");e.exports=i},{"../function/get-dom-array":4,"../tools/extend":13}],6:[function(t,e,o){function i(t){this.opts=n({defaults:{items:null,callback:{click:function(){}}},inherits:t}),this.itemsDom=r({element:this.opts.items}),this.init()}var n=t("../tools/extend"),r=t("../function/get-dom-array");i.prototype.init=function(){this.power()},i.prototype.selectNothing=function(){this.itemsDom.forEach(function(t){t.checked=!1})},i.prototype.selectAll=function(){this.itemsDom.forEach(function(t){t.checked=!0})},i.prototype.selectReverse=function(){this.itemsDom.forEach(function(t){t.checked=!t.checked})},i.prototype.power=function(){var t=this;this.itemsDom.forEach(function(e){e.addEventListener("click",function(){var e=!0;t.itemsDom.forEach(function(t){0==t.checked&&(e=!1)}),t.opts.callback.click({element:this,isCheckedAll:e})})})},e.exports=i},{"../function/get-dom-array":4,"../tools/extend":13}],7:[function(t,e,o){var i=t("../function/create-element"),n=t("../tools/constructor-inherit"),r=t("../modules/m-super-type"),s=n({superType:r,parameter:{wrap:".g-footer",callback:{},config:{},data:{}}});s.prototype.moduleDomCreate=function(){this.moduleDom=i({style:this.opts.config.moduleDomStyle,custom:this.opts.config.moduleDomCustomAttr,attribute:{className:"m-copyright",innerHTML:'\n                <div class="m-copyright-icon iconfont icon-banquan"></div>\n                <div class="m-copyright-txt">版权信息哟</div>\n            '}})},s.prototype.power=function(){},e.exports=s},{"../function/create-element":3,"../modules/m-super-type":10,"../tools/constructor-inherit":12}],8:[function(t,e,o){var i=t("../function/create-element"),n=t("../tools/constructor-inherit"),r=t("../modules/m-super-type"),s=t("../tools/json-to-array"),a=n({superType:r,parameter:{wrap:".g-footer",callback:{},config:{},data:{}}});a.prototype.moduleDomCreate=function(){this.moduleDomClass="m-footer-nav";var t="";s({json:this.opts.data}).forEach(function(e){var o=e.value,i="";o.isHighlight&&(i="m-footer-nav-body-active");var n="";o.isShowMark&&(n='<div class="m-footer-nav-body-mark"></div>'),t+='\n            <a class="m-footer-nav-body '+i+'" href="'+o.link+'">\n                <div class="m-footer-nav-body-icon iconfont '+o.icon+'"></div>\n                <div class="m-footer-nav-body-txt">'+o.txt+"</div>\n                "+n+"\n            </a>\n        "}),this.moduleDom=i({style:this.opts.config.moduleDomStyle,custom:this.opts.config.moduleDomCustomAttr,attribute:{className:this.moduleDomClass,innerHTML:'<div class="m-footer-nav-wrap">'+t+"</div>"}})},a.prototype.power=function(){},e.exports=a},{"../function/create-element":3,"../modules/m-super-type":10,"../tools/constructor-inherit":12,"../tools/json-to-array":14}],9:[function(t,e,o){function i(t){this.opts=n({defaults:{element:".m-lazy-load",srcAttr:"data-src",moreHeight:0,interval:80},inherits:t}),this.clientHeight=document.documentElement.clientHeight,this.init()}var n=t("../tools/extend"),r=t("../function/offset"),s=t("../function/get-dom-array");i.prototype.init=function(){this.render(),this.power()},i.prototype.render=function(){var t=this,e=this.opts.moreHeight,o=document.documentElement.scrollTop||document.body.scrollTop,i=o-e,n=this.clientHeight+i+e,a=s({element:this.opts.element});a.forEach(function(t){"img"==t.tagName.toLowerCase()&&(t.getAttribute("src")||(t.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUCB1jYAACAAAFAAGNu5vzAAAAAElFTkSuQmCC"),t.setAttribute("height","100%"),t.setAttribute("width","100%"))}),a.forEach(function(e){if(e.offsetWidth){var o=r({element:e}).top;o+e.offsetHeight>=i&&o<=n&&("img"==e.tagName.toLowerCase()?(e.getAttribute(t.opts.srcAttr)&&(e.src=e.getAttribute(t.opts.srcAttr)),e.removeAttribute("height"),e.removeAttribute("width")):e.getAttribute(t.opts.srcAttr)&&(e.style.backgroundImage="url("+e.getAttribute(t.opts.srcAttr)+")"),e.classList.remove("m-lazy-load"),e.classList.add("m-lazy-load-active"))}})},i.prototype.power=function(){var t=this,e=null;window.addEventListener("scroll",function(){clearTimeout(e),e=setTimeout(function(){t.render()},t.opts.interval)})},e.exports=i},{"../function/get-dom-array":4,"../function/offset":5,"../tools/extend":13}],10:[function(t,e,o){function i(t){this.opts=n({defaults:{wrap:".g-body",callback:{moduleDomCreateBefore:function(t){},moduleDomCreateAfter:function(t){},moduleDomRenderBefore:function(t){},moduleDomRenderAfter:function(t){},moduleDomRemoveBefore:function(t){},moduleDomRemoveAfter:function(t){},moduleDomShowBefore:function(t){},moduleDomShowAfter:function(t){},moduleDomHideBefore:function(t){},moduleDomHideAfter:function(t){},wrapDomGetBefore:function(t){},wrapDomGetAfter:function(t){},wrapDomRemoveBefore:function(t){},wrapDomRemoveAfter:function(t){}},config:{moduleDomCustomAttr:{},moduleDomRenderMethod:{method:"appendChild",child:null},moduleDomStyle:"",moduleDomIsShow:!0,moduleDomIsClearTimer:!0},data:{}},inherits:t}),this.moduleDom=null,this.wrapDom=null,this.moduleDomTimer={},this.init()}var n=t("../tools/extend"),r=t("../function/create-element"),s=t("../function/get-dom-array");i.prototype.init=function(){this.render(),this.power()},i.prototype.render=function(){this.moduleDomRemove();var t=this.opts.callback;t.moduleDomCreateBefore(this),this.moduleDomCreate(),t.moduleDomCreateAfter(this),this.wrapDomGet(),this.moduleDomRender()},i.prototype.power=function(){},i.prototype.moduleDomCreate=function(){this.moduleDom=r({style:this.opts.config.moduleDomStyle,custom:this.opts.config.moduleDomCustomAttr,attribute:{className:"m-super-type",innerHTML:'\n                <div class="m-super-type-txt">周华飞爱侯丽杰,侯丽杰爱周华飞</div>\n            '}})},i.prototype.moduleDomRender=function(){var t=this.opts.callback,e=this.opts.config;if(e.moduleDomIsShow&&this.wrapDom){t.moduleDomRenderBefore(this);var o=e.moduleDomRenderMethod;if("insertBefore"==o.method){var i=s({element:o.child})[0];i?this.wrapDom.insertBefore(this.moduleDom,i):this.wrapDom.insertBefore(this.moduleDom,this.wrapDom.children[0])}"appendChild"==o.method&&this.wrapDom.appendChild(this.moduleDom),t.moduleDomRenderAfter(this)}},i.prototype.moduleDomRemove=function(){var t=this.opts.callback;this.moduleDom&&this.moduleDom.parentNode&&(t.moduleDomRemoveBefore(this),this.moduleDom.parentNode.removeChild(this.moduleDom),t.moduleDomRemoveAfter(this)),this.moduleDomClearTimer()},i.prototype.moduleDomClearTimer=function(){if(this.opts.config.moduleDomIsClearTimer)for(var t in this.moduleDomTimer)this.moduleDomTimer.hasOwnProperty(t)&&(clearInterval(this.moduleDomTimer[t]),clearTimeout(this.moduleDomTimer[t]))},i.prototype.moduleDomShow=function(){var t=this.opts.callback;t.moduleDomShowBefore(this),this.wrapDom&&(this.opts.config.moduleDomIsShow=!0,this.moduleDomRender()),t.moduleDomShowAfter(this)},i.prototype.moduleDomHide=function(){var t=this.opts.callback;this.moduleDom.parentNode&&(this.opts.config.moduleDomIsShow=!1,t.moduleDomHideBefore(this),this.moduleDom.parentNode.removeChild(this.moduleDom),t.moduleDomHideAfter(this))},i.prototype.wrapDomGet=function(){var t=this.opts.callback;t.wrapDomGetBefore(this),this.wrapDom=s({element:this.opts.wrap})[0],t.wrapDomGetAfter(this)},i.prototype.wrapDomRemove=function(){var t=this.opts.callback;this.moduleDomRemove(),this.wrapDom&&(t.wrapDomRemoveBefore(this),this.wrapDom.parentNode.removeChild(this.wrapDom),t.wrapDomRemoveAfter(this))},i.prototype.getModuleDomHtml=function(){return this.moduleDom.outerHTML},e.exports=i},{"../function/create-element":3,"../function/get-dom-array":4,"../tools/extend":13}],11:[function(t,e,o){function i(t){this.opts=t||{},this.element=r({element:this.opts.element})[0],this.hintClass=this.opts.hintClass||"m-validate-form-fail",this.eventsType=this.opts.eventsType||"blur",this.validateType=this.element.dataset.validate||"undefined",this.validateHintTxt=this.element.dataset.hint||"undefined",this.init()}var n=t("../tools/validate"),r=t("../function/get-dom-array");i.prototype.init=function(){this.render(),this.validateEvents()},i.prototype.render=function(){this.renderWrap(),this.renderHint()},i.prototype.renderWrap=function(){this.wrapDom=this.element.parentNode,this.wrapDom&&"static"==getComputedStyle(this.wrapDom).position&&(this.wrapDom.style.position="relative")},i.prototype.renderHint=function(){this.hintDom=document.createElement("span"),this.hintDom.classList.add(this.hintClass)},i.prototype.renderHintAdd=function(t){if(this.element.offsetWidth){var e=t||{};this.hintDom.innerHTML=e.txt||"本项必填",this.wrapDom.appendChild(this.hintDom)}},i.prototype.renderHintRemove=function(){this.wrapDom.querySelector("."+this.hintClass)&&this.wrapDom.removeChild(this.hintDom)},i.prototype.validateSave=function(){var t=this,e=t.validateType.split(" "),o=t.validateHintTxt.split(" "),i=this.element.value;this.isValidateSuccess=!0,e.forEach(function(e,r){"no-space"==e&&t.isValidateSuccess&&n.isSpace({value:i,success:function(){t.renderHintAdd({txt:o[r]}),t.isValidateSuccess=!1},fail:function(){t.renderHintRemove(),t.isValidateSuccess=!0}}),"no-zero"==e&&t.isValidateSuccess&&n.isZero({value:i,success:function(){t.renderHintAdd({txt:o[r]}),t.isValidateSuccess=!1},fail:function(){t.renderHintRemove(),t.isValidateSuccess=!0}}),"yes-integer"==e&&t.isValidateSuccess&&n.isInteger({value:i,success:function(){t.renderHintRemove(),t.isValidateSuccess=!0},fail:function(){t.renderHintAdd({txt:o[r]}),t.isValidateSuccess=!1}})})},i.prototype.validateEvents=function(){var t=this;t.element&&t.element.addEventListener(t.eventsType,function(){t.validateSave()})},e.exports=i},{"../function/get-dom-array":4,"../tools/validate":16}],12:[function(t,e,o){function i(t){function e(t){this.opts=n({defaults:r({obj:s}),inherits:t}),o.superType.call(this,this.opts)}var o=n({defaults:{superType:null,parameter:{}},inherits:t}),i=o.superType,s=o.parameter;if("function"!=Object.prototype.toString.call(i).toLowerCase().slice(8,-1))return console.log("no find SuperType or SuperType error"),!1;for(var a in i.prototype)i.prototype.hasOwnProperty(a)&&(e.prototype[a]=i.prototype[a]);return e}var n=t("../tools/extend"),r=t("../tools/obj-remove-quote");e.exports=i},{"../tools/extend":13,"../tools/obj-remove-quote":15}],13:[function(t,e,o){function i(t){var e=t||{};e.defaults=e.defaults||{},e.inherits=e.inherits||{},e.isDeep=0!=e.isDeep||e.isDeep;var o=Object.prototype.toString.call(e.defaults).slice(8,-1).toLowerCase();if(o==Object.prototype.toString.call(e.inherits).slice(8,-1).toLowerCase()&&e.isDeep)if("object"==o||"array"==o){for(var n in e.inherits)if(e.inherits.hasOwnProperty(n)){var r=Object.prototype.toString.call(e.defaults[n]).slice(8,-1).toLowerCase(),s=Object.prototype.toString.call(e.inherits[n]).slice(8,-1).toLowerCase();r!=s||!e.isDeep||"object"!=r&&"array"!=r?e.defaults[n]=e.inherits[n]:i({defaults:e.defaults[n],inherits:e.inherits[n]})}}else e.defaults=e.inherits;else e.defaults=e.inherits;return e.defaults}e.exports=i},{}],14:[function(t,e,o){function i(t){var e=t||{},o=e.json||{},i=[];if(o instanceof Array)o.forEach(function(t,e){i.push([e,t])});else for(var n in o)o.hasOwnProperty(n)&&i.push({key:n,value:o[n]});return i}e.exports=i},{}],15:[function(t,e,o){function i(t){var e=t||{},o=e.obj,n=Object.prototype.toString.call(o).slice(8,-1).toLowerCase();if("object"!=n&&"array"!=n)return o;var r={};"array"==n&&(r=[]);for(var s in o)o.hasOwnProperty(s)&&(r[s]=i({obj:o[s]}));return r}e.exports=i},{}],16:[function(t,e,o){var i={isSpace:function(t){var e=t||{},o=e.success||function(){console.log("no find success callback")},i=e.fail||function(){console.log("no find fail callback")},n=e.value||" ",r=n.trim(),s=!1;return""==r?(s=!0,o()):i(),s},isZero:function(t){var e=t||{},o=e.success||function(){console.log("no find success callback")},i=e.fail||function(){console.log("no find fail callback")},n=e.value||" ",r=n.trim(),s=!1;return 0==r?(s=!0,o()):i(),s},isInteger:function(t){var e=t||{},o=e.success||function(){console.log("no find success callback")},i=e.fail||function(){console.log("no find fail callback")},n=e.value||" ",r=n.trim(),s=/^\d+$/,a=!1;return s.test(r)?(a=!0,o()):i(),a},isReservedDecimal:function(t){var e=t||{},o=e.success||function(){console.log("no find success callback")},i=e.fail||function(){console.log("no find fail callback")},n=e.num||2,r=e.value||" ",s=r.trim(),a=new RegExp("^\\d+\\.\\d{"+n+"}$"),l=!1;return a.test(s)?(l=!0,o()):i(),l}};e.exports=i},{}]},{},[1]);