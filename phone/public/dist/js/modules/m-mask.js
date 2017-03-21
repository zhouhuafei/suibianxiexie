"use strict";!function t(e,o,n){function r(s,a){if(!o[s]){if(!e[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(i)return i(s,!0);throw new Error("Cannot find module '"+s+"'")}var u=o[s]={exports:{}};e[s][0].call(u.exports,function(t){var o=e[s][1][t];return r(o?o:t)},u,u.exports,t,e,o,n)}return o[s].exports}for(var i="function"==typeof require&&require,s=0;s<n.length;s++)r(n[s]);return r}({1:[function(t,e,o){var n={isPc:t("../function/is-pc"),cookie:t("../function/cookie"),fillZero:t("../function/fill-zero"),getParent:t("../function/get-parent"),goTop:t("../function/go-top"),htmlToDom:t("../function/html-to-dom"),whetherDisableScroll:t("../function/whether-disable-scroll"),whenScrollBottom:t("../function/when-scroll-bottom"),jsonToArray:t("../function/json-to-array"),secondsToTime:t("../function/seconds-to-time"),timeCountDown:t("../function/time-count-down"),strLimit:t("../function/str-limit"),getOneDom:t("../function/get-one-dom"),createElement:t("../function/create-element"),extend:t("../function/extend")};e.exports=n},{"../function/cookie":3,"../function/create-element":4,"../function/extend":5,"../function/fill-zero":6,"../function/get-one-dom":7,"../function/get-parent":8,"../function/go-top":9,"../function/html-to-dom":10,"../function/is-pc":11,"../function/json-to-array":12,"../function/seconds-to-time":13,"../function/str-limit":14,"../function/time-count-down":15,"../function/when-scroll-bottom":16,"../function/whether-disable-scroll":17}],2:[function(t,e,o){function n(t){this.opt=r.extend({defaults:{parent:"body",callback:{click:function(){}},config:{moduleStyle:"",isTransparent:!1,isClearTimer:!0,isShowModule:!1},data:{info:"周华飞测试"}},inherits:t}),this.moduleDom=null,this.parentDom=null,this.timer={},this.init()}var r=t("../base/base");n.prototype.init=function(){this.render(),this.power()},n.prototype.render=function(){this.renderModuleDom(),this.renderParentDom()},n.prototype.renderModuleDom=function(){var t="";this.opt.config.isTransparent&&(t="m-mask-transparent"),this.moduleDom=r.createElement({style:this.opt.config.moduleStyle,attribute:{className:"m-mask "+t,innerHTML:""}})},n.prototype.renderParentDom=function(){if(this.parentDom=r.getOneDom({dom:this.opt.parent}),!this.parentDom)return!1;this.parentDom&&this.opt.config.isShowModule&&this.parentDom.appendChild(this.moduleDom)},n.prototype.removeModuleDom=function(){this.moduleDom.parentNode&&this.moduleDom.parentNode.removeChild(this.moduleDom),this.clearTimer()},n.prototype.clearTimer=function(){if(this.opt.config.isClearTimer)for(var t in this.timer)this.timer.hasOwnProperty(t)&&(clearInterval(this.timer[t]),clearTimeout(this.timer[t]))},n.prototype.removeParentDom=function(){this.removeModuleDom(),this.parentDom&&this.parentDom.parentNode.removeChild(this.parentDom)},n.prototype.show=function(){this.parentDom&&this.parentDom.appendChild(this.moduleDom)},n.prototype.hide=function(){this.moduleDom.parentNode&&this.moduleDom.parentNode.removeChild(this.moduleDom)},n.prototype.power=function(){this.events()},n.prototype.events=function(){var t=this;this.moduleDom.addEventListener("click",function(e){t.opt.callback.click(),e.stopPropagation()})},e.exports=n},{"../base/base":1}],3:[function(t,e,o){function n(t){var e=t||{},o=e.name,n=e.value,r=e.expires,i=new Date,s=i.getTime();i.setTime(s+24*r*60*60*1e3),document.cookie=o+"="+n+"; expires="+i}function r(t){var e=t||{},o=e.name,n=document.cookie,r=n.split("; "),i="";return r.forEach(function(t){var e=t.split("=");if(e[0]==o)return i=e[1],!1}),i}function i(t){n((t||{}).name,"",-1)}var s={setCookie:n,getCookie:r,removeCookie:i};e.exports=s},{}],4:[function(t,e,o){function n(t){var e=t||{};e.elementName=e.elementName||"div",e.attribute=e.attribute||{},e.custom=e.custom||{},e.style=e.style||"";var o=document.createElement(""+e.elementName);for(var n in e.attribute)e.attribute.hasOwnProperty(n)&&(o[n]=e.attribute[n]);for(var r in e.custom)e.custom.hasOwnProperty(r)&&o.setAttribute("data-"+r,e.custom[r]);return e.style&&o.setAttribute("style",e.style),o}e.exports=n},{}],5:[function(t,e,o){function n(t){var e=t||{};e.defaults=e.defaults||{},e.inherits=e.inherits||{},e.isDeep=0!=e.isDeep||e.isDeep;for(var o in e.inherits)if(e.inherits.hasOwnProperty(o)){var r=Object.prototype.toString.call(e.defaults[o]).slice(8,-1).toLowerCase(),i=Object.prototype.toString.call(e.inherits[o]).slice(8,-1).toLowerCase();r==i&&e.isDeep?"object"==r?n({defaults:e.defaults[o],inherits:e.inherits[o]}):"array"==r?e.inherits[o].forEach(function(t,r){var i=Object.prototype.toString.call(e.defaults[o][r]).slice(8,-1).toLowerCase();Object.prototype.toString.call(e.inherits[o][r]).slice(8,-1).toLowerCase()==i&&e.isDeep&&"object"==i?n({defaults:e.defaults[o][r],inherits:e.inherits[o][r]}):e.defaults[o][r]=e.inherits[o][r]}):e.defaults[o]=e.inherits[o]:e.defaults[o]=e.inherits[o]}return e.defaults}e.exports=n},{}],6:[function(t,e,o){function n(t){var e=t||{},o=e.num;return o<10?"0"+o:""+o}e.exports=n},{}],7:[function(t,e,o){function n(t){var e=t||{};e.dom=e.dom||"body";var o=null;return e.dom&&("string"==Object.prototype.toString.call(e.dom).slice(8,-1).toLowerCase()&&(o=document.querySelector(e.dom)),e.dom.nodeType&&1==e.dom.nodeType&&(o=e.dom)),o}e.exports=n},{}],8:[function(t,e,o){function n(t){var e=t||{},o=e.obj,n=e.selector;if(!o)return console.log("参数错误,第一参数需要一个元素节点对象"),null;if(!n)return o.parentNode;if("string"==typeof n)switch(o=o.parentNode,n.charAt(0)){case".":for(;o;){if(!o.classList)return console.log("no find class"),null;if(o.classList.contains(n.substring(1)))return o;o=o.parentNode}break;case"#":for(;o;){if(o==document)return console.log("no find id"),null;if(o.id==n.substring(1))return o;o=o.parentNode}break;default:for(;o;){if(o==document)return console.log("no find tagName"),null;if(o.tagName.toLowerCase()==n)return o;o=o.parentNode}}}e.exports=n},{}],9:[function(t,e,o){function n(t){var e=t||{},o=e.obj;if(!o)return console.log("parameter error"),!1;var n=document,r=n.documentElement.scrollTop||n.body.scrollTop,i=0,s=null,a=function t(){i=Math.ceil(r/6),r-=i,window.scrollTo(0,r),s=requestAnimationFrame(t),0==r&&cancelAnimationFrame(s)};o.addEventListener("click",function(t){t.stopPropagation(),t.preventDefault(),r=n.documentElement.scrollTop||n.body.scrollTop,requestAnimationFrame(a)}),n.addEventListener("touchstart",function(){cancelAnimationFrame(s)})}e.exports=n},{}],10:[function(t,e,o){function n(t){var e=t||{},o=e.html,n=document.createElement("div");return n.innerHTML=o,n.children[0]}e.exports=n},{}],11:[function(t,e,o){function n(){for(var t=navigator.userAgent,e=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],o=!0,n=0;n<e.length;n++)if(t.indexOf(e[n])>0){o=!1;break}return o}e.exports=n},{}],12:[function(t,e,o){function n(t){var e=t||{},o=e.obj,n=[];if(o instanceof Array)o.forEach(function(t,e){n.push([e,t])});else for(var r in o)o.hasOwnProperty(r)&&n.push([r,o[r]]);return n}e.exports=n},{}],13:[function(t,e,o){function n(t){var e=t||{},o=e.seconds;return{d:Math.floor(o/3600/24),h:Math.floor(o/3600%24),m:Math.floor(o%3600/60),s:Math.floor(o%60),a:o}}e.exports=n},{}],14:[function(t,e,o){function n(t){var e=t||{},o=e.max,n=e.str;return n?(n.length>o&&(n=n.substring(0,o)),n):""}e.exports=n},{}],15:[function(t,e,o){function n(t){var e=t||{},o=e.seconds,n=e.runCallback,r=e.overCallback,i=function(t){var e=t.seconds;return{d:Math.floor(e/3600/24),h:Math.floor(e/3600%24),m:Math.floor(e%3600/60),s:Math.floor(e%60),a:e}};if(o<=0)o=0,n&&n(i({seconds:o})),r&&r();else{n&&n(i({seconds:o}));var s=setInterval(function(){o--,n&&n(i({seconds:o})),o<0&&(o=0,clearInterval(s),n&&n(i({seconds:o})),r&&r())},1e3)}}e.exports=n},{}],16:[function(t,e,o){function n(t){var e=t||{},o=e.success||function(){},n=e.fail||function(){},r=document,i=e.interval||80,s=!0,a=function(){var t=r.body.offsetHeight;(r.documentElement.scrollTop||r.body.scrollTop)+r.documentElement.clientHeight>=t-100&&s?(s=!1,o(),setTimeout(function(){s=!0},1e3)):n()};a();var c=null,u=function(){clearTimeout(c),c=setTimeout(function(){a()},i)};window.addEventListener("scroll",function(){u()})}e.exports=n},{}],17:[function(t,e,o){function n(){var t=document;return{stopPropagation:function(t){t.stopPropagation()},preventDefault:function(t){t.preventDefault()},returnFalse:function(t){t.preventDefault(),t.stopPropagation()},noScroll:function(){t.addEventListener("touchmove",this.preventDefault,!1),t.documentElement.style.overflow="hidden"},yesScroll:function(){t.removeEventListener("touchmove",this.preventDefault,!1),t.documentElement.style.overflow="auto"}}}e.exports=n},{}]},{},[2]);