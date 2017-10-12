require('../../scss/pages/register.scss');
const Super = require('./super');

class Sub extends Super {
    power() {
        const self = this;
        const gDataInfo = self.dataInfo;
        const axios = self.axios;

        // 获取验证码
        const domForm = document.querySelector('#form');
        const domUsername = document.querySelector('#username');
        const domPassword = document.querySelector('#password');
        const domVerifyCode = document.querySelector('#verify-code');
        const domGetVerifyCode = document.querySelector('.get-verify-code');

        function getVerifyCode(username) {
            const formData = new FormData();
            formData.append('username', username);
            formData.append('accountnum', 123456); // 数字 123456 会被立即转换成字符串 "123456"
            axios({
                url: gDataInfo.api['verify-code-register'].route,
                method: 'get',
                data: {
                    username: username,
                },
            });
        }

        domGetVerifyCode.addEventListener('click', function () {
            getVerifyCode(domUsername.value);
        });

        // 立即注册
        document.querySelector('.register').addEventListener('click', function () {
            const isFormData = false;
            let userInfo = new FormData(domForm);
            if (!isFormData) {
                userInfo = {
                    username: domUsername.value,
                    password: domPassword.value,
                    verifyCode: domVerifyCode.value,
                };
            }
            axios({
                url: gDataInfo.api.register.route,
                method: 'post',
                data: userInfo,
            }).then(function (dataInfo) {
                if (dataInfo.status === 'success') {
                    window.location.href = gDataInfo.routes.login.route;
                }
            });
        });
    }
}

new Sub();
