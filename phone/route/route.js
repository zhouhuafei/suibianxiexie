//页面路由
const extend = require('../libs/tools/extend');
const route = require('../config/route');

class Route {
    constructor(json) {
        this.opts = extend({
            defaults: {
                app: null
            },
            inherits: json
        });
        if (!this.opts.app) {
            return;
        }
        this.init();
        this.error();
    }

    init() {
        this.home();
    }

    //首页
    home() {
        const Home = require('../controller/home');
        this.opts.app.get(route.home, function (req, res) {
            new Home({req: req, res: res});
        })
    }

    //报错
    error() {
        //404
        this.opts.app.use(function (req, res) {
            var pageInfo = {
                data: {
                    title: '404',
                    footerNav: {
                        data: {
                            items: [
                                {
                                    link: '/',
                                    icon: 'icon-shouye',
                                    txt: '首页',
                                    isHighlight: false,
                                    isShowMark: false
                                },
                                {
                                    link: '/dev-global',
                                    icon: 'icon-kaifa',
                                    txt: 'g-global',
                                    isHighlight: false,
                                    isShowMark: false
                                },
                                {
                                    link: '/dev-module',
                                    icon: 'icon-kaifa',
                                    txt: 'm-module',
                                    isHighlight: false,
                                    isShowMark: false
                                },
                                {
                                    link: '/dev-word',
                                    icon: 'icon-kaifa',
                                    txt: '标准词汇',
                                    isHighlight: false,
                                    isShowMark: false
                                },
                                {
                                    link: '/mine',
                                    icon: 'icon-wode',
                                    txt: '我的',
                                    isHighlight: false,
                                    isShowMark: false
                                }
                            ]
                        }
                    }
                },
                config: {
                    isShowFooterNav: true,
                    isShowCopyright: true
                }
            };
            res.render('404', {
                pageInfo: pageInfo,
                pageInfoStr: JSON.stringify(pageInfo)
            });
        });
        //500
        this.opts.app.use(function (err, req, res) {
            res.type('text/plain');
            res.status(500);
            res.send('500 - Server Error');
        });
    }
}

module.exports = Route;