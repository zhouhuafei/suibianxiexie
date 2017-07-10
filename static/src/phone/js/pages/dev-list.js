window.addEventListener('load', function () {
    setTimeout(function () {
        require('../../scss/pages/dev-list.scss');
        let header = require('../pages-commons/header');//每个页面都要用到的js(一定要放到最顶部)

        //注释待续...
        (function () {
            //功能待续...
        })();

        let footer = require('../pages-commons/footer');//每个页面都要用到的js(一定要放到最底部)
    }, 0)
});