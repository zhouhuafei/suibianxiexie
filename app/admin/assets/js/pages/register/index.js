require('../../../scss/pages/register.scss');
const Super = require('../../pages-super/super');
const form = document.querySelector('.form');
const verifyCodeCanvas = document.querySelector('.g-verify-code-canvas img');
const verifyCodeRandom = document.querySelector('.g-verify-code-random');
const verifyCodeRandomHtml = verifyCodeRandom.innerHTML;
const userName = $('input[name=username]');
const timeCountDown = require('zhf.time-count-down');

class Sub extends Super {
    // (功)(覆)功能(覆盖超类型)
    power() {
        const superSelf = this;
        const dataInfo = superSelf.dataInfo;
        const routes = dataInfo.routes;
        const api = dataInfo.api;
        const ajax = superSelf.ajax;

        // 发送验证码
        $('.js-verify-code-random').on('click', function () {
            const randomDom = this;
            if (randomDom.isSending) {
                return;
            }
            randomDom.isSending = true;
            ajax({
                url: api['verify-code-random'].route,
                method: 'get',
                data: {username: userName.val().trim(), type: 'register'},
                isHandleSuccess: true,
            }).then(function (res) {
                function fn() {
                    verifyCodeRandom.classList.add('g-verify-code-random_inactive');
                    timeCountDown({
                        seconds: res.result.remainingTime,
                        isToTime: true, // 是否转换成时间
                        callback: {
                            run: function (json) {
                                verifyCodeRandom.innerHTML = json.allSeconds;
                            },
                            over: function () {
                                delete randomDom.isSending;
                                verifyCodeRandom.innerHTML = verifyCodeRandomHtml;
                                verifyCodeRandom.classList.remove('g-verify-code-random_inactive');
                            },
                        },
                    });
                }

                if (res.status === 'success') { // success
                    fn();
                } else { // error、failure
                    if (res.status === 'failure' && res.failureCode === 'not expired') {
                        fn();
                        return;
                    }
                    delete randomDom.isSending;
                }
            });
        });

        // 注册成功
        form.callbackSuccess = function () {
            window.location.href = routes['login'].route;
        };

        // 注册失败
        form.callbackFailure = function () {
            verifyCodeCanvas.click();
        };
    }
}

new Sub();
