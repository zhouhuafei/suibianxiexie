require('../../../scss/pages/dev-components.scss');
const Super = require('../../pages-super/super');

class Sub extends Super {
    // (功)(覆)功能(覆盖超类型)
    power() {
        const superSelf = this;
        const applications = superSelf.applications;
        const dataInfo = superSelf.dataInfo;
        const routes = dataInfo.routes;

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

        // 测试滚动到底部功能以及loading组件
        (function () {
            const Loading = require('../../components-dom/g-loading');
            const WhenScrollBottom = applications.WhenScrollBottom;
            let num = 0;
            new WhenScrollBottom({
                isInitRender: false,
                callback: {
                    success: function (self) {
                        num++;
                        new Loading({
                            wrap: '.g-body',
                            config: {
                                status: 'loading',
                            },
                        });
                        if (num >= 5) {
                            new Loading({
                                config: {
                                    status: 'over',
                                },
                            });
                        } else {
                            self.dataLoadContinue();
                        }
                    },
                },
            });
        }());

        // slide切换
        (function () {
            const Slide = require('../../components-dom/g-slide');
            new Slide({
                wrap: '.page-slide',
                data: {
                    items: [
                        {
                            img: {
                                width: 0,
                                height: 0,
                                src: require('../../../images/home/slide1.jpg'),
                            },
                            href: '',
                        },
                        {
                            img: {
                                width: 0,
                                height: 0,
                                src: require('../../../images/home/slide2.jpg'),
                            },
                            href: '',
                        },
                        {
                            img: {
                                width: 0,
                                height: 0,
                                src: require('../../../images/home/slide3.jpg'),
                            },
                            href: '',
                        },
                        {
                            img: {
                                width: 0,
                                height: 0,
                                src: require('../../../images/home/slide4.jpg'),
                            },
                            href: '',
                        },
                        {
                            img: {
                                width: 0,
                                height: 0,
                                src: require('../../../images/home/slide5.jpg'),
                            },
                            href: '',
                        },
                    ],
                },
            });
        }());

        // 导航
        (function () {
            const Navigation = require('../../components-dom/g-navigation');
            new Navigation({
                wrap: '.page-navigation',
                data: {
                    items: [
                        {
                            href: routes['home'].route,
                            icon: 'icon-home',
                            text: '首页',
                            isShowMark: false,
                        },
                        {
                            href: routes['dev-globals'].route,
                            icon: 'icon-dev',
                            text: '开发全局',
                            isShowMark: false,
                        },
                        {
                            href: routes['dev-components'].route,
                            icon: 'icon-dev',
                            text: '开发组件',
                            isShowMark: false,
                        },
                        {
                            href: routes['dev-words'].route,
                            icon: 'icon-dev',
                            text: '开发词汇',
                            isShowMark: false,
                        },
                        {
                            href: routes['mine'].route,
                            icon: 'icon-mine',
                            text: '我的',
                            isShowMark: false,
                        },
                    ],
                },
            });
        }());

        // 分页测试
        (function () {
            const Pagination = require('../../components-dom/g-pagination');
            new Pagination({wrap: '.page-pagination'});
        }());

        // 没有数据
        (function () {
            const NoData = require('../../components-dom/g-no-data');
            new NoData({wrap: '.page-no-data'});
        }());

        // 超类型模块测试
        (function () {
            const Super = require('../../components-dom-super/g-super');
            new Super({wrap: '.page-super-type'});
            const Sub = require('../../components-dom/g-sub');
            new Sub({wrap: '.page-super-type'});
            new Sub(); // constructorInherit里parameter去掉了对象引用,否则这个子类的默认参数wrap会变成上面.page-super-type(bug回忆)
            const SuperEs6 = require('../../components-dom-super/g-super-es6');
            new SuperEs6({wrap: '.page-super-type'});
            const SubEs6 = require('../../components-dom/g-sub-es6');
            new SubEs6({wrap: '.page-super-type'});
        }());

        // 单选开关
        (function () {
            const Radio = require('../../components-dom/g-radio-switch');
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
            const Table = require('../../components-dom/g-table');
            new Table({
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
            require.ensure([], function (require) {
                const Star = require('../../components-dom/g-star');
                new Star({
                    wrap: '.page-star',
                    callback: {
                        click: function (json) {
                            console.log(json);
                        },
                    },
                });
            }, 'g-star');
        }());
    }
}

new Sub();
