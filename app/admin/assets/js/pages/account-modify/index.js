require('../../../scss/pages/account-modify.scss');
const Super = require('../../pages-super/super');

class Sub extends Super {
    // (功)(覆)功能(覆盖超类型)
    power() {
        const superSelf = this;
        const dataInfo = superSelf.dataInfo;
        const routes = dataInfo.routes;
        const form = document.querySelector('form');
        form.callbackFailure = function () {
            document.querySelector('.g-verify-code-canvas img').click();
        };
        form.callbackSuccess = function () {
            setTimeout(function () {
                window.location.href = routes['login'].route;
            }, 1000);
        };
    }
}

new Sub();
