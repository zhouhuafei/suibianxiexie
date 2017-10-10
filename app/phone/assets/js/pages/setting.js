window.addEventListener('load', function () {
    setTimeout(function () {
        const axios = require('../api/axios');
        const Dialog = require('../components/g-dialog');

        // 退出账号
        document.querySelector('.page-logout').addEventListener('click', function () {
            new Dialog({
                callback: {
                    confirm: function () {
                        axios({
                            url: gDataInfo.api.logout.route,
                            method: 'get',
                        }).then(function (dataInfo) {
                            if (dataInfo.status === 'success') {
                                window.location.href = gDataInfo.routes.login.route;
                            }
                        });
                    },
                },
                config: {
                    type: 'confirm',
                },
            });
        });

        require('../../scss/pages/setting.scss');// 当前页面用到的样式
        const common = require('../commons/common');// 每个页面都要用到的js(一定要放到最底部)
    }, 0);
});
