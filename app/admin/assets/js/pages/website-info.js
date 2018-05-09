require('../../scss/pages/website-info.scss');
const Super = require('../pages-super/super');

class Sub extends Super {
    // (功)(覆)功能(覆盖超类型)
    power() {
        const superSelf = this;
        const dataInfo = superSelf.dataInfo;
        const routes = dataInfo.routes;

        // 验证
        (function () {
            const ValidateInput = require('../components-dom/g-validate-form-hint');
            new ValidateInput({element: '.js-validate-form'});
        }());

        // 上传
        document.querySelector('.js-upload').addEventListener('change', function () {
            console.log('待续...');
        });
    }
}

new Sub();
