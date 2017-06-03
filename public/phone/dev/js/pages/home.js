window.addEventListener('load', function () {
    setTimeout(function () {

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

        //vue
        (function () {
            require('../components/c-hello-vue');
            new Vue({
                el: '.g-vue',
                data: {
                    message: 'Hello Vue2!'
                }
            })
        })();

        //模块引入测试
        (function () {
            //var _ = require('../base/lodash');
            //var $ = require('../base/zepto');
            //console.log(_, $, 999);
        })();

        require('../commons/common');//每个页面都要用到的js(一定要放到最底部)
    }, 0)
});
