webpackJsonp([13],{95:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(96);var a=n(3);new(function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),i(t,[{key:"power",value:function(){var e=this,t=e.dataInfo,n=e.axios,o=document.querySelector("#username"),r=document.querySelector("#password");document.querySelector(".page-login").addEventListener("click",function(){n({url:t.api.login.route,method:"post",data:{username:o.value,password:r.value}}).then(function(e){"success"===e.status&&(window.location.href=t.routes.mine.route)})})}}]),t}(a))},96:function(e,t){}},[95]);
//# sourceMappingURL=login.b9486a2d4d982370c4a6.js.map