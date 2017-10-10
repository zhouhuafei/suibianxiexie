window.addEventListener('load', function () {
    setTimeout(function () {
        const axios = require('../api/axios');

        // 登录
        const domUsername = document.querySelector('#username');
        const domPassword = document.querySelector('#password');
        document.querySelector('.page-login').addEventListener('click', function () {
            axios({
                url: gDataInfo.api.login.route,
                method: 'post',
                data: {
                    username: domUsername.value,
                    password: domPassword.value,
                },
            }).then(function (dataInfo) {
                if (dataInfo.status === 'success') {
                    window.location.href = gDataInfo.routes.mine.route;
                }
            });
        });

        require('../../scss/pages/login.scss');// 当前页面用到的样式
        const common = require('../commons/common');// 每个页面都要用到的js(一定要放到最底部)
    }, 0);
});
