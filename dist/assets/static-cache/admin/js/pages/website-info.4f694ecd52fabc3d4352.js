webpackJsonp([4],{130:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(131);var i=n(6),l=n(18);new(function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"power",value:function(){var e=this,t=e.dataInfo;$(".js-upload").on("change",function(){var n=this,o=this.parentNode,r=o.querySelector(".g-upload-show"),a=(o.querySelector(".g-upload-text"),[].slice.call(n.files)),u=new FormData;a.forEach(function(e){u.append("images",e)}),a.length&&l({url:t.api.gallery.route,method:"post",data:u,onUploadProgress:function(e){e.lengthComputable&&console.log("上传进度:->",100*Math.ceil(e.loaded/e.total)+"%")}}).then(function(t){if("success"===t.status){var a=t.result[0],u=JSON.stringify(a),i=a.url;a.width,a.height;n.dataset.value="no-empty",r.style.backgroundImage="url('"+i+"')",o.querySelector("input[type=hidden]").value=u,o.classList.add("g-upload_active"),e.validateInput.validateInput(n)}})})}}]),t}(i))},131:function(e,t){}},[130]);
//# sourceMappingURL=website-info.4f694ecd52fabc3d4352.js.map