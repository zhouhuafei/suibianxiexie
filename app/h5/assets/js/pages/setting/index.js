require('../../../scss/pages/setting.scss');
const Super = require('../../pages-super/super');

class Sub extends Super {
    // (功)(覆)功能(覆盖超类型)
    power() {
        const self = this;
        const dataInfo = self.dataInfo;
        const axios = self.axios;
        const Confirm = require('../../components-dom/g-dialog-confirm');

        // 退出账号
        document.querySelector('.page-logout').addEventListener('click', function () {
            new Confirm({
                callback: {
                    confirm: function () {
                        axios({
                            url: dataInfo.api.logout.route,
                            method: 'get',
                        }).then(function (json) {
                            if (json.status === 'success') {
                                window.location.href = dataInfo.routes.login.route;
                            }
                        });
                    },
                },
            });
        });
    }
}

new Sub();