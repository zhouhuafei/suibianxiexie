webpackJsonp([5],{117:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}();o(118);var c=o(6),a=o(15),s=(a.Message,a.Confirm,a.Validate);a.GoTop,a.TooltipApp,a.Copyright,a.LazyLoad;new(function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"power",value:function(){var e=this,t=e.dataInfo,o=t.routes,n=(t.api,e.axios);!function(){new s({element:".js-validate-form"})}(),function(){var e=document.querySelector("#form");document.querySelector("#username"),document.querySelector("#password"),document.querySelector("#repeat-password");document.querySelector(".js-button").addEventListener("click",function(){n({url:e.action,method:e.method,data:$(e).serialize()}).then(function(e){"success"===e.status&&(window.location.href=o.login.route),"failure"===e.status&&document.querySelector(".g-verify-code-canvas img").click()})})}()}}]),t}(c))},118:function(e,t){}},[117]);
//# sourceMappingURL=register.22033a9f0c8a01c15651.js.map