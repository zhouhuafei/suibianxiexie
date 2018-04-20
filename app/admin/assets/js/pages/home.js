require('../../scss/pages/home.scss');
const Super = require('../pages-super/super');

class Sub extends Super {
    power() {
        const superSelf = this;
        const dataInfo = superSelf.dataInfo;
        const routes = dataInfo.routes;

        // slide切换
        (function () {
            const Slide = require('../components-dom/g-slide');
            new Slide({
                wrap: '.page-slide',
                data: {
                    items: [
                        {
                            img: {
                                width: 0,
                                height: 0,
                                src: require('../../images/home/slide1.jpg'),
                            },
                            href: '',
                        },
                        {
                            img: {
                                width: 0,
                                height: 0,
                                src: require('../../images/home/slide2.jpg'),
                            },
                            href: '',
                        },
                        {
                            img: {
                                width: 0,
                                height: 0,
                                src: require('../../images/home/slide3.jpg'),
                            },
                            href: '',
                        },
                        {
                            img: {
                                width: 0,
                                height: 0,
                                src: require('../../images/home/slide4.jpg'),
                            },
                            href: '',
                        },
                        {
                            img: {
                                width: 0,
                                height: 0,
                                src: require('../../images/home/slide5.jpg'),
                            },
                            href: '',
                        },
                    ],
                },
            });
        }());

        // vue
        (function () {
            const Vue = superSelf.Vue;
            require.ensure([], function (require) {
                require('../components-vue/g-img-list')(Vue);
                new Vue({
                    el: '.page-vue-app',
                    template: `<div class="page-vue">
                        <g-img-list></g-img-list>
                        <g-img-list></g-img-list>
                        <g-img-list></g-img-list>
                        <g-img-list></g-img-list>
                        <g-img-list></g-img-list>
                        <g-img-list></g-img-list>
                        <g-img-list></g-img-list>
                        <g-img-list></g-img-list>
                        <g-img-list></g-img-list>
                        <g-img-list></g-img-list>
                    </div>`,
                    mounted: function () {
                        console.log(this);
                    },
                });
            }, 'g-img-list');
        }());

        // jsonp错误测试
        /*
        this.jsonp({
            url: '/phone/api/verify-code-register-random2/',
            data: {
                isJsonp: true,
            },
            callback: function (dataInfo) {
                console.log('jsonp error test:\n', dataInfo);
            },
        });
        this.jsonp({
            url: '/phone/api/verify-code-register-random2/',
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
            url: '/phone/api/verify-code-register-random2/',
            method: 'get',
        }).then(function (dataInfo) {
            console.log('axios error test:\n', dataInfo);
        });
        */
    }
}

new Sub();
