window.addEventListener('load', function () {
    setTimeout(function () {
        require('../../scss/pages/404.scss');
        let header = require('../commons/header');//每个页面都要用到的js(一定要放到最顶部)

        //没有数据
        (function () {
            let NoData = require('../modules/m-no-data');
            new NoData({
                data: {
                    txt: '404 - Not Find'
                }
            })
        })();

        let footer = require('../commons/footer');//每个页面都要用到的js(一定要放到最底部)
    }, 0)
});