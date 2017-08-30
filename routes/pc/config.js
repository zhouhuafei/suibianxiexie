// 路径
const pathConfig = {
    route: '/pc/',
    view: 'pc/pages/',
};
// 路由的名字
const routeName = [
    {
        name: 'dev-list', // 开发-列表页
        title: '开发列表',
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
        isValidateLogin: false, // 是否验证登陆
    },
    {
        name: 'password-find', // 忘记密码,去找回
        title: '忘记密码,去找回',
    },
    {
        name: 'password-reset', // 修改密码,去重置
        title: '修改密码,去重置',
    },
    {
        name: 'login', // 登陆页
        title: '登陆',
    },
    {
        name: 'register', // 注册页
        title: '注册',
    },
    {
        name: 'home', // 首页
        title: '首页',
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
        route: route, // 路由
        view: `${pathConfig.view}${v.name}`, // 视图
        title: v.title, // 标题
        isValidateLogin: v.isValidateLogin === true, // 是否验证登陆(默认不验证)
        isShowFooterNav: v.isShowFooterNav === undefined, // 是否显示底部导航(默认显示)
    };
});
module.exports = routeConfig;
