require('../../scss/pages/home.scss');
const Super = require('./super');

class Sub extends Super {
    power() {
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

        // vue
        (function () {
            require('../components-vue/g-img-list');
            const Vue = require('vue');
            new Vue({
                el: '.page-vue-app',
                template: `<div class="page-vue">
                    <g-picture-list></g-picture-list>
                </div>`,
            });
        }());

        // jsonp
        this.applications.jsonp({
            url: '/jsonp/',
            data: {a: 1, b: 2, c: []},
            callback: function (json) {
                console.log('jsonp测试:', json);
            },
        });
    }
}

new Sub();
