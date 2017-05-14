//处理底部导航的数据
const page = require('../../config/page');

class FooterNav {
    constructor(json) {
        this.opts = json || {};
        this.result = {
            config: {},
            data: {
                home: {
                    icon: 'icon-shouye',
                    txt: page['home'].title,
                    link: page['home'].route,
                    isHighlight: false,
                    isShowMark: false
                },
                devGlobal: {
                    icon: 'icon-kaifa',
                    txt: page['dev-global'].title,
                    link: page['dev-global'].route,
                    isHighlight: false,
                    isShowMark: false
                },
                devModule: {
                    icon: 'icon-kaifa',
                    txt: page['dev-module'].title,
                    link: page['dev-module'].route,
                    isHighlight: false,
                    isShowMark: false
                },
                devWord: {
                    icon: 'icon-kaifa',
                    txt: page['dev-word'].title,
                    link: page['dev-word'].route,
                    isHighlight: false,
                    isShowMark: false
                },
                mine: {
                    icon: 'icon-wode',
                    txt: page['mine'].title,
                    link: page['mine'].route,
                    isHighlight: false,
                    isShowMark: false
                }

            }
        };
    }
}

module.exports = FooterNav;