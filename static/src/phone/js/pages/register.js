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

            //canvas
            function Canvas(json) {
                this.opts = json || {};
                this.wrapDom = document.querySelector(this.opts.wrap);
                this.init();
            }

            Canvas.prototype.init = function () {
                let canvas = document.createElement('canvas');
                let width = this.wrapDom.offsetWidth;
                let height = this.wrapDom.offsetHeight;
                let centerX = Math.ceil(width / 2);
                let centerY = Math.ceil(height / 2);
                canvas.width = this.wrapDom.offsetWidth;
                canvas.height = this.wrapDom.offsetHeight;
                this.wrapDom.appendChild(canvas);
                let context = canvas.getContext('2d');
                context.strokeStyle = 'rgba(255,255,255,1)';
            };

            new Canvas({
                wrap: '.page-canvas'
            });
        })();

        let footer = require('../pages-commons/footer');//每个页面都要用到的js(一定要放到最底部)
    }, 0)
});