"use strict";!function t(e,o,n){function i(s,c){if(!o[s]){if(!e[s]){var a="function"==typeof require&&require;if(!c&&a)return a(s,!0);if(r)return r(s,!0);throw new Error("Cannot find module '"+s+"'")}var l=o[s]={exports:{}};e[s][0].call(l.exports,function(t){var o=e[s][1][t];return i(o?o:t)},l,l.exports,t,e,o,n)}return o[s].exports}for(var r="function"==typeof require&&require,s=0;s<n.length;s++)i(n[s]);return i}({1:[function(t,e,o){var n={Select:t("../function/select.js"),offset:t("../function/offset.js"),constructorInherit:t("../function/constructor-inherit.js"),isIPhone:t("../function/is-iphone.js"),isAndroid:t("../function/is-android.js"),isPc:t("../function/is-pc.js"),cookie:t("../function/cookie.js"),fillZero:t("../function/fill-zero.js"),getParent:t("../function/get-parent.js"),scrollTo:t("../function/scroll-to.js"),htmlToDom:t("../function/html-to-dom.js"),whetherDisableScroll:t("../function/whether-disable-scroll.js"),WhenScrollBottom:t("../function/when-scroll-bottom.js"),jsonToArray:t("../function/json-to-array.js"),secondsToTime:t("../function/seconds-to-time.js"),timeCountDown:t("../function/time-count-down.js"),strLimit:t("../function/str-limit.js"),getDomArray:t("../function/get-dom-array.js"),createElement:t("../function/create-element.js"),extend:t("../function/extend.js")};e.exports=n},{"../function/constructor-inherit.js":3,"../function/cookie.js":4,"../function/create-element.js":5,"../function/extend.js":6,"../function/fill-zero.js":7,"../function/get-dom-array.js":8,"../function/get-parent.js":9,"../function/html-to-dom.js":10,"../function/is-android.js":11,"../function/is-iphone.js":12,"../function/is-pc.js":13,"../function/json-to-array.js":14,"../function/offset.js":15,"../function/scroll-to.js":16,"../function/seconds-to-time.js":17,"../function/select.js":18,"../function/str-limit.js":19,"../function/time-count-down.js":20,"../function/when-scroll-bottom.js":21,"../function/whether-disable-scroll.js":22}],2:[function(t,e,o){!function(){var e=t("../modules/m-lazy-load.js");new e}(),function(){var e=t("../modules/m-footer.js");new e}()},{"../modules/m-footer.js":23,"../modules/m-lazy-load.js":24}],3:[function(t,e,o){function n(t){function e(t){this.opt=i({default:r,inherit:t}),o.superType.call(this,this.opt)}var o=i({default:{superType:null,parameter:{}},inherit:t}),n=o.superType,r=o.parameter;if("function"!=Object.prototype.toString.call(n).toLowerCase().slice(8,-1))return console.log("no find SuperType or SuperType error"),!1;for(var s in n.prototype)n.prototype.hasOwnProperty(s)&&(e.prototype[s]=n.prototype[s]);return e}var i=t("../function/extend.js");e.exports=n},{"../function/extend.js":6}],4:[function(t,e,o){function n(t){var e=t||{},o=e.name,n=e.value,i=e.expires,r=new Date,s=r.getTime();r.setTime(s+24*i*60*60*1e3),document.cookie=o+"="+n+"; expires="+r}function i(t){var e=t||{},o=e.name,n=document.cookie,i=n.split("; "),r="";return i.forEach(function(t){var e=t.split("=");if(e[0]==o)return r=e[1],!1}),r}function r(t){var e=t||{},o=e.name;n(o,"",-1)}var s={setCookie:n,getCookie:i,removeCookie:r};e.exports=s},{}],5:[function(t,e,o){function n(t){var e=t||{};e.elementName=e.elementName||"div",e.attribute=e.attribute||{},e.custom=e.custom||{},e.style=e.style||"";var o=document.createElement(""+e.elementName);for(var n in e.attribute)e.attribute.hasOwnProperty(n)&&(o[n]=e.attribute[n]);for(var i in e.custom)e.custom.hasOwnProperty(i)&&o.setAttribute("data-"+i,e.custom[i]);return e.style&&o.setAttribute("style",e.style),o}e.exports=n},{}],6:[function(t,e,o){function n(t){var e=t||{};e.default=e.default||{},e.inherit=e.inherit||{},e.isDeep=0!=e.isDeep||e.isDeep;var o=Object.prototype.toString.call(e.default).slice(8,-1).toLowerCase(),i=Object.prototype.toString.call(e.inherit).slice(8,-1).toLowerCase();if(o==i&&e.isDeep){for(var r in e.inherit)if(e.inherit.hasOwnProperty(r)){var s=Object.prototype.toString.call(e.default[r]).slice(8,-1).toLowerCase(),c=Object.prototype.toString.call(e.inherit[r]).slice(8,-1).toLowerCase();s==c&&e.isDeep?"object"==s?n({default:e.default[r],inherit:e.inherit[r]}):"array"==s?e.inherit[r].forEach(function(t,o){var i=Object.prototype.toString.call(e.default[r][o]).slice(8,-1).toLowerCase(),s=Object.prototype.toString.call(e.inherit[r][o]).slice(8,-1).toLowerCase();s==i&&e.isDeep&&"object"==i?n({default:e.default[r][o],inherit:e.inherit[r][o]}):e.default[r][o]=e.inherit[r][o]}):e.default[r]=e.inherit[r]:e.default[r]=e.inherit[r]}}else e.default=e.inherit;return e.default}e.exports=n},{}],7:[function(t,e,o){function n(t){var e=i({default:{num:null},inherit:t}),o=e.num;return o<10?"0"+o:""+o}var i=t("../function/extend.js");e.exports=n},{"../function/extend.js":6}],8:[function(t,e,o){function n(t){var e=i({default:{element:null},inherit:t}),o=null;return e.element&&("string"==Object.prototype.toString.call(e.element).slice(8,-1).toLowerCase()&&(o=[].slice.call(document.querySelectorAll(e.element))),1==e.element.nodeType&&(o=[e.element]),"htmlcollection"!=Object.prototype.toString.call(e.element).slice(8,-1).toLowerCase()&&"nodelist"!=Object.prototype.toString.call(e.element).slice(8,-1).toLowerCase()||(o=[].slice.call(e.element))),o}var i=t("../function/extend.js");e.exports=n},{"../function/extend.js":6}],9:[function(t,e,o){function n(t){var e=t||{},o=e.obj,n=e.selector;if(!o)return console.log("参数错误,第一参数需要一个元素节点对象"),null;if(!n)return o.parentNode;if("string"==typeof n)switch(o=o.parentNode,n.charAt(0)){case".":for(;o;){if(!o.classList)return console.log("no find class"),null;if(o.classList.contains(n.substring(1)))return o;o=o.parentNode}break;case"#":for(;o;){if(o==document)return console.log("no find id"),null;if(o.id==n.substring(1))return o;o=o.parentNode}break;default:for(;o;){if(o==document)return console.log("no find tagName"),null;if(o.tagName.toLowerCase()==n)return o;o=o.parentNode}}}e.exports=n},{}],10:[function(t,e,o){function n(t){var e=t||{},o=e.html,n=document.createElement("div");return n.innerHTML=o,n.children[0]}e.exports=n},{}],11:[function(t,e,o){function n(){return window.navigator.appVersion.match(/android/gi)}e.exports=n},{}],12:[function(t,e,o){function n(){return window.navigator.appVersion.match(/iphone/gi)}e.exports=n},{}],13:[function(t,e,o){function n(){for(var t=navigator.userAgent,e=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],o=!0,n=0;n<e.length;n++)if(t.indexOf(e[n])>0){o=!1;break}return o}e.exports=n},{}],14:[function(t,e,o){function n(t){var e=t||{},o=e.obj,n=[];if(o instanceof Array)o.forEach(function(t,e){n.push([e,t])});else for(var i in o)o.hasOwnProperty(i)&&n.push([i,o[i]]);return n}e.exports=n},{}],15:[function(t,e,o){function n(t){for(var e=i({default:{element:null},inherit:t}),o=0,n=0,s=r({element:e.element})[0];s;)o+=s.offsetTop,n+=s.offsetLeft,s=s.offsetParent;return{top:o,left:n}}var i=t("../function/extend.js"),r=t("../function/get-dom-array.js");e.exports=n},{"../function/extend.js":6,"../function/get-dom-array.js":8}],16:[function(t,e,o){function n(t){var e=t||{},o=e.to||"0",n=6,i=document.documentElement.scrollTop||document.body.scrollTop,r=0,s=null,c=function t(){r=Math.ceil((i-o)/n),i-=r,window.scrollTo(0,i),s=requestAnimationFrame(t),i<=1*o&&cancelAnimationFrame(s)};requestAnimationFrame(c)}e.exports=n},{}],17:[function(t,e,o){function n(t){var e=t||{},o=e.seconds,n=Math.floor(o/3600/24),i=Math.floor(o/3600%24),r=Math.floor(o%3600/60),s=Math.floor(o%60);return{d:n,h:i,m:r,s:s,a:o}}e.exports=n},{}],18:[function(t,e,o){function n(t){this.opt=i({default:{items:null,callback:{itemsClick:function(){}}},inherit:t}),this.itemsDom=r({element:this.opt.items}),this.init()}var i=t("../function/extend.js"),r=t("../function/get-dom-array.js");n.prototype.init=function(){this.power()},n.prototype.selectNothing=function(){this.itemsDom.forEach(function(t){t.checked=!1})},n.prototype.selectAll=function(){this.itemsDom.forEach(function(t){t.checked=!0})},n.prototype.selectReverse=function(){this.itemsDom.forEach(function(t){t.checked=!t.checked})},n.prototype.power=function(){var t=this;this.itemsDom.forEach(function(e){e.addEventListener("click",function(){var e=!0;t.itemsDom.forEach(function(t){0==t.checked&&(e=!1)}),t.opt.callback.itemsClick({isCheckedAll:e})})})},e.exports=n},{"../function/extend.js":6,"../function/get-dom-array.js":8}],19:[function(t,e,o){function n(t){var e=t||{},o=e.max,n=e.str;if(!n)return"";var i=n.length;return i>o&&(n=n.substring(0,o)),n}e.exports=n},{}],20:[function(t,e,o){function n(t){var e=i({default:{seconds:0,callback:{run:function(){},over:function(){}}},inherit:t}),o=e.seconds,n=e.callback.run,s=e.callback.over;if(o>=0){n(r({seconds:o}));var c=setInterval(function(){o--,o>=0?n(r({seconds:o})):(s(),clearInterval(c))},1e3)}o<0&&console.log("倒计时的秒数不能小于0")}var i=t("../function/extend.js"),r=t("../function/seconds-to-time.js");e.exports=n},{"../function/extend.js":6,"../function/seconds-to-time.js":17}],21:[function(t,e,o){function n(t){this.opt=i({default:{callback:{success:function(){},fail:function(){}},interval:80,errorHeight:100},inherit:t}),this.isLoadOver=!1,this.init()}var i=t("../function/extend.js");n.prototype.init=function(){this.render(),this.power()},n.prototype.render=function(){var t=this.opt.callback,e=document.body.scrollHeight,o=document.documentElement.scrollTop||document.body.scrollTop,n=document.documentElement.clientHeight;o+n>=e-this.opt.errorHeight&&!this.isLoadOver?(this.isLoadOver=!0,t.success(this)):t.fail()},n.prototype.power=function(){var t=this,e=null;window.addEventListener("scroll",function(){clearTimeout(e),e=setTimeout(function(){t.render()},t.opt.interval)})},e.exports=n},{"../function/extend.js":6}],22:[function(t,e,o){function n(){var t=document;return{stopPropagation:function(t){t.stopPropagation()},preventDefault:function(t){t.preventDefault()},returnFalse:function(t){t.preventDefault(),t.stopPropagation()},noScroll:function(){t.addEventListener("touchmove",this.preventDefault,!1),t.documentElement.style.overflow="hidden"},yesScroll:function(){t.removeEventListener("touchmove",this.preventDefault,!1),t.documentElement.style.overflow="auto"}}}e.exports=n},{}],23:[function(t,e,o){var n=t("../base/base.js"),i=t("../modules/m-super-type.js"),r=n.constructorInherit({superType:i,parameter:{callback:{moduleDomClick:function(){}},config:{moduleDomType:1}}});r.prototype.moduleDomCreate=function(){this.moduleDomClass="m-footer";var t="\n        "+this.moduleDomType0()+"\n        "+this.moduleDomType1()+"\n    ";this.moduleDom=n.createElement({attribute:{className:this.moduleDomClass,innerHTML:t}})},r.prototype.moduleDomType0=function(){return 0==this.opt.config.moduleDomType?(this.moduleDomClass="m-footer m-footer-type0",'\n            <div class="m-footer-wrap">\n                <div class="m-footer-header">\n                    <div class="m-footer-header-icon iconfont icon-shouye"></div>\n                </div>\n                <div class="m-footer-body">\n                    <div class="m-footer-body-icon iconfont icon-caidan"></div>\n                    <div class="m-footer-body-txt">全部商品</div>\n                    <div class="m-footer-body-child">\n                        <div class="m-footer-body-child-item"><a href="">child</a></div>\n                        <div class="m-footer-body-child-item"><a href="">child</a></div>\n                    </div>\n                </div>\n                <a class="m-footer-body" href="">\n                    <div class="m-footer-body-txt">上新</div>      \n                </a>\n                <div class="m-footer-body">\n                    <div class="m-footer-body-icon iconfont icon-caidan"></div>\n                    <div class="m-footer-body-txt">店铺活动</div>\n                    <div class="m-footer-body-child">\n                        <div class="m-footer-body-child-item"><a href="">child</a></div>\n                        <div class="m-footer-body-child-item"><a href="">child</a></div>\n                    </div>\n                </div>\n            </div>\n        '):""},r.prototype.moduleDomType1=function(){return 1==this.opt.config.moduleDomType?(this.moduleDomClass="m-footer m-footer-type1",'\n            <div class="m-footer-wrap">\n                <a class="m-footer-body" href="">\n                    <div class="m-footer-body-icon iconfont icon-shouye"></div>\n                    <div class="m-footer-body-txt">首页</div>\n                </a>\n                <a class="m-footer-body" href="">\n                    <div class="m-footer-body-icon iconfont icon-fenxiao"></div>\n                    <div class="m-footer-body-txt">我要开店</div>\n                </a>\n                <a class="m-footer-body" href="">\n                    <div class="m-footer-body-icon iconfont icon-gouwuche"></div>\n                    <div class="m-footer-body-txt">购物车</div>\n                </a>\n                <a class="m-footer-body" href="">\n                    <div class="m-footer-body-icon iconfont icon-kefu"></div>\n                    <div class="m-footer-body-txt">客服</div>\n                </a>\n                <a class="m-footer-body" href="">\n                    <div class="m-footer-body-icon iconfont icon-wode"></div>\n                    <div class="m-footer-body-txt">我的</div>\n                </a>\n            </div>\n        '):""},e.exports=r},{"../base/base.js":1,"../modules/m-super-type.js":25}],24:[function(t,e,o){function n(t){this.opt=i.extend({default:{element:".m-lazy-load",moreHeight:0,interval:80},inherit:t}),this.clientHeight=document.documentElement.clientHeight,this.init()}var i=t("../base/base.js");n.prototype.init=function(){this.render(),this.power()},n.prototype.render=function(){var t=this.opt.moreHeight,e=document.documentElement.scrollTop||document.body.scrollTop,o=e-t,n=this.clientHeight+o+t,r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUCB1jYAACAAAFAAGNu5vzAAAAAElFTkSuQmCC",s=i.getDomArray({element:this.opt.element});s.forEach(function(t){"img"==t.tagName.toLowerCase()&&(t.getAttribute("src")||(t.src=r),t.setAttribute("height","100%"),t.setAttribute("width","100%"))}),s.forEach(function(t){if(t.offsetWidth){var e=i.offset({element:t}).top,r=e+t.offsetHeight;r>=o&&e<=n&&("img"==t.tagName.toLowerCase()?(t.dataset.src&&(t.src=t.dataset.src),t.removeAttribute("height"),t.removeAttribute("width")):t.dataset.src&&(t.style.backgroundImage="url("+t.dataset.src+")"),t.classList.remove("m-lazy-load"),t.classList.add("m-lazy-load-active"))}})},n.prototype.power=function(){var t=this,e=null;window.addEventListener("scroll",function(){clearTimeout(e),e=setTimeout(function(){t.render()},t.opt.interval)})},e.exports=n},{"../base/base.js":1}],25:[function(t,e,o){function n(t){this.opt=i.extend({default:{wrap:".g-page",callback:{moduleDomCreateBefore:function(){},moduleDomCreateAfter:function(){},moduleDomRenderBefore:function(){},moduleDomRenderAfter:function(){},wrapDomCreateBefore:function(){},wrapDomCreateAfter:function(){}},config:{moduleDomStyle:"",moduleDomIsShow:!0,moduleDomIsClearTimer:!0},data:{}},inherit:t}),this.moduleDom=null,this.wrapDom=null,this.moduleDomTimer={},this.init()}var i=t("../base/base.js");n.prototype.init=function(){this.render(),this.power()},n.prototype.render=function(){this.moduleDomRender(),this.wrapDomRender()},n.prototype.power=function(){},n.prototype.moduleDomCreate=function(){this.moduleDom=i.createElement({style:this.opt.config.moduleDomStyle,attribute:{className:"m-test",innerHTML:'\n                <div class="m-test-txt">周华飞爱侯丽杰,侯丽杰爱周华飞</div>\n            '}})},n.prototype.moduleDomRender=function(){var t=this.opt.callback;t.moduleDomCreateBefore(this),this.moduleDomCreate(),t.moduleDomCreateAfter(this)},n.prototype.moduleDomRemove=function(){this.moduleDom.parentNode&&this.moduleDom.parentNode.removeChild(this.moduleDom),this.moduleDomClearTimer()},n.prototype.moduleDomClearTimer=function(){if(this.opt.config.moduleDomIsClearTimer)for(var t in this.moduleDomTimer)this.moduleDomTimer.hasOwnProperty(t)&&(clearInterval(this.moduleDomTimer[t]),clearTimeout(this.moduleDomTimer[t]))},n.prototype.moduleDomShow=function(){this.wrapDom&&this.wrapDom.appendChild(this.moduleDom)},n.prototype.moduleDomHide=function(){this.moduleDom.parentNode&&this.moduleDom.parentNode.removeChild(this.moduleDom)},n.prototype.wrapDomCreate=function(){this.wrapDom=i.getDomArray({element:this.opt.wrap})[0]},n.prototype.wrapDomRender=function(){var t=this.opt.callback;t.wrapDomCreateBefore(this),this.wrapDomCreate(),t.wrapDomCreateAfter(this),this.wrapDom&&(t.moduleDomRenderBefore(this),this.opt.config.moduleDomIsShow&&this.wrapDom.appendChild(this.moduleDom),t.moduleDomRenderAfter(this))},n.prototype.wrapDomRemove=function(){this.moduleDomRemove(),this.wrapDom&&this.wrapDom.parentNode.removeChild(this.wrapDom)},e.exports=n},{"../base/base.js":1}]},{},[2]);