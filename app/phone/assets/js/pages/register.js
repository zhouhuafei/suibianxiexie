require('../../scss/pages/register.scss');
const Super = require('../pages-super/super');

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
        const domGetVerifyCodeHtml = domGetVerifyCode.innerHTML;
        const domGetVerifyCodeInactive = 'get-verify-code-inactive';
        let isCanGetVerifyCode = true;
        domGetVerifyCode.addEventListener('click', function (ev) {
            const domSelf = this;
            ev.preventDefault();
            if (isCanGetVerifyCode) {
                isCanGetVerifyCode = false;
                const username = domUsername.value;
                const formData = new FormData();
                formData.append('username', username);
                formData.append('accountnum', 123456); // 数字 123456 会被立即转换成字符串 "123456"
                axios({
                    url: gDataInfo.api['verify-code-register-random'].route,
                    method: 'get',
                    data: {
                        username: username,
                    },
                }).then(function (dataInfo) {
                    if (dataInfo.status === 'success') {
                        const Dialog = require('../components-dom/g-dialog');
                        new Dialog({config: {alert: {icon: 'icon-chenggong', content: '验证码已发送'}}});
                        domSelf.classList.add(domGetVerifyCodeInactive);
                        self.tools.timeCountDown({
                            seconds: 90,
                            isToTime: false,
                            callback: {
                                run: function (obj) {
                                    domGetVerifyCode.innerHTML = `<span class="g-button">${obj.seconds}秒</span>`;
                                },
                                over: function () {
                                    isCanGetVerifyCode = true;
                                    domGetVerifyCode.innerHTML = domGetVerifyCodeHtml;
                                    domSelf.classList.remove(domGetVerifyCodeInactive);
                                },
                            },
                        });
                    } else {
                        isCanGetVerifyCode = true;
                    }
                });
            }
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
