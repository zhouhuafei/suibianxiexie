webpackJsonp([8],{92:function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();n(93);var s=n(3);new(function(t){function e(){return i(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return r(e,t),a(e,[{key:"power",value:function(){var t=this,e=t.applications;!function(){new(e.select())({items:".g-checkbox-checkbox",callback:{click:function(t){console.log(t)}}})}(),function(){new(n(94))({element:".page-validate-form"})}()}}]),e}(s))},93:function(t,e){},94:function(t,e,n){"use strict";function i(t){this.opts=t||{},this.element=r.getDomArray(this.opts.element),this.hintClass=this.opts.hintClass||"g-validate-form-hint",this.init()}var o=n(0),r=n(1),a=n(14);i.prototype.init=function(){this.render(),this.power()},i.prototype.render=function(){var t=this;t.element.forEach(function(t){a(t.parentNode,"relative")}),t.element.forEach(function(e){e.hintDom=document.createElement("span"),e.hintDom.classList.add(t.hintClass)})},i.prototype.renderHintAdd=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.input,n=e.hintDom;e.offsetWidth&&n&&(n.innerHTML=t.txt||"本项必填",e.parentNode.appendChild(n))},i.prototype.renderHintRemove=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.input,n=e.parentNode,i=e.parentNode.querySelector("."+this.hintClass);n&&i&&n.removeChild(e.hintDom)},i.prototype.validateInput=function(t){var e=this,n=t.dataset.validate||"undefined",i=t.dataset.hint||"undefined",r=n.split(" "),a=i.split(" "),s=t.value,c=!0;r.forEach(function(n,i){"no-empty"===n&&c&&(o.isEmpty(s)?(e.renderHintAdd({txt:a[i],input:t}),c=!1):(e.renderHintRemove({input:t}),c=!0)),"no-zero"===n&&c&&(o.isZero(s)?(e.renderHintAdd({txt:a[i],input:t}),c=!1):(e.renderHintRemove({input:t}),c=!0)),"yes-positive-integer"===n&&c&&(o.isPositiveInteger(s)?(e.renderHintRemove({input:t}),c=!0):(e.renderHintAdd({txt:a[i],input:t}),c=!1))}),t.isValidateSuccess=c},i.prototype.isAllPassValidate=function(){var t=this,e=!0;return t.element.forEach(function(t){!0!==t.isValidateSuccess&&(e=!1)}),e},i.prototype.power=function(){var t=this;t.element.forEach(function(e){var n=e.dataset.events||"blur";e.addEventListener(n,function(){t.validateInput(this)})})},t.exports=i}},[92]);
//# sourceMappingURL=dev-globals.916441c19c9ab97b9e38.js.map