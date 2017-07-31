window.addEventListener('load', function () {
    setTimeout(function () {
        require('../../scss/pages/register.scss');
        let header = require('../pages-commons/header');//每个页面都要用到的js(一定要放到最顶部)
        let axios = header.axios;

        //注释待续...
        (function () {
            //功能待续...
            //axios get 请求数据 传参数要使用params
            // axios({
            //     url: '/phone/api/register/',
            //     method: 'get',
            //     params: {
            //         test: 1
            //     }
            // })

            //axios post delete put 请求数据  传参数要使用data
            // axios({
            //     url: '/phone/api/register/',
            //     method: 'post',
            //     data: {
            //         test: 1
            //     }
            // })

            //获取验证码
            let inputUsername = document.querySelector('#username');
            let inputPassword = document.querySelector('#password');
            let btnGetVerifyCode = document.querySelector('.page-verify-code');
            btnGetVerifyCode.addEventListener('click', function () {
                getVerifyCode(inputUsername.value);
            });

            function getVerifyCode(username) {
                axios({
                    url: '/phone/api/verify-code/',
                    method: 'get',
                    params: {
                        username: username
                    }
                })
            }

            //立即注册
            document.querySelector('.js-register').addEventListener('click', function () {
                axios({
                    url: '/phone/api/register/',
                    method: 'post',
                    data: {
                        username: inputUsername.value,
                        password: inputPassword.value,
                        verifyCode: document.querySelector('#verifyCode').value
                    }
                })
            })
        })();

        let footer = require('../pages-commons/footer');//每个页面都要用到的js(一定要放到最底部)
    }, 0)
});