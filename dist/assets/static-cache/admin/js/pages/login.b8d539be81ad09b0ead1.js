webpackJsonp([7],{121:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(122);var u=n(6);new(function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"power",value:function(){var e=this,t=e.dataInfo,o=t.routes,r=(t.api,e.axios);!function(){new(n(19))({element:".js-validate-form"})}(),function(){var e=document.querySelector("#form");document.querySelector("#username"),document.querySelector("#password");document.querySelector(".js-button").addEventListener("click",function(){r({url:e.action,method:e.method,data:$(e).serialize()}).then(function(e){"success"===e.status&&(window.location.href=o["website-info"].route),"failure"===e.status&&document.querySelector(".g-verify-code-canvas img").click()})})}(),document.querySelector(".js-del-db").addEventListener("click",function(){new e.DialogConfirm({config:{content:'<div class="page-dialog-del-db">\n                        <div>1. 链接你的mongodb数据库。</div>\n                        <div>2. 找到名为suibianxiexie的数据库。</div>\n                        <div>3. 找到名为admin的集合。</div>\n                        <div>4. 删除名为admin的集合。</div>\n                        <div>5. 在后台管理系统里重新注册管理员账号。</div>\n                    </div>'}})})}}]),t}(u))},122:function(e,t){}},[121]);
//# sourceMappingURL=login.b8d539be81ad09b0ead1.js.map