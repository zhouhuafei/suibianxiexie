# 本项目已停更
> 本项目已停更

# 本项目已废弃
> 本项目已废弃

# 安装依赖
```
# 安装依赖
npm i
bower i
# 开发环境
npm run serverDev
npm run appPhoneDev
# 生产环境
npm run serverStart
npm run appPhoneBuild
```

# 静态资源的目录结构
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
│   ├── components_dom // 存放组件
│   ├── components_dom-business // 业务组件
│   ├── components_dom-super
│   ├── components_vue
│   ├── pages // 存放页面对应的js
│   ├── pages-super
│   ├── plugs // 第三方插件
│   └── utils // 实用工具
├── scss
│   ├── commons
│   ├── components_dom
│   ├── components_dom-business
│   ├── config
│   ├── fonts
│   ├── pages
│   └── reset
└── views
    ├── commons
    └── pages
```

# 约定大于一切，规则至上-css
* js-和js-g-两者都表示当前元素身上有对应的js操作。
* g-表示全局级别,有这个前缀的样式是整站通用的样式。
* g-mask层级是500,弹窗类型大于500即可,非弹窗类型请小于500。
* css命名规范。
    - 使用长链接命名方式，就是使用中划线一直连接下去。修饰符使用一个下划线进行表示。
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
        .g-components .g-components-header-item.g-components-header-item_cancel {}
        .g-components .g-components-header-item.g-components-header-item_confirm {}
        .g-components .g-components-header-item.g-components-header-item_money-text {}
        .g-components .g-components-header-item.g-components-header-item_money-symbol {}
        .g-components .g-components-header-item.g-components-header-item_money-big {}
        .g-components .g-components-header-item.g-components-header-item_money-small {}
    ```
    - 如果名字太长，可以使用中划线开头进行命名，中划线开头表示当前结构是属于某个外部容器所拥有的。
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
        .g-components .-header .-item._cancel {}
        .g-components .-header .-item._confirm {}
        .g-components .-header .-item._money-text {}
        .g-components .-header .-item._money-symbol {}
        .g-components .-header .-item._money-big {}
        .g-components .-header .-item._money-small {}
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
* 1，如果服务器用到的npm包有所新增，请先单独把package.json文件更新到服务器。然后在服务器上把最新的npm包下载完成之后，再更新服务器上的业务代码。
* 2，如果服务器用到的npm包删除了一些废包，直接更新git pull，然后npm i --production。
* 3，package.json配置里，包的删除和新增不能一起操作。
    - 如果直接pull全部，会导致找不到新增的包。
    - 如果单更package.json，然后npm i --production，会导致老的业务代码里使用中的包丢失而导致报错。
    - 所以应该先进行包的新增操作，然后更新业务代码，在业务代码未使用到废包的情况下，最后单独做一次删除废包的操作。
* 总结：废包删除需在业务代码未使用到废包的情况下进行。

# 坑点
* 安装canvas(node-canvas)时，出现报错。请参阅 https://github.com/Automattic/node-canvas
    - 参阅之后，执行了操作，但是windows下依然报错。请使用 https://github.com/felixrieseberg/windows-build-tools

# 报错
* 我如果注释掉webpack配置中的```// exclude: /(node_modules|bower_components)/,```，引入某些包时会报错。
    - 如果注释掉webpack的loader中exclude的过滤功能，某些包使用的时候就会报错。各种奇葩的报错。
    - 例如使用```vue-draggable-resizable```包时就报错了。原因就是因为注释掉了exclude，导致es6转es5时对node_modules中的包进行了二次babel导致的。
    - 主要原因是es6转es5或者vue单文件转js导致的，所以该过滤还是要过滤的。
    - 最佳实践方案：npm上发布的包，es6和vue文件要转成es5文件。个人项目中的css-loader不使用exclude过滤(如此可以使用scss)。

# dependencies和devDependencies
* 因此项目以api为主。
* 所以在```package.json```中，我只把api需要的依赖包放到了属性dependencies里。
* 而交互层(ui层，前端层)需要的包，我放到了属性devDependencies里。

# 注意和建议
* 注意：session上的数据是缓存数据。例如用户信息。后续如果修改了，session上的不同步的话，那就和数据库里的不一致。
    - 建议：需要使用用户信息的数据时，从数据库里重新查。

# 其他
* express动态路由解析用的什么包？
    - https://github.com/pillarjs/path-to-regexp

# 本项目停更
> 以下也不进行处理了
* `./app/admin/controllers/pages-super/super.js`404模板渲染。
* `./app-config.js`文件不应该被git记录。应该有个`app-config.sample.js`文件被git记录。
* `./app/admin/controllers/api/gallery.js`检测是否存在相同的图片，如果存在，则用已存在的那张。
* `./app/h5/assets/js/pages/game-shidishui/index.js`十滴水尚未开发完毕。
