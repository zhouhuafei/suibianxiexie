require('../../scss/pages/login.scss');
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

        // 忘记密码,去删库
        document.querySelector('.js-del-db').addEventListener('click', function () {
            new superSelf.DialogConfirm({
                config: {
                    content: `<div class="page-dialog-del-db">
                        <div>1. 链接你的mongodb数据库。</div>
                        <div>2. 找到名为suibianxiexie的数据库。</div>
                        <div>3. 找到名为admins的集合。</div>
                        <div>4. 删除名为admins的集合。</div>
                        <div>5. 在后台管理系统里重新注册管理员账号。</div>
                    </div>`,
                },
            });
        });
    }
}

new Sub();
