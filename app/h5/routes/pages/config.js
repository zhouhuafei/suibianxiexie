// 路径
const pathConfig = {
    route: '/h5/',
    view: 'h5/pages/',
};
// 路由的名字
const routeName = [
    {
        name: 'game-shidishui', // 游戏-十滴水
        title: '十滴水',
        isValidateLogin: false,
        isShowCopyright: false,
        isShowFooterNav: false,
    },
    {
        name: 'game-wuziqi', // 游戏-五子棋
        title: '五子棋',
        isValidateLogin: false,
        isShowCopyright: false,
        isShowFooterNav: false,
    },
    {
        name: 'game-biecaibaikuai', // 游戏-别踩白块
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
        isValidateLogin: false,
    },
    {
        name: 'dev-components', // 开发-模块页
        title: '开发组件',
        isValidateLogin: false,
    },
    {
        name: 'dev-words', // 开发-标准词汇页
        title: '开发词汇',
        isValidateLogin: false,
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
        name: 'password-reset', // 忘记密码,去找回
        title: '忘记密码,正在找回',
        isValidateLogin: false,
    },
    {
        name: 'password-modify', // 更改密码,去修改
        title: '更改密码,正在修改',
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
    /*
    {
        name: 'website-master', // 站长介绍
        title: '站长介绍',
        isValidateLogin: false,
    },
    */
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
        isShowFooterNav: v.isShowFooterNav !== false, // 是否显示底部导航(默认显示)
        isShowQrCode: v.isShowQrCode !== false, // 是否显示二维码(默认显示)
    };
});
module.exports = routeConfig;
