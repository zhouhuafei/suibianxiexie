require('../../../scss/pages/setting.scss');
const Super = require('../../pages-super/super');
const {
    Message,
    Confirm,
    Validate,
    GoTop,
    TooltipApp,
    Copyright,
    LazyLoad,
} = require('zhf.g-ui/dist/js/commons_dom/g-common/index.js');

class Sub extends Super {
    // (功)(覆)功能(覆盖超类型)
    power() {
        const self = this;
        const dataInfo = self.dataInfo;
        const axios = self.axios;

        // 退出账号
        document.querySelector('.page-logout').addEventListener('click', function () {
            new Confirm({
                callback: {
                    confirm: function () {
                        axios({
                            url: dataInfo.api.logout.route,
                            method: 'GET',
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
