webpackJsonp([10],{168:function(o,n,t){"use strict";function e(o,n){if(!(o instanceof n))throw new TypeError("Cannot call a class as a function")}function i(o,n){if(!o)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?o:n}function r(o,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);o.prototype=Object.create(n&&n.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(o,n):o.__proto__=n)}var c=function(){function o(o,n){for(var t=0;t<n.length;t++){var e=n[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(o,e.key,e)}}return function(n,t,e){return t&&o(n.prototype,t),e&&o(n,e),n}}();t(169);var s=t(3);new(function(o){function n(){return e(this,n),i(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return r(n,o),c(n,[{key:"power",value:function(){var o=this,n=o.dataInfo,e=o.axios,i=t(29);document.querySelector(".page-logout").addEventListener("click",function(){new i({callback:{confirm:function(){e({url:n.api.logout.route,method:"get"}).then(function(o){"success"===o.status&&(window.location.href=n.routes.login.route)})}}})})}}]),n}(s))},169:function(o,n){},29:function(o,n,t){"use strict";var e=t(0),i=t(1),r=t(2),c=e.constructorInherit(r,{wrap:".g-wrap",callback:{confirm:function(){},cancel:function(){},close:function(){}},config:{positionLocation:"center",isShowClose:!0,closeContent:'<div class="iconfont icon-close"></div>',isShowHeader:!0,headerContent:"提示:",isShowBody:!0,isShowIcon:!1,icon:"icon-warning",isCustom:!1,content:"<div>确定要执行这个操作?</div>",isShowFooter:!0,isShowConfirm:!0,confirmContent:"确认",isShowCancel:!0,cancelContent:"取消",isShowMask:!0,isHandHide:!1},data:{}});c.prototype.moduleDomCreate=function(){var o=this.opts.config,n="g-dialog-confirm-wrap_"+o.positionLocation,t=this.renderConfirm();this.moduleDom=i.createElement({style:o.moduleDomStyle,customAttribute:o.moduleDomCustomAttribute,attribute:{className:"g-dialog-confirm-wrap "+n,innerHTML:t}})},c.prototype.renderConfirm=function(){var o=this.opts.config,n="";o.isShowHeader&&(n='<div class="g-dialog-confirm-header">'+o.headerContent+"</div>");var t="";if(o.isShowBody){var e="";o.isShowIcon&&(e='<div class="g-dialog-confirm-body-system-icon iconfont '+o.icon+'"></div>');var i="g-dialog-confirm-body-system",r="\n            "+e+'\n            <div class="g-dialog-confirm-body-system-text">'+o.content+"</div>\n        ";o.isCustom&&(i="g-dialog-confirm-body-custom",r=o.content),t='\n            <div class="g-dialog-confirm-body">\n                <div class="'+i+'">\n                    '+r+"\n                </div>\n            </div>\n        "}var c="";if(o.isShowFooter){var s="";o.isShowCancel&&(s='<div class="g-button g-button_cancel g-dialog-confirm-footer-cancel">'+o.cancelContent+"</div>");var a="";o.isShowConfirm&&(a='<div class="g-button g-dialog-confirm-footer-confirm">'+o.confirmContent+"</div>"),c='<div class="g-dialog-confirm-footer">'+s+a+"</div>"}var l="";o.isShowClose&&(l='<div class="g-dialog-confirm-close">'+o.closeContent+"</div>");var d="";return o.isShowMask&&(d='<div class="g-mask"></div>'),"\n        "+d+'\n        <div class="g-dialog-confirm">\n            '+n+"\n            "+t+"\n            "+c+"\n            "+l+" \n        </div>\n    "},c.prototype.power=function(){var o=this,n=this.opts.config,t=this.opts.callback,e=this.moduleDom.querySelector(".g-dialog-confirm-close");e&&e.addEventListener("click",function(){o.moduleDomHide(),t.close()});var i=this.moduleDom.querySelector(".g-dialog-confirm-footer-cancel");i&&i.addEventListener("click",function(){o.moduleDomHide(),t.cancel()});var r=this.moduleDom.querySelector(".g-dialog-confirm-footer-confirm");r&&r.addEventListener("click",function(){n.isHandHide||o.moduleDomHide(),t.confirm()})},o.exports=c}},[168]);
//# sourceMappingURL=setting.c6e8daa977235f942c45.js.map