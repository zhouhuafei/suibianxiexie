window.addEventListener('load', function () {
    setTimeout(function () {
        const applications = require('../utils/applications');

        // ajax测试
        (function () {
            // const Ajax = require('../api/ajax');
            // new Ajax({
            //     callback: {},
            //     config: {
            //         url: '/api/getList',
            //     },
            //     data: {
            //         hellow: 'hellow',
            //     },
            // });
        }());

        // base函数测试
        (function () {
            const WhenScrollBottom = applications.whenScrollBottom();
            // 测试滚动到底部loading
            new WhenScrollBottom({
                callback: {
                    success: function (self) {
                        const Loading = require('../components/g-loading');
                        const loading = new Loading({
                            wrap: '.g-body',
                            config: {
                                status: 'loading',
                            },
                        });
                        loading.moduleDomShow();
                    },
                },
            });
        }());

        // slide切换
        (function () {
            const Slide = require('../components/g-slide');
            new Slide({
                wrap: '.page-slide',
                data: {
                    items: [
                        {
                            img: {
                                width: 0,
                                height: 0,
                                src: 'http://img1.imgtn.bdimg.com/it/u=1056872014,4038868309&fm=23&gp=0.jpg',
                            },
                            href: '',
                        },
                        {
                            img: {
                                width: 0,
                                height: 0,
                                src: 'http://img3.imgtn.bdimg.com/it/u=1732308780,3782498029&fm=23&gp=0.jpg',
                            },
                            href: '',
                        },
                        {
                            img: {
                                width: 0,
                                height: 0,
                                src: 'http://img3.imgtn.bdimg.com/it/u=4027566086,3099254237&fm=23&gp=0.jpg',
                            },
                            href: '',
                        },
                        {
                            img: {
                                width: 0,
                                height: 0,
                                src: 'http://img4.imgtn.bdimg.com/it/u=120609946,455952432&fm=23&gp=0.jpg',
                            },
                            href: '',
                        },
                        {
                            img: {
                                width: 0,
                                height: 0,
                                src: 'http://img2.imgtn.bdimg.com/it/u=2763208243,961494673&fm=23&gp=0.jpg',
                            },
                            href: '',
                        },
                    ],
                },
            });
        }());

        // 导航
        (function () {
            const Navigation = require('../components/g-navigation');
            new Navigation({wrap: '.page-navigation'});
        }());

        // 弹窗测试
        (function () {
            const Dialog = require('../components/g-dialog');
            new Dialog({
                callback: {
                    confirm: function () {
                        new Dialog({config: {alert: {icon: 'icon-chenggong', content: '已确认'}}});
                    },
                    cancel: function () {
                        new Dialog({config: {alert: {icon: 'icon-chenggong', content: '已取消'}}});
                    },
                    close: function () {
                        new Dialog({config: {alert: {icon: 'icon-chenggong', content: '已关闭'}}});
                    },
                },
                config: {
                    type: 'confirm',
                },
            });
        }());

        // 分页测试
        (function () {
            const Pagination = require('../components/g-pagination');
            new Pagination({wrap: '.page-pagination'});
        }());

        // 没有数据
        (function () {
            const NoData = require('../components/g-no-data');
            new NoData({wrap: '.page-no-data'});
        }());

        // 加载中
        (function () {
            const Loading = require('../components/g-loading');
            const loading = new Loading({
                config: {
                    status: 'loading',
                },
            });
            loading.moduleDomShow();
            const over = new Loading({
                config: {
                    status: 'over',
                },
            });
            over.moduleDomShow();
        }());

        // 超类型模块测试
        (function () {
            const SuperType = require('../components/g-super-type');
            new SuperType({wrap: '.page-super-type'});
            const SubType = require('../components/g-sub-type');
            new SubType({wrap: '.page-super-type'});
            const SuperTypeEs6 = require('../components/g-super-type-es6');
            new SuperTypeEs6({wrap: '.page-super-type'}).init();// es6继承,不建立在超类型内部直接调init方法
            const SubTypeEs6 = require('../components/g-sub-type-es6');
            new SubTypeEs6({wrap: '.page-super-type'});
        }());

        // 返回顶部
        (function () {
            const GoTop = require('../components/g-go-top');
            new GoTop();
        }());

        // 遮罩
        (function () {
            const Mask = require('../components/g-mask');
            const mask = new Mask({
                callback: {
                    click: function () {
                        mask.moduleDomHide();
                    },
                },
            });
            // mask.moduleDomShow();
        }());

        // 单选开关
        (function () {
            const Radio = require('../components/g-radio-switch');
            new Radio({
                wrap: '.page-radio-switch',
                callback: {
                    click: function (json) {
                        console.log(json);
                    },
                },
            });
        }());

        // 表格
        (function () {
            const Table = require('../components/g-table');
            const table = new Table({
                wrap: '.page-table',
                data: {
                    header: [
                        {
                            content: '<div>header0</div>',
                        },
                        {
                            content: '<div>header1</div>',
                        },
                        {
                            content: '<div>header2</div>',
                        },
                    ],
                    body: [
                        [
                            {
                                content: '<div>body0-0</div>',
                            },
                            {
                                content: '<div>body1-0</div>',
                            },
                            {
                                content: '<div>body2-0</div>',
                            },
                        ],
                        [
                            {
                                content: '<div>body0-1</div>',
                            },
                            {
                                content: '<div>body1-1</div>',
                            },
                            {
                                content: '<div>body2-1</div>',
                            },
                        ],
                        [
                            {
                                content: '<div>body0-2</div>',
                            },
                            {
                                content: '<div>body1-2</div>',
                            },
                            {
                                content: '<div>body2-2</div>',
                            },
                        ],
                    ],
                    footer: '',
                },
            });
        }());

        // 星评
        (function () {
            // const Star = require('../components/g-star');
            // const star = new Star({
            //     wrap: `.page-star`,
            //     callback: {
            //         click: function (json) {
            //             console.log(json);
            //         }
            //     }
            // });
            require.ensure([], function (require) {
                const Star = require('../components/g-star');
                const star = new Star({
                    wrap: '.page-star',
                    callback: {
                        click: function (json) {
                            console.log(json);
                        },
                    },
                });
            }, 'g-star');
        }());

        require('../../scss/pages/dev-components.scss');// 当前页面用到的样式
        const common = require('../commons/common');// 每个页面都要用到的js(一定要放到最底部)
    }, 0);
});
