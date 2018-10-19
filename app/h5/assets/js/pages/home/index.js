require('../../../scss/pages/home.scss');
const Super = require('../../pages-super/super');
const {
    Message,
    Confirm,
    Validate,
    GoTop,
    TooltipApp,
    Copyright,
    LazyLoad,
    Navigation,
} = require('zhf.g-ui/src/js/commons_dom/g-common.js');

class Sub extends Super {
    // (功)(覆)功能(覆盖超类型)
    power() {
        const superSelf = this;
        const dataInfo = superSelf.dataInfo;
        const routes = dataInfo.routes;

        // slide切换
        (function () {
            const Slide = require('../../components_dom/g-slide');
            new Slide({
                wrap: '.page-slide',
                config: {
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

        // vue
        (function () {
            const Vue = superSelf.Vue;
            require.ensure([], function (require) {
                require('../../components_vue/g-img-test')(Vue);
                new Vue({
                    el: '.page-vue-app',
                    template: `<div class="page-vue">
                        <g-img-test></g-img-test>
                        <g-img-test></g-img-test>
                        <g-img-test></g-img-test>
                        <g-img-test></g-img-test>
                        <g-img-test></g-img-test>
                        <g-img-test></g-img-test>
                        <g-img-test></g-img-test>
                        <g-img-test></g-img-test>
                        <g-img-test></g-img-test>
                        <g-img-test></g-img-test>
                    </div>`,
                    mounted: function () {
                        console.log(this);
                    },
                });
            }, 'g-img-test');
        }());

        // jsonp错误测试
        /*
        this.jsonp({
            url: '/h5/api/verify-code-random2/',
            data: {
                isJsonp: true,
            },
            callback: function (dataInfo) {
                console.log('jsonp error test:\n', dataInfo);
            },
        });
        this.jsonp({
            url: '/h5/api/verify-code-random2/',
            data: {
                isJsonp: true,
            },
            callback: function (dataInfo) {
                console.log('jsonp error test:\n', dataInfo);
            },
        });
        */

        // axios错误测试
        /*
        this.axios({
            url: '/h5/api/verify-code-random2/',
            method: 'get',
        }).then(function (dataInfo) {
            console.log('axios error test:\n', dataInfo);
        });
        */
    }
}

new Sub();
