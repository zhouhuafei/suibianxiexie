//底部导航的数据
const phoneConfig = require('../../routes/phone/config');

class FooterNav {
    constructor(json) {
        this.opts = json || {};
        this.result = {
            config: {},
            data: {
                'home': {
                    icon: 'icon-shouye',
                    txt: phoneConfig['home'].title,
                    link: phoneConfig['home'].route,
                    isHighlight: false,
                    isShowMark: false
                },
                'dev-global': {
                    icon: 'icon-kaifa',
                    txt: phoneConfig['dev-global'].title,
                    link: phoneConfig['dev-global'].route,
                    isHighlight: false,
                    isShowMark: false
                },
                'dev-components': {
                    icon: 'icon-kaifa',
                    txt: phoneConfig['dev-components'].title,
                    link: phoneConfig['dev-components'].route,
                    isHighlight: false,
                    isShowMark: false
                },
                'dev-words': {
                    icon: 'icon-kaifa',
                    txt: phoneConfig['dev-words'].title,
                    link: phoneConfig['dev-words'].route,
                    isHighlight: false,
                    isShowMark: false
                },
                'mine': {
                    icon: 'icon-wode',
                    txt: phoneConfig['mine'].title,
                    link: phoneConfig['mine'].route,
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