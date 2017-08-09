import home from '../../vue/pages/home.vue';

window.addEventListener('load', function () {
    setTimeout(function () {
        let Vue = require('vue');
        console.log('第一次打包会报错,无解么?')

        //slide切换
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
            let Navigation = require('../components/g-navigation');
            new Navigation({wrap: '.page-navigation'});
        })();

        //vue
        (function () {
            new Vue({
                el: '.g-vue',
                data: {
                    message: 'Hello Vue2!'
                },
                render: h => h(home)
                // template: '<home></home>',
                // components: {home}
            })
        })();

        require('../../scss/pages/home.scss');//当前页面用到的样式
        let common = require('../pages-commons/common');//每个页面都要用到的js(一定要放到最底部)
    }, 0)
});