//底部导航的数据
const routeConfig = require('../../routes/phone/pages/config');

class FooterNav {
    constructor(json) {
        this.opts = json || {};
        this.result = {
            config: {},
            data: [
                {
                    routeName: 'home',
                    link: routeConfig['home'].route,
                    text: routeConfig['home'].title,
                    icon: 'icon-shouye',
                    isHighlight: false,
                    isShowMark: false
                },
                {
                    routeName: 'dev-global',
                    link: routeConfig['dev-global'].route,
                    text: routeConfig['dev-global'].title,
                    icon: 'icon-kaifa',
                    isHighlight: false,
                    isShowMark: false
                },
                {
                    routeName: 'dev-components',
                    link: routeConfig['dev-components'].route,
                    text: routeConfig['dev-components'].title,
                    icon: 'icon-kaifa',
                    isHighlight: false,
                    isShowMark: false
                },
                {
                    routeName: 'dev-words',
                    link: routeConfig['dev-words'].route,
                    text: routeConfig['dev-words'].title,
                    icon: 'icon-kaifa',
                    isHighlight: false,
                    isShowMark: false
                },
                {
                    routeName: 'mine',
                    link: routeConfig['mine'].route,
                    text: routeConfig['mine'].title,
                    icon: 'icon-wode',
                    isHighlight: false,
                    isShowMark: false
                }

            ]
        };
    }

    insert() {

    }

    del() {

    }

    update() {

    }

    select() {

    }
}

module.exports = FooterNav;