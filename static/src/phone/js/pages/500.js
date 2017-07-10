window.addEventListener('load', function () {
    setTimeout(function () {
        require('../../scss/pages/500.scss');
        let header = require('../pages-commons/header');//每个页面都要用到的js(一定要放到最顶部)

        //没有数据
        (function () {
            var NoData = require('../modules/m-no-data');
            new NoData({
                data: {
                    txt: '500 - Server Error'
                }
            })
        })();

        let footer = require('../pages-commons/footer');//每个页面都要用到的js(一定要放到最底部)
    }, 0)
});