webpackJsonp([3],{15:function(e,t,o){"use strict";var n=o(2),i=o(5),r=o(29),s=o(75),a=n.constructorInherit(r,{callback:{moduleDomRenderBefore:function(e){"confirm"===e.opts.config.type&&(e.opts.config.confirm.isShowMask&&!e.mask&&(e.mask=new s(e.opts.config.mask)),e.wrapDom&&"static"===getComputedStyle(e.wrapDom).position&&(e.wrapDom.style.position="relative"))},moduleDomHideAfter:function(e){e.mask&&e.mask.moduleDomHide()},confirm:function(){},cancel:function(){},close:function(){}},config:{type:"alert",positionLocation:"center",alert:{timer:null,time:3e3,isShowIcon:!1,isShowClose:!0,icon:"icon-chenggong",content:"成功"},confirm:{isShowHeader:!0,headerContent:"提示:",isShowBody:!0,content:"<div>确定要执行这个操作?</div>",isShowFooter:!0,footerContent:"",isShowClose:!0,closeContent:'<div class="iconfont icon-guanbi"></div>',isShowConfirm:!0,confirmContent:"确认",isShowCancel:!0,cancelContent:"取消",isCustom:!1,isShowIcon:!1,icon:"icon-jinggao",isShowMask:!0,isHandHide:!1},mask:{config:{}}},data:{}});a.prototype.moduleDomCreate=function(){var e=this.opts.config,t="g-dialog-"+e.type,o="g-dialog-"+e.positionLocation,n="\n        "+this.renderAlert()+"\n        "+this.renderConfirm()+"\n    ";this.moduleDom=i.createElement({style:this.opts.config.moduleDomStyle,customAttribute:this.opts.config.moduleDomCustomAttribute,attribute:{className:"g-dialog "+t+" "+o,innerHTML:n}})},a.prototype.renderAlert=function(){var e=this.opts.config;if("alert"!==e.type)return"";var t=e.alert,o="";t.isShowIcon&&(o='<div class="g-dialog-alert-icon iconfont '+t.icon+'"></div>');var n="";return t.isShowClose&&(n='<div class="g-dialog-alert-close iconfont icon-guanbi" ></div>'),"\n        "+n+"\n        "+o+'\n        <div class="g-dialog-alert-text">'+t.content+"</div>\n    "},a.prototype.renderConfirm=function(){var e=this.opts.config;if("confirm"!==e.type)return"";var t=e.confirm,o="";t.isShowHeader&&(o='<div class="g-dialog-confirm-header">'+t.headerContent+"</div>");var n="";if(t.isShowBody){var i="";t.isShowIcon&&(i='<div class="g-dialog-confirm-body-system-icon iconfont '+t.icon+'"></div>');var r="g-dialog-confirm-body-system",s="\n            "+i+'\n            <div class="g-dialog-confirm-body-system-text">'+t.content+"</div>\n        ";t.isCustom&&(r="g-dialog-confirm-body-custom",s=t.content),n='\n            <div class="g-dialog-confirm-body">\n                <div class="'+r+'">\n                    '+s+"\n                </div>\n            </div>\n        "}var a="";if(t.isShowFooter){var c="";t.isShowCancel&&(c='<div class="g-button g-button-cancel g-dialog-confirm-footer-cancel">'+t.cancelContent+"</div>");var l="";t.isShowConfirm&&(l='<div class="g-button g-dialog-confirm-footer-confirm">'+t.confirmContent+"</div>"),a='<div class="g-dialog-confirm-footer">'+c+l+"</div>"}var d="";return t.isShowClose&&(d='<div class="g-dialog-confirm-close">'+t.closeContent+"</div>"),"\n        "+o+"\n        "+n+"\n        "+a+"\n        "+d+" \n    "},a.prototype.power=function(){var e=this,t=this.opts.config;if("alert"===t.type){var o=this.moduleDom.querySelector(".g-dialog-alert-close");t.alert.timer=setTimeout(function(){e.moduleDomHide()},t.alert.time),o.addEventListener("click",function(){clearTimeout(t.alert.timer),e.moduleDomHide()})}if("confirm"===t.type){var n=this.moduleDom.querySelector(".g-dialog-confirm-close");n&&n.addEventListener("click",function(){e.moduleDomHide(),e.opts.callback.close()});var i=this.moduleDom.querySelector(".g-dialog-confirm-footer-cancel");i&&i.addEventListener("click",function(){e.moduleDomHide(),e.opts.callback.cancel()});var r=this.moduleDom.querySelector(".g-dialog-confirm-footer-confirm");r&&r.addEventListener("click",function(){e.opts.config.confirm.isHandHide||e.moduleDomHide(),e.opts.callback.confirm()})}},e.exports=a},29:function(e,t,o){"use strict";function n(e){this.opts=i.extend({defaults:{wrap:".g-body",callback:{moduleDomCreateBefore:function(e){},moduleDomCreateAfter:function(e){},moduleDomRenderBefore:function(e){},moduleDomRenderAfter:function(e){},moduleDomRemoveBefore:function(e){},moduleDomRemoveAfter:function(e){},moduleDomShowBefore:function(e){},moduleDomShowAfter:function(e){},moduleDomHideBefore:function(e){},moduleDomHideAfter:function(e){},wrapDomGetBefore:function(e){},wrapDomGetAfter:function(e){},wrapDomRemoveBefore:function(e){},wrapDomRemoveAfter:function(e){}},config:{moduleDomCustomAttribute:{},moduleDomRenderMethod:{method:"appendChild",child:null},moduleDomStyle:{},moduleDomIsRender:!0,moduleDomIsClearTimer:!0},data:{}},inherits:e}),this.moduleDom=null,this.wrapDom=null,this.moduleDomTimer={},this.init()}var i=o(2),r=o(5);n.prototype.init=function(){this.render(),this.power()},n.prototype.render=function(){this.moduleDomRemove();var e=this.opts.callback;e.moduleDomCreateBefore(this),this.moduleDomCreate(),e.moduleDomCreateAfter(this),this.wrapDomGet(),this.moduleDomRender()},n.prototype.power=function(){},n.prototype.moduleDomCreate=function(){this.moduleDom=r.createElement({style:this.opts.config.moduleDomStyle,customAttribute:this.opts.config.moduleDomCustomAttribute,attribute:{className:"g-super-type",innerHTML:'\n                <div class="g-super-type-text" style="text-align: center;">周华飞爱侯丽杰,侯丽杰爱周华飞sup-es5</div>\n            '}})},n.prototype.moduleDomRender=function(){var e=this.opts.callback,t=this.opts.config;if(t.moduleDomIsRender&&this.wrapDom){e.moduleDomRenderBefore(this);var o=t.moduleDomRenderMethod;if("insertBefore"===o.method){var n=r.getDomArray(o.child)[0];n?this.wrapDom.insertBefore(this.moduleDom,n):this.wrapDom.insertBefore(this.moduleDom,this.wrapDom.children[0])}"appendChild"===o.method&&this.wrapDom.appendChild(this.moduleDom),e.moduleDomRenderAfter(this)}},n.prototype.moduleDomRemove=function(){var e=this.opts.callback;this.moduleDom&&this.moduleDom.parentNode&&(e.moduleDomRemoveBefore(this),this.moduleDom.parentNode.removeChild(this.moduleDom),e.moduleDomRemoveAfter(this)),this.moduleDomClearTimer()},n.prototype.moduleDomClearTimer=function(){var e=this;e.opts.config.moduleDomIsClearTimer&&Object.keys(e.moduleDomTimer).forEach(function(t){clearInterval(e.moduleDomTimer[t]),clearTimeout(e.moduleDomTimer[t])})},n.prototype.moduleDomHide=function(){var e=this.opts.callback;this.moduleDom.parentNode&&(this.opts.config.moduleDomIsRender=!1,e.moduleDomHideBefore(this),this.moduleDom.parentNode.removeChild(this.moduleDom),e.moduleDomHideAfter(this))},n.prototype.moduleDomShow=function(){var e=this.opts.callback;e.moduleDomShowBefore(this),this.wrapDom&&(this.opts.config.moduleDomIsRender=!0,this.moduleDomRender()),e.moduleDomShowAfter(this)},n.prototype.wrapDomGet=function(){var e=this.opts.callback;e.wrapDomGetBefore(this),this.wrapDom=r.getDomArray(this.opts.wrap)[0],e.wrapDomGetAfter(this)},n.prototype.wrapDomRemove=function(){var e=this.opts.callback;this.moduleDomRemove(),this.wrapDom&&(e.wrapDomRemoveBefore(this),this.wrapDom.parentNode.removeChild(this.wrapDom),e.wrapDomRemoveAfter(this))},n.prototype.getModuleDomHtml=function(){return this.moduleDom.outerHTML},e.exports=n},32:function(e,t){e.exports=function(e,t,o,n,i){var r,s=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(r=e,s=e.default);var c="function"==typeof s?s.options:s;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns),n&&(c._scopeId=n);var l;if(i?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=l):o&&(l=o),l){var d=c.functional,u=d?c.render:c.beforeCreate;d?c.render=function(e,t){return l.call(t),u(e,t)}:c.beforeCreate=u?[].concat(u,l):[l]}return{esModule:r,exports:s,options:c}}},33:function(e,t){function o(e,t){var o=e[1]||"",i=e[3];if(!i)return o;if(t&&"function"==typeof btoa){var r=n(i);return[o].concat(i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"})).concat([r]).join("\n")}return[o].join("\n")}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=o(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,o){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(n[r]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&n[s[0]]||(o&&!s[2]?s[2]=o:o&&(s[2]="("+s[2]+") and ("+o+")"),t.push(s))}},t}},34:function(e,t,o){function n(e){for(var t=0;t<e.length;t++){var o=e[t],n=d[o.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](o.parts[i]);for(;i<o.parts.length;i++)n.parts.push(r(o.parts[i]));n.parts.length>o.parts.length&&(n.parts.length=o.parts.length)}else{for(var s=[],i=0;i<o.parts.length;i++)s.push(r(o.parts[i]));d[o.id]={id:o.id,refs:1,parts:s}}}}function i(){var e=document.createElement("style");return e.type="text/css",u.appendChild(e),e}function r(e){var t,o,n=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(n){if(p)return h;n.parentNode.removeChild(n)}if(v){var r=f++;n=m||(m=i()),t=s.bind(null,n,r,!1),o=s.bind(null,n,r,!0)}else n=i(),t=a.bind(null,n),o=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else o()}}function s(e,t,o,n){var i=o?"":n.css;if(e.styleSheet)e.styleSheet.cssText=g(t,i);else{var r=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function a(e,t){var o=t.css,n=t.media,i=t.sourceMap;if(n&&e.setAttribute("media",n),i&&(o+="\n/*# sourceURL="+i.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=o(40),d={},u=c&&(document.head||document.getElementsByTagName("head")[0]),m=null,f=0,p=!1,h=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,o){p=o;var i=l(e,t);return n(i),function(t){for(var o=[],r=0;r<i.length;r++){var s=i[r],a=d[s.id];a.refs--,o.push(a)}t?(i=l(e,t),n(i)):i=[];for(var r=0;r<o.length;r++){var a=o[r];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete d[a.id]}}}};var g=function(){var e=[];return function(t,o){return e[t]=o,e.filter(Boolean).join("\n")}}()},35:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var i=o(8),r=n(i),s=o(37),a=n(s),c=o(43),l=n(c),d=o(76),u=n(d),m=o(2),f=n(m),p=o(5),h=n(p),v=o(77),g=n(v),y=o(78),D=n(y),w=o(79),C=n(w);o(80),r.default.prototype.$tools=f.default,r.default.prototype.$applications=h.default,r.default.prototype.$axios=g.default,r.default.prototype.$jsonp=D.default,r.default.prototype.$lazyload=new C.default({isInitRender:!1}),r.default.config.productionTip=!1,l.default.beforeEach(function(e,t,o){var n=document.querySelector("title");n&&(n.innerHTML=e.meta.title);e.meta.isValidateLogin,o()}),l.default.afterEach(function(e,t){var o=document.querySelector(".g-qr-code-svg");o&&(o.innerHTML=h.default.qrCode(window.location.href))}),setTimeout(function(){new r.default({el:"#app",router:l.default,store:u.default,template:"<app></app>",components:{app:a.default}})},0)},37:function(e,t,o){function n(e){i||o(38)}var i=!1,r=o(32)(o(41),o(42),n,"data-v-1d0e219a",null);r.options.__file="/Users/zhouhuafei/Desktop/suibianxiexie/vue/phone/src/app.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] app.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},38:function(e,t,o){var n=o(39);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);o(34)("15c78d7d",n,!1)},39:function(e,t,o){t=e.exports=o(33)(!0),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"app.vue",sourceRoot:""}])},40:function(e,t){e.exports=function(e,t){for(var o=[],n={},i=0;i<t.length;i++){var r=t[i],s=r[0],a=r[1],c=r[2],l=r[3],d={id:e+":"+i,css:a,media:c,sourceMap:l};n[s]?n[s].parts.push(d):o.push(n[s]={id:s,parts:[d]})}return o}},41:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{config:{isShowCopyright:!0,isShowFooterNav:!0},data:{}}},mounted:function(){var e=document.querySelector(".g-wrap");[].slice.call(e.querySelectorAll("script")).forEach(function(t){e.removeChild(t)})}}},42:function(e,t,o){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticStyle:{width:"inherit"}},[e._m(0),e._v(" "),o("div",{staticClass:"g-body"},[o("router-view")],1),e._v(" "),o("div",{staticClass:"g-footer"},[e.$store.state.isShowCopyright?o("div",{staticClass:"g-copyright"},[o("div",{staticClass:"g-copyright-icon iconfont icon-logo"}),e._v(" "),o("div",{staticClass:"g-copyright-text"},[e._v("版权信息哟")])]):e._e(),e._v(" "),e.$store.state.footerNav?o("div",{staticClass:"g-footer-nav"},[o("div",{staticClass:"g-footer-nav-body"},[e._l(e.$store.state.footerNav.data,function(t){return[o("router-link",{staticClass:"g-footer-nav-item",class:{"g-footer-nav-item-active":t.href===e.$route.path},attrs:{to:t.href}},[o("div",{staticClass:"g-footer-nav-item-icon iconfont",class:[t.icon]}),e._v(" "),o("div",{staticClass:"g-footer-nav-item-text",domProps:{textContent:e._s(t.text)}})])]})],2)]):e._e()])])},staticRenderFns:[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"g-header"},[o("div",{staticClass:"g-qr-code"},[o("div",{staticClass:"g-qr-code-text"},[e._v("有码可依 有码必依")]),e._v(" "),o("div",{staticClass:"g-qr-code-svg"}),e._v(" "),o("div",{staticClass:"g-qr-code-text"},[e._v("执码必严 违码必究")])])])}]},e.exports.render._withStripped=!0},43:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(8),r=n(i),s=o(17),a=n(s);r.default.use(a.default);var c=[{path:"/mine/",name:"mine",meta:{title:"我的",isValidateLogin:!1},component:function(e){o.e(0).then(function(){e(o(83))}.bind(null,o)).catch(o.oe)}},{path:"/",name:"home",meta:{title:"首页",isValidateLogin:!1},component:function(e){o.e(1).then(function(){e(o(84))}.bind(null,o)).catch(o.oe)}}];t.default=new a.default({routes:c})},75:function(e,t,o){"use strict";var n=o(2),i=o(5),r=o(29),s=n.constructorInherit(r,{callback:{click:function(){},moduleDomRenderBefore:function(e){e.wrapDom&&"static"===getComputedStyle(e.wrapDom).position&&(e.wrapDom.style.position="relative")}},config:{isTransparent:!1,positionMethod:"fixed"},data:{}});s.prototype.moduleDomCreate=function(){var e=this.opts.config,t="";e.isTransparent&&(t="g-mask-transparent"),"fixed"===e.positionMethod&&(t="g-mask-fixed"),this.moduleDom=i.createElement({style:this.opts.config.moduleDomStyle,customAttribute:this.opts.config.moduleDomCustomAttribute,attribute:{className:"g-mask "+t,innerHTML:""}})},s.prototype.power=function(){var e=this;this.moduleDom.addEventListener("click",function(t){e.opts.callback.click(),t.stopPropagation()})},e.exports=s},76:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(8),r=n(i),s=o(30),a=n(s);r.default.use(a.default);t.default=new a.default.Store({state:{isShowCopyright:!0,footerNav:{config:{isShow:!0},data:[{href:"/",text:"首页",icon:"icon-shouye",isHighlight:!0,isShowMark:!1},{href:"/mine/",text:"我的",icon:"icon-wode",isHighlight:!1,isShowMark:!1}]}},getters:{},mutations:{},actions:{}})},77:function(e,t,o){"use strict";var n=o(31),i=o(2),r=o(15);e.exports=function(e){var t=i.extend({defaults:{method:"get",isHandleError:!0,isHandleFailure:!0,timeout:5e3},inherits:e});return"get"===t.method.toLowerCase()&&(t.params=t.data||t.params),n(t).catch(function(e){var o={data:{status:"error",message:"接口出错",error:e}};return t.isHandleError&&new r({config:{alert:{content:e}}}),o}).then(function(e){var o=e.data;return"failure"===o.status&&t.isHandleFailure&&new r({config:{alert:{content:"失败: "+o.message}}}),o})}},78:function(e,t,o){"use strict";var n=o(2),i=o(15);e.exports=function(e){function t(){var e={status:"error",message:"接口出错",error:"Request failed with status code 404"};a(e),o.isHandleError&&new i({config:{alert:{content:"Error: "+e.error}}})}var o=n.extend({defaults:{url:"",data:{},isHandleError:!0,isHandleFailure:!0,callback:function(){}},inherits:e}),r=o.url,s=o.data,a=o.callback;if(r){var c="jsonpCallback"+(new Date).getTime();window[c]=function(e){a(e),"failure"===e.status&&o.isHandleFailure&&new i({config:{alert:{content:"失败: "+e.message}}})};var l=document.createElement("script");l.addEventListener("error",function(){document.body.removeChild(l),t()}),l.addEventListener("load",function(){document.body.removeChild(l)});var d=n.queryStringify(s);l.src=d?r+"?"+d+"&callback="+c:r+"?callback="+c,document.body.appendChild(l)}else t()}},79:function(e,t,o){"use strict";function n(e){this.opts=i.extend({defaults:{element:".g-lazy-load",srcAttr:"data-src",moreHeight:0,interval:80,isInitRender:!0},inherits:e}),this.clientHeight=document.documentElement.clientHeight,this.init()}var i=o(2),r=o(5);n.prototype.init=function(){this.opts.isInitRender&&this.render(),this.power()},n.prototype.render=function(){var e=this,t=this.opts.moreHeight,o=document.documentElement.scrollTop||document.body.scrollTop,n=o-t,i=this.clientHeight+n+t,s=r.getDomArray(this.opts.element);s.forEach(function(e){"img"===e.tagName.toLowerCase()&&(e.getAttribute("src")||(e.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUCB1jYAACAAAFAAGNu5vzAAAAAElFTkSuQmCC"),e.setAttribute("height","100%"),e.setAttribute("width","100%"))}),s.forEach(function(t){if(t.offsetWidth){var o=r.offset(t).top;o+t.offsetHeight>=n&&o<=i&&("img"===t.tagName.toLowerCase()?(t.getAttribute(e.opts.srcAttr)&&(t.src=t.getAttribute(e.opts.srcAttr)),t.removeAttribute("height"),t.removeAttribute("width")):t.getAttribute(e.opts.srcAttr)&&(t.style.backgroundImage="url("+t.getAttribute(e.opts.srcAttr)+")"),t.classList.remove("g-lazy-load"),t.classList.add("g-lazy-load-active"))}})},n.prototype.power=function(){var e=this,t=null;window.addEventListener("scroll",function(){clearTimeout(t),t=setTimeout(function(){e.render()},e.opts.interval)})},e.exports=n},80:function(e,t){}},[35]);
//# sourceMappingURL=app.4a9405ed1ca6f1c45487.js.map