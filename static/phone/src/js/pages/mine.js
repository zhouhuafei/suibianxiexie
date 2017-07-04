window.addEventListener('load', function () {
    setTimeout(function () {
        require('../../scss/pages/mine.scss');
        let header = require('../commons/header');//每个页面都要用到的js(一定要放到最顶部)

        //注释待续...
        (function () {
            //功能待续...
        })();

        let footer = require('../commons/footer');//每个页面都要用到的js(一定要放到最底部)
    }, 0)
});