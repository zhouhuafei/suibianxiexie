"use strict";!function e(t,o,n){function r(s,c){if(!o[s]){if(!t[s]){var u="function"==typeof require&&require;if(!c&&u)return u(s,!0);if(i)return i(s,!0);throw new Error("Cannot find module '"+s+"'")}var a=o[s]={exports:{}};t[s][0].call(a.exports,function(e){var o=t[s][1][e];return r(o?o:e)},a,a.exports,e,t,o,n)}return o[s].exports}for(var i="function"==typeof require&&require,s=0;s<n.length;s++)r(n[s]);return r}({1:[function(e,t,o){var n={userAgent:e("../function/user-agent"),arrayRemoveRepeat:e("../function/array-remove-repeat.js"),objRemoveQuote:e("../function/obj-remove-quote.js"),Select:e("../function/select.js"),offset:e("../function/offset.js"),constructorInherit:e("../function/constructor-inherit.js"),cookie:e("../function/cookie.js"),fillZero:e("../function/fill-zero.js"),getParent:e("../function/get-parent.js"),scrollTo:e("../function/scroll-to.js"),htmlToDom:e("../function/html-to-dom.js"),whetherDisableScroll:e("../function/whether-disable-scroll.js"),WhenScrollBottom:e("../function/when-scroll-bottom.js"),objToArray:e("../function/obj-to-array.js"),secondsToTime:e("../function/seconds-to-time.js"),timeCountDown:e("../function/time-count-down.js"),strLimit:e("../function/str-limit.js"),getDomArray:e("../function/get-dom-array.js"),createElement:e("../function/create-element.js"),extend:e("../function/extend.js")};t.exports=n},{"../function/array-remove-repeat.js":3,"../function/constructor-inherit.js":4,"../function/cookie.js":5,"../function/create-element.js":6,"../function/extend.js":7,"../function/fill-zero.js":8,"../function/get-dom-array.js":9,"../function/get-parent.js":10,"../function/html-to-dom.js":11,"../function/obj-remove-quote.js":12,"../function/obj-to-array.js":13,"../function/offset.js":14,"../function/scroll-to.js":15,"../function/seconds-to-time.js":16,"../function/select.js":17,"../function/str-limit.js":18,"../function/time-count-down.js":19,"../function/user-agent":20,"../function/when-scroll-bottom.js":21,"../function/whether-disable-scroll.js":22}],2:[function(e,t,o){var n=e("../base/base.js"),r=e("../modules/m-super-type.js"),i=n.constructorInherit({superType:r,parameter:{callback:{},config:{},data:{}}});i.prototype.moduleDomCreate=function(){this.moduleDom=n.createElement({style:this.opt.config.moduleDomStyle,custom:this.opt.config.moduleDomCustomAttr,attribute:{className:"m-copyright",innerHTML:'\n                <div class="m-copyright-icon iconfont icon-banquan"></div>\n                <div class="m-copyright-txt">版权信息哟</div>\n            '}})},i.prototype.power=function(){},t.exports=i},{"../base/base.js":1,"../modules/m-super-type.js":23}],3:[function(e,t,o){function n(e){var t=e||{},o=t.array||[];if("array"!=Object.prototype.toString.call(o).slice(8,-1).toLowerCase())return[];var n=[];return o.forEach(function(e){n.indexOf(e)==-1&&n.push(e)}),n}t.exports=n},{}],4:[function(e,t,o){function n(e){function t(e){this.opt=r({default:i({obj:s}),inherit:e}),o.superType.call(this,this.opt)}var o=r({default:{superType:null,parameter:{}},inherit:e}),n=o.superType,s=o.parameter;if("function"!=Object.prototype.toString.call(n).toLowerCase().slice(8,-1))return console.log("no find SuperType or SuperType error"),!1;for(var c in n.prototype)n.prototype.hasOwnProperty(c)&&(t.prototype[c]=n.prototype[c]);return t}var r=e("../function/extend.js"),i=e("../function/obj-remove-quote.js");t.exports=n},{"../function/extend.js":7,"../function/obj-remove-quote.js":12}],5:[function(e,t,o){function n(e){var t=e||{},o=t.name,n=t.value,r=t.expires,i=new Date,s=i.getTime();i.setTime(s+24*r*60*60*1e3),document.cookie=o+"="+n+"; expires="+i}function r(e){var t=e||{},o=t.name,n=document.cookie,r=n.split("; "),i="";return r.forEach(function(e){var t=e.split("=");if(t[0]==o)return i=t[1],!1}),i}function i(e){n((e||{}).name,"",-1)}var s={setCookie:n,getCookie:r,removeCookie:i};t.exports=s},{}],6:[function(e,t,o){function n(e){var t=e||{};t.elementName=t.elementName||"div",t.style=t.style||"",t.custom=t.custom||{},t.attribute=t.attribute||{};var o=document.createElement(t.elementName);t.style&&o.setAttribute("style",t.style);for(var n in t.custom)t.custom.hasOwnProperty(n)&&o.setAttribute("data-"+n,t.custom[n]);for(var r in t.attribute)t.attribute.hasOwnProperty(r)&&(o[r]=t.attribute[r]);return o}t.exports=n},{}],7:[function(e,t,o){function n(e){var t=e||{};t.default=t.default||{},t.inherit=t.inherit||{},t.isDeep=0!=t.isDeep||t.isDeep;var o=Object.prototype.toString.call(t.default).slice(8,-1).toLowerCase();if(o==Object.prototype.toString.call(t.inherit).slice(8,-1).toLowerCase()&&t.isDeep)if("object"==o||"array"==o){for(var r in t.inherit)if(t.inherit.hasOwnProperty(r)){var i=Object.prototype.toString.call(t.default[r]).slice(8,-1).toLowerCase(),s=Object.prototype.toString.call(t.inherit[r]).slice(8,-1).toLowerCase();i==s&&t.isDeep?"object"==i?n({default:t.default[r],inherit:t.inherit[r]}):"array"==i?t.inherit[r].forEach(function(e,o){var i=Object.prototype.toString.call(t.default[r][o]).slice(8,-1).toLowerCase();Object.prototype.toString.call(t.inherit[r][o]).slice(8,-1).toLowerCase()==i&&t.isDeep&&"object"==i?n({default:t.default[r][o],inherit:t.inherit[r][o]}):t.default[r][o]=t.inherit[r][o]}):t.default[r]=t.inherit[r]:t.default[r]=t.inherit[r]}}else t.default=t.inherit;else t.default=t.inherit;return t.default}t.exports=n},{}],8:[function(e,t,o){function n(e){var t=r({default:{num:null},inherit:e}),o=t.num;return o<10?"0"+o:""+o}var r=e("../function/extend.js");t.exports=n},{"../function/extend.js":7}],9:[function(e,t,o){function n(e){var t=r({default:{element:null},inherit:e}),o=[];return t.element&&("string"==Object.prototype.toString.call(t.element).slice(8,-1).toLowerCase()&&(o=[].slice.call(document.querySelectorAll(t.element))),1==t.element.nodeType&&(o=[t.element]),"htmlcollection"!=Object.prototype.toString.call(t.element).slice(8,-1).toLowerCase()&&"nodelist"!=Object.prototype.toString.call(t.element).slice(8,-1).toLowerCase()||(o=[].slice.call(t.element))),o}var r=e("../function/extend.js");t.exports=n},{"../function/extend.js":7}],10:[function(e,t,o){function n(e){var t=e||{},o=t.obj,n=t.selector;if(!o)return console.log("参数错误,第一参数需要一个元素节点对象"),null;if(!n)return o.parentNode;if("string"==typeof n)switch(o=o.parentNode,n.charAt(0)){case".":for(;o;){if(!o.classList)return console.log("no find class"),null;if(o.classList.contains(n.substring(1)))return o;o=o.parentNode}break;case"#":for(;o;){if(o==document)return console.log("no find id"),null;if(o.id==n.substring(1))return o;o=o.parentNode}break;default:for(;o;){if(o==document)return console.log("no find tagName"),null;if(o.tagName.toLowerCase()==n)return o;o=o.parentNode}}}t.exports=n},{}],11:[function(e,t,o){function n(e){var t=e||{},o=t.html,n=document.createElement("div");return n.innerHTML=o,n.children[0]}t.exports=n},{}],12:[function(e,t,o){function n(e){var t=e||{},o=t.obj,r=Object.prototype.toString.call(o).slice(8,-1).toLowerCase();if("object"!=r&&"array"!=r)return o;var i={};"array"==r&&(i=[]);for(var s in o)o.hasOwnProperty(s)&&(i[s]=n({obj:o[s]}));return i}t.exports=n},{}],13:[function(e,t,o){function n(e){var t=e||{},o=t.obj,n=[];if(o instanceof Array)o.forEach(function(e,t){n.push([t,e])});else for(var r in o)o.hasOwnProperty(r)&&n.push({key:r,value:o[r]});return n}t.exports=n},{}],14:[function(e,t,o){function n(e){for(var t=r({default:{element:null},inherit:e}),o=0,n=0,s=i({element:t.element})[0];s;)o+=s.offsetTop,n+=s.offsetLeft,s=s.offsetParent;return{top:o,left:n}}var r=e("../function/extend.js"),i=e("../function/get-dom-array.js");t.exports=n},{"../function/extend.js":7,"../function/get-dom-array.js":9}],15:[function(e,t,o){function n(e){var t=e||{},o=t.to||"0",n=document.documentElement.scrollTop||document.body.scrollTop,r=0,i=null,s=function e(){r=Math.ceil((n-o)/6),n-=r,window.scrollTo(0,n),i=requestAnimationFrame(e),n<=1*o&&cancelAnimationFrame(i)};requestAnimationFrame(s)}t.exports=n},{}],16:[function(e,t,o){function n(e){var t=e||{},o=t.seconds;return{d:Math.floor(o/3600/24),h:Math.floor(o/3600%24),m:Math.floor(o%3600/60),s:Math.floor(o%60),a:o}}t.exports=n},{}],17:[function(e,t,o){function n(e){this.opt=r({default:{items:null,callback:{itemsClick:function(){}}},inherit:e}),this.itemsDom=i({element:this.opt.items}),this.init()}var r=e("../function/extend.js"),i=e("../function/get-dom-array.js");n.prototype.init=function(){this.power()},n.prototype.selectNothing=function(){this.itemsDom.forEach(function(e){e.checked=!1})},n.prototype.selectAll=function(){this.itemsDom.forEach(function(e){e.checked=!0})},n.prototype.selectReverse=function(){this.itemsDom.forEach(function(e){e.checked=!e.checked})},n.prototype.power=function(){var e=this;this.itemsDom.forEach(function(t){t.addEventListener("click",function(){var t=!0;e.itemsDom.forEach(function(e){0==e.checked&&(t=!1)}),e.opt.callback.itemsClick({isCheckedAll:t})})})},t.exports=n},{"../function/extend.js":7,"../function/get-dom-array.js":9}],18:[function(e,t,o){function n(e){var t=e||{},o=t.max,n=t.str;return n?(n.length>o&&(n=n.substring(0,o)),n):""}t.exports=n},{}],19:[function(e,t,o){function n(e){var t=r({default:{seconds:0,callback:{run:function(){},over:function(){}}},inherit:e}),o=t.seconds,n=t.callback.run,s=t.callback.over;if(o>=0){n(i({seconds:o}));var c=setInterval(function(){o--,o>=0?n(i({seconds:o})):(s(),clearInterval(c))},1e3)}o<0&&console.log("倒计时的秒数不能小于0")}var r=e("../function/extend.js"),i=e("../function/seconds-to-time.js");t.exports=n},{"../function/extend.js":7,"../function/seconds-to-time.js":16}],20:[function(e,t,o){function n(){for(var e=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],o=!0,n=0;n<t.length;n++)if(e.indexOf(t[n])>0){o=!1;break}return o}function r(){return navigator.userAgent.toLowerCase().match(/MicroMessenger/gi)}function i(){return window.navigator.appVersion.match(/iphone/gi)}function s(){return window.navigator.appVersion.match(/android/gi)}t.exports.isPc=n,t.exports.isWeiXin=r,t.exports.isIphone=i,t.exports.isAndroid=s},{}],21:[function(e,t,o){function n(e){this.opt=r({default:{callback:{success:function(){},fail:function(){}},interval:80,errorHeight:0},inherit:e}),this.isLoadOver=!1,this.init()}var r=e("../function/extend.js");n.prototype.init=function(){this.render(),this.power()},n.prototype.render=function(){var e=this.opt.callback,t=document.body.scrollHeight;(document.documentElement.scrollTop||document.body.scrollTop)+document.documentElement.clientHeight>=t-this.opt.errorHeight&&!this.isLoadOver?(this.isLoadOver=!0,e.success(this)):e.fail()},n.prototype.power=function(){var e=this,t=null;window.addEventListener("scroll",function(){clearTimeout(t),t=setTimeout(function(){e.render()},e.opt.interval)})},t.exports=n},{"../function/extend.js":7}],22:[function(e,t,o){function n(){var e=document;return{stopPropagation:function(e){e.stopPropagation()},preventDefault:function(e){e.preventDefault()},returnFalse:function(e){e.preventDefault(),e.stopPropagation()},noScroll:function(){e.addEventListener("touchmove",this.preventDefault,!1),e.documentElement.style.overflow="hidden"},yesScroll:function(){e.removeEventListener("touchmove",this.preventDefault,!1),e.documentElement.style.overflow="auto"}}}t.exports=n},{}],23:[function(e,t,o){function n(e){this.opt=r.extend({default:{wrap:".g-page",callback:{moduleDomCreateBefore:function(e){},moduleDomCreateAfter:function(e){},moduleDomRenderBefore:function(e){},moduleDomRenderAfter:function(e){},moduleDomRemoveBefore:function(e){},moduleDomRemoveAfter:function(e){},moduleDomShowBefore:function(e){},moduleDomShowAfter:function(e){},moduleDomHideBefore:function(e){},moduleDomHideAfter:function(e){},wrapDomCreateBefore:function(e){},wrapDomCreateAfter:function(e){},wrapDomRenderBefore:function(e){},wrapDomRenderAfter:function(e){},wrapDomRemoveBefore:function(e){},wrapDomRemoveAfter:function(e){}},config:{moduleDomCustomAttr:{},moduleDomRenderMethod:{method:"appendChild",child:null},moduleDomStyle:"",moduleDomIsShow:!0,moduleDomIsClearTimer:!0},data:{}},inherit:e}),this.moduleDom=null,this.wrapDom=null,this.moduleDomTimer={},this.init()}var r=e("../base/base.js");n.prototype.init=function(){this.render(),this.power()},n.prototype.render=function(){this.moduleDomRender(),this.wrapDomRender()},n.prototype.power=function(){},n.prototype.moduleDomCreate=function(){this.moduleDom=r.createElement({style:this.opt.config.moduleDomStyle,custom:this.opt.config.moduleDomCustomAttr,attribute:{className:"m-super-type",innerHTML:'\n                <div class="m-super-type-txt">周华飞爱侯丽杰,侯丽杰爱周华飞</div>\n            '}})},n.prototype.moduleDomRender=function(){this.moduleDomRemove();var e=this.opt.callback;e.moduleDomCreateBefore(this),this.moduleDomCreate(),e.moduleDomCreateAfter(this)},n.prototype.moduleDomRemove=function(){var e=this.opt.callback;e.moduleDomRemoveBefore(this),this.moduleDom&&this.moduleDom.parentNode&&this.moduleDom.parentNode.removeChild(this.moduleDom),this.moduleDomClearTimer(),e.moduleDomRemoveAfter(this)},n.prototype.moduleDomClearTimer=function(){if(this.opt.config.moduleDomIsClearTimer)for(var e in this.moduleDomTimer)this.moduleDomTimer.hasOwnProperty(e)&&(clearInterval(this.moduleDomTimer[e]),clearTimeout(this.moduleDomTimer[e]))},n.prototype.moduleDomShow=function(){var e=this.opt.callback;e.moduleDomShowBefore(this),this.wrapDom&&(this.opt.config.moduleDomIsShow=!0,this.wrapDomRenderMethod()),e.moduleDomShowAfter(this)},n.prototype.moduleDomHide=function(){var e=this.opt.callback;e.moduleDomHideBefore(this),this.moduleDom.parentNode&&(this.moduleDom.parentNode.removeChild(this.moduleDom),this.opt.config.moduleDomIsShow=!1),e.moduleDomHideAfter(this)},n.prototype.wrapDomCreate=function(){this.wrapDom=r.getDomArray({element:this.opt.wrap})[0]},n.prototype.wrapDomRender=function(){var e=this.opt.callback;e.wrapDomCreateBefore(this),this.wrapDomCreate(),e.wrapDomCreateAfter(this),this.wrapDom&&(e.moduleDomRenderBefore(this),e.wrapDomRenderBefore(this),this.wrapDomRenderMethod(),e.wrapDomRenderAfter(this),e.moduleDomRenderAfter(this))},n.prototype.wrapDomRenderMethod=function(){var e=this.opt.config;if(e.moduleDomIsShow){var t=e.moduleDomRenderMethod;if("insertBefore"==t.method){var o=r.getDomArray({element:t.child})[0];o?this.wrapDom.insertBefore(this.moduleDom,o):this.wrapDom.insertBefore(this.moduleDom,this.wrapDom.children[0])}"appendChild"==t.method&&this.wrapDom.appendChild(this.moduleDom)}},n.prototype.wrapDomRemove=function(){var e=this.opt.callback;e.wrapDomRemoveBefore(this),this.moduleDomRemove(),this.wrapDom&&this.wrapDom.parentNode.removeChild(this.wrapDom),e.wrapDomRemoveAfter(this)},n.prototype.getModuleDomHtml=function(){return this.moduleDom.outerHTML},t.exports=n},{"../base/base.js":1}]},{},[2]);