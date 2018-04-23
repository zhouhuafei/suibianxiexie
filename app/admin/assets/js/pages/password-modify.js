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
                    }
                });
            });
        })();

        // 忘记密码,去删库
        document.querySelector('.js-del-db').addEventListener('click', function () {
            new superSelf.Dialog({
                config: {
                    type: 'confirm', // 默认是提示框
                    confirm: {
                        content: `<div style="line-height: 24px;">
                            <div>1. 链接你的mongodb数据库</div>
                            <div>2. 找到名为suibianxiexie数据库</div>
                            <div>3. 找到名为admins的集合</div>
                            <div>4. 删掉这个集合</div>
                            <div>5. 在后台管理系统里重新注册管理员账号。</div>
                        </div>`,
                    },
                },
            });
        });
    }
}

new Sub();
