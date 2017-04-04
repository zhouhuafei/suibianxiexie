"use strict";!function e(t,o,n){function r(s,l){if(!o[s]){if(!t[s]){var a="function"==typeof require&&require;if(!l&&a)return a(s,!0);if(i)return i(s,!0);throw new Error("Cannot find module '"+s+"'")}var u=o[s]={exports:{}};t[s][0].call(u.exports,function(e){var o=t[s][1][e];return r(o?o:e)},u,u.exports,e,t,o,n)}return o[s].exports}for(var i="function"==typeof require&&require,s=0;s<n.length;s++)r(n[s]);return r}({1:[function(e,t,o){var n={Select:e("../function/select.js"),offset:e("../function/offset.js"),constructorInherit:e("../function/constructor-inherit.js"),isIPhone:e("../function/is-iphone.js"),isAndroid:e("../function/is-android.js"),isPc:e("../function/is-pc.js"),cookie:e("../function/cookie.js"),fillZero:e("../function/fill-zero.js"),getParent:e("../function/get-parent.js"),scrollTo:e("../function/scroll-to.js"),htmlToDom:e("../function/html-to-dom.js"),whetherDisableScroll:e("../function/whether-disable-scroll.js"),WhenScrollBottom:e("../function/when-scroll-bottom.js"),jsonToArray:e("../function/json-to-array.js"),secondsToTime:e("../function/seconds-to-time.js"),timeCountDown:e("../function/time-count-down.js"),strLimit:e("../function/str-limit.js"),getDomArray:e("../function/get-dom-array.js"),createElement:e("../function/create-element.js"),extend:e("../function/extend.js")};t.exports=n},{"../function/constructor-inherit.js":3,"../function/cookie.js":4,"../function/create-element.js":5,"../function/extend.js":6,"../function/fill-zero.js":7,"../function/get-dom-array.js":8,"../function/get-parent.js":9,"../function/html-to-dom.js":10,"../function/is-android.js":11,"../function/is-iphone.js":12,"../function/is-pc.js":13,"../function/json-to-array.js":14,"../function/offset.js":15,"../function/scroll-to.js":16,"../function/seconds-to-time.js":17,"../function/select.js":18,"../function/str-limit.js":19,"../function/time-count-down.js":20,"../function/when-scroll-bottom.js":21,"../function/whether-disable-scroll.js":22}],2:[function(e,t,o){var n=e("../base/base.js"),r=e("../modules/m-super-type.js"),i=n.constructorInherit({superType:r,parameter:{data:{header:[{html:"undefined-header0"},{html:"undefined-header1"},{html:"undefined-header2"}],body:[[{html:"undefined-body0-0"},{html:"undefined-body0-1"},{html:"undefined-body0-2"}],[{html:"undefined-body1-0"},{html:"undefined-body1-1"},{html:"undefined-body1-2"}]],footer:""}}});i.prototype.moduleDomCreate=function(){this.moduleDom=n.createElement({attribute:{className:"m-table",innerHTML:'\n                <div class="m-table-header">\n                    <div class="m-table-row">\n                        '+this.moduleDomCreateHeader()+'\n                    </div>\n                </div>\n                <div class="m-table-body">\n                    '+this.moduleDomCreateBody()+'\n                </div>\n                <div class="m-table-footer">\n                    '+this.moduleDomCreateFooter()+"\n                </div>\n            "}})},i.prototype.moduleDomCreateHeader=function(){var e="";return this.opt.data.header.forEach(function(t){e+='\n            <div class="m-table-col">\n                <div class="m-table-col-wrap">\n                    '+t.html+"\n                </div>\n            </div>\n        "}),e},i.prototype.moduleDomCreateBody=function(){var e="";return this.opt.data.body.forEach(function(t){var o="";t.forEach(function(e){o+='\n                <div class="m-table-col">\n                    <div class="m-table-col-wrap">\n                        '+e.html+"\n                    </div>\n                </div>\n            "}),e+='<div class="m-table-row">'+o+"</div>"}),e},i.prototype.moduleDomCreateFooter=function(){return this.opt.data.footer},t.exports=i},{"../base/base.js":1,"../modules/m-super-type.js":23}],3:[function(e,t,o){function n(e){function t(e){this.opt=r({default:i,inherit:e}),o.superType.call(this,this.opt)}var o=r({default:{superType:null,parameter:{}},inherit:e}),n=o.superType,i=o.parameter;if("function"!=Object.prototype.toString.call(n).toLowerCase().slice(8,-1))return console.log("no find SuperType or SuperType error"),!1;for(var s in n.prototype)n.prototype.hasOwnProperty(s)&&(t.prototype[s]=n.prototype[s]);return t}var r=e("../function/extend.js");t.exports=n},{"../function/extend.js":6}],4:[function(e,t,o){function n(e){var t=e||{},o=t.name,n=t.value,r=t.expires,i=new Date,s=i.getTime();i.setTime(s+24*r*60*60*1e3),document.cookie=o+"="+n+"; expires="+i}function r(e){var t=e||{},o=t.name,n=document.cookie,r=n.split("; "),i="";return r.forEach(function(e){var t=e.split("=");if(t[0]==o)return i=t[1],!1}),i}function i(e){var t=e||{},o=t.name;n(o,"",-1)}var s={setCookie:n,getCookie:r,removeCookie:i};t.exports=s},{}],5:[function(e,t,o){function n(e){var t=e||{};t.elementName=t.elementName||"div",t.attribute=t.attribute||{},t.custom=t.custom||{},t.style=t.style||"";var o=document.createElement(""+t.elementName);for(var n in t.attribute)t.attribute.hasOwnProperty(n)&&(o[n]=t.attribute[n]);for(var r in t.custom)t.custom.hasOwnProperty(r)&&o.setAttribute("data-"+r,t.custom[r]);return t.style&&o.setAttribute("style",t.style),o}t.exports=n},{}],6:[function(e,t,o){function n(e){var t=e||{};t.default=t.default||{},t.inherit=t.inherit||{},t.isDeep=0!=t.isDeep||t.isDeep;var o=Object.prototype.toString.call(t.default).slice(8,-1).toLowerCase(),r=Object.prototype.toString.call(t.inherit).slice(8,-1).toLowerCase();if(o==r&&t.isDeep){for(var i in t.inherit)if(t.inherit.hasOwnProperty(i)){var s=Object.prototype.toString.call(t.default[i]).slice(8,-1).toLowerCase(),l=Object.prototype.toString.call(t.inherit[i]).slice(8,-1).toLowerCase();s==l&&t.isDeep?"object"==s?n({default:t.default[i],inherit:t.inherit[i]}):"array"==s?t.inherit[i].forEach(function(e,o){var r=Object.prototype.toString.call(t.default[i][o]).slice(8,-1).toLowerCase(),s=Object.prototype.toString.call(t.inherit[i][o]).slice(8,-1).toLowerCase();s==r&&t.isDeep&&"object"==r?n({default:t.default[i][o],inherit:t.inherit[i][o]}):t.default[i][o]=t.inherit[i][o]}):t.default[i]=t.inherit[i]:t.default[i]=t.inherit[i]}}else t.default=t.inherit;return t.default}t.exports=n},{}],7:[function(e,t,o){function n(e){var t=r({default:{num:null},inherit:e}),o=t.num;return o<10?"0"+o:""+o}var r=e("../function/extend.js");t.exports=n},{"../function/extend.js":6}],8:[function(e,t,o){function n(e){var t=r({default:{element:null},inherit:e}),o=null;return t.element&&("string"==Object.prototype.toString.call(t.element).slice(8,-1).toLowerCase()&&(o=[].slice.call(document.querySelectorAll(t.element))),1==t.element.nodeType&&(o=[t.element]),"htmlcollection"!=Object.prototype.toString.call(t.element).slice(8,-1).toLowerCase()&&"nodelist"!=Object.prototype.toString.call(t.element).slice(8,-1).toLowerCase()||(o=[].slice.call(t.element))),o}var r=e("../function/extend.js");t.exports=n},{"../function/extend.js":6}],9:[function(e,t,o){function n(e){var t=e||{},o=t.obj,n=t.selector;if(!o)return console.log("参数错误,第一参数需要一个元素节点对象"),null;if(!n)return o.parentNode;if("string"==typeof n)switch(o=o.parentNode,n.charAt(0)){case".":for(;o;){if(!o.classList)return console.log("no find class"),null;if(o.classList.contains(n.substring(1)))return o;o=o.parentNode}break;case"#":for(;o;){if(o==document)return console.log("no find id"),null;if(o.id==n.substring(1))return o;o=o.parentNode}break;default:for(;o;){if(o==document)return console.log("no find tagName"),null;if(o.tagName.toLowerCase()==n)return o;o=o.parentNode}}}t.exports=n},{}],10:[function(e,t,o){function n(e){var t=e||{},o=t.html,n=document.createElement("div");return n.innerHTML=o,n.children[0]}t.exports=n},{}],11:[function(e,t,o){function n(){return window.navigator.appVersion.match(/android/gi)}t.exports=n},{}],12:[function(e,t,o){function n(){return window.navigator.appVersion.match(/iphone/gi)}t.exports=n},{}],13:[function(e,t,o){function n(){for(var e=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],o=!0,n=0;n<t.length;n++)if(e.indexOf(t[n])>0){o=!1;break}return o}t.exports=n},{}],14:[function(e,t,o){function n(e){var t=e||{},o=t.obj,n=[];if(o instanceof Array)o.forEach(function(e,t){n.push([t,e])});else for(var r in o)o.hasOwnProperty(r)&&n.push([r,o[r]]);return n}t.exports=n},{}],15:[function(e,t,o){function n(e){for(var t=r({default:{element:null},inherit:e}),o=0,n=0,s=i({element:t.element})[0];s;)o+=s.offsetTop,n+=s.offsetLeft,s=s.offsetParent;return{top:o,left:n}}var r=e("../function/extend.js"),i=e("../function/get-dom-array.js");t.exports=n},{"../function/extend.js":6,"../function/get-dom-array.js":8}],16:[function(e,t,o){function n(e){var t=e||{},o=t.to||"0",n=6,r=document.documentElement.scrollTop||document.body.scrollTop,i=0,s=null,l=function e(){i=Math.ceil((r-o)/n),r-=i,window.scrollTo(0,r),s=requestAnimationFrame(e),r<=1*o&&cancelAnimationFrame(s)};requestAnimationFrame(l)}t.exports=n},{}],17:[function(e,t,o){function n(e){var t=e||{},o=t.seconds,n=Math.floor(o/3600/24),r=Math.floor(o/3600%24),i=Math.floor(o%3600/60),s=Math.floor(o%60);return{d:n,h:r,m:i,s:s,a:o}}t.exports=n},{}],18:[function(e,t,o){function n(e){this.opt=r({default:{element:{all:null,reverse:null,items:null},callback:{all:function(){},reverse:function(){},items:function(){}},config:{allIsReverse:!0}},inherit:e}),this.allDom=i({element:this.opt.element.all})[0],this.reverseDom=i({element:this.opt.element.reverse})[0],this.itemsDom=i({element:this.opt.element.items}),this.allDom&&this.init()}var r=e("../function/extend.js"),i=e("../function/get-dom-array.js");n.prototype.init=function(){this.events()},n.prototype.all=function(){},n.prototype.reverse=function(){},n.prototype.items=function(){},t.exports=n},{"../function/extend.js":6,"../function/get-dom-array.js":8}],19:[function(e,t,o){function n(e){var t=e||{},o=t.max,n=t.str;if(!n)return"";var r=n.length;return r>o&&(n=n.substring(0,o)),n}t.exports=n},{}],20:[function(e,t,o){function n(e){var t=r({default:{seconds:0,callback:{run:function(){},over:function(){}}},inherit:e}),o=t.seconds,n=t.callback.run,s=t.callback.over;if(o>=0){n(i({seconds:o}));var l=setInterval(function(){o--,o>=0?n(i({seconds:o})):(s(),clearInterval(l))},1e3)}o<0&&console.log("倒计时的秒数不能小于0")}var r=e("../function/extend.js"),i=e("../function/seconds-to-time.js");t.exports=n},{"../function/extend.js":6,"../function/seconds-to-time.js":17}],21:[function(e,t,o){function n(e){this.opt=r({default:{callback:{success:function(){},fail:function(){}},interval:80,errorHeight:100},inherit:e}),this.isLoadOver=!1,this.init()}var r=e("../function/extend.js");n.prototype.init=function(){this.render(),this.power()},n.prototype.render=function(){var e=this.opt.callback,t=document.body.scrollHeight,o=document.documentElement.scrollTop||document.body.scrollTop,n=document.documentElement.clientHeight;o+n>=t-this.opt.errorHeight&&!this.isLoadOver?(this.isLoadOver=!0,e.success(this)):e.fail()},n.prototype.power=function(){var e=this,t=null;window.addEventListener("scroll",function(){clearTimeout(t),t=setTimeout(function(){e.render()},e.opt.interval)})},t.exports=n},{"../function/extend.js":6}],22:[function(e,t,o){function n(){var e=document;return{stopPropagation:function(e){e.stopPropagation()},preventDefault:function(e){e.preventDefault()},returnFalse:function(e){e.preventDefault(),e.stopPropagation()},noScroll:function(){e.addEventListener("touchmove",this.preventDefault,!1),e.documentElement.style.overflow="hidden"},yesScroll:function(){e.removeEventListener("touchmove",this.preventDefault,!1),e.documentElement.style.overflow="auto"}}}t.exports=n},{}],23:[function(e,t,o){function n(e){this.opt=r.extend({default:{wrap:".g-page",callback:{moduleDomCreateBefore:function(){},moduleDomCreateAfter:function(){},moduleDomRenderBefore:function(){},moduleDomRenderAfter:function(){},wrapDomCreateBefore:function(){},wrapDomCreateAfter:function(){}},config:{moduleDomStyle:"",moduleDomIsShow:!0,moduleDomIsClearTimer:!0},data:{}},inherit:e}),this.moduleDom=null,this.wrapDom=null,this.moduleDomTimer={},this.init()}var r=e("../base/base.js");n.prototype.init=function(){this.render(),this.power()},n.prototype.render=function(){this.moduleDomRender(),this.wrapDomRender()},n.prototype.power=function(){},n.prototype.moduleDomCreate=function(){this.moduleDom=r.createElement({style:this.opt.config.moduleDomStyle,attribute:{className:"m-test",innerHTML:'\n                <div class="m-test-txt">周华飞爱侯丽杰,侯丽杰爱周华飞</div>\n            '}})},n.prototype.moduleDomRender=function(){var e=this.opt.callback;e.moduleDomCreateBefore(this),this.moduleDomCreate(),e.moduleDomCreateAfter(this)},n.prototype.moduleDomRemove=function(){this.moduleDom.parentNode&&this.moduleDom.parentNode.removeChild(this.moduleDom),this.moduleDomClearTimer()},n.prototype.moduleDomClearTimer=function(){if(this.opt.config.moduleDomIsClearTimer)for(var e in this.moduleDomTimer)this.moduleDomTimer.hasOwnProperty(e)&&(clearInterval(this.moduleDomTimer[e]),clearTimeout(this.moduleDomTimer[e]))},n.prototype.moduleDomShow=function(){this.wrapDom&&this.wrapDom.appendChild(this.moduleDom)},n.prototype.moduleDomHide=function(){this.moduleDom.parentNode&&this.moduleDom.parentNode.removeChild(this.moduleDom)},n.prototype.wrapDomCreate=function(){this.wrapDom=r.getDomArray({element:this.opt.wrap})[0]},n.prototype.wrapDomRender=function(){var e=this.opt.callback;e.wrapDomCreateBefore(this),this.wrapDomCreate(),e.wrapDomCreateAfter(this),this.wrapDom&&(e.moduleDomRenderBefore(this),this.opt.config.moduleDomIsShow&&this.wrapDom.appendChild(this.moduleDom),e.moduleDomRenderAfter(this))},n.prototype.wrapDomRemove=function(){this.moduleDomRemove(),this.wrapDom&&this.wrapDom.parentNode.removeChild(this.wrapDom)},t.exports=n},{"../base/base.js":1}]},{},[2]);