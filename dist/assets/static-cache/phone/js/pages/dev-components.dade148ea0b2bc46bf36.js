webpackJsonp([3],{125:function(e,t,o){"use strict";var n=o(0),i=o(1),a=o(2),s=n.constructorInherit(a,{callback:{},config:{status:"loading",positionMethod:"",positionLocation:"center"},data:{}});s.prototype.moduleDomCreate=function(){var e=this.opts.config,t="",o="",n=e.status,a=e.positionMethod,s=e.positionLocation;"loading"===n&&(o="g-loading-run ","fixed"===a&&(o+="g-loading-fixed g-loading-"+s),"absolute"===a&&(o+="g-loading-absolute g-loading-"+s),t='\n            <div class="g-loading-body">\n                <div class="g-loading-run-icon iconfont icon-loading"></div>\n            </div>\n        '),"over"===n&&(o="g-loading-over ","fixed"===a&&(o+="g-loading-fixed g-loading-"+s),"absolute"===a&&(o+="g-loading-absolute g-loading-"+s),t='\n            <div class="g-loading-body">\n                <div class="g-loading-over-icon iconfont icon-no-data"></div>\n                <div class="g-loading-over-text">没有数据了</div>\n            </div>\n        '),this.moduleDom=i.createElement({style:this.opts.config.moduleDomStyle,customAttribute:this.opts.config.moduleDomCustomAttribute,attribute:{className:"g-loading "+o,innerHTML:t}})},s.prototype.power=function(){},e.exports=s},126:function(e,t,o){"use strict";var n=o(0),i=o(1),a=o(2),s={nowCount:10,allCount:100,nowPage:1,allPage:null};s.allPage=Math.ceil(s.allCount/s.nowCount);var r=n.constructorInherit(a,{callback:{prevPage:function(){},nextPage:function(){},selectPage:function(){}},config:{},data:s});r.prototype.moduleDomCreate=function(){this.moduleDom=i.createElement({style:this.opts.config.moduleDomStyle,customAttribute:this.opts.config.moduleDomCustomAttribute,attribute:{className:"g-pagination",innerHTML:'\n                <div class="g-pagination-text">第</div>\n                <div class="g-pagination-now-page">\n                    <label class="g-select">\n                        <select class="g-select-body">\n                            '+this.renderOption()+'\n                        </select>\n                        <span class="g-select-mark iconfont icon-select"></span>\n                    </label>\n                </div>\n                <div class="g-pagination-text">页</div>\n                <a href="javascript:;" class="g-pagination-btn g-pagination-btn-inactive iconfont icon-prev"></a>\n                <a href="javascript:;" class="g-pagination-btn iconfont icon-next"></a>\n            '}}),this.prevDom=this.moduleDom.querySelectorAll(".g-pagination-btn")[0],this.nextDom=this.moduleDom.querySelectorAll(".g-pagination-btn")[1],this.btnInactiveClass="g-pagination-btn-inactive",this.selectDom=this.moduleDom.querySelector(".g-pagination-now-page .g-select-body")},r.prototype.renderOption=function(){for(var e="",t=0;t<this.opts.data.allPage;t++)e+='<option value="'+(t+1)+'">'+(t+1)+"</option>";return e},r.prototype.power=function(){var e=this,t=this.opts.data;1===t.nowPage&&this.prevPageDisable(),t.nowPage===t.allPage&&this.nextPageDisable(),this.prevDom.addEventListener("click",function(){this.classList.contains(e.btnInactiveClass)||e.prevPage()}),this.nextDom.addEventListener("click",function(){this.classList.contains(e.btnInactiveClass)||e.nextPage()}),this.selectDom.addEventListener("change",function(){e.selectPage()})},r.prototype.prevPage=function(){var e=this.opts.data;if(e.nowPage>1){e.nowPage--;var t=this.selectDom.querySelector("option:checked");t.previousElementSibling&&(t.selected=!1,t.previousElementSibling.selected=!0),this.nextPageEnable(),this.opts.callback.prevPage(this)}1===e.nowPage&&this.prevPageDisable(),console.log(e)},r.prototype.nextPage=function(){var e=this.opts.data;if(e.nowPage<e.allPage){e.nowPage++;var t=this.selectDom.querySelector("option:checked");t.nextElementSibling&&(t.selected=!1,t.nextElementSibling.selected=!0),this.prevPageEnable(),this.opts.callback.nextPage(this)}e.nowPage===e.allPage&&this.nextPageDisable(),console.log(e)},r.prototype.selectPage=function(){var e=this.opts.data;e.nowPage=this.selectDom.value,this.nextPageEnable(),this.prevPageEnable(),1===e.nowPage&&this.prevPageDisable(),e.nowPage===e.allPage&&this.nextPageDisable(),this.opts.callback.selectPage(this),console.log(e)},r.prototype.prevPageDisable=function(){this.prevDom.classList.add(this.btnInactiveClass)},r.prototype.prevPageEnable=function(){this.prevDom.classList.remove(this.btnInactiveClass)},r.prototype.nextPageDisable=function(){this.nextDom.classList.add(this.btnInactiveClass)},r.prototype.nextPageEnable=function(){this.nextDom.classList.remove(this.btnInactiveClass)},e.exports=r},127:function(e,t,o){"use strict";var n=o(0),i=o(1),a=o(2),s=n.constructorInherit(a,{callback:{},config:{button:{isShowIcon:!1}},data:{icon:"icon-no-data",text:"没有数据",button:{icon:"icon-home",text:"回首页",href:"/"}}});s.prototype.moduleDomCreate=function(){var e=this.opts.data,t="";this.opts.config.button.isShowIcon&&(t='<div class="g-button-icon iconfont '+e.button.icon+'"></div>'),this.moduleDom=i.createElement({style:this.opts.config.moduleDomStyle,customAttribute:this.opts.config.moduleDomCustomAttribute,attribute:{className:"g-no-data",innerHTML:'\n                <div class="g-no-data-icon iconfont '+e.icon+'"></div>\n                <div class="g-no-data-text">'+e.text+'</div>\n                <a class="g-no-data-button g-button" href="'+e.button.href+'">\n                    '+t+'\n                    <div class="g-button-text">'+e.button.text+"</div>\n                </a>\n            "}})},s.prototype.power=function(){},e.exports=s},128:function(e,t,o){"use strict";var n=o(0),i=o(1),a=o(2),s=n.constructorInherit(a,{callback:{},config:{},data:{}});s.prototype.moduleDomCreate=function(){this.moduleDom=i.createElement({style:this.opts.config.moduleDomStyle,customAttribute:this.opts.config.moduleDomCustomAttribute,attribute:{className:"g-sub-type",innerHTML:'\n                <div class="g-sub-type-text" style="text-align: center;">周华飞爱侯丽杰,侯丽杰爱周华飞sub-es5</div>\n            '}})},s.prototype.power=function(){},e.exports=s},129:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),r=o(0),l=o(1),c=o(54),u=function(e){function t(e){return n(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,r.extend({callback:{},config:{},data:{}},e)))}return a(t,e),s(t,[{key:"moduleDomCreate",value:function(){this.moduleDom=l.createElement({style:this.opts.config.moduleDomStyle,customAttribute:this.opts.config.moduleDomCustomAttribute,attribute:{className:"g-sub-type-es6",innerHTML:'\n                    <div class="g-sub-type-es6-text" style="text-align: center;">周华飞爱侯丽杰,侯丽杰爱周华飞sub-es6</div>\n                '}})}},{key:"power",value:function(){}}]),t}(c);e.exports=u},13:function(e,t,o){e.exports=o.p+"images/slide1.76c52cf8.jpg"},130:function(e,t,o){"use strict";var n=o(0),i=o(1),a=o(2),s=n.constructorInherit(a,{callback:{click:function(){}},config:{isHand:!1,status:"on",txt:{on:"已开启",off:"已关闭"}},data:{}});s.prototype.moduleDomCreate=function(){var e=this.opts.config;this.moduleDomActiveClass="g-radio-switch-active";var t="";"on"===e.status&&(t=this.moduleDomActiveClass),this.moduleDom=i.createElement({style:e.moduleDomStyle,customAttribute:e.moduleDomCustomAttribute,attribute:{className:"g-radio-switch "+t,innerHTML:'\n                <div class="g-radio-switch-body">\n                    <div class="g-radio-switch-body-round"></div>\n                </div>\n                <div class="g-radio-switch-text">'+e.txt[e.status]+"</div>\n            "}})},s.prototype.power=function(){var e=this,t=this.opts.config;this.moduleDom.addEventListener("click",function(){t.isHand||(e.isOn()?e.off():e.on()),e.opts.callback.click({status:t.status})})},s.prototype.isOn=function(){return this.moduleDom.classList.contains(this.moduleDomActiveClass)},s.prototype.on=function(){var e=this.opts.config;this.isOn()||(this.moduleDom.classList.add(this.moduleDomActiveClass),e.status="on",this.moduleDom.querySelector(".g-radio-switch-text").innerHTML=""+e.txt[e.status])},s.prototype.off=function(){var e=this.opts.config;this.isOn()&&(this.moduleDom.classList.remove(this.moduleDomActiveClass),e.status="off",this.moduleDom.querySelector(".g-radio-switch-text").innerHTML=""+e.txt[e.status])},e.exports=s},131:function(e,t,o){"use strict";var n=o(0),i=o(1),a=o(2),s=n.constructorInherit(a,{callback:{},config:{},data:{header:[{content:"undefined-header0"},{content:"undefined-header1"},{content:"undefined-header2"}],body:[[{content:"undefined-body0-0"},{content:"undefined-body0-1"},{content:"undefined-body0-2"}]],footer:""}});s.prototype.moduleDomCreate=function(){this.moduleDom=i.createElement({style:this.opts.config.moduleDomStyle,customAttribute:this.opts.config.moduleDomCustomAttribute,attribute:{className:"g-table",innerHTML:'\n                <div class="g-table-header">\n                    <div class="g-table-row">\n                        '+this.moduleDomCreateHeader()+'\n                    </div>\n                </div>\n                <div class="g-table-body">\n                    '+this.moduleDomCreateBody()+'\n                </div>\n                <div class="g-table-footer">\n                    '+this.moduleDomCreateFooter()+"\n                </div>\n            "}})},s.prototype.moduleDomCreateHeader=function(){var e="";return this.opts.data.header.forEach(function(t){e+='\n            <div class="g-table-col">\n                <div class="g-table-col-body">\n                    '+t.content+"\n                </div>\n            </div>\n        "}),e},s.prototype.moduleDomCreateBody=function(){var e="";return this.opts.data.body.forEach(function(t){var o="";t.forEach(function(e){o+='\n                <div class="g-table-col">\n                    <div class="g-table-col-body">\n                        '+e.content+"\n                    </div>\n                </div>\n            "}),e+='<div class="g-table-row">'+o+"</div>"}),e},s.prototype.moduleDomCreateFooter=function(){return this.opts.data.footer},s.prototype.power=function(){},e.exports=s},21:function(e,t,o){"use strict";var n=o(0),i=o(1),a=o(2),s=o(22),r=(o(23),n.constructorInherit(a,{callback:{startFun:function(){},endFun:function(){}},config:{heightWidthScale:.5,isShowHref:!0,touchSlide:{slideCell:"",mainCell:".g-slide-body",titCell:".g-slide-header .g-slide-header-item",effect:"leftLoop",autoPlay:!0,delayTime:200,interTime:3e3,startFun:function(){console.log("此处的函数会被覆盖,请在callback里执行回调")},endFun:function(){console.log("此处的函数会被覆盖,请在callback里执行回调")},defaultIndex:0,switchLoadClass:".pre-load",switchLoad:"data-src"}},data:{items:[{img:{width:0,height:0,src:o(13)},href:""}]}}));r.prototype.moduleDomCreate=function(){this.moduleDom=i.createElement({style:this.opts.config.moduleDomStyle,customAttribute:this.opts.config.moduleDomCustomAttribute,attribute:{className:"g-slide",innerHTML:"\n                "+this.renderHeader()+"\n                "+this.renderBody()+"\n            "}})},r.prototype.renderHeader=function(){var e=this,t="",o=e.opts.data,n="";return o.items.forEach(function(o,i){i===e.opts.config.touchSlide.defaultIndex&&(n="on"),t+='<div class="g-slide-header-item '+n+'"></div>'}),'<div class="g-slide-header">'+t+"</div>"},r.prototype.renderBody=function(){var e=this,t="";return e.opts.data.items.forEach(function(o){e.opts.config.isShowHref?t+='<a href="'+(o.href||"javascript:;")+'" class="g-slide-body-item pre-load" data-src="'+o.img.src+'"></a>':t+='<a class="g-slide-body-item pre-load" data-src="'+o.img.src+'"></a>'}),'<div class="g-slide-body">'+t+"</div>"},r.prototype.power=function(){var e=this,t=e.opts.callback,o=e.opts.config,n=o.touchSlide,i=e.moduleDom;i.style.height=10*o.heightWidthScale+"rem",n.slideCell=i,n.startFun=function(o){t.startFun({self:e,index:o})},n.endFun=function(o){t.endFun({self:e,index:o})},s(e.opts.config.touchSlide)},e.exports=r},22:function(e,t,o){"use strict";/*!
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
var n=function(e){e=e||{};var t={slideCell:e.slideCell||"#touchSlide",titCell:e.titCell||".hd li",mainCell:e.mainCell||".bd",effect:e.effect||"left",autoPlay:e.autoPlay||!1,delayTime:e.delayTime||200,interTime:e.interTime||2500,defaultIndex:e.defaultIndex||0,titOnClassName:e.titOnClassName||"on",autoPage:e.autoPage||!1,prevCell:e.prevCell||".prev",nextCell:e.nextCell||".next",pageStateCell:e.pageStateCell||".pageState",pnLoop:"undefined "==e.pnLoop||e.pnLoop,startFun:e.startFun||null,endFun:e.endFun||null,switchLoadClass:e.switchLoadClass||".pre-load",switchLoad:e.switchLoad||"data-src"},o=null;if("string"==Object.prototype.toString.call(t.slideCell).slice(8,-1).toLowerCase()&&(o=document.querySelector(t.slideCell)),1==t.slideCell.nodeType&&(o=t.slideCell),"htmlcollection"!=Object.prototype.toString.call(t.slideCell).slice(8,-1).toLowerCase()&&"nodelist"!=Object.prototype.toString.call(t.slideCell).slice(8,-1).toLowerCase()||(o=t.slideCell[0]),o){var n=function(e,t){e=e.split(" ");var o=[];t=t||document;var n=[t];for(var i in e)e.hasOwnProperty(i)&&0!=e[i].length&&o.push(e[i]);for(var a in o)if(o.hasOwnProperty(a)){if(0==n.length)return!1;var s=[];for(var r in n)if(n.hasOwnProperty(r))if("#"==o[a][0])s.push(document.getElementById(o[a].replace("#","")));else if("."==o[a][0])for(var l=n[r].getElementsByTagName("*"),c=0;c<l.length;c++){var u=l[c].className;u&&u.search&&-1!=u.search(new RegExp("\\b"+o[a].replace(".","")+"\\b"))&&s.push(l[c])}else for(var d=n[r].getElementsByTagName(o[a]),m=0;m<d.length;m++)s.push(d[m]);n=s}return 0!=n.length&&n[0]!=t&&n},i=function(e,t){!e||!t||e.className&&-1!=e.className.search(new RegExp("\\b"+t+"\\b"))||(e.className+=(e.className?" ":"")+t)},a=function(e,t){!e||!t||e.className&&-1==e.className.search(new RegExp("\\b"+t+"\\b"))||(e.className=e.className.replace(new RegExp("\\s*\\b"+t+"\\b","g"),""))},s=t.effect,r=n(t.prevCell,o)[0],l=n(t.nextCell,o)[0],c=n(t.pageStateCell)[0],u=n(t.mainCell,o)[0];if(u){var d,m,p=u.children.length,f=n(t.titCell,o),h=f?f.length:p,g=parseInt(t.defaultIndex),v=parseInt(t.delayTime),b=parseInt(t.interTime),y=!("false"==t.autoPlay||0==t.autoPlay),D=!("false"==t.autoPage||0==t.autoPage),w=!("false"==t.pnLoop||0==t.pnLoop),C=g,x=null,k=null,P=null,L=0,T=0,S=0,E=0,A=/hp-tablet/gi.test(navigator.appVersion),I="ontouchstart"in window&&!A,N=I?"touchstart":"mousedown",O=I?"touchmove":"",M=I?"touchend":"mouseup",R=u.parentNode.clientWidth,H=p;if(0==h&&(h=p),D){h=p,f=f[0],f.innerHTML="";var j="";if(1==t.autoPage||"true"==t.autoPage)for(var B=0;B<h;B++)j+="<li>"+(B+1)+"</li>";else for(var F=0;F<h;F++)j+=t.autoPage.replace("$",F+1);f.innerHTML=j,f=f.children}"leftLoop"==s&&(H+=2,u.appendChild(u.children[0].cloneNode(!0)),u.insertBefore(u.children[p-1].cloneNode(!0),u.children[0])),d=function(e,t){var o=document.createElement("div");o.innerHTML=t,o=o.children[0];var n=e.cloneNode(!0);return o.appendChild(n),e.parentNode.replaceChild(o,e),u=n,o}(u,'<div class="tempWrap" style="height:inherit;overflow:hidden; position:relative;"></div>'),u.style.cssText="display:flex;width:"+H*R+"px;position:relative;overflow:hidden;padding:0;margin:0;";for(var _=0;_<H;_++)u.children[_].style.cssText="height:inherit;display:flex;align-items: center;justify-content: center;width:"+R+"px";var q=function(){"function"==typeof t.startFun&&t.startFun(g,h)},G=function(){"function"==typeof t.endFun&&t.endFun(g,h)},W=function(){R=d.clientWidth,u.style.width=H*R+"px";for(var e=0;e<H;e++)u.children[e].style.width=R+"px";z(-("leftLoop"==s?g+1:g)*R,0)};window.addEventListener("resize",W,!1);var z=function(e,t,o){o=o?o.style:u.style,o.webkitTransitionDuration=o.MozTransitionDuration=o.msTransitionDuration=o.OTransitionDuration=o.transitionDuration=t+"ms",o.webkitTransform="translate("+e+"px,0)translateZ(0)",o.msTransform=o.MozTransform=o.OTransform="translateX("+e+"px)"},X=function(e){switch(s){case"left":g>=h?g=e?g-1:0:g<0&&(g=e?0:h-1),z(-g*R,v),C=g;break;case"leftLoop":z(-(g+1)*R,v),-1==g?(k=setTimeout(function(){z(-h*R,0)},v),g=h-1):g==h&&(k=setTimeout(function(){z(-R,0)},v),g=0),C=g}!function(){var e="leftLoop"==s?g+1:g,o=u.querySelectorAll(t.switchLoadClass),n=function(e){if(e){var o=e.getAttribute(t.switchLoad);if(!o)return!1;"img"==e.tagName.toLowerCase()?e.src=o:e.style.backgroundImage="url("+o+")"}};o.length>0&&(n(o[e]),n(o[e-1]),n(o[e+1]))}(),q(),P=setTimeout(function(){G()},v);for(var o=0;o<h;o++)a(f[o],t.titOnClassName),o==g&&i(f[o],t.titOnClassName);0==w&&(a(l,"nextStop"),a(r,"prevStop"),0==g?i(r,"prevStop"):g==h-1&&i(l,"nextStop")),c&&(c.innerHTML="<span>"+(g+1)+"</span>/"+h)};if(X(),y&&(x=setInterval(function(){g++,X()},b)),f)for(var Y=0;Y<h;Y++)!function(){var e=Y;f[e].addEventListener("click",function(){clearTimeout(k),clearTimeout(P),g=e,X()})}();l&&l.addEventListener("click",function(){1!=w&&g==h-1||(clearTimeout(k),clearTimeout(P),g++,X())}),r&&r.addEventListener("click",function(){1!=w&&0==g||(clearTimeout(k),clearTimeout(P),g--,X())});var J=function(e){clearTimeout(k),clearTimeout(P),m=void 0,S=0;var t=I?e.touches[0]:e;L=t.pageX,T=t.pageY,u.addEventListener(O,V,!1),u.addEventListener(M,Z,!1)},V=function(e){if(!I||!(e.touches.length>1||e.scale&&1!==e.scale)){var t=I?e.touches[0]:e;if(S=t.pageX-L,E=t.pageY-T,void 0===m&&(m=!!(m||Math.abs(S)<Math.abs(E))),!m)switch(e.preventDefault(),y&&clearInterval(x),s){case"left":(0==g&&S>0||g>=h-1&&S<0)&&(S*=.4),z(-g*R+S,0);break;case"leftLoop":z(-(g+1)*R+S,0)}}},Z=function e(t){0!=S&&(t.preventDefault(),m||(Math.abs(S)>R/10&&(S>0?g--:g++),X(!0),y&&(x=setInterval(function(){g++,X()},b))),u.removeEventListener(O,V,!1),u.removeEventListener(M,e,!1))};u.addEventListener(N,J,!1)}}};e.exports=n},23:function(e,t,o){"use strict";function n(e){return e/(arguments.length>1&&void 0!==arguments[1]?arguments[1]:750)*10+"rem"}e.exports=n},24:function(e,t,o){e.exports=o.p+"images/slide2.99e5fe46.jpg"},25:function(e,t,o){e.exports=o.p+"images/slide3.15e38f76.jpg"},26:function(e,t,o){e.exports=o.p+"images/slide4.b37b64b3.jpg"},27:function(e,t,o){e.exports=o.p+"images/slide5.3102c0c0.jpg"},28:function(e,t,o){"use strict";var n=o(0),i=o(1),a=o(2),s=n.constructorInherit(a,{callback:{},config:{},data:{items:[]}});s.prototype.moduleDomCreate=function(){var e=this.opts.data,t=e.items,o="";t.forEach(function(e){var t="";e.isShowMark&&(t='<div class="g-navigation-item-mark"></div>'),o+='\n            <a href="'+e.href+'" class="g-navigation-item">\n                <div class="g-navigation-item-icon iconfont '+e.icon+'"></div>\n                <div class="g-navigation-item-text">'+e.text+"</div>\n                "+t+"\n            </a>\n        "}),this.moduleDom=i.createElement({style:this.opts.config.moduleDomStyle,customAttribute:this.opts.config.moduleDomCustomAttribute,attribute:{className:"g-navigation",innerHTML:o}})},s.prototype.power=function(){},e.exports=s},54:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),a=o(0),s=o(1),r=function(){function e(t){n(this,e),this.opts=a.extend({wrap:".g-body",callback:{moduleDomCreateBefore:function(e){},moduleDomCreateAfter:function(e){},moduleDomRenderBefore:function(e){},moduleDomRenderAfter:function(e){},moduleDomRemoveBefore:function(e){},moduleDomRemoveAfter:function(e){},moduleDomShowBefore:function(e){},moduleDomShowAfter:function(e){},moduleDomHideBefore:function(e){},moduleDomHideAfter:function(e){},wrapDomGetBefore:function(e){},wrapDomGetAfter:function(e){},wrapDomRemoveBefore:function(e){},wrapDomRemoveAfter:function(e){}},config:{moduleDomCustomAttribute:{},moduleDomRenderMethod:{method:"appendChild",child:null},moduleDomStyle:{},moduleDomIsRender:!0,moduleDomIsClearTimer:!0},data:{}},t),this.moduleDom=null,this.wrapDom=null,this.moduleDomTimer={},this.init()}return i(e,[{key:"init",value:function(){this.render(),this.power()}},{key:"render",value:function(){this.moduleDomRemove();var e=this.opts.callback;e.moduleDomCreateBefore(this),this.moduleDomCreate(),e.moduleDomCreateAfter(this),this.wrapDomGet(),this.moduleDomRender()}},{key:"power",value:function(){}},{key:"moduleDomCreate",value:function(){this.moduleDom=s.createElement({style:this.opts.config.moduleDomStyle,customAttribute:this.opts.config.moduleDomCustomAttribute,attribute:{className:"g-super-type-es6",innerHTML:'\n                    <div class="g-super-type-es6-text" style="text-align: center;">周华飞爱侯丽杰,侯丽杰爱周华飞sup-es6</div>\n                '}})}},{key:"moduleDomRender",value:function(){var e=this.opts.callback,t=this.opts.config;if(t.moduleDomIsRender&&this.wrapDom){e.moduleDomRenderBefore(this);var o=t.moduleDomRenderMethod;if("insertBefore"===o.method){var n=s.getDomArray(o.child)[0];n?this.wrapDom.insertBefore(this.moduleDom,n):this.wrapDom.insertBefore(this.moduleDom,this.wrapDom.children[0])}"appendChild"===o.method&&this.wrapDom.appendChild(this.moduleDom),e.moduleDomRenderAfter(this)}}},{key:"moduleDomRemove",value:function(){var e=this.opts.callback;this.moduleDom&&this.moduleDom.parentNode&&(e.moduleDomRemoveBefore(this),this.moduleDom.parentNode.removeChild(this.moduleDom),e.moduleDomRemoveAfter(this)),this.moduleDomClearTimer()}},{key:"moduleDomClearTimer",value:function(){var e=this;e.opts.config.moduleDomIsClearTimer&&Object.keys(e.moduleDomTimer).forEach(function(t){clearInterval(e.moduleDomTimer[t]),clearTimeout(e.moduleDomTimer[t])})}},{key:"moduleDomHide",value:function(){var e=this.opts.callback;this.moduleDom.parentNode&&(this.opts.config.moduleDomIsRender=!1,e.moduleDomHideBefore(this),this.moduleDom.parentNode.removeChild(this.moduleDom),e.moduleDomHideAfter(this))}},{key:"moduleDomShow",value:function(){var e=this.opts.callback;e.moduleDomShowBefore(this),this.wrapDom&&(this.opts.config.moduleDomIsRender=!0,this.moduleDomRender()),e.moduleDomShowAfter(this)}},{key:"wrapDomGet",value:function(){var e=this.opts.callback;e.wrapDomGetBefore(this),this.wrapDom=s.getDomArray(this.opts.wrap)[0],e.wrapDomGetAfter(this)}},{key:"wrapDomRemove",value:function(){var e=this.opts.callback;this.moduleDomRemove(),this.wrapDom&&(e.wrapDomRemoveBefore(this),this.wrapDom.parentNode.removeChild(this.wrapDom),e.wrapDomRemoveAfter(this))}},{key:"getModuleDomHtml",value:function(){return this.moduleDom.outerHTML}}]),e}();e.exports=r},55:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}();o(56);var r=o(3);new(function(e){function t(){return n(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"power",value:function(){var e=this,t=e.applications,n=e.dataInfo,i=n.routes;!function(){var e=o(125),n=t.WhenScrollBottom,i=0;new n({isInitRender:!1,callback:{success:function(t){i++,new e({wrap:".g-body",config:{status:"loading"}}),i>=5?new e({config:{status:"over"}}):t.dataLoadContinue()}}})}(),function(){new(o(21))({wrap:".page-slide",data:{items:[{img:{width:0,height:0,src:o(13)},href:""},{img:{width:0,height:0,src:o(24)},href:""},{img:{width:0,height:0,src:o(25)},href:""},{img:{width:0,height:0,src:o(26)},href:""},{img:{width:0,height:0,src:o(27)},href:""}]}})}(),function(){new(o(28))({wrap:".page-navigation",data:{items:[{href:i.home.route,icon:"icon-home",text:"首页",isShowMark:!1},{href:i["dev-globals"].route,icon:"icon-dev",text:"开发全局",isShowMark:!1},{href:i["dev-components"].route,icon:"icon-dev",text:"开发组件",isShowMark:!1},{href:i["dev-words"].route,icon:"icon-dev",text:"开发词汇",isShowMark:!1},{href:i.mine.route,icon:"icon-mine",text:"我的",isShowMark:!1}]}})}(),function(){new(o(126))({wrap:".page-pagination"})}(),function(){new(o(127))({wrap:".page-no-data"})}(),function(){new(o(2))({wrap:".page-super-type"});var e=o(128);new e({wrap:".page-super-type"}),new e,new(o(54))({wrap:".page-super-type"}),new(o(129))({wrap:".page-super-type"})}(),function(){new(o(130))({wrap:".page-radio-switch",callback:{click:function(e){console.log(e)}}})}(),function(){new(o(131))({wrap:".page-table",data:{header:[{content:"<div>header0</div>"},{content:"<div>header1</div>"},{content:"<div>header2</div>"}],body:[[{content:"<div>body0-0</div>"},{content:"<div>body1-0</div>"},{content:"<div>body2-0</div>"}],[{content:"<div>body0-1</div>"},{content:"<div>body1-1</div>"},{content:"<div>body2-1</div>"}],[{content:"<div>body0-2</div>"},{content:"<div>body1-2</div>"},{content:"<div>body2-2</div>"}]],footer:""}})}(),function(){o.e(1).then(function(e){new(o(162))({wrap:".page-star",callback:{click:function(e){console.log(e)}}})}.bind(null,o)).catch(o.oe)}()}}]),t}(r))},56:function(e,t){}},[55]);
//# sourceMappingURL=dev-components.dade148ea0b2bc46bf36.js.map