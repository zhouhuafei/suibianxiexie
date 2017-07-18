//底部导航的数据
const routeConfig = require('../../routes/phone/pages/config');

class FooterNav {
    constructor(json) {
        this.opts = json || {};
        this.result = {
            config: {},
            data: {
                'home': {
                    icon: 'icon-shouye',
                    txt: routeConfig['home'].title,
                    link: routeConfig['home'].route,
                    isHighlight: false,
                    isShowMark: false
                },
                'dev-global': {
                    icon: 'icon-kaifa',
                    txt: routeConfig['dev-global'].title,
                    link: routeConfig['dev-global'].route,
                    isHighlight: false,
                    isShowMark: false
                },
                'dev-components': {
                    icon: 'icon-kaifa',
                    txt: routeConfig['dev-components'].title,
                    link: routeConfig['dev-components'].route,
                    isHighlight: false,
                    isShowMark: false
                },
                'dev-words': {
                    icon: 'icon-kaifa',
                    txt: routeConfig['dev-words'].title,
                    link: routeConfig['dev-words'].route,
                    isHighlight: false,
                    isShowMark: false
                },
                'mine': {
                    icon: 'icon-wode',
                    txt: routeConfig['mine'].title,
                    link: routeConfig['mine'].route,
                    isHighlight: false,
                    isShowMark: false
                }

            }
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