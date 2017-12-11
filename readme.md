```
# 安装依赖
npm i
# 开发
npm run appPhoneDev
npm run dev
# 生产
npm run appPhoneBuild
npm run start
```

```
# 开发的目录结构
assets/
├── images
│   ├── commons
│   └── home
├── js
│   ├── api
│   ├── components-dom
│   ├── components-dom-super
│   ├── components-vue
│   ├── pages
│   ├── pages-super
│   ├── plugs
│   └── utils
├── libs
│   └── laydate
├── scss
│   ├── commons
│   ├── components
│   ├── config
│   ├── fonts
│   ├── pages
│   └── reset
└── views
    ├── commons
    └── pages
```

# 代码装修中...
* g-表示全局级别,有这个前缀的样式是整站通用的样式,要改的话就是整站都改
* plugs里放一些不依赖css的基础功能
* components组件
* page里放一个页面对应的一个js

# 约定大于一切,规则至上
* 层级的层级仅限于2-999之间,g-mask层级是500,g-mask-transparent层级是999,弹窗类型大于500即可,非弹窗类型请小于500
* 参数element支持传入选择器和原生dom节点
* 当同一种类型的东西只出现一次那就直接用即可,如果出现多次建议绑定到一个对象上
* * 例如出现多个回调函数 callback.a,callback.b,callback.c
* * 例如出现多个选择元素 selector.a,selector.b,selector.c
* 命名规范  m-开头的是模块 g-开头的是全局 c-开头的是组件  page-开头的是页面级别的
* 轮播图比例  普通轮播图w:h==2:1  详情轮播图w:h==1:1

# assets/js/ 目录下的
* components: 存放组件
* pages: 存放页面对应的js
* plugs: 存放插件
* utils: 实用工具
