require('../../../scss/pages/register.scss');
const Super = require('../../pages-super/super');
const timeCountDown = require('zhf.time-count-down'); // 倒计时
const {
    Message,
    Confirm,
    Validate,
    GoTop,
    TooltipApp,
    Copyright,
    LazyLoad,
} = require('zhf.g-ui/dist/js/commons_dom/g-common/index.js');

class Sub extends Super {
    // (功)(覆)功能(覆盖超类型)
    power() {
        const self = this;
        const dataInfo = self.dataInfo;
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
                    url: dataInfo.api['verify-code-random'].route,
                    method: 'GET',
                    data: {
                        username: username,
                    },
                }).then(function (json) {
                    if (json.status === 'success') {
                        new Message({config: {icon: 'icon-success', content: '验证码已发送'}});
                        domSelf.classList.add(domGetVerifyCodeInactive);
                        timeCountDown({
                            seconds: 90,
                            isToTime: false,
                            callback: {
                                run: function (obj) {
                                    domGetVerifyCode.innerHTML = `<span class="g-button">${obj.allSeconds}秒</span>`;
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
                url: dataInfo.api.register.route,
                method: 'POST',
                data: userInfo,
            }).then(function (json) {
                if (json.status === 'success') {
                    window.location.href = dataInfo.routes.login.route;
                }
            });
        });
    }
}

new Sub();
