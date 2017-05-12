function Routes(opt) {
    if (!opt || !opt.app) {
        return;
    }
    this.app = opt.app;
    this.init();
    this.error();
}
Routes.prototype.init = function () {
    this.home();
    this.mine();
    this.login();
    this.register();
    this.dev();
};
Routes.prototype.dev = function () {
    this.app.get('/dev-list', function (req, res) {
        var pageInfo = {
            data: {
                title: '开发列表清单',
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
        res.render('dev-list',{
            pageInfo: pageInfo,
            pageInfoStr: JSON.stringify(pageInfo)
        });
    });
    this.app.get('/dev-global', function (req, res) {
        var pageInfo = {
            data: {
                title: '全局样式',
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
                                isHighlight: true,
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
        res.render('dev-global', {
            pageInfo: pageInfo,
            pageInfoStr: JSON.stringify(pageInfo)
        });
    });
    this.app.get('/dev-module', function (req, res) {
        var pageInfo = {
            data: {
                title: '模块样式',
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
                                isHighlight: true,
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
        res.render('dev-module', {
            pageInfo: pageInfo,
            pageInfoStr: JSON.stringify(pageInfo)
        });
    });
    this.app.get('/dev-word', function (req, res) {
        var pageInfo = {
            data: {
                title: '开发标准词汇',
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
                                isHighlight: true,
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
        res.render('dev-word', {
            pageInfo: pageInfo,
            pageInfoStr: JSON.stringify(pageInfo)
        });
    })
};
Routes.prototype.register = function () {
    this.app.get('/register', function (req, res) {
        var pageInfo = {
            data: {
                title: '注册',
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
        res.render('register', {
            pageInfo: pageInfo,
            pageInfoStr: JSON.stringify(pageInfo)
        });
    })
};
Routes.prototype.login = function () {
    this.app.get('/login', function (req, res) {
        var pageInfo = {
            data: {
                title: '登陆',
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
        res.render('login', {
            pageInfo: pageInfo,
            pageInfoStr: JSON.stringify(pageInfo)
        });
    })
};
Routes.prototype.mine = function () {
    this.app.get('/mine', function (req, res) {
        var pageInfo = {
            data: {
                title: '我的',
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
                                isHighlight: true,
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
        res.render('mine',  {
            pageInfo: pageInfo,
            pageInfoStr: JSON.stringify(pageInfo)
        });
    })
};
Routes.prototype.home = function () {
    this.app.get('/', function (req, res) {
        var pageInfo = {
            data: {
                title: '首页',
                footerNav: {
                    data: {
                        items: [
                            {
                                link: '/',
                                icon: 'icon-shouye',
                                txt: '首页',
                                isHighlight: true,
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
        res.render('home', {
            pageInfo: pageInfo,
            pageInfoStr: JSON.stringify(pageInfo)
        });
    })
};
Routes.prototype.error = function () {
    //404
    this.app.use(function (req, res) {
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
    this.app.use(function (err, req, res) {
        res.type('text/plain');
        res.status(500);
        res.send('500 - Server Error');
    });
};
module.exports = Routes;