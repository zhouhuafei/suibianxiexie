window.addEventListener('load', function () {
    setTimeout(function () {
        // slide切换
        (function () {
            let Slide = require('../components/g-slide');
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
        })();

        // 导航
        (function () {
            let Navigation = require('../components/g-navigation');
            new Navigation({wrap: '.page-navigation'});
        })();

        // vue
        (function () {
            require('../components-vue/g-picture-list');
            let Vue = require('vue');
            new Vue({
                el: '.page-vue-app',
                template: `<div class="page-vue">
                    <g-picture-list></g-picture-list>
                </div>`,
            });
        })();

        require('../../scss/pages/home.scss');// 当前页面用到的样式
        let common = require('../pages-commons/common');// 每个页面都要用到的js(一定要放到最底部)
    }, 0);
});
