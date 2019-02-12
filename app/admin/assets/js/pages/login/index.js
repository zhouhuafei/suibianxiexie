require('../../../scss/pages/login.scss');
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
        const superSelf = this;
        const dataInfo = superSelf.dataInfo;
        const routes = dataInfo.routes;
        const api = dataInfo.api;
        const axios = superSelf.axios;

        // 验证
        new Validate({element: '.js-validate-form'});

        // 登陆
        (function () {
            const form = document.querySelector('#form');
            const username = document.querySelector('#username');
            const password = document.querySelector('#password');
            const btn = document.querySelector('.js-button');
            btn.addEventListener('click', function () {
                axios({
                    url: form.action,
                    method: form.method,
                    /*
                    data: {
                        username: username.value,
                        password: password.value,
                    },
                    */
                    data: $(form).serialize(),
                }).then(function (json) {
                    if (json.status === 'success') {
                        window.location.href = routes['website-info'].route;
                    }
                    if (json.status === 'failure') {
                        document.querySelector('.g-verify-code-canvas img').click();
                    }
                });
            });
        })();
    }
}

new Sub();
