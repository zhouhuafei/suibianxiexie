// 路径
const pathConfig = {
    route: '/admin/',
    view: 'admin/pages/',
};
// 路由的名字
const routeName = [
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
    },
    {
        name: 'ui', // 网站ui
        title: '网站ui',
    },
    {
        name: 'account-modify', // 更改账号,去修改
        title: '更改账号,正在修改',
    },
    {
        name: 'password-reset', // 忘记密码,去找回
        title: '忘记密码,正在找回',
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
    routeConfig[v.name] = {
        name: v.name, // 路由名称
        title: v.title, // 标题
        route: route, // 路由
        view: `${pathConfig.view}${v.name}`, // 视图
        isValidateLogin: v.isValidateLogin !== false, // 是否验证登陆信息(默认验证)
        isShowCopyright: v.isShowCopyright !== false, // 是否显示版权信息(默认显示)
        isShowQrCode: v.isShowQrCode !== false, // 是否显示二维码(默认显示)
        isShowMenu: v.isShowMenu !== false, // 是否显示左侧菜单(默认显示)
    };
});
module.exports = routeConfig;
