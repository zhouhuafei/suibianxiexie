window.addEventListener('load', function () {
    setTimeout(function () {
        const axios = require('../api/axios');

        // 注释待续...
        (function () {
            // 功能待续...
            // axios get 请求数据 传参数要使用params
            // axios({
            //     url: '/phone/api/register/',
            //     method: 'get',
            //     params: {
            //         test: 1
            //     }
            // })

            // axios post delete put 请求数据  传参数要使用data
            // axios({
            //     url: '/phone/api/register/',
            //     method: 'post',
            //     data: {
            //         test: 1
            //     }
            // })

            // 获取验证码
            const inputUsername = document.querySelector('#username');
            const inputPassword = document.querySelector('#password');
            const btnGetVerifyCode = document.querySelector('.page-verify-code');

            function getVerifyCode(username) {
                axios({
                    url: '/phone/api/verify-code/',
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
            document.querySelector('.js-register').addEventListener('click', function () {
                axios({
                    url: '/phone/api/register/',
                    method: 'post',
                    data: {
                        username: inputUsername.value,
                        password: inputPassword.value,
                        verifyCode: document.querySelector('#verify-code').value,
                    },
                });
            });
        }());

        require('../../scss/pages/register.scss');// 当前页面用到的样式
        const common = require('../common/common');// 每个页面都要用到的js(一定要放到最底部)
    }, 0);
});
