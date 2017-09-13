````
# 安装依赖
npm i
# 开发
npm run phoneDev
nodemon app.js
# 生产
npm run phoneBuild
pm2 app.js
````

> 开发的目录结构
assets/
├── images
│   ├── commons
│   └── home
├── js
│   ├── api
│   ├── commons
│   ├── components
│   ├── components-vue
│   ├── pages
│   ├── plugs
│   └── utils
├── libs
│   └── laydate
├── scss
│   ├── commons
│   ├── components
│   ├── config
│   ├── fonts
│   └── pages
└── views
    ├── layouts
    ├── pages
    └── partials

代码装修中...
<p>0.g-表示全局级别,m-表示模块级别,c-表示组件级别,有这些前缀的样式是整站通用的样式,要改的话就是整站都改</p>
<p>1.base里放基础的工具方法</p>
<p>2.plugs里放一些不依赖css的基础功能</p>
<p>3.modules里放一些依赖css的模块功能</p>
<p>4.component里放一些有模块组合起来的组件</p>
<p>5.page里放一个页面对应的一个js</p>
<p>6.function里放一些绝对不会依赖到别的文件的js文件</p>
<p>7.gulp browserify的默认根目录是js目录下的base目录(引入文件时需要注意,否则会报错)</p>
<p>8.那些没办法做成模块的,我就单独放到了ui文件夹里</p>

代码装修中...
<p>0.约定大于一切,规则至上</p>
<p>1.function文件夹里的所有js文件,都只是逻辑上的功能,不涉及业务层面,简单点说,就是不需要css配合</p>
<p>2.层级的层级仅限于2-999之间,g-mask层级是500,g-mask-transparent层级是999,弹窗类型大于500即可,非弹窗类型请小于500</p>
<p>3.参数element支持传入选择器和原生dom节点</p>
<p>4.当同一种类型的东西只出现一次那就直接用即可,如果出现多次建议绑定到一个对象上</p>
<p>4-1.例如出现多个回调函数   callback.a,callback.b,callback.c</p>
<p>4-2.例如出现多个选择元素   selector.a,selector.b,selector.c</p>
<p>命名规范  m-开头的是模块 g-开头的是全局 c-开头的是组件  page-开头的是页面级别的</p>
<p>轮播图比例  普通轮播图w:h==2:1  详情轮播图w:h==1:1</p>

<p>static/src/js/   目录下的</p>
<p>base:            放点什么好呢</p>
<p>business:        存放和业务逻辑有关的js</p>
<p>commons:         存放页面公用的js</p>
<p>components:      存放组件</p>
<p>config:          存放配置文件</p>
<p>function:        存放和DOM以及BOM有关的方法</p>
<p>libs:            存放底层库</p>
<p>modules:         存放模块对应的js</p>
<p>pages:           存放页面对应的js</p>
<p>plugs:           存放插件</p>
<p>tools:           存放处理数据的工具方法</p>
