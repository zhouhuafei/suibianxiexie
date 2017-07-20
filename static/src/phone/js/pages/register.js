window.addEventListener('load', function () {
    setTimeout(function () {
        require('../../scss/pages/register.scss');
        let header = require('../pages-commons/header');//每个页面都要用到的js(一定要放到最顶部)
        let axios = header.axios;

        //注释待续...
        (function () {
            //功能待续...
            axios({
                url: '/phone/api/register/',
                method: 'get',
                data: {
                    test: 1
                }
            })
        })();

        let footer = require('../pages-commons/footer');//每个页面都要用到的js(一定要放到最底部)
    }, 0)
});