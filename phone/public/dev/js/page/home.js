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
                            src: 'http://img1.imgtn.bdimg.com/it/u=1056872014,4038868309&fm=23&gp=0.jpg',
                            href: ''
                        },
                        {
                            src: 'http://img3.imgtn.bdimg.com/it/u=1732308780,3782498029&fm=23&gp=0.jpg',
                            href: ''
                        },
                        {
                            src: 'http://img3.imgtn.bdimg.com/it/u=4027566086,3099254237&fm=23&gp=0.jpg',
                            href: ''
                        },
                        {
                            src: 'http://img4.imgtn.bdimg.com/it/u=120609946,455952432&fm=23&gp=0.jpg',
                            href: ''
                        },
                        {
                            src: 'http://img2.imgtn.bdimg.com/it/u=2763208243,961494673&fm=23&gp=0.jpg',
                            href: ''
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
        
        require('../common/common');//每个页面都要用到的js(一定要放到最底部)
    }, 0)
});