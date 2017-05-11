代码装修中...
<p>0.约定大于一切,规则至上</p>
<p>1.function文件夹里的所有js文件,都只是逻辑上的功能,不涉及业务层面,简单点说,就是不需要css配合</p>
<p>2.层级的层级仅限于2-999之间,m-mask层级是500,m-mask-transparent层级是999,弹窗类型大于500即可,非弹窗类型请小于500</p>
<p>3.参数element支持传入选择器和原生dom节点</p>
<p>4.当同一种类型的东西只出现一次那就直接用即可,如果出现多次建议绑定到一个对象上</p>
<p>4-1.例如出现多个回调函数   callback.a,callback.b,callback.c</p>
<p>4-2.例如出现多个选择元素   selector.a,selector.b,selector.c</p>
<p>命名规范  m-开头的是模块 g-开头的是全局 c-开头的是组件  page-开头的是页面级别的</p>
<p>轮播图比例  普通轮播图w:h==2:1  详情轮播图w:h==1:1</p>






<p>public/dev/js/   目录下的</p>
<p>base:            放点什么好呢</p>
<p>commons:         存放页面公用的js</p>
<p>components:      存放组件</p>
<p>config:          存放配置文件</p>
<p>function:        存放和Dom以及Bom有关的方法</p>
<p>libs:            存放底层库</p>
<p>modules:         存放模块对应的js</p>
<p>pages:           存放页面对应的js</p>
<p>plugs:           存放插件</p>
<p>tools:           存放处理数据的工具方法</p>