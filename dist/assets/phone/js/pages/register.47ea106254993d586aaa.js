webpackJsonp([11],{123:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(124);var u=n(3);new(function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),i(t,[{key:"power",value:function(){var e=this,t=e.dataInfo,o=e.axios,r=document.querySelector("#form"),c=document.querySelector("#username"),i=document.querySelector("#password"),u=document.querySelector("#verify-code"),a=document.querySelector(".get-verify-code"),s=a.innerHTML,f=!0;a.addEventListener("click",function(r){var i=this;if(r.preventDefault(),f){f=!1;var u=c.value,l=new FormData;l.append("username",u),l.append("accountnum",123456),o({url:t.api["verify-code-register-random"].route,method:"get",data:{username:u}}).then(function(t){if("success"===t.status){new(n(9))({config:{alert:{icon:"icon-success",content:"验证码已发送"}}}),i.classList.add("get-verify-code-inactive"),e.tools.timeCountDown({seconds:90,isToTime:!1,callback:{run:function(e){a.innerHTML='<span class="g-button">'+e.seconds+"秒</span>"},over:function(){f=!0,a.innerHTML=s,i.classList.remove("get-verify-code-inactive")}}})}else f=!0})}}),document.querySelector(".register").addEventListener("click",function(){var e=new FormData(r);e={username:c.value,password:i.value,verifyCode:u.value},o({url:t.api.register.route,method:"post",data:e}).then(function(e){"success"===e.status&&(window.location.href=t.routes.login.route)})})}}]),t}(u))},124:function(e,t){}},[123]);
//# sourceMappingURL=register.47ea106254993d586aaa.js.map