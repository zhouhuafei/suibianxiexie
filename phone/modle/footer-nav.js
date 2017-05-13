//处理底部导航的数据
const route = require('../config/route');

class FooterNav {
    constructor(json) {
        this.opts = json || {};
        this.result = {
            config: {},
            data: {
                home: {
                    link: '/',
                    icon: 'icon-shouye',
                    txt: '首页',
                    isHighlight: false,
                    isShowMark: false
                },
                devGlobal: {
                    link: '/dev-global',
                    icon: 'icon-kaifa',
                    txt: 'g-global',
                    isHighlight: false,
                    isShowMark: false
                },
                devModule: {
                    link: '/dev-module',
                    icon: 'icon-kaifa',
                    txt: 'm-module',
                    isHighlight: false,
                    isShowMark: false
                },
                devWord: {
                    link: '/dev-word',
                    icon: 'icon-kaifa',
                    txt: '标准词汇',
                    isHighlight: false,
                    isShowMark: false
                },
                mine: {
                    link: '/mine',
                    icon: 'icon-wode',
                    txt: '我的',
                    isHighlight: false,
                    isShowMark: false
                }

            }
        };
        this.init();
    }

    init() {
        this.home();
    }

    home() {
        if (this.opts.req.route.path == route.home) {
            this.result.data.home.isHighlight = true;
        }
    }
}

module.exports = FooterNav;