webpackJsonp([9],{159:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(160);var u=n(3);new(function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"power",value:function(){var e=this,t=e.dataInfo,o=e.axios,r=n(11);document.querySelector(".page-logout").addEventListener("click",function(){new r({callback:{confirm:function(){o({url:t.api.logout.route,method:"get"}).then(function(e){"success"===e.status&&(window.location.href=t.routes.login.route)})}},config:{type:"confirm"}})})}}]),t}(u))},160:function(e,t){}},[159]);
//# sourceMappingURL=setting.c27d70aa5854a7a4cd56.js.map