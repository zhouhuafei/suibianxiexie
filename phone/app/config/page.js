module.exports = {
    //页面
    pages:{
        //开发-列表页
        'dev-list': {
            route: '/dev-list',//路由
            view: 'dev-list',//视图
            title: 'dev-list'//标题
        },
        //开发-全局页
        'dev-global': {
            route: '/dev-global',//路由
            view: 'dev-global',//视图
            title: 'g-global'//标题
        },
        //开发-模块页
        'dev-module': {
            route: '/dev-module',//路由
            view: 'dev-module',//视图
            title: 'm-module'//标题
        },
        //开发-标准词汇页
        'dev-word': {
            route: '/dev-word',//路由
            view: 'dev-word',//视图
            title: 'dev-word'//标题
        },
        //我的页面
        'mine': {
            route: '/mine',//路由
            view: 'mine',//视图
            title: '我的'//标题
        },
        //注册页
        'register': {
            route: '/register',//路由
            view: 'register',//视图
            title: '注册页'//标题
        },
        //登陆页
        'login': {
            route: '/login',//路由
            view: 'login',//视图
            title: '登陆页'//标题
        },
        //首页
        'home': {
            route: '/',//路由
            view: 'home',//视图
            title: '首页'//标题
        }
    },
    //api
    api:{
        
    },
    //报错
    error:{
        //服务器报错500页面
        '500': {
            view: '500',//视图
            title: '服务器报错'//标题
        },
        //服务器报错404页面
        '404': {
            view: '404',//视图
            title: '页面没有找到'//标题
        }
    }
};