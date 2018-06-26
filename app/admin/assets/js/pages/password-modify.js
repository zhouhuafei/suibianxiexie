require('../../scss/pages/password-modify.scss');
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

        // 修改
        (function () {
            const form = document.querySelector('#form');
            const username = document.querySelector('#username');
            const oldPassword = document.querySelector('#old-password');
            const newPassword = document.querySelector('#new-password');
            const repeatNewPassword = document.querySelector('#repeat-new-password');
            const btn = document.querySelector('.js-button');
            btn.addEventListener('click', function () {
                axios({
                    url: form.action,
                    method: form.method,
                    /*
                    data: {
                        username: username.value,
                        'old-password': oldPassword.value,
                        'new-password': newPassword.value,
                        'repeat-password': repeatNewPassword.value,
                    },
                    */
                    data: $(form).serialize(),
                    // data: new FormData(form),
                }).then(function (json) {
                    if (json.status === 'success') {
                        window.location.href = routes['login'].route;
                        /*
                        const DialogJumpLink = require('../components-dom/g-dialog-jump-link');
                        new DialogJumpLink({
                            title: json.message,
                            seconds: 3,
                            pageTitle: routes['login'].title,
                            href: routes['login'].route,
                        });
                        */
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
