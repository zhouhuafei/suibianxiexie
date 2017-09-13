window.addEventListener('load', function () {
    setTimeout(function () {
        const axios = require('../api/axios');

        // 注释待续...
        (function () {
            // 功能待续...

            // 获取验证码
            const form = document.querySelector('#form');
            const inputUsername = document.querySelector('#username');
            const inputPassword = document.querySelector('#password');
            const inputVerifyCode = document.querySelector('#verify-code');
            const btnGetVerifyCode = document.querySelector('.get-verify-code');

            function getVerifyCode(username) {
                const formData = new FormData();
                formData.append('username', username);
                formData.append('accountnum', 123456); // 数字 123456 会被立即转换成字符串 "123456"
                axios({
                    url: '/phone/api/verify-code-register/',
                    method: 'get',
                    params: {
                        username: username,
                    },
                });
            }

            btnGetVerifyCode.addEventListener('click', function () {
                getVerifyCode(inputUsername.value);
            });

            // 立即注册
            document.querySelector('.register').addEventListener('click', function () {
                const isFormData = true;
                let userInfo = new FormData(form);
                if (!isFormData) {
                    userInfo = {
                        username: inputUsername.value,
                        password: inputPassword.value,
                        verifyCode: inputVerifyCode.value,
                    };
                }
                axios({
                    url: '/phone/api/register/',
                    method: 'post',
                    data: userInfo,
                });
            });
        }());

        require('../../scss/pages/register.scss');// 当前页面用到的样式
        const common = require('../commons/common');// 每个页面都要用到的js(一定要放到最底部)
    }, 0);
});
