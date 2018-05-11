require('../../scss/pages/register.scss');
const Super = require('../pages-super/super');

class Sub extends Super {
    // (功)(覆)功能(覆盖超类型)
    power() {
        const superSelf = this;
        const dataInfo = superSelf.dataInfo;
        const routes = dataInfo.routes;
        const api = dataInfo.api;
        const axios = superSelf.axios;

        // 验证
        (function () {
            const ValidateInput = require('../components-dom/g-validate-form-hint');
            new ValidateInput({element: '.js-validate-form'});
        }());

        // 注册
        (function () {
            const form = document.querySelector('#form');
            const username = document.querySelector('#username');
            const password = document.querySelector('#password');
            const repeatPassword = document.querySelector('#repeat-password');
            const btn = document.querySelector('.js-button');
            btn.addEventListener('click', function () {
                axios({
                    url: form.action,
                    method: form.method,
                    /*
                    data: {
                        username: username.value,
                        password: password.value,
                        'repeat-password': repeatPassword.value,
                    },
                    */
                    data: $(form).serialize(),
                }).then(function (json) {
                    if (json.status === 'success') {
                        window.location.href = routes['login'].route;
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
