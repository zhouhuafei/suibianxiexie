require('../../scss/pages/register.scss');
const Super = require('../pages-super/super');

class Sub extends Super {
    power() {
        const superSelf = this;
        const dataInfo = superSelf.dataInfo;
        const routes = dataInfo.routes;
        const api = dataInfo.api;
        const axios = superSelf.axios;

        // 验证
        (function () {
            const ValidateInput = require('../components-dom/g-validate-form-hint');
            new ValidateInput({element: '.page-validate-form'});
        }());

        // 注册
        (function () {
            const username = document.querySelector('#username');
            const password = document.querySelector('#password');
            const repeatPassword = document.querySelector('#repeat-password');
            const btn = document.querySelector('.js-button');
            btn.addEventListener('click', function () {
                axios({
                    url: api.register.route,
                    method: 'post',
                    data: {
                        username: username.value,
                        password: password.value,
                        're-password': repeatPassword.value,
                    },
                }).then(function (json) {
                    if (json.status === 'success') {
                        window.location.href = routes['login'].route;
                    }
                });
            });
        })();
    }
}

new Sub();
