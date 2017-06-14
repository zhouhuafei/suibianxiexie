"use strict";!function o(e,t,i){function r(s,m){if(!t[s]){if(!e[s]){var l="function"==typeof require&&require;if(!m&&l)return l(s,!0);if(n)return n(s,!0);throw new Error("Cannot find module '"+s+"'")}var a=t[s]={exports:{}};e[s][0].call(a.exports,function(o){var t=e[s][1][o];return r(t||o)},a,a.exports,o,e,t,i)}return t[s].exports}for(var n="function"==typeof require&&require,s=0;s<i.length;s++)r(i[s]);return r}({1:[function(o,e,t){var i=o("../function/create-element"),r=o("../tools/constructor-inherit"),n=o("../modules/m-super-type"),s=o("../modules/m-mask"),m=r({superType:n,parameter:{callback:{moduleDomRenderBefore:function(o){"confirm"==o.opts.config.type&&(o.opts.config.confirm.isShowMask&&(o.mask=new s({wrap:o.opts.wrap,config:{moduleDomIsShow:!0,moduleDomRenderMethod:{method:"insertBefore"}}})),o.wrapDom&&"static"==getComputedStyle(o.wrapDom).position&&(o.wrapDom.style.position="relative"))},confirm:function(){},cancel:function(){},close:function(){}},config:{type:"alert",positionLocation:"center",alert:{time:2e3,isShowIcon:!0,icon:"icon-chenggong",content:"成功"},confirm:{isShowHeader:!0,headerContent:"提示:",isShowBody:!0,bodyContent:"<div>确定要执行这个操作?</div>",isShowFooter:!0,footerContent:"",isShowClose:!0,closeContent:'<div class="iconfont icon-guanbi"></div>',isShowConfirm:!0,confirmContent:"确认",isShowCancel:!0,cancelContent:"取消",isCustom:!1,customContent:"",isShowIcon:!0,icon:"icon-jinggao",isShowMask:!0,isHandHide:!1}},data:{}}});m.prototype.moduleDomCreate=function(){var o=this.opts.config,e="m-dialog-"+o.type,t="m-dialog-"+o.positionLocation,r="\n        "+this.renderAlert()+"\n        "+this.renderConfirm()+"\n    ";this.moduleDom=i({style:this.opts.config.moduleStyle,custom:this.opts.config.moduleDomCustomAttr,attribute:{className:"m-dialog "+e+" "+t,innerHTML:r}})},m.prototype.renderAlert=function(){var o=this.opts.config;if("alert"!=o.type)return"";var e=o.alert,t="";return e.isShowIcon&&(t='<div class="m-dialog-alert-icon iconfont '+e.icon+'"></div>'),"\n        "+t+'\n        <div class="m-dialog-alert-txt">'+e.content+"</div>\n    "},m.prototype.renderConfirm=function(){var o=this.opts.config;if("confirm"!=o.type)return"";var e=o.confirm,t="";e.isShowHeader&&(t='<div class="m-dialog-header">'+e.headerContent+"</div>");var i="";if(e.isShowBody){var r="";e.isShowIcon&&(r='<div class="m-dialog-icon iconfont '+e.icon+'"></div>');var n="m-dialog-body-system",s="\n            "+r+'\n            <div class="m-dialog-txt">'+e.bodyContent+"</div>\n        ";e.isCustom&&(n="m-dialog-body-custom",s=e.bodyContent),i='\n            <div class="m-dialog-body">\n                <div class="'+n+'">\n                    '+s+"\n                </div>\n            </div>\n        "}var m="";if(e.isShowFooter){var l="";e.isShowCancel&&(l='<div class="g-btn g-btn-cancel m-dialog-cancel">'+e.cancelContent+"</div>");var a="";e.isShowConfirm&&(a='<div class="g-btn g-btn-confirm m-dialog-confirm">'+e.confirmContent+"</div>"),m='<div class="m-dialog-footer">'+l+a+"</div>"}var c="";return e.isShowClose&&(c='<div class="m-dialog-close">'+e.closeContent+"</div>"),"\n        "+t+"\n        "+i+"\n        "+m+"\n        "+c+" \n    "},m.prototype.power=function(){var o=this,e=this.opts.config;if("alert"==e.type&&setTimeout(function(){o.hide()},e.alert.time),"confirm"==e.type){var t=this.moduleDom.querySelector(".m-dialog-close");t&&t.addEventListener("click",function(){o.hide(),o.opts.callback.close()});var i=this.moduleDom.querySelector(".m-dialog-cancel");i&&i.addEventListener("click",function(){o.hide(),o.opts.callback.cancel()});var r=this.moduleDom.querySelector(".m-dialog-confirm");r&&r.addEventListener("click",function(){o.opts.config.confirm.isHandHide||o.hide(),o.opts.callback.confirm()})}},m.prototype.hide=function(){this.moduleDomHide(),this.mask&&this.mask.moduleDomHide()},e.exports=m},{"../function/create-element":2,"../modules/m-mask":4,"../modules/m-super-type":5,"../tools/constructor-inherit":6}],2:[function(o,e,t){function i(o){var e=o||{};e.elementName=e.elementName||"div",e.style=e.style||"",e.custom=e.custom||{},e.attribute=e.attribute||{};var t=document.createElement(e.elementName);e.style&&t.setAttribute("style",e.style);for(var i in e.custom)e.custom.hasOwnProperty(i)&&t.setAttribute("data-"+i,e.custom[i]);for(var r in e.attribute)e.attribute.hasOwnProperty(r)&&(t[r]=e.attribute[r]);return t}e.exports=i},{}],3:[function(o,e,t){function i(o){var e=o||{},t=[],i=!!e.element&&e.element;return i&&("string"==Object.prototype.toString.call(i).slice(8,-1).toLowerCase()&&(t=[].slice.call(document.querySelectorAll(i))),1==i.nodeType&&(t=[i]),"htmlcollection"!=Object.prototype.toString.call(i).slice(8,-1).toLowerCase()&&"nodelist"!=Object.prototype.toString.call(i).slice(8,-1).toLowerCase()||(t=[].slice.call(i))),t}e.exports=i},{}],4:[function(o,e,t){var i=o("../function/create-element"),r=o("../tools/constructor-inherit"),n=o("../modules/m-super-type"),s=r({superType:n,parameter:{callback:{click:function(){},moduleDomRenderBefore:function(o){o.wrapDom&&"static"==getComputedStyle(o.wrapDom).position&&(o.wrapDom.style.position="relative")}},config:{isTransparent:!1,moduleDomIsShow:!1},data:{}}});s.prototype.moduleDomCreate=function(){var o="";this.opts.config.isTransparent&&(o="m-mask-transparent"),this.moduleDom=i({style:this.opts.config.moduleStyle,custom:this.opts.config.moduleDomCustomAttr,attribute:{className:"m-mask "+o,innerHTML:""}})},s.prototype.power=function(){var o=this;this.moduleDom.addEventListener("click",function(e){o.opts.callback.click(),e.stopPropagation()})},e.exports=s},{"../function/create-element":2,"../modules/m-super-type":5,"../tools/constructor-inherit":6}],5:[function(o,e,t){function i(o){this.opts=r({defaults:{wrap:".g-wrap",callback:{moduleDomCreateBefore:function(o){},moduleDomCreateAfter:function(o){},moduleDomRenderBefore:function(o){},moduleDomRenderAfter:function(o){},moduleDomRemoveBefore:function(o){},moduleDomRemoveAfter:function(o){},moduleDomShowBefore:function(o){},moduleDomShowAfter:function(o){},moduleDomHideBefore:function(o){},moduleDomHideAfter:function(o){},wrapDomGetBefore:function(o){},wrapDomGetAfter:function(o){},wrapDomRemoveBefore:function(o){},wrapDomRemoveAfter:function(o){}},config:{moduleDomCustomAttr:{},moduleDomRenderMethod:{method:"appendChild",child:null},moduleDomStyle:"",moduleDomIsShow:!0,moduleDomIsClearTimer:!0},data:{}},inherits:o}),this.moduleDom=null,this.wrapDom=null,this.moduleDomTimer={},this.init()}var r=o("../tools/extend"),n=o("../function/create-element"),s=o("../function/get-dom-array");i.prototype.init=function(){this.render(),this.power()},i.prototype.render=function(){this.moduleDomRemove();var o=this.opts.callback;o.moduleDomCreateBefore(this),this.moduleDomCreate(),o.moduleDomCreateAfter(this),this.wrapDomGet(),this.moduleDomRender()},i.prototype.power=function(){},i.prototype.moduleDomCreate=function(){this.moduleDom=n({style:this.opts.config.moduleDomStyle,custom:this.opts.config.moduleDomCustomAttr,attribute:{className:"m-super-type",innerHTML:'\n                <div class="m-super-type-txt">周华飞爱侯丽杰,侯丽杰爱周华飞</div>\n            '}})},i.prototype.moduleDomRender=function(){var o=this.opts.callback,e=this.opts.config;if(e.moduleDomIsShow&&this.wrapDom){o.moduleDomRenderBefore(this);var t=e.moduleDomRenderMethod;if("insertBefore"==t.method){var i=s({element:t.child})[0];i?this.wrapDom.insertBefore(this.moduleDom,i):this.wrapDom.insertBefore(this.moduleDom,this.wrapDom.children[0])}"appendChild"==t.method&&this.wrapDom.appendChild(this.moduleDom),o.moduleDomRenderAfter(this)}},i.prototype.moduleDomRemove=function(){var o=this.opts.callback;this.moduleDom&&this.moduleDom.parentNode&&(o.moduleDomRemoveBefore(this),this.moduleDom.parentNode.removeChild(this.moduleDom),o.moduleDomRemoveAfter(this)),this.moduleDomClearTimer()},i.prototype.moduleDomClearTimer=function(){if(this.opts.config.moduleDomIsClearTimer)for(var o in this.moduleDomTimer)this.moduleDomTimer.hasOwnProperty(o)&&(clearInterval(this.moduleDomTimer[o]),clearTimeout(this.moduleDomTimer[o]))},i.prototype.moduleDomShow=function(){var o=this.opts.callback;o.moduleDomShowBefore(this),this.wrapDom&&(this.opts.config.moduleDomIsShow=!0,this.moduleDomRender()),o.moduleDomShowAfter(this)},i.prototype.moduleDomHide=function(){var o=this.opts.callback;this.moduleDom.parentNode&&(this.opts.config.moduleDomIsShow=!1,o.moduleDomHideBefore(this),this.moduleDom.parentNode.removeChild(this.moduleDom),o.moduleDomHideAfter(this))},i.prototype.wrapDomGet=function(){var o=this.opts.callback;o.wrapDomGetBefore(this),this.wrapDom=s({element:this.opts.wrap})[0],o.wrapDomGetAfter(this)},i.prototype.wrapDomRemove=function(){var o=this.opts.callback;this.moduleDomRemove(),this.wrapDom&&(o.wrapDomRemoveBefore(this),this.wrapDom.parentNode.removeChild(this.wrapDom),o.wrapDomRemoveAfter(this))},i.prototype.getModuleDomHtml=function(){return this.moduleDom.outerHTML},e.exports=i},{"../function/create-element":2,"../function/get-dom-array":3,"../tools/extend":7}],6:[function(o,e,t){function i(o){function e(o){this.opts=r({defaults:n({obj:s}),inherits:o}),t.superType.call(this,this.opts)}var t=r({defaults:{superType:null,parameter:{}},inherits:o}),i=t.superType,s=t.parameter;if("function"!=Object.prototype.toString.call(i).toLowerCase().slice(8,-1))return console.log("no find SuperType or SuperType error"),!1;for(var m in i.prototype)i.prototype.hasOwnProperty(m)&&(e.prototype[m]=i.prototype[m]);return e}var r=o("../tools/extend"),n=o("../tools/obj-remove-quote");e.exports=i},{"../tools/extend":7,"../tools/obj-remove-quote":8}],7:[function(o,e,t){function i(o){var e=o||{};e.defaults=e.defaults||{},e.inherits=e.inherits||{},e.isDeep=0!=e.isDeep||e.isDeep;var t=Object.prototype.toString.call(e.defaults).slice(8,-1).toLowerCase();if(t==Object.prototype.toString.call(e.inherits).slice(8,-1).toLowerCase()&&e.isDeep)if("object"==t||"array"==t){for(var r in e.inherits)if(e.inherits.hasOwnProperty(r)){var n=Object.prototype.toString.call(e.defaults[r]).slice(8,-1).toLowerCase(),s=Object.prototype.toString.call(e.inherits[r]).slice(8,-1).toLowerCase();n!=s||!e.isDeep||"object"!=n&&"array"!=n?e.defaults[r]=e.inherits[r]:i({defaults:e.defaults[r],inherits:e.inherits[r]})}}else e.defaults=e.inherits;else e.defaults=e.inherits;return e.defaults}e.exports=i},{}],8:[function(o,e,t){function i(o){var e=o||{},t=e.obj,r=Object.prototype.toString.call(t).slice(8,-1).toLowerCase();if("object"!=r&&"array"!=r)return t;var n={};"array"==r&&(n=[]);for(var s in t)t.hasOwnProperty(s)&&(n[s]=i({obj:t[s]}));return n}e.exports=i},{}]},{},[1]);