webpackJsonp([5],{143:function(t,e,o){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}();o(144);var c=o(3);new(function(t){function e(){return n(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),a(e,[{key:"power",value:function(){90!==window.orientation&&-90!==window.orientation||alert("请竖屏之后，刷新页面进行游戏");for(var t=this.tools,e=this.applications,n=document.querySelector(".canvas-wrap"),r=n.offsetWidth,i=document.documentElement.clientHeight,a={nextColor:"black",blackNum:0,whiteNum:0},c=(r-41)/14,l=(i-r)/2+20.5,u=[],f=0;f<Math.pow(15,2);f++){var p=f%15,s=Math.floor(f/15);u.push({x:p,y:s,left:p*c+20.5,top:s*c+l,radius:c/2.4,type:"transparent"})}var d=e.createElement({elementName:"canvas",attribute:{width:r,height:i}}),h=d.getContext("2d"),m=function(t,e,o,n){h.save(),h.beginPath(),h.strokeStyle="#000",h.moveTo(t,e),h.lineTo(o,n),h.stroke(),h.closePath(),h.restore()},b=function(t,e,o,n){h.save(),h.beginPath(),h.fillStyle=n,h.arc(t,e,o,0,2*Math.PI,!1),h.fill(),h.closePath(),h.restore()},y=function(){h.save(),h.beginPath(),h.clearRect(0,0,r,l/1.4),h.font="16px 微软雅黑",h.textAlign="center",h.textBaseline="middle",h.fillText("请"+("black"===a.nextColor?"黑色":"白色")+"棋子落子",r/2,l/2),h.closePath(),h.restore()};y();u.forEach(function(t,e){if(0===t.x){var o=u[e+15-1];m(t.left,t.top,o.left,o.top)}if(0===t.y){var n=u[210+t.x];m(t.left,t.top,n.left,n.top)}e===Math.floor(u.length/2)&&b(t.left,t.top,t.radius/4,"black")});for(var v=document.querySelector(".g-audio"),w=[],x=0;x<7;x++)w.push(o(29)("./"+(x+1)+".mp3"));var k=v.classList.contains("g-audio-on");v.addEventListener("click",function(){k=!k,this.classList.toggle("g-audio-on")}),d.addEventListener("click",function(o){var r=o.clientX-e.offset(n).left,i=o.clientY,c=null,l=null;u.forEach(function(o){if(r>=o.left-o.radius&&r<=o.left+o.radius&&i>=o.top-o.radius&&i<=o.top+o.radius&&"transparent"===o.type){if(k){var n=e.createElement({elementName:"audio"});n.setAttribute("src",w[t.randomNum(0,w.length-1)]),n.play(),n=null}b(o.left,o.top,o.radius,a.nextColor),o.type=a.nextColor,c=o.x,l=o.y,"black"===a.nextColor?(a.blackNum++,a.nextColor="white"):(a.whiteNum++,a.nextColor="black")}}),y();var f=["","","",""];u.forEach(function(t){var e="";"transparent"===t.type&&(e="t"),"black"===t.type&&(e="b"),"white"===t.type&&(e="w"),t.x===c&&(f[0]+=e),t.y===l&&(f[1]+=e),t.x+t.y===c+l&&(f[2]+=e),t.x-t.y==c-l&&(f[3]+=e)});var p=[{k:"bbbbb",v:"黑棋获胜"},{k:"wwwww",v:"白棋获胜"}];f.forEach(function(t){p.forEach(function(e){-1!==t.indexOf(e.k)&&setTimeout(function(){alert(e.v),window.location.reload()},60)})})}),n.appendChild(d)}}]),e}(c))},144:function(t,e){},29:function(t,e,o){function n(t){return o(r(t))}function r(t){var e=i[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var i={"./1.mp3":30,"./2.mp3":31,"./3.mp3":32,"./4.mp3":33,"./5.mp3":34,"./6.mp3":35,"./7.mp3":36};n.keys=function(){return Object.keys(i)},n.resolve=r,t.exports=n,n.id=29},30:function(t,e,o){t.exports=o.p+"audios/1.38e46759.mp3"},31:function(t,e,o){t.exports=o.p+"audios/2.5576c20e.mp3"},32:function(t,e,o){t.exports=o.p+"audios/3.25e1d33d.mp3"},33:function(t,e,o){t.exports=o.p+"audios/4.220478be.mp3"},34:function(t,e,o){t.exports=o.p+"audios/5.ab15dc12.mp3"},35:function(t,e,o){t.exports=o.p+"audios/6.44295654.mp3"},36:function(t,e,o){t.exports=o.p+"audios/7.c04a5503.mp3"}},[143]);
//# sourceMappingURL=game-wuziqi.e28da8ad2193927fdaa0.js.map