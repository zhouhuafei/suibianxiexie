require('../../scss/pages/login.scss');
const Super = require('../pages-super/super');

class Sub extends Super {
    power() {
        const self = this;
        const gDataInfo = self.dataInfo;
        const axios = self.axios;

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
    }
}

new Sub();
