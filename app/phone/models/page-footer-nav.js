// 底部导航的数据
const routeConfig = require('../routes/pages/config');

class FooterNav {
    constructor(json) {
        this.opts = json || {};
        this.result = {
            config: {},
            data: [
                {
                    routeName: 'home',
                    href: routeConfig.home.route,
                    text: routeConfig.home.title,
                    icon: 'icon-shouye',
                    isHighlight: false,
                    isShowMark: false,
                },
                {
                    routeName: 'dev-globals',
                    href: routeConfig['dev-globals'].route,
                    text: routeConfig['dev-globals'].title,
                    icon: 'icon-kaifa',
                    isHighlight: false,
                    isShowMark: false,
                },
                {
                    routeName: 'dev-components',
                    href: routeConfig['dev-components'].route,
                    text: routeConfig['dev-components'].title,
                    icon: 'icon-kaifa',
                    isHighlight: false,
                    isShowMark: false,
                },
                {
                    routeName: 'dev-words',
                    href: routeConfig['dev-words'].route,
                    text: routeConfig['dev-words'].title,
                    icon: 'icon-kaifa',
                    isHighlight: false,
                    isShowMark: false,
                },
                {
                    routeName: 'mine',
                    href: routeConfig.mine.route,
                    text: routeConfig.mine.title,
                    icon: 'icon-wode',
                    isHighlight: false,
                    isShowMark: false,
                },

            ],
        };
    }

    // 增
    postData() {

    }

    // 删
    deleteData() {

    }

    // 改
    putData() {

    }

    // 查
    getData() {

    }
}

module.exports = FooterNav;
