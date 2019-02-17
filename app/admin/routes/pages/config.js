// 路径
const pathConfig = {
    route: '/admin/',
    view: 'admin/pages/',
};
// 路由的名字
const routeName = [
    {
        name: 'decorate-list', // 装修列表：自定义页面装修(?type=custom)，首页装修(?type=home)。
        title: '装修列表',
    },
    {
        name: 'decorate-edit', // 装修编辑：自定义页面装修(?type=custom)，首页装修(?type=home)。
        title: '装修编辑',
        isShowMenu: false,
    },
    {
        name: 'article-category', // 文章分类
        title: '文章分类',
    },
    {
        name: 'article-edit', // 文章编辑
        title: '文章编辑',
    },
    {
        name: 'article-list', // 文章列表
        title: '文章列表',
    },
    {
        name: 'home', // 首页
        title: '首页',
    },
    {
        name: 'website-info', // 网站信息
        title: '网站信息',
        params: ['uid'], // 配置动态路由
    },
    {
        name: 'ui', // 网站ui
        title: '网站ui',
    },
    {
        name: 'password-reset', // 忘记密码,去重置
        title: '忘记密码,正在重置',
        isValidateLogin: false,
        isShowMenu: false,
    },
    {
        name: 'password-modify', // 更改密码,去修改
        title: '更改密码,正在修改',
    },
    {
        name: 'login', // 登陆
        title: '登陆',
        isValidateLogin: false,
        isShowMenu: false,
    },
    {
        name: 'register', // 注册
        title: '注册',
        isValidateLogin: false,
        isShowMenu: false,
    },
];
// 路由的配置
const routeConfig = {};
routeName.forEach(function (v) {
    let route = `${pathConfig.route}${v.name}/`;
    if (v.name === 'home') {
        route = `${pathConfig.route}`;
    }
    // 问：有些链接需要标识用户身份，那就需要动态路由(建议)或查询字符串。如此怎么配置动态路由呢？答：检查配置中有没有```{params:['key1','key2']}```的配置，如果有的话就循环加上```route += ':key1/:key2'```。
    let routeFormat = route;
    const params = v.params;
    if (params && params.length) {
        params.forEach((v, i, a) => {
            a[i] = ':' + v;
        });
        routeFormat += params.join('/') + '/'; // 动态路由部分建议放到末尾。如此，跳转路径时进行路由路径(route)拼接会方便一点。
        // vue-router进行动态路由跳转时，是根据name和params参数的数据配合路由格式生成的路径。如果不嫌麻烦，可以封装一个。
    }
    routeConfig[v.name] = {
        name: v.name, // 路由名称
        title: v.title, // 标题
        route: route, // 路由路径(可直接用来跳转)
        routeFormat: routeFormat, // 路由格式(涉及到动态路由)
        view: `${pathConfig.view}${v.name}`, // 视图
        isValidateLogin: v.isValidateLogin !== false, // 是否验证登陆信息(默认验证)
        isShowCopyright: v.isShowCopyright !== false, // 是否显示版权信息(默认显示)
        isShowQrCode: v.isShowQrCode !== false, // 是否显示二维码(默认显示)
        isShowMenu: v.isShowMenu !== false, // 是否显示左侧菜单(默认显示)
        meta: v.meta || {}, // 网页头部的meta信息
    };
});
module.exports = routeConfig;
