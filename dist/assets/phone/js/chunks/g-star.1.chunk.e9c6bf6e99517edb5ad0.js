webpackJsonp([1],{110:function(t,s,i){"use strict";var o=i(0),a=i(1),e=i(2),n=o.constructorInherit(e,{callback:{click:function(t){}},config:{isHaveEvent:!0,allStarNum:5,nowStarNum:4},data:{}});n.prototype.moduleDomCreate=function(){for(var t="",s=0;s<this.opts.config.allStarNum;s++){var i="";s<this.opts.config.nowStarNum&&(i="g-star-items-active"),t+='<div data-index="'+s+'" class="iconfont icon-pingxing g-star-items '+i+'"></div>'}this.moduleDom=a.createElement({style:this.opts.config.moduleDomStyle,customAttribute:this.opts.config.moduleDomCustomAttribute,attribute:{className:"g-star",innerHTML:t}}),this.opts.star=this.moduleDom.children},n.prototype.power=function(){var t=this;this.opts.config.isHaveEvent&&this.moduleDom.addEventListener("click",function(s){var i=s.target;if(i.classList.contains("g-star-items")){for(var o=i.dataset.index,a=0;a<t.opts.config.allStarNum;a++)a<=o?t.opts.star[a].classList.add("g-star-items-active"):t.opts.star[a].classList.remove("g-star-items-active");t.opts.callback.click({element:this,index:o})}})},t.exports=n}});
//# sourceMappingURL=g-star.1.chunk.e9c6bf6e99517edb5ad0.js.map