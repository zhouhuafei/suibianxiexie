webpackJsonp([8],{132:function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();n(133);var c=n(3);new(function(t){function e(){return i(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return r(e,t),a(e,[{key:"power",value:function(){var t=this,e=t.applications;!function(){new(0,e.SelectAll)({items:".g-checkbox-body-checkbox",callback:{click:function(t){console.log(t)}}})}(),function(){new(n(134))({element:".js-validate-form"}).setValidate("no-999",function(t){return 999!==Number(t)})}(),function(){var t=n(11);document.querySelector(".js-button-dialog").addEventListener("click",function(){new t({callback:{confirm:function(){new t({config:{alert:{icon:"icon-success",content:"已确认"}}})},cancel:function(){new t({config:{alert:{icon:"icon-success",content:"已取消"}}})},close:function(){new t({config:{alert:{icon:"icon-success",content:"已关闭"}}})}},config:{type:"confirm"}})})}()}}]),e}(c))},133:function(t,e){},134:function(t,e,n){"use strict";function i(t){this.opts=o.extend({element:"",hintClass:"g-validate-form-hint",hintWrapClass:"g-form",fileActiveClass:"g-upload-active"},t),this.opts.element&&(this.element=l(this.opts.element)),this.element.length&&this.init()}var o=n(0),r=n(1),a=n(17),c=o.checkStr,s=r.getParent,l=r.getDomArray;i.prototype.init=function(){this.render(),this.power()},i.prototype.render=function(){var t=this;t.element.forEach(function(e){var n=t.getHintWrapDom(e);n&&(a(n,"relative"),e.hintWrapDom=n),e.customValidateRule={},e.hintDom=document.createElement("span"),e.hintDom.classList.add(t.opts.hintClass)})},i.prototype.getHintWrapDom=function(t){var e=this.opts.hintWrapClass,n=s(t,"."+e);return n||(n=s(t,".g-validate-form-hint-wrap")),n||(n=t.parentNode),n},i.prototype.renderHintAdd=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.input,n=e.hintDom;if(e.offsetWidth&&n){n.innerHTML=t.txt;var i=e.hintWrapDom,o=i.querySelector("."+this.opts.hintClass);i&&!o&&i.appendChild(n)}},i.prototype.renderHintRemove=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.input,n=e.hintWrapDom,i=n.querySelector("."+this.opts.hintClass);n&&i&&n.removeChild(i)},i.prototype.validateInput=function(t){var e=this,n=e.opts,i=t.dataset.validate||"undefined",o=t.dataset.hint||"undefined",r=i.split(" "),a=o.split(" "),s=t.hintWrapDom,l=t.type,u=t.name,p="password"===l,f="radio"===l,d="checkbox"===l,h="file"===l,v=t.value;h&&(v=t.dataset.value);var m=t.customValidateRule;Object.keys(m).forEach(function(t){var e=m[t];e.isValidateSuccess=e.fn(v)});var y=!0;r.forEach(function(i,o){if(y&&m[i]&&(y&&m[i].isValidateSuccess?(e.renderHintRemove({input:t}),y=!0):(e.renderHintAdd({txt:a[o],input:t}),y=!1)),y&&!m[i]){if(y&&"no-empty"===i){var r=c.isEmpty(v);if(p&&(r=""===v),f||d){r=null===s.querySelector("input[name="+u+"]:checked")}r?(e.renderHintAdd({txt:a[o],input:t}),y=!1):(e.renderHintRemove({input:t}),y=!0)}y&&"no-zero"===i&&(c.isZero(v)?(e.renderHintAdd({txt:a[o],input:t}),y=!1):(e.renderHintRemove({input:t}),y=!0)),y&&"yes-positive-integer"===i&&(c.isPositiveInteger(v)?(e.renderHintRemove({input:t}),y=!0):(e.renderHintAdd({txt:a[o],input:t}),y=!1));var l=/yes-limit-length-(\d+)/.exec(i);if(y&&l){var g=l[1],b=v.length>g;if(d){b=g>=s.querySelectorAll("input[name="+u+"]:checked").length}if(h){b=g>=s.querySelectorAll("."+n.fileActiveClass).length}b?(e.renderHintRemove({input:t}),y=!0):(e.renderHintAdd({txt:a[o],input:t}),y=!1)}}}),t.isValidateSuccess=y},i.prototype.isAllPassValidate=function(){var t=this,e=!0;return t.element.forEach(function(n){t.validateInput(n),!0!==n.isValidateSuccess&&(e=!1)}),e},i.prototype.power=function(){var t=this;t.element.forEach(function(e){var n=e.dataset.event||"blur";e.addEventListener(n,function(){t.validateInput(this)})})},i.prototype.setValidate=function(t,e){this.element.forEach(function(n){n.customValidateRule[t]={fn:e,isValidateSuccess:!1}})},t.exports=i}},[132]);
//# sourceMappingURL=dev-globals.c3aba9d4335c24bf5f06.js.map