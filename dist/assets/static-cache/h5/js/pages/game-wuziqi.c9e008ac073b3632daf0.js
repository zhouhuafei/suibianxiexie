webpackJsonp([3],{139:function(t,e,o){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}();o(140);var u=o(3),c=o(21),l=o(1),f=o(29);new(function(t){function e(){return n(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),a(e,[{key:"power",value:function(){90!==window.orientation&&-90!==window.orientation||alert("请竖屏之后，刷新页面进行游戏");for(var t=document.querySelector(".canvas-wrap"),e=t.offsetWidth,n=document.documentElement.clientHeight,r={nextColor:"black",blackNum:0,whiteNum:0},i=(e-41)/14,a=(n-e)/2+20.5,u=[],p=0;p<Math.pow(15,2);p++){var s=p%15,y=Math.floor(p/15);u.push({x:s,y:y,left:s*i+20.5,top:y*i+a,radius:i/2.4,type:"transparent"})}var d=l({elementName:"canvas",attribute:{width:e,height:n}}),b=d.getContext("2d"),m=function(t,e,o,n){b.save(),b.beginPath(),b.strokeStyle="#000",b.moveTo(t,e),b.lineTo(o,n),b.stroke(),b.closePath(),b.restore()},h=function(t,e,o,n){b.save(),b.beginPath(),b.fillStyle=n,b.arc(t,e,o,0,2*Math.PI,!1),b.fill(),b.closePath(),b.restore()},v=function(){b.save(),b.beginPath(),b.clearRect(0,0,e,a/1.4),b.font="16px 微软雅黑",b.textAlign="center",b.textBaseline="middle",b.fillText("请"+("black"===r.nextColor?"黑色":"白色")+"棋子落子",e/2,a/2),b.closePath(),b.restore()};v();u.forEach(function(t,e){if(0===t.x){var o=u[e+15-1];m(t.left,t.top,o.left,o.top)}if(0===t.y){var n=u[210+t.x];m(t.left,t.top,n.left,n.top)}e===Math.floor(u.length/2)&&h(t.left,t.top,t.radius/4,"black")});for(var w=document.querySelector(".g-audio"),x=[],k=0;k<7;k++)x.push(o(30)("./"+(k+1)+".mp3"));var g=w.classList.contains("g-audio_on");w.addEventListener("click",function(){g=!g,this.classList.toggle("g-audio_on")}),d.addEventListener("click",function(e){var o=e.clientX-c(t).left,n=e.clientY,i=null,a=null;u.forEach(function(t){if(o>=t.left-t.radius&&o<=t.left+t.radius&&n>=t.top-t.radius&&n<=t.top+t.radius&&"transparent"===t.type){if(g){var e=l({elementName:"audio"});e.setAttribute("src",x[f(0,x.length-1)]),e.play(),e=null}h(t.left,t.top,t.radius,r.nextColor),t.type=r.nextColor,i=t.x,a=t.y,"black"===r.nextColor?(r.blackNum++,r.nextColor="white"):(r.whiteNum++,r.nextColor="black")}}),v();var p=["","","",""];u.forEach(function(t){var e="";"transparent"===t.type&&(e="t"),"black"===t.type&&(e="b"),"white"===t.type&&(e="w"),t.x===i&&(p[0]+=e),t.y===a&&(p[1]+=e),t.x+t.y===i+a&&(p[2]+=e),t.x-t.y==i-a&&(p[3]+=e)});var s=[{k:"bbbbb",v:"黑棋获胜"},{k:"wwwww",v:"白棋获胜"}];p.forEach(function(t){s.forEach(function(e){-1!==t.indexOf(e.k)&&setTimeout(function(){alert(e.v),window.location.reload()},60)})})}),t.appendChild(d)}}]),e}(u))},140:function(t,e){},29:function(t,e,o){"use strict";var n,r,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a="function"==typeof Symbol&&"symbol"==i(Symbol.iterator)?function(t){return void 0===t?"undefined":i(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":i(t)};!function(i,u){"object"===a(e)&&void 0!==t?t.exports=u():(n=u,void 0!==(r="function"==typeof n?n.call(e,o,e,t):n)&&(t.exports=r))}(0,function(){return function(t,e){return e||(e=t,t=0),Math.round(Math.random()*(e-t)+t)}})},30:function(t,e,o){function n(t){return o(r(t))}function r(t){var e=i[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var i={"./1.mp3":31,"./2.mp3":32,"./3.mp3":33,"./4.mp3":34,"./5.mp3":35,"./6.mp3":36,"./7.mp3":37};n.keys=function(){return Object.keys(i)},n.resolve=r,t.exports=n,n.id=30},31:function(t,e,o){t.exports=o.p+"audios/1.38e46759.mp3"},32:function(t,e,o){t.exports=o.p+"audios/2.5576c20e.mp3"},33:function(t,e,o){t.exports=o.p+"audios/3.25e1d33d.mp3"},34:function(t,e,o){t.exports=o.p+"audios/4.220478be.mp3"},35:function(t,e,o){t.exports=o.p+"audios/5.ab15dc12.mp3"},36:function(t,e,o){t.exports=o.p+"audios/6.44295654.mp3"},37:function(t,e,o){t.exports=o.p+"audios/7.c04a5503.mp3"}},[139]);
//# sourceMappingURL=game-wuziqi.c9e008ac073b3632daf0.js.map