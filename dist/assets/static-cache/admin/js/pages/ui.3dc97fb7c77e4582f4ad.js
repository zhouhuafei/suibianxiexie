webpackJsonp([2],{126:function(t,e,o){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}();o(127);var f=o(6),c=o(128);$(".js-popover").each(function(){new c({config:{element:this,content:"建议尺寸：640*640",eventType:"click",positionLocation:"top-center"}})}),new(function(t){function e(){return n(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return s(e,t),a(e,[{key:"power",value:function(){var t=this,e=t.dataInfo;e.routes;!function(){var e=t.validateInput;e.setValidate("no-999",function(t){return 999!==Number(t)}),document.querySelector(".js-save").addEventListener("click",function(){var t=o(11);new(o(31))({callback:{cancel:function(){new t({config:{time:3e3,isShowIcon:!1,isShowClose:!0,icon:"icon-success",content:"已取消",positionLocation:"top"}})},confirm:function(){var o=e.isAllPassValidate();new t({config:{time:3e3,isShowIcon:!1,isShowClose:!0,icon:"icon-success",content:o?"验证已通过，可执行保存操作":"验证尚未通过，不可执行保存操作",positionLocation:"top"}})},close:function(){new t({config:{time:3e3,isShowIcon:!1,isShowClose:!0,icon:"icon-success",content:"已关闭",positionLocation:"top"}})}},config:{positionLocation:"center",isShowClose:!0,closeContent:'<div class="iconfont icon-close"></div>',isShowHeader:!0,headerContent:"提示:",isShowBody:!0,isShowIcon:!1,icon:"icon-warning",isCustom:!1,content:"<div>确定要执行这个操作?</div>",isShowFooter:!0,isShowConfirm:!0,confirmContent:"确认",isShowCancel:!0,cancelContent:"取消",isShowMask:!0,isHandHide:!1}})})}();var n=o(18),i=o(129);n({url:e.api.list.route,method:"post",data:{type:"axios",obj:{test:!0,key:"obj",b:{a:1}},arr:["a",2,"c",{a:1}],arr2:[]}}).then(function(t){console.log("axios测试application/x-www-form-urlencoded测试axios:->",t)}),i({url:e.api.list.route,method:"post",data:{type:"ajax",obj:{test:!0,key:"obj",b:{a:1}},arr:["a",2,"c",{a:1}],arr2:[]}}).then(function(t){console.log("ajax测试application/x-www-form-urlencoded测试ajax:->",t)});var s=new FormData;s.append("json",JSON.stringify({a:1,b:2,obj:{arr:["a","b","c"]}})),s.append("type","axios"),n({url:e.api.list.route,method:"post",data:s}).then(function(t){console.log("axios测试multipart/form-data测试axios:->",t)});var a=new FormData;a.append("json",JSON.stringify({a:1,b:2,obj:{arr:["a","b","c"]}})),a.append("type","ajax"),i({url:e.api.list.route,method:"post",data:a}).then(function(t){console.log("ajax测试multipart/form-data测试ajax:->",t)})}}]),e}(f))},127:function(t,e){},128:function(t,e,o){"use strict";var n=o(0),i=o(2),s=o(7),a=n.constructorInherit(s,{wrap:".g-wrap",callback:{},config:{moduleDomIsRender:!1,element:".js-popover",eventType:"mouseover",positionLocation:"top-left",content:"no popover content"},data:{}});a.prototype.moduleDomCreate=function(){var t=this.opts.config,e="g-dialog-popover_"+t.positionLocation;this.moduleDom=i.createElement({style:t.moduleDomStyle,customAttribute:t.moduleDomCustomAttribute,attribute:{className:"g-dialog-popover "+e,innerHTML:'\n                <div class="g-dialog-popover-content">'+t.content+'</div>\n                <div class="g-dialog-popover-icon"></div>                \n            '}})},a.prototype.power=function(){function t(){o.gDialogPopoverMouseenterTimer=setTimeout(function(){o.moduleDomHide()},60)}function e(t){"top-left"===s&&$(a).css({left:$(t).offset().left,top:$(t).offset().top-a.offsetHeight}),"top-center"===s&&$(a).css({left:$(t).offset().left-(a.offsetWidth-t.offsetWidth)/2,top:$(t).offset().top-a.offsetHeight}),"top-right"===s&&$(a).css({left:$(t).offset().left-(a.offsetWidth-t.offsetWidth),top:$(t).offset().top-a.offsetHeight}),"bottom-left"===s&&$(a).css({left:$(t).offset().left,top:$(t).offset().top+t.offsetHeight}),"bottom-center"===s&&$(a).css({left:$(t).offset().left-(a.offsetWidth-t.offsetWidth)/2,top:$(t).offset().top+t.offsetHeight}),"bottom-right"===s&&$(a).css({left:$(t).offset().left-(a.offsetWidth-t.offsetWidth),top:$(t).offset().top+t.offsetHeight}),"left-top"===s&&$(a).css({left:$(t).offset().left-a.offsetWidth,top:$(t).offset().top}),"left-center"===s&&$(a).css({left:$(t).offset().left-a.offsetWidth,top:$(t).offset().top-(a.offsetHeight-t.offsetHeight)/2}),"left-bottom"===s&&$(a).css({left:$(t).offset().left-a.offsetWidth,top:$(t).offset().top-(a.offsetHeight-t.offsetHeight)}),"right-top"===s&&$(a).css({left:$(t).offset().left+t.offsetWidth,top:$(t).offset().top}),"right-center"===s&&$(a).css({left:$(t).offset().left+t.offsetWidth,top:$(t).offset().top-(a.offsetHeight-t.offsetHeight)/2}),"right-bottom"===s&&$(a).css({left:$(t).offset().left+t.offsetWidth,top:$(t).offset().top-(a.offsetHeight-t.offsetHeight)})}var o=this,n=o.opts,i=n.config,s=i.positionLocation,a=o.moduleDom;"mouseover"!==i.eventType&&"mouseenter"!==i.eventType||($(i.element).on("mouseenter",function(t){t.preventDefault(),t.stopPropagation(),o.moduleDomShow(),e(this),clearTimeout(o.gDialogPopoverMouseenterTimer)}),$(i.element).on("mouseleave",function(e){e.preventDefault(),e.stopPropagation(),t()}),$(a).on("mouseenter",function(t){t.preventDefault(),t.stopPropagation(),clearTimeout(o.gDialogPopoverMouseenterTimer)}),$(a).on("mouseleave",function(e){e.preventDefault(),e.stopPropagation(),t()})),"click"===i.eventType&&$(i.element).on("click",function(t){t.preventDefault(),t.stopPropagation(),0===o.moduleDom.offsetWidth?(o.moduleDomShow(),e(this)):o.moduleDomHide()})},t.exports=a},129:function(t,e,o){"use strict";var n=o(0),i=o(11);t.exports=function(t){t.type=t.type||t.method||"get",t.dataType=t.dataType||"json";var e=n.extend({type:"get",timeout:3e4,isHandleError:!0,isHandleFailure:!0,isHandleSuccess:!1,callbackSuccess:function(){},callbackFailure:function(){},callbackComplete:function(){}},t);return"get"===e.method.toLowerCase()&&(e.data=e.data||e.params||{},e.data&&Object.keys(e.data).forEach(function(t){var o=e.data[t],n=Object.prototype.toString.call(o).slice(8,-1).toLowerCase();"object"===n&&(e.data[t]=JSON.stringify(o)),"array"===n&&o.forEach(function(t,e,o){"object"===Object.prototype.toString.call(t).slice(8,-1).toLowerCase()&&(o[e]=JSON.stringify(t))})})),"formdata"===n.typeOf(e.data)&&(e.processData=!1,e.contentType=!1),$.ajax(e).catch(function(t,o,n){var s={status:"error",message:n};return e.isHandleError&&new i({config:{content:"错误: "+n}}),s}).then(function(t,o,n){return"failure"===t.status&&(e.isHandleFailure&&new i({config:{content:"失败: "+t.message}}),"function"==typeof e.callbackFailure&&e.callbackFailure(t)),"success"===t.status&&(e.isHandleSuccess&&new i({config:{content:"成功: "+t.message}}),"function"==typeof e.callbackSuccess&&e.callbackSuccess(t)),"function"==typeof e.callbackComplete&&e.callbackComplete(t),t})}}},[126]);
//# sourceMappingURL=ui.3dc97fb7c77e4582f4ad.js.map