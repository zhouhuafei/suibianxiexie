webpackJsonp([2],{123:function(t,e,o){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var i=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}();o(124);var r=o(6);new(function(t){function e(){return n(this,e),a(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return c(e,t),i(e,[{key:"power",value:function(){var t=this,e=t.dataInfo;e.routes;!function(){var e=t.validateInput;e.setValidate("no-999",function(t){return 999!==Number(t)}),document.querySelector(".js-save").addEventListener("click",function(){var t=o(10);new(o(31))({callback:{cancel:function(){new t({config:{time:3e3,isShowIcon:!1,isShowClose:!0,icon:"icon-success",content:"已取消",positionLocation:"center"}})},confirm:function(){var o=e.isAllPassValidate();new t({config:{time:3e3,isShowIcon:!1,isShowClose:!0,icon:"icon-success",content:o?"验证已通过，可执行保存操作":"验证尚未通过，不可执行保存操作",positionLocation:"center"}})},close:function(){new t({config:{time:3e3,isShowIcon:!1,isShowClose:!0,icon:"icon-success",content:"已关闭",positionLocation:"center"}})}},config:{positionLocation:"center",isShowClose:!0,closeContent:'<div class="iconfont icon-close"></div>',isShowHeader:!0,headerContent:"提示:",isShowBody:!0,isShowIcon:!1,icon:"icon-warning",isCustom:!1,content:"<div>确定要执行这个操作?</div>",isShowFooter:!0,isShowConfirm:!0,confirmContent:"确认",isShowCancel:!0,cancelContent:"取消",isShowMask:!0,isHandHide:!1}})})}();var n=o(18),a=o(125);n({url:e.api.list.route,method:"post",data:{type:"axios",obj:{test:!0,key:"obj",b:{a:1}},arr:["a",2,"c",{a:1}],arr2:[]}}).then(function(t){console.log("axios测试application/x-www-form-urlencoded测试axios:->",t)}),a({url:e.api.list.route,method:"post",data:{type:"ajax",obj:{test:!0,key:"obj",b:{a:1}},arr:["a",2,"c",{a:1}],arr2:[]}}).then(function(t){console.log("ajax测试application/x-www-form-urlencoded测试ajax:->",t)});var c=new FormData;c.append("json",JSON.stringify({a:1,b:2,obj:{arr:["a","b","c"]}})),c.append("type","axios"),n({url:e.api.list.route,method:"post",data:c}).then(function(t){console.log("axios测试multipart/form-data测试axios:->",t)});var i=new FormData;i.append("json",JSON.stringify({a:1,b:2,obj:{arr:["a","b","c"]}})),i.append("type","ajax"),a({url:e.api.list.route,method:"post",data:i}).then(function(t){console.log("ajax测试multipart/form-data测试ajax:->",t)})}}]),e}(r))},124:function(t,e){},125:function(t,e,o){"use strict";var n=o(1),a=o(10);t.exports=function(t){t.type=t.type||t.method||"get",t.dataType=t.dataType||"json";var e=n.extend({type:"get",timeout:3e4,isHandleError:!0,isHandleFailure:!0,isHandleSuccess:!1,callbackSuccess:function(){},callbackFailure:function(){},callbackComplete:function(){}},t);return"get"===e.method.toLowerCase()&&(e.data=e.data||e.params||{},e.data&&Object.keys(e.data).forEach(function(t){var o=e.data[t],n=Object.prototype.toString.call(o).slice(8,-1).toLowerCase();"object"===n&&(e.data[t]=JSON.stringify(o)),"array"===n&&o.forEach(function(t,e,o){"object"===Object.prototype.toString.call(t).slice(8,-1).toLowerCase()&&(o[e]=JSON.stringify(t))})})),"formdata"===n.typeOf(e.data)&&(e.processData=!1,e.contentType=!1),$.ajax(e).catch(function(t,o,n){var c={status:"error",message:n};return e.isHandleError&&new a({config:{content:"错误: "+n}}),c}).then(function(t,o,n){return"failure"===t.status&&(e.isHandleFailure&&new a({config:{content:"失败: "+t.message}}),"function"==typeof e.callbackFailure&&e.callbackFailure(t)),"success"===t.status&&(e.isHandleSuccess&&new a({config:{content:"成功: "+t.message}}),"function"==typeof e.callbackSuccess&&e.callbackSuccess(t)),"function"==typeof e.callbackComplete&&e.callbackComplete(t),t})}}},[123]);
//# sourceMappingURL=ui.7014004d78f9617f23a9.js.map