// 路径
const pathConfig = {
    route: '/phone/',
    view: 'phone/pages/',
};
// 路由的名字
const routeName = [
    {
        name: 'game-biecaibaikuaier', // 游戏-别踩白块
        title: '别踩白块',
        isValidateLogin: false,
        isShowCopyright: false,
        isShowFooterNav: false,
    },
    {
        name: 'game-list', // 游戏-列表页
        title: '游戏',
        isValidateLogin: false,
    },
    {
        name: 'dev-list', // 开发-列表页
        title: '开发列表',
        isValidateLogin: false,
    },
    {
        name: 'dev-globals', // 开发-全局页
        title: '开发全局',
    },
    {
        name: 'dev-components', // 开发-模块页
        title: '开发组件',
    },
    {
        name: 'dev-words', // 开发-标准词汇页
        title: '开发词汇',
    },
    {
        name: 'setting', // 设置页
        title: '设置',
    },
    {
        name: 'mine', // 我的页面
        title: '我的',
        isValidateLogin: false,
    },
    {
        name: 'password-find', // 忘记密码,去找回
        title: '忘记密码,去找回',
        isValidateLogin: false,
    },
    {
        name: 'password-reset', // 修改密码,去重置
        title: '修改密码,去重置',
        isValidateLogin: false,
    },
    {
        name: 'login', // 登陆页
        title: '登陆',
        isValidateLogin: false,
    },
    {
        name: 'register', // 注册页
        title: '注册',
        isValidateLogin: false,
    },
    {
        name: 'home', // 首页
        title: '首页',
        isValidateLogin: false,
    },
    {
        name: 'sample', // 视图模板样本
        title: '视图模板样本',
        isValidateLogin: false,
        isShowCopyright: false,
        isShowFooterNav: false,
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
        isValidateLogin: v.isValidateLogin === undefined, // 是否验证登陆信息(默认验证)
        isShowCopyright: v.isShowCopyright === undefined, // 是否显示版权信息(默认显示)
        isShowFooterNav: v.isShowFooterNav === undefined, // 是否显示底部导航(默认显示)
    };
});
module.exports = routeConfig;
