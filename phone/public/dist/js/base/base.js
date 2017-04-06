"use strict";!function t(e,n,o){function i(c,s){if(!n[c]){if(!e[c]){var u="function"==typeof require&&require;if(!s&&u)return u(c,!0);if(r)return r(c,!0);throw new Error("Cannot find module '"+c+"'")}var l=n[c]={exports:{}};e[c][0].call(l.exports,function(t){var n=e[c][1][t];return i(n?n:t)},l,l.exports,t,e,n,o)}return n[c].exports}for(var r="function"==typeof require&&require,c=0;c<o.length;c++)i(o[c]);return i}({1:[function(t,e,n){var o={Select:t("../function/select.js"),offset:t("../function/offset.js"),constructorInherit:t("../function/constructor-inherit.js"),isIPhone:t("../function/is-iphone.js"),isAndroid:t("../function/is-android.js"),isPc:t("../function/is-pc.js"),cookie:t("../function/cookie.js"),fillZero:t("../function/fill-zero.js"),getParent:t("../function/get-parent.js"),scrollTo:t("../function/scroll-to.js"),htmlToDom:t("../function/html-to-dom.js"),whetherDisableScroll:t("../function/whether-disable-scroll.js"),WhenScrollBottom:t("../function/when-scroll-bottom.js"),jsonToArray:t("../function/json-to-array.js"),secondsToTime:t("../function/seconds-to-time.js"),timeCountDown:t("../function/time-count-down.js"),strLimit:t("../function/str-limit.js"),getDomArray:t("../function/get-dom-array.js"),createElement:t("../function/create-element.js"),extend:t("../function/extend.js")};e.exports=o},{"../function/constructor-inherit.js":2,"../function/cookie.js":3,"../function/create-element.js":4,"../function/extend.js":5,"../function/fill-zero.js":6,"../function/get-dom-array.js":7,"../function/get-parent.js":8,"../function/html-to-dom.js":9,"../function/is-android.js":10,"../function/is-iphone.js":11,"../function/is-pc.js":12,"../function/json-to-array.js":13,"../function/offset.js":14,"../function/scroll-to.js":15,"../function/seconds-to-time.js":16,"../function/select.js":17,"../function/str-limit.js":18,"../function/time-count-down.js":19,"../function/when-scroll-bottom.js":20,"../function/whether-disable-scroll.js":21}],2:[function(t,e,n){function o(t){function e(t){this.opt=i({default:r,inherit:t}),n.superType.call(this,this.opt)}var n=i({default:{superType:null,parameter:{}},inherit:t}),o=n.superType,r=n.parameter;if("function"!=Object.prototype.toString.call(o).toLowerCase().slice(8,-1))return console.log("no find SuperType or SuperType error"),!1;for(var c in o.prototype)o.prototype.hasOwnProperty(c)&&(e.prototype[c]=o.prototype[c]);return e}var i=t("../function/extend.js");e.exports=o},{"../function/extend.js":5}],3:[function(t,e,n){function o(t){var e=t||{},n=e.name,o=e.value,i=e.expires,r=new Date,c=r.getTime();r.setTime(c+24*i*60*60*1e3),document.cookie=n+"="+o+"; expires="+r}function i(t){var e=t||{},n=e.name,o=document.cookie,i=o.split("; "),r="";return i.forEach(function(t){var e=t.split("=");if(e[0]==n)return r=e[1],!1}),r}function r(t){var e=t||{},n=e.name;o(n,"",-1)}var c={setCookie:o,getCookie:i,removeCookie:r};e.exports=c},{}],4:[function(t,e,n){function o(t){var e=t||{};e.elementName=e.elementName||"div",e.attribute=e.attribute||{},e.custom=e.custom||{},e.style=e.style||"";var n=document.createElement(""+e.elementName);for(var o in e.attribute)e.attribute.hasOwnProperty(o)&&(n[o]=e.attribute[o]);for(var i in e.custom)e.custom.hasOwnProperty(i)&&n.setAttribute("data-"+i,e.custom[i]);return e.style&&n.setAttribute("style",e.style),n}e.exports=o},{}],5:[function(t,e,n){function o(t){var e=t||{};e.default=e.default||{},e.inherit=e.inherit||{},e.isDeep=0!=e.isDeep||e.isDeep;var n=Object.prototype.toString.call(e.default).slice(8,-1).toLowerCase(),i=Object.prototype.toString.call(e.inherit).slice(8,-1).toLowerCase();if(n==i&&e.isDeep){for(var r in e.inherit)if(e.inherit.hasOwnProperty(r)){var c=Object.prototype.toString.call(e.default[r]).slice(8,-1).toLowerCase(),s=Object.prototype.toString.call(e.inherit[r]).slice(8,-1).toLowerCase();c==s&&e.isDeep?"object"==c?o({default:e.default[r],inherit:e.inherit[r]}):"array"==c?e.inherit[r].forEach(function(t,n){var i=Object.prototype.toString.call(e.default[r][n]).slice(8,-1).toLowerCase(),c=Object.prototype.toString.call(e.inherit[r][n]).slice(8,-1).toLowerCase();c==i&&e.isDeep&&"object"==i?o({default:e.default[r][n],inherit:e.inherit[r][n]}):e.default[r][n]=e.inherit[r][n]}):e.default[r]=e.inherit[r]:e.default[r]=e.inherit[r]}}else e.default=e.inherit;return e.default}e.exports=o},{}],6:[function(t,e,n){function o(t){var e=i({default:{num:null},inherit:t}),n=e.num;return n<10?"0"+n:""+n}var i=t("../function/extend.js");e.exports=o},{"../function/extend.js":5}],7:[function(t,e,n){function o(t){var e=i({default:{element:null},inherit:t}),n=null;return e.element&&("string"==Object.prototype.toString.call(e.element).slice(8,-1).toLowerCase()&&(n=[].slice.call(document.querySelectorAll(e.element))),1==e.element.nodeType&&(n=[e.element]),"htmlcollection"!=Object.prototype.toString.call(e.element).slice(8,-1).toLowerCase()&&"nodelist"!=Object.prototype.toString.call(e.element).slice(8,-1).toLowerCase()||(n=[].slice.call(e.element))),n}var i=t("../function/extend.js");e.exports=o},{"../function/extend.js":5}],8:[function(t,e,n){function o(t){var e=t||{},n=e.obj,o=e.selector;if(!n)return console.log("参数错误,第一参数需要一个元素节点对象"),null;if(!o)return n.parentNode;if("string"==typeof o)switch(n=n.parentNode,o.charAt(0)){case".":for(;n;){if(!n.classList)return console.log("no find class"),null;if(n.classList.contains(o.substring(1)))return n;n=n.parentNode}break;case"#":for(;n;){if(n==document)return console.log("no find id"),null;if(n.id==o.substring(1))return n;n=n.parentNode}break;default:for(;n;){if(n==document)return console.log("no find tagName"),null;if(n.tagName.toLowerCase()==o)return n;n=n.parentNode}}}e.exports=o},{}],9:[function(t,e,n){function o(t){var e=t||{},n=e.html,o=document.createElement("div");return o.innerHTML=n,o.children[0]}e.exports=o},{}],10:[function(t,e,n){function o(){return window.navigator.appVersion.match(/android/gi)}e.exports=o},{}],11:[function(t,e,n){function o(){return window.navigator.appVersion.match(/iphone/gi)}e.exports=o},{}],12:[function(t,e,n){function o(){for(var t=navigator.userAgent,e=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],n=!0,o=0;o<e.length;o++)if(t.indexOf(e[o])>0){n=!1;break}return n}e.exports=o},{}],13:[function(t,e,n){function o(t){var e=t||{},n=e.obj,o=[];if(n instanceof Array)n.forEach(function(t,e){o.push([e,t])});else for(var i in n)n.hasOwnProperty(i)&&o.push([i,n[i]]);return o}e.exports=o},{}],14:[function(t,e,n){function o(t){for(var e=i({default:{element:null},inherit:t}),n=0,o=0,c=r({element:e.element})[0];c;)n+=c.offsetTop,o+=c.offsetLeft,c=c.offsetParent;return{top:n,left:o}}var i=t("../function/extend.js"),r=t("../function/get-dom-array.js");e.exports=o},{"../function/extend.js":5,"../function/get-dom-array.js":7}],15:[function(t,e,n){function o(t){var e=t||{},n=e.to||"0",o=6,i=document.documentElement.scrollTop||document.body.scrollTop,r=0,c=null,s=function t(){r=Math.ceil((i-n)/o),i-=r,window.scrollTo(0,i),c=requestAnimationFrame(t),i<=1*n&&cancelAnimationFrame(c)};requestAnimationFrame(s)}e.exports=o},{}],16:[function(t,e,n){function o(t){var e=t||{},n=e.seconds,o=Math.floor(n/3600/24),i=Math.floor(n/3600%24),r=Math.floor(n%3600/60),c=Math.floor(n%60);return{d:o,h:i,m:r,s:c,a:n}}e.exports=o},{}],17:[function(t,e,n){function o(t){this.opt=i({default:{items:null,callback:{itemsClick:function(){}}},inherit:t}),this.itemsDom=r({element:this.opt.items}),this.init()}var i=t("../function/extend.js"),r=t("../function/get-dom-array.js");o.prototype.init=function(){this.power()},o.prototype.selectNothing=function(){this.itemsDom.forEach(function(t){t.checked=!1})},o.prototype.selectAll=function(){this.itemsDom.forEach(function(t){t.checked=!0})},o.prototype.selectReverse=function(){this.itemsDom.forEach(function(t){t.checked=!t.checked})},o.prototype.power=function(){var t=this;this.itemsDom.forEach(function(e){e.addEventListener("click",function(){var e=!0;t.itemsDom.forEach(function(t){0==t.checked&&(e=!1)}),t.opt.callback.itemsClick({isCheckedAll:e})})})},e.exports=o},{"../function/extend.js":5,"../function/get-dom-array.js":7}],18:[function(t,e,n){function o(t){var e=t||{},n=e.max,o=e.str;if(!o)return"";var i=o.length;return i>n&&(o=o.substring(0,n)),o}e.exports=o},{}],19:[function(t,e,n){function o(t){var e=i({default:{seconds:0,callback:{run:function(){},over:function(){}}},inherit:t}),n=e.seconds,o=e.callback.run,c=e.callback.over;if(n>=0){o(r({seconds:n}));var s=setInterval(function(){n--,n>=0?o(r({seconds:n})):(c(),clearInterval(s))},1e3)}n<0&&console.log("倒计时的秒数不能小于0")}var i=t("../function/extend.js"),r=t("../function/seconds-to-time.js");e.exports=o},{"../function/extend.js":5,"../function/seconds-to-time.js":16}],20:[function(t,e,n){function o(t){this.opt=i({default:{callback:{success:function(){},fail:function(){}},interval:80,errorHeight:100},inherit:t}),this.isLoadOver=!1,this.init()}var i=t("../function/extend.js");o.prototype.init=function(){this.render(),this.power()},o.prototype.render=function(){var t=this.opt.callback,e=document.body.scrollHeight,n=document.documentElement.scrollTop||document.body.scrollTop,o=document.documentElement.clientHeight;n+o>=e-this.opt.errorHeight&&!this.isLoadOver?(this.isLoadOver=!0,t.success(this)):t.fail()},o.prototype.power=function(){var t=this,e=null;window.addEventListener("scroll",function(){clearTimeout(e),e=setTimeout(function(){t.render()},t.opt.interval)})},e.exports=o},{"../function/extend.js":5}],21:[function(t,e,n){function o(){var t=document;return{stopPropagation:function(t){t.stopPropagation()},preventDefault:function(t){t.preventDefault()},returnFalse:function(t){t.preventDefault(),t.stopPropagation()},noScroll:function(){t.addEventListener("touchmove",this.preventDefault,!1),t.documentElement.style.overflow="hidden"},yesScroll:function(){t.removeEventListener("touchmove",this.preventDefault,!1),t.documentElement.style.overflow="auto"}}}e.exports=o},{}]},{},[1]);