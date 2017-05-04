window.addEventListener('load', function () {
    setTimeout(function () {

        //没有数据
        (function () {
            var NoData = require('../modules/m-no-data');
            new NoData({
                data: {
                    txt: '404 - Not Find'
                }
            })
        })();
        
        require('../common/common');//每个页面都要用到的js(一定要放到最底部)
    }, 0)
});