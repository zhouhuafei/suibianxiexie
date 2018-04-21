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

# 约定大于一切，规则至上-css
* g-表示全局级别,有这个前缀的样式是整站通用的样式。
* js-表示当前元素身上有对应的js操作。
* 层级仅限于2-999之间,g-mask层级是500,g-mask-transparent层级是999,弹窗类型大于500即可,非弹窗类型请小于500。
* css命名规范。
    - 使用长链接方式表示容器。
    ```
        .g-components .g-components-header {}
        .g-components .g-components-header-item {}
    ```
    - 使用长链接方式表示状态。
    ```
        .g-components .g-components-header-item.g-components-header-item-on {}
        .g-components .g-components-header-item.g-components-header-item-off {}
        .g-components .g-components-header-item.g-components-header-item-active {}
        .g-components .g-components-header-item.g-components-header-item-inactive {}
        .g-components .g-components-header-item.g-components-header-item-window {}
        .g-components .g-components-header-item.g-components-header-item-list {}
        .g-components .g-components-header-item.g-components-header-item-col-1 {}
        .g-components .g-components-header-item.g-components-header-item-col-2 {}
        .g-components .g-components-header-item.g-components-header-item-col-3 {}
        .g-components .g-components-header-item.g-components-header-item-col-4 {}
    ```

# 约定大于一切，规则至上-js
* 参数element支持传入选择器和原生dom节点。
* 当同一种类型的东西只出现一次那就直接用即可,如果出现多次建议绑定到一个对象上。
    - 例如出现多个回调函数 callback.a,callback.b,callback.c
    - 例如出现多个选择元素 selector.a,selector.b,selector.c

# 关于更新
* 如果服务器用到的npm包有所更改，请先单独把package.json文件更新到服务器。然后在服务器上把最新的npm包下载完成之后，再更新服务器上的业务代码。

