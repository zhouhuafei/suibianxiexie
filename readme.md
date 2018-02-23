```
# 安装依赖
npm i
# 开发环境
npm run serverDev
npm run appPhoneDev
# 生产环境
npm run serverStart
npm run appPhoneBuild
```

```
# 静态资源的目录结构
assets/
├── audios
│   └── syllable
├── images
│   ├── commons
│   └── home
├── js
│   ├── api // 接口工具
│   ├── components-dom // 存放组件
│   ├── components-dom-super
│   ├── components-vue
│   ├── pages // 存放页面对应的js
│   ├── pages-super
│   └── utils // 实用工具
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

# 约定大于一切,规则至上
* g-表示全局级别,有这个前缀的样式是整站通用的样式
* 层级的层级仅限于2-999之间,g-mask层级是500,g-mask-transparent层级是999,弹窗类型大于500即可,非弹窗类型请小于500
* 参数element支持传入选择器和原生dom节点
* 当同一种类型的东西只出现一次那就直接用即可,如果出现多次建议绑定到一个对象上
    - 例如出现多个回调函数 callback.a,callback.b,callback.c
    - 例如出现多个选择元素 selector.a,selector.b,selector.c

