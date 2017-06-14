//处理底部导航的数据
const phoneConfig = require('../../route/phone/config');

class FooterNav {
    constructor(json) {
        this.opts = json || {};
        this.result = {
            config: {},
            data: {
                'home': {
                    icon: 'icon-shouye',
                    txt: phoneConfig.home.title,
                    link: phoneConfig.home.route,
                    isHighlight: false,
                    isShowMark: false
                },
                'dev-global': {
                    icon: 'icon-kaifa',
                    txt: phoneConfig.dev.global.title,
                    link: phoneConfig.dev.global.route,
                    isHighlight: false,
                    isShowMark: false
                },
                'dev-module': {
                    icon: 'icon-kaifa',
                    txt: phoneConfig.dev.module.title,
                    link: phoneConfig.dev.module.route,
                    isHighlight: false,
                    isShowMark: false
                },
                'dev-word': {
                    icon: 'icon-kaifa',
                    txt: phoneConfig.dev.word.title,
                    link: phoneConfig.dev.word.route,
                    isHighlight: false,
                    isShowMark: false
                },
                'mine': {
                    icon: 'icon-wode',
                    txt: phoneConfig.mine.title,
                    link: phoneConfig.mine.route,
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