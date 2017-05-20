//处理底部导航的数据
const page = require('../../route/phone/config');
const pages = page.pages;

class FooterNav {
    constructor(json) {
        this.opts = json || {};
        this.result = {
            config: {},
            data: {
                'home': {
                    icon: 'icon-shouye',
                    txt: pages['home'].title,
                    link: pages['home'].route,
                    isHighlight: false,
                    isShowMark: false
                },
                'dev-global': {
                    icon: 'icon-kaifa',
                    txt: pages['dev-global'].title,
                    link: pages['dev-global'].route,
                    isHighlight: false,
                    isShowMark: false
                },
                'dev-module': {
                    icon: 'icon-kaifa',
                    txt: pages['dev-module'].title,
                    link: pages['dev-module'].route,
                    isHighlight: false,
                    isShowMark: false
                },
                'dev-word': {
                    icon: 'icon-kaifa',
                    txt: pages['dev-word'].title,
                    link: pages['dev-word'].route,
                    isHighlight: false,
                    isShowMark: false
                },
                'mine': {
                    icon: 'icon-wode',
                    txt: pages['mine'].title,
                    link: pages['mine'].route,
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