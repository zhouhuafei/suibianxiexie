webpackJsonp([5],{17:function(e,t,i){"use strict";var n=i(0),o=i(1),a=i(2),r=i(18),l=n.constructorInherit(a,{callback:{startFun:function(){},endFun:function(){}},config:{isShowHref:!0,touchSlide:{slideCell:"",mainCell:".g-slide-body",titCell:".g-slide-header .g-slide-items",effect:"leftLoop",autoPlay:!0,delayTime:200,interTime:3e3,startFun:function(){console.log("此处的函数会被覆盖,请在callback里执行回调")},endFun:function(){console.log("此处的函数会被覆盖,请在callback里执行回调")},defaultIndex:0,switchLoadClass:".pre-load",switchLoad:"data-src"}},data:{items:[{img:{width:0,height:0,src:"http://img1.imgtn.bdimg.com/it/u=1056872014,4038868309&fm=23&gp=0.jpg"},href:""}]}});l.prototype.moduleDomCreate=function(){this.moduleDom=o.createElement({style:this.opts.config.moduleDomStyle,customAttribute:this.opts.config.moduleDomCustomAttribute,attribute:{className:"g-slide",innerHTML:"\n                "+this.renderHeader()+"\n                "+this.renderBody()+"\n            "}})},l.prototype.renderHeader=function(){var e=this,t="",i=e.opts.data,n="";return i.items.forEach(function(i,o){o===e.opts.config.touchSlide.defaultIndex&&(n="on"),t+='<div class="g-slide-items '+n+'"></div>'}),'<div class="g-slide-header">'+t+"</div>"},l.prototype.renderBody=function(){var e=this,t="";return e.opts.data.items.forEach(function(i){e.opts.config.isShowHref?t+='<a href="'+(i.href||"javascript:;")+'" class="g-slide-items pre-load" data-src="'+i.img.src+'"></a>':t+='<a class="g-slide-items pre-load" data-src="'+i.img.src+'"></a>'}),'<div class="g-slide-body">'+t+"</div>"},l.prototype.power=function(){var e=this,t=e.opts.callback,i=e.opts.config,n=i.touchSlide;n.slideCell=e.opts.wrap,n.startFun=function(i){t.startFun({self:e,index:i})},n.endFun=function(i){t.endFun({self:e,index:i})},r(e.opts.config.touchSlide)},e.exports=l},18:function(e,t,i){"use strict";/*!
 * TouchSlide v1.1
 * javascript触屏滑动特效插件，移动端滑动特效，触屏焦点图，触屏Tab切换，触屏多图切换等
 * 详尽信息请看官网：http://www.SuperSlide2.com/TouchSlide/
 *
 * Copyright 2013 大话主席
 *
 * 请尊重原创，保留头部版权
 * 在保留版权的前提下可应用于个人或商业用途

 * 1.1 宽度自适应（修复安卓横屏时滑动范围不变的bug）
 */
var n=function(e){e=e||{};var t={slideCell:e.slideCell||"#touchSlide",titCell:e.titCell||".hd li",mainCell:e.mainCell||".bd",effect:e.effect||"left",autoPlay:e.autoPlay||!1,delayTime:e.delayTime||200,interTime:e.interTime||2500,defaultIndex:e.defaultIndex||0,titOnClassName:e.titOnClassName||"on",autoPage:e.autoPage||!1,prevCell:e.prevCell||".prev",nextCell:e.nextCell||".next",pageStateCell:e.pageStateCell||".pageState",pnLoop:"undefined "==e.pnLoop||e.pnLoop,startFun:e.startFun||null,endFun:e.endFun||null,switchLoadClass:e.switchLoadClass||".pre-load",switchLoad:e.switchLoad||"data-src"},i=null;if("string"==Object.prototype.toString.call(t.slideCell).slice(8,-1).toLowerCase()&&(i=document.querySelector(t.slideCell)),1==t.slideCell.nodeType&&(i=t.slideCell),"htmlcollection"!=Object.prototype.toString.call(t.slideCell).slice(8,-1).toLowerCase()&&"nodelist"!=Object.prototype.toString.call(t.slideCell).slice(8,-1).toLowerCase()||(i=t.slideCell[0]),i){var n=function(e,t){e=e.split(" ");var i=[];t=t||document;var n=[t];for(var o in e)e.hasOwnProperty(o)&&0!=e[o].length&&i.push(e[o]);for(var a in i)if(i.hasOwnProperty(a)){if(0==n.length)return!1;var r=[];for(var l in n)if(n.hasOwnProperty(l))if("#"==i[a][0])r.push(document.getElementById(i[a].replace("#","")));else if("."==i[a][0])for(var s=n[l].getElementsByTagName("*"),c=0;c<s.length;c++){var u=s[c].className;u&&u.search&&-1!=u.search(new RegExp("\\b"+i[a].replace(".","")+"\\b"))&&r.push(s[c])}else for(var d=n[l].getElementsByTagName(i[a]),f=0;f<d.length;f++)r.push(d[f]);n=r}return 0!=n.length&&n[0]!=t&&n},o=function(e,t){!e||!t||e.className&&-1!=e.className.search(new RegExp("\\b"+t+"\\b"))||(e.className+=(e.className?" ":"")+t)},a=function(e,t){!e||!t||e.className&&-1==e.className.search(new RegExp("\\b"+t+"\\b"))||(e.className=e.className.replace(new RegExp("\\s*\\b"+t+"\\b","g"),""))},r=t.effect,l=n(t.prevCell,i)[0],s=n(t.nextCell,i)[0],c=n(t.pageStateCell)[0],u=n(t.mainCell,i)[0];if(u){var d,f,p=u.children.length,g=n(t.titCell,i),m=g?g.length:p,h=parseInt(t.defaultIndex),v=parseInt(t.delayTime),w=parseInt(t.interTime),y=!("false"==t.autoPlay||0==t.autoPlay),b=!("false"==t.autoPage||0==t.autoPage),C=!("false"==t.pnLoop||0==t.pnLoop),T=h,x=null,L=null,S=null,k=0,E=0,N=0,O=0,P=/hp-tablet/gi.test(navigator.appVersion),j="ontouchstart"in window&&!P,M=j?"touchstart":"mousedown",F=j?"touchmove":"",D=j?"touchend":"mouseup",I=u.parentNode.clientWidth,H=p;if(0==m&&(m=p),b){m=p,g=g[0],g.innerHTML="";var _="";if(1==t.autoPage||"true"==t.autoPage)for(var A=0;A<m;A++)_+="<li>"+(A+1)+"</li>";else for(var B=0;B<m;B++)_+=t.autoPage.replace("$",B+1);g.innerHTML=_,g=g.children}"leftLoop"==r&&(H+=2,u.appendChild(u.children[0].cloneNode(!0)),u.insertBefore(u.children[p-1].cloneNode(!0),u.children[0])),d=function(e,t){var i=document.createElement("div");i.innerHTML=t,i=i.children[0];var n=e.cloneNode(!0);return i.appendChild(n),e.parentNode.replaceChild(i,e),u=n,i}(u,'<div class="tempWrap" style="height:inherit;overflow:hidden; position:relative;"></div>'),u.style.cssText="display:flex;width:"+H*I+"px;position:relative;overflow:hidden;padding:0;margin:0;";for(var R=0;R<H;R++)u.children[R].style.cssText="height:inherit;display:flex;align-items: center;justify-content: center;width:"+I+"px";var z=function(){"function"==typeof t.startFun&&t.startFun(h,m)},W=function(){"function"==typeof t.endFun&&t.endFun(h,m)},X=function(){I=d.clientWidth,u.style.width=H*I+"px";for(var e=0;e<H;e++)u.children[e].style.width=I+"px";q(-("leftLoop"==r?h+1:h)*I,0)};window.addEventListener("resize",X,!1);var q=function(e,t,i){i=i?i.style:u.style,i.webkitTransitionDuration=i.MozTransitionDuration=i.msTransitionDuration=i.OTransitionDuration=i.transitionDuration=t+"ms",i.webkitTransform="translate("+e+"px,0)translateZ(0)",i.msTransform=i.MozTransform=i.OTransform="translateX("+e+"px)"},V=function(e){switch(r){case"left":h>=m?h=e?h-1:0:h<0&&(h=e?0:m-1),q(-h*I,v),T=h;break;case"leftLoop":q(-(h+1)*I,v),-1==h?(L=setTimeout(function(){q(-m*I,0)},v),h=m-1):h==m&&(L=setTimeout(function(){q(-I,0)},v),h=0),T=h}!function(){var e="leftLoop"==r?h+1:h,i=u.querySelectorAll(t.switchLoadClass),n=function(e){if(e){var i=e.getAttribute(t.switchLoad);if(!i)return!1;"img"==e.tagName.toLowerCase()?e.src=i:e.style.backgroundImage="url("+i+")"}};i.length>0&&(n(i[e]),n(i[e-1]),n(i[e+1]))}(),z(),S=setTimeout(function(){W()},v);for(var i=0;i<m;i++)a(g[i],t.titOnClassName),i==h&&o(g[i],t.titOnClassName);0==C&&(a(s,"nextStop"),a(l,"prevStop"),0==h?o(l,"prevStop"):h==m-1&&o(s,"nextStop")),c&&(c.innerHTML="<span>"+(h+1)+"</span>/"+m)};if(V(),y&&(x=setInterval(function(){h++,V()},w)),g)for(var Y=0;Y<m;Y++)!function(){var e=Y;g[e].addEventListener("click",function(){clearTimeout(L),clearTimeout(S),h=e,V()})}();s&&s.addEventListener("click",function(){1!=C&&h==m-1||(clearTimeout(L),clearTimeout(S),h++,V())}),l&&l.addEventListener("click",function(){1!=C&&0==h||(clearTimeout(L),clearTimeout(S),h--,V())});var J=function(e){clearTimeout(L),clearTimeout(S),f=void 0,N=0;var t=j?e.touches[0]:e;k=t.pageX,E=t.pageY,u.addEventListener(F,Z,!1),u.addEventListener(D,$,!1)},Z=function(e){if(!j||!(e.touches.length>1||e.scale&&1!==e.scale)){var t=j?e.touches[0]:e;if(N=t.pageX-k,O=t.pageY-E,void 0===f&&(f=!!(f||Math.abs(N)<Math.abs(O))),!f)switch(e.preventDefault(),y&&clearInterval(x),r){case"left":(0==h&&N>0||h>=m-1&&N<0)&&(N*=.4),q(-h*I+N,0);break;case"leftLoop":q(-(h+1)*I+N,0)}}},$=function e(t){0!=N&&(t.preventDefault(),f||(Math.abs(N)>I/10&&(N>0?h--:h++),V(!0),y&&(x=setInterval(function(){h++,V()},w))),u.removeEventListener(F,Z,!1),u.removeEventListener(D,e,!1))};u.addEventListener(M,J,!1)}}};e.exports=n},19:function(e,t,i){"use strict";var n=i(0),o=i(1),a=i(2),r="/phone/",l=n.constructorInherit(a,{callback:{},config:{},data:{items:[{href:r,icon:"icon-shouye",text:"首页",isShowMark:!1},{href:r+"dev-globals/",icon:"icon-kaifa",text:"开发全局",isShowMark:!1},{href:r+"dev-components/",icon:"icon-kaifa",text:"开发组件",isShowMark:!1},{href:r+"dev-words/",icon:"icon-kaifa",text:"开发词汇",isShowMark:!1},{href:r+"mine/",icon:"icon-wode",text:"我的",isShowMark:!1}]}});l.prototype.moduleDomCreate=function(){var e=this.opts.data,t=e.items,i="";t.forEach(function(e){var t="";e.isShowMark&&(t='<div class="g-navigation-mark"></div>'),i+='\n            <a href="'+e.href+'" class="g-navigation-item">\n                <div class="g-navigation-icon iconfont '+e.icon+'"></div>\n                <div class="g-navigation-text">'+e.text+"</div>\n                "+t+"\n            </a>\n        "}),this.moduleDom=o.createElement({style:this.opts.config.moduleDomStyle,customAttribute:this.opts.config.moduleDomCustomAttribute,attribute:{className:"g-navigation",innerHTML:i}})},l.prototype.power=function(){},e.exports=l},94:function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}();i(95);var l=i(3);new(function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),r(t,[{key:"power",value:function(){var e=this;!function(){new(i(17))({wrap:".page-slide",data:{items:[{img:{width:0,height:0,src:"http://img1.imgtn.bdimg.com/it/u=1056872014,4038868309&fm=23&gp=0.jpg"},href:""},{img:{width:0,height:0,src:"http://img3.imgtn.bdimg.com/it/u=1732308780,3782498029&fm=23&gp=0.jpg"},href:""},{img:{width:0,height:0,src:"http://img3.imgtn.bdimg.com/it/u=4027566086,3099254237&fm=23&gp=0.jpg"},href:""},{img:{width:0,height:0,src:"http://img4.imgtn.bdimg.com/it/u=120609946,455952432&fm=23&gp=0.jpg"},href:""},{img:{width:0,height:0,src:"http://img2.imgtn.bdimg.com/it/u=2763208243,961494673&fm=23&gp=0.jpg"},href:""}]}})}(),function(){new(i(19))({wrap:".page-navigation"})}(),function(){var t=e.Vue;i.e(0).then(function(e){i(112)(t),new t({el:".page-vue-app",template:'<div class="page-vue">\n                        <g-img-list></g-img-list>\n                        <g-img-list></g-img-list>\n                        <g-img-list></g-img-list>\n                        <g-img-list></g-img-list>\n                        <g-img-list></g-img-list>\n                        <g-img-list></g-img-list>\n                        <g-img-list></g-img-list>\n                        <g-img-list></g-img-list>\n                        <g-img-list></g-img-list>\n                        <g-img-list></g-img-list>\n                    </div>',mounted:function(){console.log(this)}})}.bind(null,i)).catch(i.oe)}()}}]),t}(l))},95:function(e,t){}},[94]);
//# sourceMappingURL=home.9d7b969cc2e5b79d8c4a.js.map