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
                context.fillStyle = 'rgba(255,255,255,1)';
                context.strokeStyle = 'rgba(255,255,255,1)';
                let data = [];
                let text = '01';
                let length = text.length;
                for (let i = 0; i < 255; i++) {
                    data.push(0);
                }
                function draw() {
                    context.save();
                    context.beginPath();
                    context.fillStyle = 'rgba(0,0,0,0.06)';
                    context.fillRect(0, 0, width, height);
                    context.fillStyle = `rgba(7,247,70,1)`;
                    context.font = '20px 微软雅黑';
                    context.textAlign = 'left';
                    context.textBaseline = 'top';
                    data.forEach((v, i, a) => {
                        context.fillText(text[i % length], i * 20, v);
                        if (v >= height + Math.random() * 1e4) {
                            a[i] = 0;
                        } else {
                            a[i] = v + 20;
                        }
                    });
                    context.fill();
                    context.closePath();
                    context.restore();
                }

                setInterval(() => {
                    draw();
                }, 30);
            };

            new Canvas({
                wrap: '.page-canvas'
            });
        })();

        let footer = require('../pages-commons/footer');//每个页面都要用到的js(一定要放到最底部)
    }, 0)
});