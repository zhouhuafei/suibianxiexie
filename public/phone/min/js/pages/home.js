"use strict";!function e(t,o,n){function i(a,s){if(!o[a]){if(!t[a]){var l="function"==typeof require&&require;if(!s&&l)return l(a,!0);if(r)return r(a,!0);throw new Error("Cannot find module '"+a+"'")}var m=o[a]={exports:{}};t[a][0].call(m.exports,function(e){var o=t[a][1][e];return i(o||e)},m,m.exports,e,t,o,n)}return o[a].exports}for(var r="function"==typeof require&&require,a=0;a<n.length;a++)i(n[a]);return i}({1:[function(e,t,o){window.addEventListener("load",function(){setTimeout(function(){!function(){new(e("../modules/m-slide"))({wrap:".page-slide",data:{items:[{img:{width:0,height:0,url:"http://img1.imgtn.bdimg.com/it/u=1056872014,4038868309&fm=23&gp=0.jpg"},link:""},{img:{width:0,height:0,url:"http://img3.imgtn.bdimg.com/it/u=1732308780,3782498029&fm=23&gp=0.jpg"},link:""},{img:{width:0,height:0,url:"http://img3.imgtn.bdimg.com/it/u=4027566086,3099254237&fm=23&gp=0.jpg"},link:""},{img:{width:0,height:0,url:"http://img4.imgtn.bdimg.com/it/u=120609946,455952432&fm=23&gp=0.jpg"},link:""},{img:{width:0,height:0,url:"http://img2.imgtn.bdimg.com/it/u=2763208243,961494673&fm=23&gp=0.jpg"},link:""}]}})}(),function(){new(e("../modules/m-navigation"))({wrap:".page-navigation"})}(),function(){e("../components/c-hello-vue"),new Vue({el:".g-vue",data:{message:"Hello Vue2!"}})}(),e("../commons/common")},0)})},{"../commons/common":2,"../components/c-hello-vue":3,"../modules/m-navigation":10,"../modules/m-slide":11}],2:[function(e,t,o){!function(){if(pageInfo&&pageInfo.config&&pageInfo.config.isShowCopyright){new(e("../modules/m-copyright"))}}(),function(){if(pageInfo&&pageInfo.config&&pageInfo.config.isShowFooterNav){new(e("../modules/m-footer-nav"))(pageInfo.data.footerNav)}}(),function(){new(e("../modules/m-lazy-load"))}()},{"../modules/m-copyright":7,"../modules/m-footer-nav":8,"../modules/m-lazy-load":9}],3:[function(e,t,o){Vue.component("c-hello-vue",{props:["message"],template:"<div>{{message}}</div>"})},{}],4:[function(e,t,o){function n(e){var t=e||{};t.elementName=t.elementName||"div",t.style=t.style||"",t.custom=t.custom||{},t.attribute=t.attribute||{};var o=document.createElement(t.elementName);t.style&&o.setAttribute("style",t.style);for(var n in t.custom)t.custom.hasOwnProperty(n)&&o.setAttribute("data-"+n,t.custom[n]);for(var i in t.attribute)t.attribute.hasOwnProperty(i)&&(o[i]=t.attribute[i]);return o}t.exports=n},{}],5:[function(e,t,o){function n(e){var t=e||{},o=[],n=!!t.element&&t.element;return n&&("string"==Object.prototype.toString.call(n).slice(8,-1).toLowerCase()&&(o=[].slice.call(document.querySelectorAll(n))),1==n.nodeType&&(o=[n]),"htmlcollection"!=Object.prototype.toString.call(n).slice(8,-1).toLowerCase()&&"nodelist"!=Object.prototype.toString.call(n).slice(8,-1).toLowerCase()||(o=[].slice.call(n))),o}t.exports=n},{}],6:[function(e,t,o){function n(e){for(var t=i({defaults:{element:null},inherits:e}),o=0,n=0,a=r({element:t.element})[0];a;)o+=a.offsetTop,n+=a.offsetLeft,a=a.offsetParent;return{top:o,left:n}}var i=e("../tools/extend"),r=e("../function/get-dom-array");t.exports=n},{"../function/get-dom-array":5,"../tools/extend":15}],7:[function(e,t,o){var n=e("../function/create-element"),i=e("../tools/constructor-inherit"),r=e("../modules/m-super-type"),a=i({superType:r,parameter:{callback:{},config:{},data:{}}});a.prototype.moduleDomCreate=function(){this.moduleDom=n({style:this.opts.config.moduleDomStyle,custom:this.opts.config.moduleDomCustomAttr,attribute:{className:"m-copyright",innerHTML:'\n                <div class="m-copyright-icon iconfont icon-banquan"></div>\n                <div class="m-copyright-txt">版权信息哟</div>\n            '}})},a.prototype.power=function(){},t.exports=a},{"../function/create-element":4,"../modules/m-super-type":12,"../tools/constructor-inherit":14}],8:[function(e,t,o){var n=e("../function/create-element"),i=e("../tools/constructor-inherit"),r=e("../modules/m-super-type"),a=e("../tools/json-to-array"),s=i({superType:r,parameter:{callback:{},config:{},data:{}}});s.prototype.moduleDomCreate=function(){this.moduleDomClass="m-footer-nav";var e="";a({json:this.opts.data}).forEach(function(t){var o=t.value,n="";o.isHighlight&&(n="m-footer-nav-body-active");var i="";o.isShowMark&&(i='<div class="m-footer-nav-body-mark"></div>'),e+='\n            <a class="m-footer-nav-body '+n+'" href="'+o.link+'">\n                <div class="m-footer-nav-body-icon iconfont '+o.icon+'"></div>\n                <div class="m-footer-nav-body-txt">'+o.txt+"</div>\n                "+i+"\n            </a>\n        "}),this.moduleDom=n({style:this.opts.config.moduleDomStyle,custom:this.opts.config.moduleDomCustomAttr,attribute:{className:this.moduleDomClass,innerHTML:'<div class="m-footer-nav-wrap">'+e+"</div>"}})},s.prototype.power=function(){},t.exports=s},{"../function/create-element":4,"../modules/m-super-type":12,"../tools/constructor-inherit":14,"../tools/json-to-array":16}],9:[function(e,t,o){function n(e){this.opts=i({defaults:{element:".m-lazy-load",srcAttr:"data-src",moreHeight:0,interval:80},inherits:e}),this.clientHeight=document.documentElement.clientHeight,this.init()}var i=e("../tools/extend"),r=e("../function/offset"),a=e("../function/get-dom-array");n.prototype.init=function(){this.render(),this.power()},n.prototype.render=function(){var e=this,t=this.opts.moreHeight,o=document.documentElement.scrollTop||document.body.scrollTop,n=o-t,i=this.clientHeight+n+t,s=a({element:this.opts.element});s.forEach(function(e){"img"==e.tagName.toLowerCase()&&(e.getAttribute("src")||(e.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUCB1jYAACAAAFAAGNu5vzAAAAAElFTkSuQmCC"),e.setAttribute("height","100%"),e.setAttribute("width","100%"))}),s.forEach(function(t){if(t.offsetWidth){var o=r({element:t}).top;o+t.offsetHeight>=n&&o<=i&&("img"==t.tagName.toLowerCase()?(t.getAttribute(e.opts.srcAttr)&&(t.src=t.getAttribute(e.opts.srcAttr)),t.removeAttribute("height"),t.removeAttribute("width")):t.getAttribute(e.opts.srcAttr)&&(t.style.backgroundImage="url("+t.getAttribute(e.opts.srcAttr)+")"),t.classList.remove("m-lazy-load"),t.classList.add("m-lazy-load-active"))}})},n.prototype.power=function(){var e=this,t=null;window.addEventListener("scroll",function(){clearTimeout(t),t=setTimeout(function(){e.render()},e.opts.interval)})},t.exports=n},{"../function/get-dom-array":5,"../function/offset":6,"../tools/extend":15}],10:[function(e,t,o){var n=e("../function/create-element"),i=e("../tools/constructor-inherit"),r=e("../modules/m-super-type"),a=i({superType:r,parameter:{callback:{},config:{},data:{items:[{link:"/",icon:"icon-shouye",txt:"首页",isShowMark:!1},{link:"/dev-global",icon:"icon-kaifa",txt:"g-global",isShowMark:!1},{link:"/dev-module",icon:"icon-kaifa",txt:"m-module",isShowMark:!1},{link:"/dev-word",icon:"icon-kaifa",txt:"标准词汇",isShowMark:!1},{link:"/mine",icon:"icon-wode",txt:"我的",isShowMark:!1}]}}});a.prototype.moduleDomCreate=function(){var e=this.opts.data,t=e.items,o="";t.forEach(function(e){var t="";e.isShowMark&&(t='<div class="m-navigation-mark"></div>'),o+='\n            <a href="'+e.link+'" class="m-navigation-wrap">\n                <div class="m-navigation-icon iconfont '+e.icon+'"></div>\n                <div class="m-navigation-txt">'+e.txt+"</div>\n                "+t+"\n            </a>\n        "}),this.moduleDom=n({style:this.opts.config.moduleDomStyle,custom:this.opts.config.moduleDomCustomAttr,attribute:{className:"m-navigation",innerHTML:o}})},a.prototype.power=function(){},t.exports=a},{"../function/create-element":4,"../modules/m-super-type":12,"../tools/constructor-inherit":14}],11:[function(e,t,o){var n=e("../function/create-element"),i=e("../tools/constructor-inherit"),r=e("../plugs/touch-slide"),a=e("../modules/m-super-type"),s=i({superType:a,parameter:{callback:{startFun:function(){},endFun:function(){}},config:{isShowHref:!0,touchSlide:{slideCell:"",mainCell:".m-slide-body",titCell:".m-slide-header .m-slide-items",effect:"leftLoop",autoPlay:!0,delayTime:200,interTime:3e3,startFun:function(){console.log("此处的函数会被覆盖,请在callback里执行回调")},endFun:function(){console.log("此处的函数会被覆盖,请在callback里执行回调")},defaultIndex:0,switchLoadClass:".pre-load",switchLoad:"data-src"}},data:{items:[{img:{width:0,height:0,url:"http://img1.imgtn.bdimg.com/it/u=1056872014,4038868309&fm=23&gp=0.jpg"},link:""}]}}});s.prototype.moduleDomCreate=function(){this.moduleDom=n({style:this.opts.config.moduleDomStyle,custom:this.opts.config.moduleDomCustomAttr,attribute:{className:"m-slide",innerHTML:"\n                "+this.renderHeader()+"\n                "+this.renderBody()+"\n            "}})},s.prototype.renderHeader=function(){var e=this,t="",o=e.opts.data,n="";return o.items.forEach(function(o,i){i==e.opts.config.touchSlide.defaultIndex&&(n="on"),t+='<div class="m-slide-items '+n+'"></div>'}),'<div class="m-slide-header">'+t+"</div>"},s.prototype.renderBody=function(){var e=this,t="";return e.opts.data.items.forEach(function(o){e.opts.config.isShowHref?t+='<a href="'+(o.link||"javascript:;")+'" class="m-slide-items pre-load" data-src="'+o.img.url+'"></a>':t+='<a class="m-slide-items pre-load" data-src="'+o.img.url+'"></a>'}),'<div class="m-slide-body">'+t+"</div>"},s.prototype.power=function(){var e=this,t=e.opts.callback,o=e.opts.config,n=o.touchSlide;n.slideCell=e.opts.wrap,n.startFun=function(o){t.startFun({self:e,index:o})},n.endFun=function(o){t.endFun({self:e,index:o})},r(e.opts.config.touchSlide)},t.exports=s},{"../function/create-element":4,"../modules/m-super-type":12,"../plugs/touch-slide":13,"../tools/constructor-inherit":14}],12:[function(e,t,o){function n(e){this.opts=i({defaults:{wrap:".g-wrap",callback:{moduleDomCreateBefore:function(e){},moduleDomCreateAfter:function(e){},moduleDomRenderBefore:function(e){},moduleDomRenderAfter:function(e){},moduleDomRemoveBefore:function(e){},moduleDomRemoveAfter:function(e){},moduleDomShowBefore:function(e){},moduleDomShowAfter:function(e){},moduleDomHideBefore:function(e){},moduleDomHideAfter:function(e){},wrapDomCreateBefore:function(e){},wrapDomCreateAfter:function(e){},wrapDomRenderBefore:function(e){},wrapDomRenderAfter:function(e){},wrapDomRemoveBefore:function(e){},wrapDomRemoveAfter:function(e){}},config:{moduleDomCustomAttr:{},moduleDomRenderMethod:{method:"appendChild",child:null},moduleDomStyle:"",moduleDomIsShow:!0,moduleDomIsClearTimer:!0},data:{}},inherits:e}),this.moduleDom=null,this.wrapDom=null,this.moduleDomTimer={},this.init()}var i=e("../tools/extend"),r=e("../function/create-element"),a=e("../function/get-dom-array");n.prototype.init=function(){this.render(),this.power()},n.prototype.render=function(){this.moduleDomRender(),this.wrapDomRender()},n.prototype.power=function(){},n.prototype.moduleDomCreate=function(){this.moduleDom=r({style:this.opts.config.moduleDomStyle,custom:this.opts.config.moduleDomCustomAttr,attribute:{className:"m-super-type",innerHTML:'\n                <div class="m-super-type-txt">周华飞爱侯丽杰,侯丽杰爱周华飞</div>\n            '}})},n.prototype.moduleDomRender=function(){this.moduleDomRemove();var e=this.opts.callback;e.moduleDomCreateBefore(this),this.moduleDomCreate(),e.moduleDomCreateAfter(this)},n.prototype.moduleDomRemove=function(){var e=this.opts.callback;e.moduleDomRemoveBefore(this),this.moduleDom&&this.moduleDom.parentNode&&this.moduleDom.parentNode.removeChild(this.moduleDom),this.moduleDomClearTimer(),e.moduleDomRemoveAfter(this)},n.prototype.moduleDomClearTimer=function(){if(this.opts.config.moduleDomIsClearTimer)for(var e in this.moduleDomTimer)this.moduleDomTimer.hasOwnProperty(e)&&(clearInterval(this.moduleDomTimer[e]),clearTimeout(this.moduleDomTimer[e]))},n.prototype.moduleDomShow=function(){var e=this.opts.callback;e.moduleDomShowBefore(this),this.wrapDom&&(this.opts.config.moduleDomIsShow=!0,this.wrapDomRenderMethod()),e.moduleDomShowAfter(this)},n.prototype.moduleDomHide=function(){var e=this.opts.callback;e.moduleDomHideBefore(this),this.moduleDom.parentNode&&(this.moduleDom.parentNode.removeChild(this.moduleDom),this.opts.config.moduleDomIsShow=!1),e.moduleDomHideAfter(this)},n.prototype.wrapDomCreate=function(){this.wrapDom=a({element:this.opts.wrap})[0]},n.prototype.wrapDomRender=function(){var e=this.opts.callback;e.wrapDomCreateBefore(this),this.wrapDomCreate(),e.wrapDomCreateAfter(this),this.wrapDom&&(e.moduleDomRenderBefore(this),e.wrapDomRenderBefore(this),this.wrapDomRenderMethod(),e.wrapDomRenderAfter(this),e.moduleDomRenderAfter(this))},n.prototype.wrapDomRenderMethod=function(){var e=this.opts.config;if(e.moduleDomIsShow){var t=e.moduleDomRenderMethod;if("insertBefore"==t.method){var o=a({element:t.child})[0];o?this.wrapDom.insertBefore(this.moduleDom,o):this.wrapDom.insertBefore(this.moduleDom,this.wrapDom.children[0])}"appendChild"==t.method&&this.wrapDom.appendChild(this.moduleDom)}},n.prototype.wrapDomRemove=function(){var e=this.opts.callback;e.wrapDomRemoveBefore(this),this.moduleDomRemove(),this.wrapDom&&this.wrapDom.parentNode.removeChild(this.wrapDom),e.wrapDomRemoveAfter(this)},n.prototype.getModuleDomHtml=function(){return this.moduleDom.outerHTML},t.exports=n},{"../function/create-element":4,"../function/get-dom-array":5,"../tools/extend":15}],13:[function(e,t,o){var n=function(e){e=e||{};var t={slideCell:e.slideCell||"#touchSlide",titCell:e.titCell||".hd li",mainCell:e.mainCell||".bd",effect:e.effect||"left",autoPlay:e.autoPlay||!1,delayTime:e.delayTime||200,interTime:e.interTime||2500,defaultIndex:e.defaultIndex||0,titOnClassName:e.titOnClassName||"on",autoPage:e.autoPage||!1,prevCell:e.prevCell||".prev",nextCell:e.nextCell||".next",pageStateCell:e.pageStateCell||".pageState",pnLoop:"undefined "==e.pnLoop||e.pnLoop,startFun:e.startFun||null,endFun:e.endFun||null,switchLoadClass:e.switchLoadClass||".pre-load",switchLoad:e.switchLoad||"data-src"},o=null;if("string"==Object.prototype.toString.call(t.slideCell).slice(8,-1).toLowerCase()&&(o=document.querySelector(t.slideCell)),1==t.slideCell.nodeType&&(o=t.slideCell),"htmlcollection"!=Object.prototype.toString.call(t.slideCell).slice(8,-1).toLowerCase()&&"nodelist"!=Object.prototype.toString.call(t.slideCell).slice(8,-1).toLowerCase()||(o=t.slideCell[0]),o){var n=function(e,t){e=e.split(" ");var o=[];t=t||document;var n=[t];for(var i in e)e.hasOwnProperty(i)&&0!=e[i].length&&o.push(e[i]);for(var r in o)if(o.hasOwnProperty(r)){if(0==n.length)return!1;var a=[];for(var s in n)if(n.hasOwnProperty(s))if("#"==o[r][0])a.push(document.getElementById(o[r].replace("#","")));else if("."==o[r][0])for(var l=n[s].getElementsByTagName("*"),m=0;m<l.length;m++){var c=l[m].className;c&&-1!=c.search(new RegExp("\\b"+o[r].replace(".","")+"\\b"))&&a.push(l[m])}else for(var u=n[s].getElementsByTagName(o[r]),d=0;d<u.length;d++)a.push(u[d]);n=a}return 0!=n.length&&n[0]!=t&&n},i=function(e,t){!e||!t||e.className&&-1!=e.className.search(new RegExp("\\b"+t+"\\b"))||(e.className+=(e.className?" ":"")+t)},r=function(e,t){!e||!t||e.className&&-1==e.className.search(new RegExp("\\b"+t+"\\b"))||(e.className=e.className.replace(new RegExp("\\s*\\b"+t+"\\b","g"),""))},a=t.effect,s=n(t.prevCell,o)[0],l=n(t.nextCell,o)[0],m=n(t.pageStateCell)[0],c=n(t.mainCell,o)[0];if(c){var u,d,p=c.children.length,f=n(t.titCell,o),h=f?f.length:p,g=parseInt(t.defaultIndex),v=parseInt(t.delayTime),y=parseInt(t.interTime),w=!("false"==t.autoPlay||0==t.autoPlay),D=!("false"==t.autoPage||0==t.autoPage),C=!("false"==t.pnLoop||0==t.pnLoop),b=g,A=null,T=null,x=null,S=0,L=0,k=0,N=0,R=/hp-tablet/gi.test(navigator.appVersion),E="ontouchstart"in window&&!R,j=E?"touchstart":"mousedown",I=E?"touchmove":"",O=E?"touchend":"mouseup",B=c.parentNode.clientWidth,H=p;if(0==h&&(h=p),D){h=p,f=f[0],f.innerHTML="";var M="";if(1==t.autoPage||"true"==t.autoPage)for(var P=0;P<h;P++)M+="<li>"+(P+1)+"</li>";else for(var F=0;F<h;F++)M+=t.autoPage.replace("$",F+1);f.innerHTML=M,f=f.children}"leftLoop"==a&&(H+=2,c.appendChild(c.children[0].cloneNode(!0)),c.insertBefore(c.children[p-1].cloneNode(!0),c.children[0])),u=function(e,t){var o=document.createElement("div");o.innerHTML=t,o=o.children[0];var n=e.cloneNode(!0);return o.appendChild(n),e.parentNode.replaceChild(o,e),c=n,o}(c,'<div class="tempWrap" style="height:inherit;overflow:hidden; position:relative;"></div>'),c.style.cssText="display:flex;width:"+H*B+"px;position:relative;overflow:hidden;padding:0;margin:0;";for(var q=0;q<H;q++)c.children[q].style.cssText="height:inherit;display:flex;align-items: center;justify-content: center;width:"+B+"px";var z=function(){"function"==typeof t.startFun&&t.startFun(g,h)},V=function(){"function"==typeof t.endFun&&t.endFun(g,h)},W=function(){B=u.clientWidth,c.style.width=H*B+"px";for(var e=0;e<H;e++)c.children[e].style.width=B+"px";X(-("leftLoop"==a?g+1:g)*B,0)};window.addEventListener("resize",W,!1);var X=function(e,t,o){o=o?o.style:c.style,o.webkitTransitionDuration=o.MozTransitionDuration=o.msTransitionDuration=o.OTransitionDuration=o.transitionDuration=t+"ms",o.webkitTransform="translate("+e+"px,0)translateZ(0)",o.msTransform=o.MozTransform=o.OTransform="translateX("+e+"px)"},Y=function(e){switch(a){case"left":g>=h?g=e?g-1:0:g<0&&(g=e?0:h-1),X(-g*B,v),b=g;break;case"leftLoop":X(-(g+1)*B,v),-1==g?(T=setTimeout(function(){X(-h*B,0)},v),g=h-1):g==h&&(T=setTimeout(function(){X(-B,0)},v),g=0),b=g}!function(){var e="leftLoop"==a?g+1:g,o=c.querySelectorAll(t.switchLoadClass),n=function(e){if(e){var o=e.getAttribute(t.switchLoad);if(!o)return!1;"img"==e.tagName.toLowerCase()?e.src=o:e.style.backgroundImage="url("+o+")"}};o.length>0&&(n(o[e]),n(o[e-1]),n(o[e+1]))}(),z(),x=setTimeout(function(){V()},v);for(var o=0;o<h;o++)r(f[o],t.titOnClassName),o==g&&i(f[o],t.titOnClassName);0==C&&(r(l,"nextStop"),r(s,"prevStop"),0==g?i(s,"prevStop"):g==h-1&&i(l,"nextStop")),m&&(m.innerHTML="<span>"+(g+1)+"</span>/"+h)};if(Y(),w&&(A=setInterval(function(){g++,Y()},y)),f)for(var U=0;U<h;U++)!function(){var e=U;f[e].addEventListener("click",function(){clearTimeout(T),clearTimeout(x),g=e,Y()})}();l&&l.addEventListener("click",function(){1!=C&&g==h-1||(clearTimeout(T),clearTimeout(x),g++,Y())}),s&&s.addEventListener("click",function(){1!=C&&0==g||(clearTimeout(T),clearTimeout(x),g--,Y())});var G=function(e){clearTimeout(T),clearTimeout(x),d=void 0,k=0;var t=E?e.touches[0]:e;S=t.pageX,L=t.pageY,c.addEventListener(I,J,!1),c.addEventListener(O,Q,!1)},J=function(e){if(!E||!(e.touches.length>1||e.scale&&1!==e.scale)){var t=E?e.touches[0]:e;if(k=t.pageX-S,N=t.pageY-L,void 0===d&&(d=!!(d||Math.abs(k)<Math.abs(N))),!d)switch(e.preventDefault(),w&&clearInterval(A),a){case"left":(0==g&&k>0||g>=h-1&&k<0)&&(k*=.4),X(-g*B+k,0);break;case"leftLoop":X(-(g+1)*B+k,0)}}},Q=function e(t){0!=k&&(t.preventDefault(),d||(Math.abs(k)>B/10&&(k>0?g--:g++),Y(!0),w&&(A=setInterval(function(){g++,Y()},y))),c.removeEventListener(I,J,!1),c.removeEventListener(O,e,!1))};c.addEventListener(j,G,!1)}}};t.exports=n},{}],14:[function(e,t,o){function n(e){function t(e){this.opts=i({defaults:r({obj:a}),inherits:e}),o.superType.call(this,this.opts)}var o=i({defaults:{superType:null,parameter:{}},inherits:e}),n=o.superType,a=o.parameter;if("function"!=Object.prototype.toString.call(n).toLowerCase().slice(8,-1))return console.log("no find SuperType or SuperType error"),!1;for(var s in n.prototype)n.prototype.hasOwnProperty(s)&&(t.prototype[s]=n.prototype[s]);return t}var i=e("../tools/extend"),r=e("../tools/obj-remove-quote");t.exports=n},{"../tools/extend":15,"../tools/obj-remove-quote":17}],15:[function(e,t,o){function n(e){var t=e||{};t.defaults=t.defaults||{},t.inherits=t.inherits||{},t.isDeep=0!=t.isDeep||t.isDeep;var o=Object.prototype.toString.call(t.defaults).slice(8,-1).toLowerCase();if(o==Object.prototype.toString.call(t.inherits).slice(8,-1).toLowerCase()&&t.isDeep)if("object"==o||"array"==o){for(var i in t.inherits)if(t.inherits.hasOwnProperty(i)){var r=Object.prototype.toString.call(t.defaults[i]).slice(8,-1).toLowerCase(),a=Object.prototype.toString.call(t.inherits[i]).slice(8,-1).toLowerCase();r!=a||!t.isDeep||"object"!=r&&"array"!=r?t.defaults[i]=t.inherits[i]:n({defaults:t.defaults[i],inherits:t.inherits[i]})}}else t.defaults=t.inherits;else t.defaults=t.inherits;return t.defaults}t.exports=n},{}],16:[function(e,t,o){function n(e){var t=e||{},o=t.json||{},n=[];if(o instanceof Array)o.forEach(function(e,t){n.push([t,e])});else for(var i in o)o.hasOwnProperty(i)&&n.push({key:i,value:o[i]});return n}t.exports=n},{}],17:[function(e,t,o){function n(e){var t=e||{},o=t.obj,i=Object.prototype.toString.call(o).slice(8,-1).toLowerCase();if("object"!=i&&"array"!=i)return o;var r={};"array"==i&&(r=[]);for(var a in o)o.hasOwnProperty(a)&&(r[a]=n({obj:o[a]}));return r}t.exports=n},{}]},{},[1]);