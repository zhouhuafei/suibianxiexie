window.addEventListener('load', function () {
    setTimeout(function () {
        require('../../scss/pages/404.scss');
        let header = require('../pages-commons/header');//每个页面都要用到的js(一定要放到最顶部)

        //没有数据
        (function () {
            let NoData = require('../components/g-no-data');
            new NoData({
                data: {
                    txt: '404 - Not Find'
                }
            })
        })();

        let footer = require('../pages-commons/footer');//每个页面都要用到的js(一定要放到最底部)
    }, 0)
});