window.addEventListener('load', function () {
    setTimeout(function () {
        require('../../scss/pages/dev-module.scss');
        let header = require('../pages-commons/header');//每个页面都要用到的js(一定要放到最顶部)
        let applications = header.applications;

        //ajax测试
        (function () {
            //var Ajax = require('../tools/ajax');
            // new Ajax({
            //     callback: {},
            //     config: {
            //         url: '/api/getList'
            //     },
            //     data: {
            //         hellow: 'hellow'
            //     }
            // })
        })();

        //base函数测试
        (function () {
            var WhenScrollBottom = applications.whenScrollBottom();
            //测试滚动到底部loading
            new WhenScrollBottom({
                callback: {
                    success: function (self) {
                        var Loading = require('../modules/m-loading');
                        var loading = new Loading({
                            wrap: '.g-body',
                            config: {
                                status: 'loading'
                            }
                        });
                        loading.moduleDomShow();
                        //self.isLoadOver = false;
                    }
                }
            });
        })();

        //slide切换
        (function () {
            var Slide = require('../modules/m-slide');
            new Slide({
                wrap: '.page-slide',
                data: {
                    items: [
                        {
                            img: {
                                width: 0,
                                height: 0,
                                url: 'http://img1.imgtn.bdimg.com/it/u=1056872014,4038868309&fm=23&gp=0.jpg'
                            },
                            link: ''
                        },
                        {
                            img: {
                                width: 0,
                                height: 0,
                                url: 'http://img3.imgtn.bdimg.com/it/u=1732308780,3782498029&fm=23&gp=0.jpg'
                            },
                            link: ''
                        },
                        {
                            img: {
                                width: 0,
                                height: 0,
                                url: 'http://img3.imgtn.bdimg.com/it/u=4027566086,3099254237&fm=23&gp=0.jpg'
                            },
                            link: ''
                        },
                        {
                            img: {
                                width: 0,
                                height: 0,
                                url: 'http://img4.imgtn.bdimg.com/it/u=120609946,455952432&fm=23&gp=0.jpg'
                            },
                            link: ''
                        },
                        {
                            img: {
                                width: 0,
                                height: 0,
                                url: 'http://img2.imgtn.bdimg.com/it/u=2763208243,961494673&fm=23&gp=0.jpg'
                            },
                            link: ''
                        }
                    ]
                }
            });
        })();

        //导航
        (function () {
            var Navigation = require('../modules/m-navigation');
            new Navigation({wrap: '.page-navigation'});
        })();

        //弹窗测试
        (function () {
            var Dialog = require('../modules/m-dialog');
            // new Dialog({
            //     callback: {
            //         confirm: function () {
            //             new Dialog({config: {alert: {icon: 'icon-chenggong', content: '已确认'}}});
            //         },
            //         cancel: function () {
            //             new Dialog({config: {alert: {icon: 'icon-chenggong', content: '已取消'}}});
            //         },
            //         close: function () {
            //             new Dialog({config: {alert: {icon: 'icon-chenggong', content: '已关闭'}}});
            //         }
            //     },
            //     config: {
            //         type: 'confirm'
            //     }
            // });
        })();

        //分页测试
        (function () {
            var Pagination = require('../modules/m-pagination');
            new Pagination({wrap: '.page-pagination'});
        })();

        //没有数据
        (function () {
            var NoData = require('../modules/m-no-data');
            new NoData({wrap: '.page-no-data'});
        })();

        //加载中
        (function () {
            var Loading = require('../modules/m-loading');
            var loading = new Loading({
                config: {
                    status: 'loading'
                }
            });
            loading.moduleDomShow();
            var over = new Loading({
                config: {
                    status: 'over'
                }
            });
            over.moduleDomShow();
        })();

        //超类型模块测试
        (function () {
            var SuperType = require('../modules/m-super-type');
            new SuperType({wrap: `.page-super-type`});
            var SubType = require('../modules/m-sub-type');
            new SubType({wrap: `.page-super-type`});
            var SuperTypeEs6 = require('../modules/m-super-type-es6');
            new SuperTypeEs6({wrap: `.page-super-type`}).init();//es6继承,不建立在超类型内部直接调init方法
            var SubTypeEs6 = require('../modules/m-sub-type-es6');
            new SubTypeEs6({wrap: `.page-super-type`});
        })();

        //返回顶部
        (function () {
            var GoTop = require('../modules/m-go-top');
            new GoTop();
        })();

        //遮罩
        (function () {
            var Mask = require('../modules/m-mask');
            var mask = new Mask({
                callback: {
                    click: function () {
                        mask.moduleDomHide();
                    }
                }
            });
            //mask.moduleDomShow();
        })();

        //单选开关
        (function () {
            const Radio = require('../modules/m-radio-switch');
            new Radio({
                wrap: '.page-radio-switch',
                callback: {
                    click: function (json) {
                        console.log(json);
                    }
                }
            });
        })();

        //表格
        (function () {
            const Table = require('../modules/m-table');
            const table = new Table({
                wrap: `.page-table`,
                data: {
                    header: [
                        {
                            content: `<div>header0</div>`
                        },
                        {
                            content: `<div>header1</div>`
                        },
                        {
                            content: `<div>header2</div>`
                        }
                    ],
                    body: [
                        [
                            {
                                content: `<div>body0-0</div>`
                            },
                            {
                                content: `<div>body1-0</div>`
                            },
                            {
                                content: `<div>body2-0</div>`
                            }
                        ],
                        [
                            {
                                content: `<div>body0-1</div>`
                            },
                            {
                                content: `<div>body1-1</div>`
                            },
                            {
                                content: `<div>body2-1</div>`
                            }
                        ],
                        [
                            {
                                content: `<div>body0-2</div>`
                            },
                            {
                                content: `<div>body1-2</div>`
                            },
                            {
                                content: `<div>body2-2</div>`
                            }
                        ]
                    ],
                    footer: ``
                }
            });
        })();

        //星评
        (function () {
            const Star = require('../modules/m-star');
            const star = new Star({
                wrap: `.page-star`,
                callback: {
                    click: function (json) {
                        console.log(json);
                    }
                }
            });
        })();

        let footer = require('../pages-commons/footer');//每个页面都要用到的js(一定要放到最底部)
    }, 0)
});