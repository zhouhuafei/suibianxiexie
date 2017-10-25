require('../../scss/pages/setting.scss');
const Super = require('./super');

class Sub extends Super {
    power() {
        const self = this;
        const gDataInfo = self.dataInfo;
        const axios = self.axios;
        const Dialog = require('../components-dom/g-dialog');

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
    }
}

new Sub();
