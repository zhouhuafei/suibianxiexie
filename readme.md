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
│   ├── plugs // 第三方插件
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
    - 使用长链接命名方式，就是使用中划线一直连接下去。修饰符使用一个下划线表示。
    ```
        .g-components .g-components-header {}
        .g-components .g-components-header-item {}
        .g-components .g-components-header-item.g-components-header-item_on {}
        .g-components .g-components-header-item.g-components-header-item_off {}
        .g-components .g-components-header-item.g-components-header-item_active {}
        .g-components .g-components-header-item.g-components-header-item_inactive {}
        .g-components .g-components-header-item.g-components-header-item_window {}
        .g-components .g-components-header-item.g-components-header-item_list {}
        .g-components .g-components-header-item.g-components-header-item_col-1 {}
        .g-components .g-components-header-item.g-components-header-item_col-2 {}
        .g-components .g-components-header-item.g-components-header-item_col-3 {}
        .g-components .g-components-header-item.g-components-header-item_col-4 {}
    ```
    - 如果名字太长，可以使用中划线命名，中划线表示此结构是属于一个外部容器所拥有的。
    ```
        .g-components .-header {}
        .g-components .-header .-item {}
        .g-components .-header .-item._on {}
        .g-components .-header .-item._off {}
        .g-components .-header .-item._active {}
        .g-components .-header .-item._inactive {}
        .g-components .-header .-item._window {}
        .g-components .-header .-item._list {}
        .g-components .-header .-item._col-1 {}
        .g-components .-header .-item._col-2 {}
        .g-components .-header .-item._col-3 {}
        .g-components .-header .-item._col-4 {}
    ```
    - 简短命名，当不同的组件嵌套时，冲突的可能性很高(因为-item这种命名，在其他组件也可能被使用)。长连接命名方式冲突的可能性为零(因为每次都有组件名称连接着，不同的组件，名字不一样，则不会冲突)。

# 约定大于一切，规则至上-js
* 结构上有js-前缀或者js-g-前缀，表示这个结构具备js功能。
    - 加局部的功能，使用js-前缀给需要加功能的结构单独取个名字加功能。
    - 加全局的功能，使用js-g-前缀给需要加功能的结构单独取个名字加功能。
* 参数element支持传入选择器和原生dom节点。
* 当同一种类型的东西只出现一次那就直接用即可,如果出现多次建议绑定到一个对象上。
    - 例如出现多个回调函数 callback.a,callback.b,callback.c
    - 例如出现多个选择元素 selector.a,selector.b,selector.c

# 关于更新
* 如果服务器用到的npm包有所更改，请先单独把package.json文件更新到服务器。然后在服务器上把最新的npm包下载完成之后，再更新服务器上的业务代码。

# 坑点
* 安装canvas(node-canvas)时，出现报错。请参阅 https://github.com/Automattic/node-canvas
    - 参阅之后，执行了操作，但是windows下依然报错。请使用 https://github.com/felixrieseberg/windows-build-tools

# 待续...
* static-cache放到各自项目的内部，为了以后配独立域名的时候方便。
